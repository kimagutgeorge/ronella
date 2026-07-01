"use client"

import dynamic from "next/dynamic"

const GlobalNetworkMap = dynamic(() => import("./GlobalNetworkMap"), {
    ssr: false,
})

export default function Page() {
    return (
        <div className="h-screen w-full">
            <GlobalNetworkMap />
        </div>
    )
}