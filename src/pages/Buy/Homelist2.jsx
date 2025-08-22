import React from 'react'

const Homelist2 = () => {
  return (
    <div>
      <div className="w-full py-4 md:px-3 flex flex-col gap-4">
        <h2 className="text-[19px]">Real Estate & Homes For Sale</h2>
        <div className="flex justify-between w-full  py-3 text-sm ">
          <p>714 results</p>
          <p className="text-blue-700 font-medium">Sort:Homes for you</p>
        </div>
        {/* Homes Detail */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* House-12 */}
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

          {/* House-13 */}
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

          {/* House-15 */}
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

          {/* House-16 */}
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

          {/* House-6 */}
          <div className="rounded-[5px] overflow-hidden shadow-md">
            <div className="h-40 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://photos.zillowstatic.com/fp/df8bda7052e5d4875820764029b0545b-p_e.webp"
                alt=""
              />
            </div>
            <div className="p-3">
              <p className="font-semibold">$319,000</p>
              <p className="font-light text-[15px] text-gray-800">
                4 bds 3 ba 1800 sqft - House for sale
              </p>
              <p className="font-light text-[15px] text-gray-800">
                456 Ocean Ave, Miami, FL 33139
              </p>
              <p className="font-light text-[12px] text-gray-700">
                MIAMI COAST REALTY
              </p>
            </div>
          </div>

          {/* House-7 */}
          <div className="rounded-[5px] overflow-hidden shadow-md">
            <div className="h-40 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://photos.zillowstatic.com/fp/e88da841fa5d15448b1dcf6113520173-p_e.webp"
                alt=""
              />
            </div>
            <div className="p-3">
              <p className="font-semibold">$389,500</p>
              <p className="font-light text-[15px] text-gray-800">
                3 bds 2 ba 1700 sqft - House for sale
              </p>
              <p className="font-light text-[15px] text-gray-800">
                210 Lakeview Dr, Denver, CO 80206
              </p>
              <p className="font-light text-[12px] text-gray-700">
                METRO BROKERS DENVER
              </p>
            </div>
          </div>

          {/* House-8 */}
          <div className="rounded-[5px] overflow-hidden shadow-md">
            <div className="h-40 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://photos.zillowstatic.com/fp/a6245cacf9f6c3ddf838dc9ff36f3ee0-p_e.webp"
                alt=""
              />
            </div>
            <div className="p-3">
              <p className="font-semibold">$440,000</p>
              <p className="font-light text-[15px] text-gray-800">
                5 bds 4 ba 2300 sqft - House for sale
              </p>
              <p className="font-light text-[15px] text-gray-800">
                329 Hillside Rd, Seattle, WA 98101
              </p>
              <p className="font-light text-[12px] text-gray-700">
                REDFIN SEATTLE
              </p>
            </div>
          </div>
          {/* House-1 */}
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
        </div>
      </div>
    </div>
  );
}

export default Homelist2
