import React from 'react'

const Footer2 = () => {
  return (
    <div>
      <div className="px-4 md:px-20 py-8 flex flex-col md:flex-row gap-6">
        {/* Links Column */}
        <div className="text-blue-700 flex flex-col space-y-4">
          <a className="hover:text-black text-sm" href="#">
            Terms of use
          </a>
          <a className="hover:text-black text-sm" href="#">
            Privacy policy
          </a>
          <a className="hover:text-black text-sm" href="#">
            Licensing info
          </a>
          <a className="hover:text-black text-sm" href="#">
            Cookie preference
          </a>
        </div>

        {/* Address Section */}
        <div className="text-[13px] text-gray-800">
          <p className="text-blue-700 font-semibold">Zillow HomeLoans</p>
          <p>2600 Michelson Drive, Suite 1201 Irvine, CA 92612</p>
          <p className="py-2">888-852-2212</p>
          <p className="py-1">Submit concerns or questions</p>
          <p>
            through our{" "}
            <span className="text-blue-800 underline">contact form.</span>
          </p>
        </div>

        {/* Image + Accessibility Text */}
        <div className="w-full md:w-[40rem]">
          <div className="w-1/2 md:w-1/3 mb-3">
            <img src="/zillowpic.png" alt="" />
          </div>
          <p className="text-[10px] text-gray-700">
            Zillow Group is committed to ensuring digital accessibility for
            individuals with disabilities. We are continuously working to
            improve the accessibility of our web experience for everyone, and we
            welcome feedback and accommodation requests. If you wish to report
            an issue or seek an accommodation, please{" "}
            <span className="text-blue-800 underline">contact us</span>.
          </p>
        </div>
      </div>

      {/* Footer Logo */}
      <div className="px-4 md:px-20 mt-6">
        <img
          src="/zillowpic2.png"
          alt=""
          className="w-full max-w-xs md:max-w-full"
        />
      </div>
    </div>
  );
}

export default Footer2
