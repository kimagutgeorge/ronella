"use client"
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function ContactUs(){
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
            const timer = setTimeout(() => {
              setLoading(false);
            }, 1000);
        
            return () => clearTimeout(timer);
          }, []);
    return(
        <>
            {loading && (
                <Loader />
            )}
            {!loading && (
                <>
                    <Navbar isNotAbsolute />
                    <div className="w-full h-[70vh] relative mt-16">
                        <div className="w-full h-full absolute ">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3097.179139955007!2d-0.12614482281529257!3d51.514756071814936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876058c7c9527fb%3A0x79bc7464573598c1!2s71-75%20Shelton%20St%2C%20London%20WC2H%209JQ%2C%20UK!5e1!3m2!1sen!2ske!4v1782798913134!5m2!1sen!2ske" 
                                className="w-full h-full"
                                style={{border: "0"}}
                                allowfullscreen="" 
                                loading="lazy" 
                                referrerpolicy="strict-origin-when-cross-origin"></iframe>
                        </div>

                        {/* details */}
                        <div className="w-full max-w-[600px] h-full absolute z-30 top-16 left-[13%]">
                            <div className="w-full h-full p-6">
                                <div className="w-full p-6 bg-white">
                                    <h2 className="text-black text-2xl font-semibold">Where to find us</h2>
                                    <div className="w-full flex mt-4">
                                        <div className="w-1/2">
                                            <h3 className="font-semibold text-black">Lincoln Office</h3>
                                            <a href="#">Tel: 01522 776 255</a>
                                            <p className="mt-4">Ronella Group Limited</p>
                                            <p className="">Commerce House</p>
                                            <p className="">Carlton Boulevard</p>
                                            <p className="">Lincoln</p>
                                            <p className="">LN2 4WJ</p>
                                        </div>
                                        <div className="w-1/2">
                                            <h3 className="font-semibold text-black">London Office</h3>
                                            <a href="#">Tel: 02038 170 286</a>
                                            <p className="">Fax: 02079 002 313</p>
                                            <p className="mt-4">71-75 Shelton Street</p>
                                            <p className="">Covent Garden</p>
                                            <p className="">London</p>
                                            <p className="">WC2H 9JQ</p>
                                        </div>
                                    </div>
                                    <div className="w-full mt-4 py-6 border-t border-gray-200">
                                        <p className="flex flex-nowrap gap-4 justify-between">
                                            <span className="flex flex-col"><label className="text-semibold text-black">Email: </label> info@ronella.co.uk</span>
                                            <span className="flex flex-col"><label className="text-semibold text-black">Company No: </label> 08765432</span>
                                            <span className="flex flex-col"><label className="text-semibold text-black">VAT No: </label> GB 123 456 789</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* contact us form */}
                    <div className="w-full flex justify-center mt-20">
                        <div className="w-full flex flex-wrap max-w-[1400px] p-6 gap-4">
                            
                        </div>
                    </div>

                    <Footer />
                </>
            )}
        </>
    )
}