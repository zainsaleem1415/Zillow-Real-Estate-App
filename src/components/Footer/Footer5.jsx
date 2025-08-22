import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6"; // FaXTwitter is for the new "X" logo

const Footer5 = () => {
  return (
    <div>
      <div className="">
        <div className="">
          <div className="flex flex-wrap justify-center gap-4 text-[14px] py-2  text-gray-600">
            <a className="hover:underline" href="#">
              About
            </a>
            <a className="hover:underline" href="#">
              Zestimates
            </a>
            <a className="hover:underline" href="#">
              Research
            </a>
            <a className="hover:underline" href="#">
              Careers
            </a>
            <a className="hover:underline" href="#">
              Careers - U.S. Privacy Notice
            </a>
            <a className="hover:underline" href="#">
              Careers - Mexico Privacy Notice
            </a>
            <a className="hover:underline" href="#">
              Help
            </a>
            <a className="hover:underline" href="#">
              Advertise
            </a>
            <a className="hover:underline" href="#">
              Fair Housing Guide
            </a>
            <a className="hover:underline" href="#">
              Advocacy
            </a>
            <a className="hover:underline" href="#">
              Terms of use
            </a>
          </div>
        </div>

        <div className="">
          <div className="flex flex-wrap justify-center gap-4 text-[14px] py-2 text-gray-600">
            <a className="hover:underline" href="#">
              Privacy Notice
            </a>
            <a className="hover:underline" href="#">
              Ad Choices
            </a>
            <a className="hover:underline" href="#">
              Cookie Preference
            </a>
            <a className="hover:underline" href="#">
              Learn
            </a>
            <a className="hover:underline" href="#">
              AI
            </a>
            <a className="hover:underline" href="#">
              Mobile Apps
            </a>
          </div>
        </div>

        <div className="">
          <div className="flex flex-wrap justify-center gap-4 text-[14px] py-2 text-gray-600">
            <a className="hover:underline" href="#">
              Trulia
            </a>
            <a className="hover:underline" href="#">
              StreetEasy
            </a>
            <a className="hover:underline" href="#">
              HotPads
            </a>
            <a className="hover:underline" href="#">
              Out East
            </a>
            <a className="hover:underline" href="#">
              ShowingTime+
            </a>
          </div>
          <p className="text-blue-700 pb-5 pt-2 font-light hover:underline text-center text-[14px]">
            Do Not Sell or Share My Personal Information →
          </p>
          <hr className="mx-28" />
          <div className="flex justify-center text-center ">
            <div className="text-[11px] w-[45rem] text-gray-500 ">
              <p className="py-5">
                Zillow Group is committed to ensuring digital accessibility for
                individuals with disabilities. We are continuously working to
                improve the accessibility of our web experience for everyone,
                and we welcome feedback and accommodation requests. If you wish
                to report an issue or seek an accommodation,{" "}
                <span className="text-blue-700">please let us know.</span>
              </p>

              <p className="pt-1">
                Zillow, Inc. holds real estate brokerage{" "}
                <span className="text-blue-700">licenses</span> in multiple
                states. Zillow (Canada), Inc. holds real estate brokerage
                <span className="text-blue-700 underline">licenses</span> in
                multiple provinces.
              </p>
              <p className="text-blue-700 underline">
                § 442-H New York Standard Operating Procedures
              </p>
              <p className="text-blue-700 underline">
                § New York Fair Housing Notice
              </p>
              <p className="text-blue-700">
                TREC: Information about brokerage services, Consumer protection
                notice
              </p>
              <p>California DRE #1522444</p>
              <div className="py-2">
                <a className="text-sm underline text-blue-700 " href="#">
                  Contact Zillow, Inc. Brokerage
                </a>
              </div>
              <p className="pb-4 pt-3">
                For listings in Canada, the trademarks REALTOR®, REALTORS®,
                and the REALTOR® logo are controlled by The Canadian Real
                Estate Association (CREA) and identify real estate professionals
                who are members of CREA. The trademarks MLS®, Multiple Listing
                Service® and the associated logos are owned by CREA and
                identify the quality of services provided by real estate
                professionals who are members of CREA. Used under license.
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-2 py-3">
            <img
              src="https://www.zillowstatic.com/s3/pfs/static/app-store-badge.svg"
              alt=""
            />
            <img
              src="https://www.zillowstatic.com/s3/pfs/static/google-play-badge.svg"
              alt=""
            />
          </div>

          <div className="flex gap-3 py-3 justify-center">
            <img
              className="w-24"
              src="https://www.zillowstatic.com/s3/pfs/static/z-logo-default-visual-refresh.svg"
              alt=""
            />
            <p className="pt-1">Follow us:</p>
            <div className="flex gap-1 text-xl text-blue-600 ">
              <a
                href="https://facebook.com"
                className="p-1 rounded bg-gray-300"
                target="_blank"
              >
                <FaFacebook />
              </a>
              <a
                href="https://instagram.com"
                className="p-1 rounded bg-gray-300"
                target="_blank"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com"
                className="p-1 rounded bg-gray-300"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com"
                className="p-1 rounded bg-gray-300"
                target="_blank"
              >
                <FaXTwitter />
              </a>
            </div>
            <p className="text-gray-600 font-light text-[14px] pt-1">
              @2006-2025 Zillow
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer5;
