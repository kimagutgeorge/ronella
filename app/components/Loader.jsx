import Image from "next/image"

export default function Loader(){
    return(
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="relative flex items-center justify-center w-[60px] h-[60px]">
                {/* Rotating ring */}
                <div className="absolute w-[60px] h-[60px] rounded-full border-4 border-transparent border-t-custom-green animate-spin" />
                
                {/* Logo */}
                <div className="w-[30px] h-[30px] relative">
                    <Image fill src="/Ronella_web_logo.avif" alt="" />
                </div>
            </div>
        </div>
    )
}