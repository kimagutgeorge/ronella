import Image from "next/image";
import Link from "next/link";
import { BsTwitterX, BsYoutube, BsLinkedin } from "react-icons/bs";

const officeDetails = [
  {
    office: "Lincoln Office",
    telephone: "01522 776 255",
    address: {
      company: "Ronella Group Limited",
      building: "Commerce House",
      street: "Carlton Boulevard",
      city: "Lincoln",
      postcode: "LN2 4WJ",
    },
  },
  {
    office: "London Office",
    telephone: "02038 170 286",
    fax: "02079 002 313",
    registeredAddress: {
      street: "71-75 Shelton Street",
      area: "Covent Garden",
      city: "London",
      postcode: "WC2H 9JQ",
    },
  },
];

export default function Footer({with_no_margin}) {
  return (
    <div className={`w-full flex justify-center ${ with_no_margin ? '' : 'mt-20' } py-14 bg-black`}>
      <div className="w-full p-6 max-w-[1400px] flex flex-col lg:flex-row gap-10">

        {/* Left Section */}
        <div className="w-full lg:w-[70%] flex flex-col sm:flex-row gap-8">

          {/* Logo */}
          <div className="w-full sm:w-[15%] flex-shrink-0">
            <div className="w-[80px] h-[80px] flex justify-center">
              <Link href="/">
                <Image
                  src="/Ronella_web_logo.avif"
                  width={100}
                  height={100}
                  alt="Ronella Group Logo"
                />
              </Link>
            </div>
          </div>

          {/* Offices + Contact Details */}
          <div className="w-full sm:w-[85%] flex flex-col gap-6">

            {/* Offices */}
            <div className="text-white">
              <label className="text-xl font-black">Offices</label>
              <div className="flex flex-wrap mt-3 gap-y-6">
                {officeDetails.map((detail, index) => (
                  <div key={index} className="w-1/2 pr-4">
                    <h4 className="text-base font-semibold text-gray-100">
                      {detail.office}
                    </h4>
                    <p className="mt-1 text-sm text-gray-300">
                      <a
                        href={`tel:${detail.telephone}`}
                        className="hover:underline"
                      >
                        Tel: {detail.telephone}
                      </a>
                    </p>
                    {detail.fax && (
                      <p className="mt-1 text-sm text-gray-300">
                        Fax: {detail.fax}
                      </p>
                    )}

                    {/* Lincoln address */}
                    {detail.address && (
                      <address className="mt-2 not-italic text-sm text-gray-400 leading-relaxed">
                        {detail.address.company}
                        <br />
                        {detail.address.building}
                        <br />
                        {detail.address.street}
                        <br />
                        {detail.address.city}
                        <br />
                        {detail.address.postcode}
                      </address>
                    )}

                    {/* London registered address */}
                    {detail.registeredAddress && (
                      <address className="mt-2 not-italic text-sm text-gray-400 leading-relaxed">
                        {detail.registeredAddress.street}
                        <br />
                        {detail.registeredAddress.area}
                        <br />
                        {detail.registeredAddress.city}
                        <br />
                        {detail.registeredAddress.postcode}
                      </address>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Details */}
            <div className="text-white">
              <label className="text-xl font-black">Contact</label>
              <div className="mt-3 flex flex-wrap gap-y-2 gap-x-8 text-sm text-gray-300">
                <p>
                  Email:{" "}
                  <a
                    href="mailto:info@ronella.co.uk"
                    className="hover:underline text-gray-100"
                  >
                    info@ronella.co.uk
                  </a>
                </p>
                <p>
                  Company No:{" "}
                  <span className="text-gray-100">08765432</span>
                </p>
                <p>
                  VAT No:{" "}
                  <span className="text-gray-100">GB 123 456 789</span>
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Section — Newsletter + Socials */}
        <div className="w-full lg:w-[30%] flex flex-col items-start lg:items-end">
          <div className="w-full text-white flex flex-col items-start lg:items-end">
            <label className="text-sm tracking-wide uppercase text-gray-300">
              Subscribe to our newsletters
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full max-w-[500px] bg-white p-3 text-black mt-3"
            />
            <button className="bg-custom-blue transition-all duration-150 hover:bg-red-600 mt-4 p-3 px-6 cursor-pointer">
              Subscribe
            </button>
          </div>

          {/* Social Icons */}
          <div className="w-full flex lg:justify-end gap-2 mt-6">
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow us on X (Twitter)"
              className="w-[34px] h-[34px] flex justify-center items-center bg-custom-green group cursor-pointer rounded-full"
            >
              <BsTwitterX size={18} className="text-black group-hover:text-white" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Watch us on YouTube"
              className="w-[34px] h-[34px] flex justify-center items-center bg-custom-green group cursor-pointer rounded-full"
            >
              <BsYoutube size={18} className="text-black group-hover:text-white" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect on LinkedIn"
              className="w-[34px] h-[34px] flex justify-center items-center bg-custom-green group cursor-pointer rounded-full"
            >
              <BsLinkedin size={18} className="text-black group-hover:text-white" />
            </a>
          </div>

          {/* Legal */}
          <p className="mt-6 text-xs text-gray-500 lg:text-right">
            © {new Date().getFullYear()} Ronella Group Limited. All rights reserved.
            <br />
            Registered in England &amp; Wales.
          </p>
        </div>

      </div>
    </div>
  );
}