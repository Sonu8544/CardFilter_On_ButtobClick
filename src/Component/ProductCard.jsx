import data from '../assets/ProductData.json';
import React, { useState, useEffect } from 'react';

const RitualSlider = () => {
  const [item, setItem] = useState(data.products);
  const [activeButton, setActiveButton] = useState('refreshing');

  const filterfunction = (category) => {
    const filterCat = data.products.filter((currentItem) => {
      return currentItem.category === category;
    });
    setItem(filterCat);
    setActiveButton(category);
  };

  useEffect(() => {
    filterfunction(activeButton);
  }, [activeButton]);

  const buttonStyles = (category) => {
    return `${
      activeButton === category
        ? 'bg-black text-yellow-500'
        : 'bg-transparent text-black'
    } font-semibold py-1 px-5 border border-black rounded-md hover:transition duration-300 ease-in-out`;
  };

  return (
    <>
      <div>
        <h1 className="text-white bg-slate-600 items-center text-center text-[25px] cursor-pointer">
          Lorem, ipsum dolor.
        </h1>

        <div className="sm:ml-3 md:ml-20 gap-5 m-3 flex flex-col sm:flex-row">
          <button
            className={buttonStyles('refreshing')}
            onClick={() => filterfunction('refreshing')}
          >
            HYDRATING YOURU BENTO
          </button>

          <button
            className={buttonStyles('hydrating')}
            onClick={() => filterfunction('hydrating')}
          >
            REFRESHING YOURU BENTO
          </button>

          <button
            className={buttonStyles('ALL')}
            onClick={() => {
              setActiveButton('ALL');
              setItem(data.products)
            }}
          >
            ALL
          </button>
        </div>

        <div className="p-3 mr-10 ml-10 flex flex-wrap gap-5 justify-between">
          {item.map((product) => {
            const { name, price, image } = product;
            return (
              <div className="max-w-sm md:max-w-md" key={product.name}>
                <img
                  src={image}
                  alt="Lorem Image"
                  className="rounded-lg object-cover shadow-xl transform scale-300 transition-transform hover:scale-105 overflow-hidden duration-200 ease-in-out cursor-pointer w-[320px] h-[360px] "
                />
                <div>
                  <p className="text-yellow-500 text-lg m-1">{name}</p>
                </div>
                <div>
                  <p className="text-yellow-500 text-lg m-1">₹ {price}</p>
                </div>
                <div>
                  <button className="bg-transparent hover:bg-black text-black font-semibold hover:text-yellow-500 py-1 px-5 border border-black hover:border-transparent rounded-md hover:transition duration-300 ease-in-out">
                    ADD TO CART
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RitualSlider;
