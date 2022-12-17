import React from 'react';

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
  },
  {
    id: 4,
    headermatkul: 'Bahasa Inggris',
    jadwal1: '20 Desember 2022',
    tanggal2: '5 Januari 2023'
  },
  {
    id: 5,
    headermatkul: 'Bahasa Inggris',
    jadwal1: '20 Desember 2022',
    tanggal2: '5 Januari 2023'
  },
  {
    id: 6,
    headermatkul: 'Bahasa Inggris',
    jadwal1: '20 Desember 2022',
    tanggal2: '5 Januari 2023'
  },
  {
    id: 6,
    headermatkul: 'Bahasa Inggris',
    jadwal1: '20 Desember 2022',
    tanggal2: '5 Januari 2023'
  }
];

const Tugas = () => {
  return (
    <section className="bg-gradient-to-r from-[#4B56D2] to-[#472183] text-white h-full">
      <h1 className=" text-4xl  text-center py-12 font-bold">LIST TUGAS - TUGAS </h1>
      <div className="container mx-auto flex justify-center">
        <table className=" border-collapse shadow-2xl shadow-black mx-10">
          <thead className=" ">
            <tr className="">
              <th className=" border xl:px-36 md:px-14 px-4 py-5 xl:text-2xl md:text-xl text-lg">
                List Matkul
              </th>
              <th className=" border xl:px-36 md:px-14 px-4 py-5 xl:text-2xl md:text-xl text-lg">
                Start
              </th>
              <th className=" border xl:px-36 md:px-14 px-4 py-5 xl:text-2xl md:text-xl text-lg">
                Deadline
              </th>
            </tr>
          </thead>
          {headerMatkul.map((matkul) => {
            return (
              <tbody key={matkul.id} className=" ">
                <tr className="">
                  <td className="border xl:px-28 md:px-14 px-4 py-4">{matkul.headermatkul}</td>
                  <td className="border xl:px-28 md:px-14 px-4 py-4">{matkul.jadwal1}</td>
                  <td className="border xl:px-28 md:px-14 px-4 py-4">{matkul.tanggal2}</td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </section>
  );
};

export default Tugas;
