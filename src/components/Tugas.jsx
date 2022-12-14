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
  }
];

const Tugas = () => {
  return (
    <section className="">
      <div className="contianer mx-auto flex justify-evenly w-full h-full border rounded-xl">
        <div className=" flex flex-col bg-yellow-500 space-y-20">
          <h1 className=" text-xl text-center">List Tugas Matkul</h1>
          <div>
            <table className=" w-[350px] h-[500px]">
              {headerMatkul.map((header) => {
                return (
                  <tr className="" key={header.id}>
                    <td className="  border rounded-3xl m-5 box-content p-5 bg-black space-y-7">
                      <td className="  border rounded-3xl m-4 box-content p-4 bg-red-700 flex">
                        <h1>{header.headermatkul}</h1>
                      </td>
                      <td className="  border rounded-3xl m-4 box-content p-4 bg-red-700 flex">
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
        <div className=" flex flex-col bg-slate-500 space-y-20">
          <h1 className=" text-xl text-center">Jadwal Diberi Tugas</h1>
          <div>
            <table className=" w-[350px] h-[500px]">
              {headerMatkul.map((header) => {
                return (
                  <tr className="" key={header.id}>
                    <td className="  border rounded-3xl m-5 box-content p-5 bg-black space-y-7">
                      <td className="  border rounded-3xl m-4 box-content p-4 bg-red-700 flex">
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
        <div className=" flex flex-col bg-slate-500 space-y-20">
          <h1 className=" text-xl text-center">Jadwal Deadline Tugas</h1>
          <div>
            <table className=" w-[350px] h-[500px]">
              {headerMatkul.map((header) => {
                return (
                  <tr className="" key={header.id}>
                    <td className="  border rounded-3xl m-5 box-content p-5 bg-black space-y-7">
                      <td className="  border rounded-3xl m-4 box-content p-4 bg-red-700 flex">
                        <h1>{header.tanggal2}</h1>
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
