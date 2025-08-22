import React from 'react'

const Homelist1 = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2 ">
        {/* House-1 */}
        <div className="rounded-md overflow-hidden shadow-md bg-white">
          <div className="h-40 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://photos.zillowstatic.com/fp/7731bab1aada6bf8b1b3be2771da3361-p_e.webp"
              alt="House"
            />
          </div>
          <div className="p-3 text-sm">
            <p className="font-semibold text-base">$199,000</p>
            <p className="text-gray-800">
              3 bds 2 ba 1433 sqft - House for sale
            </p>
            <p className="text-gray-800">1024 Elm St, Dallas, TX 75201</p>
            <p className="text-[12px] text-gray-700">KELLER WILLIAMS DALLAS</p>
          </div>
        </div>
        <div className="rounded-[5px] overflow-hidden shadow-md">
          <div className="h-40 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://photos.zillowstatic.com/fp/7731bab1aada6bf8b1b3be2771da3361-p_e.webp"
              alt=""
            />
          </div>
          <div className="p-3">
            <p className="font-semibold">$199,000</p>
            <p className="font-light text-[15px] text-gray-800">
              3 bds 2 ba 1433 sqft - House for sale
            </p>
            <p className="font-light text-[15px] text-gray-800">
              1024 Elm St, Dallas, TX 75201
            </p>
            <p className="font-light text-[12px] text-gray-700">
              KELLER WILLIAMS DALLAS
            </p>
          </div>
        </div>

        {/* House-2 */}
        <div className="rounded-[5px] overflow-hidden shadow-md">
          <div className="h-40 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://photos.zillowstatic.com/fp/0bc5df93cd128c9c6e058e98369053a5-p_e.webp"
              alt=""
            />
          </div>
          <div className="p-3">
            <p className="font-semibold">$265,000</p>
            <p className="font-light text-[15px] text-gray-800">
              4 bds 3 ba 1850 sqft - House for sale
            </p>
            <p className="font-light text-[15px] text-gray-800">
              4589 Maple Ave, Houston, TX 77002
            </p>
            <p className="font-light text-[12px] text-gray-700">
              COLDWELL BANKER HOUSTON
            </p>
          </div>
        </div>

        {/* House-3 */}
        <div className="rounded-[5px] overflow-hidden shadow-md">
          <div className="h-40 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://photos.zillowstatic.com/fp/9b2942f1420958f2c7c4be457323c041-p_e.webp"
              alt=""
            />
          </div>
          <div className="p-3">
            <p className="font-semibold">$349,900</p>
            <p className="font-light text-[15px] text-gray-800">
              3 bds 2 ba 1600 sqft - House for sale
            </p>
            <p className="font-light text-[15px] text-gray-800">
              789 Oak Dr, Orlando, FL 32801
            </p>
            <p className="font-light text-[12px] text-gray-700">
              CENTURY 21 ORLANDO
            </p>
          </div>
        </div>

        {/* House-4 */}
        <div className="rounded-[5px] overflow-hidden shadow-md">
          <div className="h-40 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://photos.zillowstatic.com/fp/6cd3bdddf70a13f0619bc30d710965fd-p_e.webp"
              alt=""
            />
          </div>
          <div className="p-3">
            <p className="font-semibold">$425,500</p>
            <p className="font-light text-[15px] text-gray-800">
              5 bds 4 ba 2100 sqft - House for sale
            </p>
            <p className="font-light text-[15px] text-gray-800">
              1562 Sunset Blvd, Los Angeles
            </p>
            <p className="font-light text-[12px] text-gray-700">
              EXP REALTY LA
            </p>
          </div>
        </div>

        {/* House-5 */}
        <div className="rounded-[5px] overflow-hidden shadow-md">
          <div className="h-40 overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://photos.zillowstatic.com/fp/6987d39a9adc68419efb93d53627be49-p_e.webp"
              alt=""
            />
          </div>
          <div className="p-3">
            <p className="font-semibold">$279,000</p>
            <p className="font-light text-[15px] text-gray-800">
              3 bds 2 ba 1500 sqft - House for sale
            </p>
            <p className="font-light text-[15px] text-gray-800">
              875 Pine St, Atlanta, GA 30308
            </p>
            <p className="font-light text-[12px] text-gray-700">
              RE/MAX ATLANTA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homelist1
