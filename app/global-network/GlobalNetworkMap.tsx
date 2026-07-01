"use client"
import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { BsArrowLeft } from "react-icons/bs";
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import Loader from "../components/Loader"

interface Location {
    name: string
    title: string
    description: string
    lat: number
    lng: number
}

const locations: Location[] = [
    {
        name: "nairobi",
        title: "Nairobi Field Office",
        description: "Our regional hub coordinating relief and health programs across East Africa.",
        lat: -1.286389,
        lng: 36.817223,
    },
    {
        name: "kampala",
        title: "Kampala Outreach Center",
        description: "Community health and education initiatives serving northern Uganda.",
        lat: 0.347596,
        lng: 32.582520,
    },
    {
        name: "kinshasa",
        title: "Kinshasa Support Hub",
        description: "Emergency response and logistics coordination for the DRC region.",
        lat: -4.441931,
        lng: 15.266293,
    },
    {
        name: "addis-ababa",
        title: "Addis Ababa Partnership Office",
        description: "Works with local governments on sustainable development projects.",
        lat: 9.032059,
        lng: 38.746632,
    },
    {
        name: "dakar",
        title: "Dakar Coastal Program",
        description: "Focused on clean water access and fisheries sustainability.",
        lat: 14.716677,
        lng: -17.467686,
    },
]

// SVG-based marker (a literal dot), not a CSS border-radius circle
const redDotIcon = L.divIcon({
    className: "",
    html: `<svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="9" r="6" fill="#dc2626" stroke="#ffffff" stroke-width="2" />
    </svg>`,
    iconSize: [18, 18],
    iconAnchor: [9, 9],
    popupAnchor: [0, -10],
})

export default function GlobalNetworkMap() {
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false)
        }, 1000)

        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            {loading && <Loader />}
            {!loading && (
                <div className="relative w-full h-full">
                    <button
                        onClick={() => router.back()}
                        className="absolute top-4 left-20 z-[1000] flex flex-nowrap gap-2 justify-center items-center cursor-pointer bg-white text-gray-900 px-4 py-2 border border-gray-300 shadow-md hover:bg-gray-100 transition-colors"
                    >
                        <BsArrowLeft size={17} /> Back
                    </button>

                    <MapContainer
                        center={[5, 20]}
                        zoom={3}
                        scrollWheelZoom={true}
                        className="w-full h-full"
                    >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {locations.map((location) => (
                            <Marker
                                key={location.name}
                                position={[location.lat, location.lng]}
                                icon={redDotIcon}
                            >
                                <Popup>
                                    <div className="p-1">
                                        <h3 className="font-semibold text-gray-900 text-sm mb-1">
                                            {location.title}
                                        </h3>
                                        <p className="text-gray-700 text-xs">
                                            {location.description}
                                        </p>
                                        <Link href="#" className="bg-red-600 !text-white p-2 w-fit px-4 mt-4 text-sm rounded-full flex flex-nowrap gap-2 transition-colors duration-150 ease-in-out hover:bg-red-700 cursor-pointer hover:text-white">View Projects</Link>
                                    </div>
                                </Popup>
                            </Marker>
                        ))}
                    </MapContainer>
                </div>
            )}
        </>
    )
}