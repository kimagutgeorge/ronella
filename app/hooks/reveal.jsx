"use client";

import { useEffect, useRef, useCallback, Children, FC } from "react";

// ---------------------------------------------------------------------------
// Global styles – injected once into <head>
// ---------------------------------------------------------------------------

const GLOBAL_STYLES = `
  [data-reveal][data-visible="true"] {
    opacity: 1 !important;
    transform: none !important;
  }
  [data-reveal-group][data-visible="true"] [data-reveal-child] {
    opacity: 1 !important;
    transform: none !important;
  }
  @media (prefers-reduced-motion: reduce) {
    [data-reveal],
    [data-reveal-group] [data-reveal-child] {
      opacity: 1 !important;
      transform: none !important;
      transition: none !important;
    }
  }
`;

let stylesInjected = false;

function injectGlobalStyles() {
  if (stylesInjected || typeof document === "undefined") return;
  const tag = document.createElement("style");
  tag.dataset.revealStyles = "true";
  tag.textContent = GLOBAL_STYLES;
  document.head.appendChild(tag);
  stylesInjected = true;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * @param {"up"|"down"|"left"|"right"|"fade"} direction
 * @param {number} distance - px
 * @returns {string}
 */
function directionToTransform(direction, distance) {
  switch (direction) {
    case "up":    return `translateY(${distance}px)`;
    case "down":  return `translateY(-${distance}px)`;
    case "left":  return `translateX(${distance}px)`;
    case "right": return `translateX(-${distance}px)`;
    case "fade":  return "translateY(0px)";
    default:      return "translateY(0px)";
  }
}

/**
 * @param {number} duration - ms
 * @param {number} delay - ms
 * @returns {string}
 */
function buildTransition(duration, delay) {
  const easing = "cubic-bezier(0.4, 0, 0.2, 1)";
  return `opacity ${duration}ms ${easing} ${delay}ms, transform ${duration}ms ${easing} ${delay}ms`;
}

// ---------------------------------------------------------------------------
// useReveal hook
// ---------------------------------------------------------------------------

/**
 * Attaches an IntersectionObserver to the returned ref.
 * Sets data-visible="true" on the element when it enters the viewport.
 * Works with the global [data-reveal] CSS to drive the transition.
 *
 * @param {{ threshold?: number, once?: boolean }} options
 * @returns {React.RefObject<HTMLDivElement>}
 */
export function useReveal({ threshold = 0.15, once = true } = {}) {
  const ref = useRef(null);

  const handleEntry = useCallback(
    (entries, observer) => {
      const entry = entries[0];
      if (!entry) return;

      if (entry.isIntersecting) {
        entry.target.dataset.visible = "true";
        if (once) observer.disconnect();
      } else if (!once) {
        entry.target.dataset.visible = "false";
      }
    },
    [once]
  );

  useEffect(() => {
    injectGlobalStyles();

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(handleEntry, { threshold });
    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold, handleEntry]);

  return ref;
}

// ---------------------------------------------------------------------------
// <Reveal>
// ---------------------------------------------------------------------------

/**
 * Wraps content and fades/slides it in when it enters the viewport.
 *
 * Props:
 *   children      - ReactNode
 *   direction     - "up" | "down" | "left" | "right" | "fade"  (default: "up")
 *   delay         - ms before animation starts                  (default: 0)
 *   duration      - ms for the animation                        (default: 700)
 *   distance      - px the element travels                      (default: 48)
 *   threshold     - 0-1 visibility needed to trigger            (default: 0.15)
 *   once          - only animate the first time                 (default: true)
 *   className     - applied to the wrapper div
 *   style         - merged into the wrapper div's inline style
 *
 * @example
 * <Reveal direction="left" delay={150}>
 *   <p>Slides in from the right</p>
 * </Reveal>
 */
export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 700,
  distance = 48,
  threshold = 0.15,
  once = true,
  className = "",
  style = {},
}) {
  const ref = useReveal({ threshold, once });

  return (
    <div
      ref={ref}
      data-reveal
      className={className}
      style={{
        opacity: 0,
        transform: directionToTransform(direction, distance),
        transition: buildTransition(duration, delay),
        willChange: "opacity, transform",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ---------------------------------------------------------------------------
// <RevealGroup>
// ---------------------------------------------------------------------------

/**
 * Observes a container; when it enters the viewport each direct child
 * animates in with an increasing delay (stagger effect).
 *
 * Props:
 *   children       - ReactNode
 *   direction      - "up" | "down" | "left" | "right" | "fade"  (default: "up")
 *   stagger        - ms delay added per child                    (default: 120)
 *   duration       - ms for each child's animation              (default: 700)
 *   distance       - px each child travels                      (default: 48)
 *   threshold      - 0-1 visibility needed to trigger           (default: 0.1)
 *   className      - applied to the container div
 *   childClassName - applied to each child wrapper div
 *
 * @example
 * <RevealGroup direction="up" stagger={150} className="flex gap-4">
 *   <Card />
 *   <Card />
 *   <Card />
 * </RevealGroup>
 */
export function RevealGroup({
  children,
  direction = "up",
  stagger = 120,
  duration = 700,
  distance = 48,
  threshold = 0.1,
  className = "",
  childClassName = "",
}) {
  const ref = useReveal({ threshold, once: true });
  const initialTransform = directionToTransform(direction, distance);

  // Children.toArray handles single children, fragments, and nulls safely
  const childList = Children.toArray(children);

  return (
    <div ref={ref} data-reveal-group className={className}>
      {childList.map((child, index) => (
        <div
          key={index}
          data-reveal-child
          className={childClassName}
          style={{
            opacity: 0,
            transform: initialTransform,
            transition: buildTransition(duration, index * stagger),
            willChange: "opacity, transform",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}