import React from 'react';
import { BsArrowRight } from 'react-icons/Bs';

const headerMatkul = [
  {
    id: 1,
    headermatkul: 'Matematika Informatika (ilab)',
    jadwal1: '12 Desember 2022',
    tanggal2: '25 Desember 2022'
  },
  {
    id: 2,
    headermatkul: 'Algoritma Pemrograman',
    jadwal1: '9 Desember 2022',
    tanggal2: '20 Desember 2022'
  },
  {
    id: 3,
    headermatkul: 'Bahasa Inggris',
    jadwal1: '20 Desember 2022',
    tanggal2: '5 Januari 2023'
  }
];

const Tugas = () => {
  return (
    <section className="bg-gradient-to-r from-[#4B56D2] to-[#472183] text-white">
      <div className="contianer mx-auto flex justify-evenly w-full h-full rounded-xl pt-8">
        <div className=" flex flex-col space-y-16">
          <h1 className=" text-xl text-center">List Tugas Matkul</h1>
          <div>
            <table className=" w-[350px] h-[500px] outline outline-offset-2 outline-blue-900 ring-offset-2 ring-4 rounded-2xl ">
              {headerMatkul.map((header) => {
                return (
                  <tr className="" key={header.id}>
                    <td className="  border rounded-3xl m-5 box-content p-5 bg-[#D0B8A8] space-y-7">
                      <td className="  border rounded-3xl m-4 box-content p-4 bg-red-700 flex justify-center">
                        <h1>{header.headermatkul}</h1>
                      </td>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
        <div className=" flex items-center">
          <h1 className=" text-4xl">
            <BsArrowRight />
          </h1>
        </div>
        <div className=" flex flex-col space-y-16">
          <h1 className=" text-xl text-center">Jadwal Diberi Tugas</h1>
          <div>
            <table className=" w-[350px] h-[500px] outline outline-offset-2 outline-pink-500 ring-offset-2 ring-4 rounded-2xl">
              {headerMatkul.map((header) => {
                return (
                  <tr className="" key={header.id}>
                    <td className="  border rounded-3xl m-5 box-content p-5 bg-[#D0B8A8] space-y-7">
                      <td className="  border rounded-3xl m-4 box-content p-4 bg-red-800 flex justify-center">
                        <h1>{header.jadwal1}</h1>
                      </td>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
        <div className=" flex items-center">
          <h1 className=" text-4xl">
            <BsArrowRight />
          </h1>
        </div>
        <div className=" flex flex-col space-y-16">
          <h1 className=" text-xl text-center">Jadwal Deadline Tugas</h1>
          <div>
            <table className=" w-[350px] h-[500px] outline outline-offset-2 outline-pink-500 ring-offset-2 ring-4 rounded-2xl">
              {headerMatkul.map((header) => {
                return (
                  <tr className="" key={header.id}>
                    <td className="  border rounded-3xl m-5 box-content p-5 bg-[#D0B8A8] space-y-7">
                      <td className="  border rounded-3xl m-4 box-content p-4 bg-red-700 flex justify-center">
                        <h1 className="">{header.tanggal2}</h1>
                      </td>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tugas;
