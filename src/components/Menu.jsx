import React from 'react';

export const Menu = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#4B56D2] to-[#472183] text-white">
        <section>
          <div className="container-xl">
            <div className="flex flex-col justify-center items-center mx-auto w-full h-screen ">
              <h1 className="text-3xl font-bold xl:text-7xl md:text-5xl">
                Selamat datang Di Website
              </h1>
              <h3 className="text-2xl mt-4 xl:text-5xl font-semibold">1IA10</h3>
              <a
                href="#"
                className="xl:px-5 xl:py-3 px-3 py-2 bg-white text-black rounded-xl mt-20 font-semibold  shadow-2xl"
              >
                Dashboard
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
