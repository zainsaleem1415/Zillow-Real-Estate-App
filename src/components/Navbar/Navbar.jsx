import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex justify-between items-center py-4 px-4 bg-white shadow-sm font-sans md:hidden">
        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="text-gray-700 focus:outline-none"
        >
          {isMenuOpen ? (
            <FaTimes className="h-6 w-6" />
          ) : (
            <FaBars className="h-6 w-6" />
          )}
        </button>

        {/* Logo - centered in mobile view */}
        <Link to="/" className="mx-auto">
          <img
            className="h-6"
            src="https://www.zillowstatic.com/s3/pfs/static/z-logo-default-visual-refresh.svg"
            alt="Real Estate Logo"
          />
        </Link>

        {/* Placeholder to balance the flex layout */}
        <div className="w-6"></div>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="bg-white shadow-lg absolute w-full z-10 md:hidden">
          <div className="flex flex-col space-y-4 p-4">
            <Link
              className="hover:text-[#1e1bee] transition-colors duration-200 py-2 border-b border-gray-100"
              to="/buy"
              onClick={toggleMenu}
            >
              Buy
            </Link>

            <Link
              className="hover:text-[#1e1bee] transition-colors duration-200 py-2 border-b border-gray-100"
              to="/rent"
              onClick={toggleMenu}
            >
              Rent
            </Link>
            <Link
              className="hover:text-[#1e1bee] transition-colors duration-200 py-2 border-b border-gray-100"
              to="/sell"
              onClick={toggleMenu}
            >
              Sell
            </Link>
            <Link
              className="hover:text-[#1e1bee] transition-colors duration-200 py-2 border-b border-gray-100"
              to="/mortgage"
              onClick={toggleMenu}
            >
              Get a Mortgage
            </Link>
            <Link
              className="hover:text-[#1e1bee] transition-colors duration-200 py-2 border-b border-gray-100"
              to="/findagent"
              onClick={toggleMenu}
            >
              Find an Agent
            </Link>
            <Link
              className="hover:text-[#1e1bee] transition-colors duration-200 py-2 border-b border-gray-100"
              to="/managerentals"
              onClick={toggleMenu}
            >
              Manage Rentals
            </Link>
            <Link
              className="hover:text-[#1e1bee] transition-colors duration-200 py-2 "
              to="/advertise"
              onClick={toggleMenu}
            >
              Advertise
            </Link>
            <Link
              className="hover:text-[#1e1bee] transition-colors duration-200 py-2"
              to="/help"
              onClick={toggleMenu}
            >
              Help
            </Link>
          </div>
        </div>
      )}

      {/* Desktop navbar (hidden on mobile) */}
      <nav
        className="  hidden md:block 
             py-7   bg-white shadow-sm text-[17px]"
      >
        <div className="flex justify-between px-24 ">
          <div className="flex gap-7 ">
            <div className="relative group overflow-visible">
              {/* Buy Link */}
              <Link
                to="/buy"
                className="text-gray-700 cursor-pointer py-2 border-b border-gray-100 hover:text-[#1e1bee] transition-colors duration-200"
              >
                Buy
              </Link>

              {/* 3-Column Dropdown */}
              <div
                className="
                 absolute top-full w-[40rem] left-0 mt-2 bg-white shadow-md text-[15px] text-blue-700 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-10"
              >
                <div className="flex  divide-gray-200">
                  {/* Column 1 */}
                  <ul className="w-1/3 px-3">
                    <li className="p-2 text-black font-medium ">
                      Mobiles home for sale
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/price-my-rental">Homes for sale</Link>
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/listing">Foreclosures</Link>
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/applications">For sale by owner</Link>
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/leases">Open houses</Link>
                    </li>
                  </ul>
                  {/* Column 2 */}
                  <ul className="w-1/3 px-3 pt-10">
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/new-construction">New construction</Link>
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/coming-soon">Coming soon</Link>
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/recent-sales">Recent home sales</Link>
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/all-homes">All homes</Link>
                    </li>
                  </ul>
                  {/* Column 3 */}{" "}
                  <ul className="w-1/3 px-3">
                    <li className="p-2 text-black font-medium ">Resources</li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/home-buying-guide">Home Buying Guide</Link>
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/foreclosure-center">Foreclosure center</Link>
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/real-estate-app">Real estate app</Link>
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/down-payment-assistance">
                        Down payment assistance
                      </Link>
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/buyers-agent">Find a buyer's agent</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative group">
              <Link
                to="/rent"
                className="text-gray-700 cursor-pointer py-2 hover:text-[#1e1bee] transition-colors duration-200"
              >
                Rent
              </Link>

              <div className="absolute top-full left-0 mt-2 w-[60rem] bg-white shadow-md text-[15px] text-blue-700 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-10">
                <div className="flex divide-x divide-gray-200">
                  {/* Column 1 */}
                  <ul className="w-1/4 px-4 py-3">
                    <li className="p-2 text-black font-semibold">
                      Rental categories
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/mobile-rentals">Mobile rentals</Link>
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/apartments">Apartments for rent</Link>
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/houses">Houses for rent</Link>
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/rental-listings">All rental listings</Link>
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/rental-buildings">All rental buildings</Link>
                    </li>
                  </ul>

                  {/* Column 2 */}
                  <ul className="w-1/4 px-4 py-3">
                    <li className="p-2 text-black font-semibold">
                      Your search
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/your-search">Your search</Link>
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/saved-searches">Saved searches</Link>
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/inbox">Inbox</Link>
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/contacted-rentals">Contacted rentals</Link>
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/applications">Applications</Link>
                    </li>
                  </ul>

                  {/* Column 3 */}
                  <ul className="w-1/4 px-4 py-3">
                    <li className="p-2 text-black font-semibold">
                      Your rental
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/overview">Overview</Link>
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/payment">Make a payment</Link>
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/your-lease">Your lease</Link>
                    </li>
                  </ul>

                  {/* Column 4 */}
                  <ul className="w-1/4 px-4 py-3">
                    <li className="p-2 text-black font-semibold">Resources</li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/rent-with-zillow">Rent with Zillow</Link>
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/build-credit">Build your credit</Link>
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/renters-insurance">Renters insurance</Link>
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/affordability-calculator">
                        Affordability calculator
                      </Link>
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/rent-guide">Rent Guide</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative group">
              <Link
                to="/sell"
                className="text-gray-700 cursor-pointer py-2 hover:text-[#1e1bee] transition-colors duration-200"
              >
                Sell
              </Link>

              <div className="absolute top-full left-0 mt-2 w-[40rem] bg-white shadow-md text-[15px] text-blue-700 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-10">
                <div className="flex divide-x divide-gray-200">
                  {/* Column 1 */}
                  <ul className="w-1/2 px-4 py-3">
                    <li className="p-2 text-black font-semibold">Resources</li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/explore-options">Explore your options</Link>
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/zestimate">See your home's Zestimate</Link>
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/housing-market">US housing market</Link>
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/sellers-guide">Sellers guide</Link>
                    </li>
                  </ul>

                  {/* Column 2 */}
                  <ul className="w-1/2 px-4 py-3">
                    <li className="p-2 text-black font-semibold">
                      Selling options
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/find-seller-agent">Find a seller's agent</Link>
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/post-fsbo">Post For Sale by Owner</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative group">
              <Link
                to="/mortgage"
                className="text-gray-700 cursor-pointer py-2 hover:text-[#1e1bee] transition-colors duration-200"
              >
                Get a Mortgage
              </Link>

              <div className="absolute top-full left-0 mt-2 w-[48rem] bg-white shadow-md text-[15px] text-blue-700 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-10">
                <div className="flex divide-x divide-gray-200">
                  {/* Column 1 - Loan Resume Info */}
                  <div className="w-1/3 px-4 py-3">
                    <p className="text-black font-medium pb-2">
                      Started a loan application?
                    </p>
                    <p className="text-gray-600 text-sm pb-3">
                      Pick up where you left off on your Zillow Home Loans
                      dashboard.
                    </p>
                    <Link
                      to="/home-loans-dashboard"
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Home Loans dashboard
                    </Link>
                  </div>

                  {/* Column 2 - Your mortgage */}
                  <ul className="w-1/3 px-4 py-3">
                    <li className="p-2 text-black font-semibold">
                      Your mortgage
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/zillow-home-loans">
                        Discover Zillow Home Loans
                      </Link>
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/calculate-buyability">
                        Calculate your BuyAbility
                      </Link>
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/get-prequalified">Get pre-qualified</Link>
                    </li>
                  </ul>

                  {/* Column 3 - Mortgage tools */}
                  <ul className="w-1/3 px-4 py-3">
                    <li className="p-2 text-black font-semibold">
                      Mortgage tools
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/mortgage-payment">
                        Estimate your mortgage payment
                      </Link>
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/current-rates">
                        See current mortgage rates
                      </Link>
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/financing-home">
                        Learn about financing a home
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative group">
              {/* Main Link */}
              <Link
                className="text-gray-700 cursor-pointer py-2  hover:text-[#1e1bee] transition-colors duration-200"
                to="/findagent"
              >
                Find an Agent
              </Link>

              {/* Dropdown */}
              <div className="absolute top-full left-0 mt-2 w-[55rem] px-8 bg-white shadow-md text-[15px] text-blue-700 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-10">
                <div className="flex px-1 py-4 gap-1">
                  {/* Column 1 */}
                  <ul className="w-1/4">
                    <li className="p-2 text-black font-semibold">
                      Looking for pros?
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/real-estate-agents">Real estate agents</Link>
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/property-managers">Property managers</Link>
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/home-inspectors">Home inspectors</Link>
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/other-pros">Other pros</Link>
                    </li>
                  </ul>

                  {/* Column 2 */}
                  <ul className="w-1/4 pt-10">
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/home-improvement">Home improvement pros</Link>
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/home-builders">Home builders</Link>
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/photographers">Real estate photographers</Link>
                    </li>
                  </ul>

                  {/* Column 3 */}
                  <ul className="w-1/4 ">
                    <li className="p-2 text-black font-semibold">I'm a pro</li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/advertising">Agent advertising</Link>
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/resources">Agent resource center</Link>
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/signup-agent">
                        Create a free agent account
                      </Link>
                    </li>
                  </ul>

                  {/* Column 4 */}
                  <ul className="w-1/4 pt-10">
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/business-plan">Real estate business plan</Link>
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/scripts">Real estate agent scripts</Link>
                    </li>
                    <li className="hover:bg-blue-50 hover:underline p-2">
                      <Link to="/flyers">Listing flyer templates</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className=" pr-10">
            <Link
              className="hover:text-[#1e1bee] transition-colors duration-200"
              to="/"
            >
              <img
                className="h-6"
                src="https://www.zillowstatic.com/s3/pfs/static/z-logo-default-visual-refresh.svg"
                alt="Real Estate Logo"
              />
            </Link>
          </div>

          <div className="nav-right flex gap-7">
            <div className="relative group">
              {/* Main Link */}
              <Link
                className="text-gray-700 cursor-pointer py-2  hover:text-[#1e1bee] transition-colors duration-200"
                to="/managerentals"
              >
                Manage Rentals
              </Link>

              {/* Dropdown without horizontal dividers */}
              <ul className="absolute p-3 top-full left-0 mt-2 w-64 bg-white shadow-md text-[15px] text-blue-700 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-200 z-10">
                <li className="p-2 text-black font-semibold">
                  Rental Management Tools
                </li>
                <li className="hover:bg-blue-50 hover:underline p-2">
                  <Link to="/my-listings">My Listings</Link>
                </li>
                <li className="hover:bg-blue-50 hover:underline p-2">
                  <Link to="/inbox">Inbox</Link>
                </li>
                <li className="hover:bg-blue-50 hover:underline p-2">
                  <Link to="/applications">Applications</Link>
                </li>
                <li className="hover:bg-blue-50 hover:underline p-2">
                  <Link to="/leases">Leases</Link>
                </li>
                <li className="hover:bg-blue-50 hover:underline p-2">
                  <Link to="/payments">Payments</Link>
                </li>
                <hr className=" mx-5" />
                <li className="p-2 text-black font-semibold">Learn More</li>
                <li className="hover:bg-blue-50 hover:underline p-2">
                  <Link to="/zillow-rental-manager">Zillow Rental Manager</Link>
                </li>
                <li className="hover:bg-blue-50 hover:underline p-2">
                  <Link to="/price-my-rental">Price My Rental</Link>
                </li>
                <li className="hover:bg-blue-50 hover:underline p-2">
                  <Link to="/resource-center">Resource Center</Link>
                </li>
                <li className="hover:bg-blue-50 hover:underline p-2">
                  <Link to="/help-center">Help Center</Link>
                </li>
              </ul>
            </div>

            <Link
              className="hover:text-[#1e1bee] transition-colors duration-200"
              to="/advertise"
            >
              Advertise
            </Link>
            <Link
              className="hover:text-[#1e1bee] transition-colors duration-200"
              to="/help"
            >
              Help
            </Link>

            <Link
              className="hover:text-[#1e1bee] transition-colors duration-200"
              to="/login"
            >
              Login
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
