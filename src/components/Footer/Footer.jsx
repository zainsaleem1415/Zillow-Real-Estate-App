import React from "react";

const Footer = () => {
  return (
    <div className="bg-white">
      {/* Top Links Section */}
      <div className="px-4 text-slate-600 text-xs text-center py-4 font-sans">
        <div className="flex flex-wrap justify-center gap-2 py-2">
          {[
            "About",
            "Zestimates",
            "Research",
            "Careers",
            "Help",
            "Advertise",
            "Fair Housing Guide",
            "Advocacy",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-blue-600 whitespace-nowrap"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-2 py-2">
          {[
            "Terms of use",
            "Privacy Notice",
            "Cookie preference",
            "Mobile Apps",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-blue-600 whitespace-nowrap"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-2 py-2">
          {["Trulia", "StreetEasy", "HotPad", "OutEats", "ShowingTime+"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="hover:text-blue-600 whitespace-nowrap"
              >
                {item}
              </a>
            )
          )}
        </div>

        <a
          href="#"
          className="text-blue-600 hover:underline block py-3 text-sm"
        >
          Do Not Sell or Share My Personal Information →
        </a>
      </div>

      <div className="flex justify-center">
        <hr className="w-[90%] border border-slate-300" />
      </div>

      {/* Bottom Content Section */}
      <div className="text-[11px] px-4 text-slate-600 flex flex-col items-center">
        <p className="py-3">
          Zillow Group is committed to ensuring digital accessibility for
          individuals with disabilities.
        </p>

        <p className="pb-3">
          Zillow, Inc. holds real estate brokerage{" "}
          <a href="#" className="text-blue-600 underline">
            licenses
          </a>{" "}
          in multiple states.
        </p>

        <div className="space-y-1 pb-2">
          <a href="#" className="text-blue-600 underline block">
            § 442-H New York Standard Operating Procedures
          </a>
          <a href="#" className="text-blue-600 underline block">
            § New York Fair Housing Notice
          </a>
          <p>
            TREC:{" "}
            <a href="#" className="text-blue-600 underline">
              Consumer protection notice
            </a>
          </p>
          <p>California DRE #1522444</p>
        </div>

        <a href="#" className="text-blue-600 underline block py-2 text-xs">
          Contact Zillow, Inc. Brokerage
        </a>

        <p className="py-3 text-[10px]">
          For listings in Canada, the trademarks REALTOR®, REALTORS®, and the
          REALTOR® logo are controlled by CREA.
        </p>

        {/* App Badges - Stacked on mobile */}
        <div className="flex flex-col items-center gap-2 py-3">
          <a href="#">
            <img
              src="https://www.zillowstatic.com/s3/pfs/static/app-store-badge.svg"
              alt="Download on App Store"
              className="h-8"
            />
          </a>
          <a href="#">
            <img
              src="https://www.zillowstatic.com/s3/pfs/static/google-play-badge.svg"
              alt="Get on Google Play"
              className="h-8"
            />
          </a>
        </div>

        {/* Logo and Social */}
        <div className="flex flex-col items-center py-4">
          <img
            src="https://www.zillowstatic.com/s3/pfs/static/z-logo-default-visual-refresh.svg"
            alt="Zillow"
            className="h-5"
          />
          <div className="flex items-center pt-3">
            <span className="pr-2 text-xs">Follow us:</span>
            <div className="flex gap-2">
              {/* Social icons would go here */}
              <span className="w-5 h-5 bg-gray-200 rounded-full"></span>
              <span className="w-5 h-5 bg-gray-200 rounded-full"></span>
              <span className="w-5 h-5 bg-gray-200 rounded-full"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
