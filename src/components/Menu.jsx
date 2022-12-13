import React from 'react';
import hero from '../../public/hero.jpg';

const jadwalKuliah = [
	{
		hari: 'Senin',
		matkul: [
			{
				namaMatkul: 'Algoritma & Pemrograman 1A',
				jam: '07.30-9.30',
				ruang: 'G345',
				dosen: 'I Komang Sugiarta',
			},
			{
				namaMatkul: 'Algoritma & Pemrograman 1B',
				jam: '09.30-11.30',
				ruang: 'G345',
				dosen: 'Diana Ikasari',
			},
			{
				namaMatkul: 'Pendidikan Kewarganegaraan',
				jam: '13.30-15.30',
				ruang: 'G313',
				dosen: 'Umi Kulsum',
			},
			{
				namaMatkul: 'Matematika Dasar',
				jam: '15.30-17.30',
				ruang: 'G313',
				dosen: 'Widianto Mutaqiem ',
			},
		],
	},
	{
		hari: 'Selasa',
		matkul: [],
	},
	{
		hari: 'Rabu',
		matkul: [
			{
				namaMatkul: 'Ilmu Budaya Dasar',
				jam: '09.30-11.30',
				ruang: 'E231',
				dosen: 'Mety',
			},
			{
				namaMatkul: 'Matematika Informatika',
				jam: '11.30-13.30',
				ruang: 'E231',
				dosen: 'Diah Prastiwi',
			},
			{
				namaMatkul: 'Algoritma & Pemrograman 1C',
				jam: '13.30-15.30',
				ruang: 'E231',
				dosen: 'Ety',
			},
		],
	},
	{
		hari: 'Kamis',
		matkul: [
			{
				namaMatkul: 'Ilmu Budaya Dasar',
				jam: '09.30-11.30',
				ruang: 'G223',
				dosen: 'Mety',
			},
			{
				namaMatkul: 'Matematika Informatika',
				jam: '11.30-13.30',
				ruang: 'G223',
				dosen: 'Diah Prastiwi',
			},
			{
				namaMatkul: 'Algoritma & Pemrograman 1C',
				jam: '13.30-15.30',
				ruang: 'G313',
				dosen: 'Ety',
			},
		],
	},
	{
		hari: 'Jum`at',
		matkul: [
			{
				namaMatkul: 'Ilmu Budaya Dasar',
				jam: '09.30-11.30',
				ruang: 'G313',
				dosen: 'Mety',
			},
			{
				namaMatkul: 'Matematika Informatika',
				jam: '11.30-13.30',
				ruang: 'G313',
				dosen: 'Diah Prastiwi',
			},
			{
				namaMatkul: 'Algoritma & Pemrograman 1C',
				jam: '13.30-15.30',
				ruang: 'G313',
				dosen: 'Ety',
			},
		],
	},
];
export const Menu = () => {
	return (
		<>
			<section className="relative">
				<img
					src={hero}
					alt="cover"
					className="w-full h-screen bg-cover object-cover brightness-50 "
				/>
				<div className="container">
					<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 items-start w-full  ">
						<h2 className="text-white text-4xl  ">Jadwal Pelajaran</h2>
					</div>
				</div>
			</section>
			<section id="jadwal" className="pt-10 ">
				<h1>Jadwal cuy</h1>
				<div className="container mx-auto flex flex-wrap justify-evenly box-border text-center  ">
					{jadwalKuliah.map((jadwal, index) => {
						return (
							<div
								className="w-[320px] h-[520px] bg-white-500 rounded-xl shadow-2xl m-10 border-8 pt-5 flex flex-col  items-center "
								key={index}
							>
								{jadwal.hari}
								{jadwal.matkul.map((matkul, index) => {
									return (
										<div
											key={index}
											className="flex flex-col items-start mb-3 px-2 w-full box-border "
										>
											<table>
												<tr>
													<td>Matkul</td>
													<td> : </td>
													<td>{matkul.namaMatkul}</td>
												</tr>
												<tr>
													<td>Jam</td>
													<td>:</td>
													<td>{matkul.jam}</td>
												</tr>
												<tr>
													<td>Ruang</td>
													<td>:</td>
													<td>{matkul.ruang}</td>
												</tr>
												<tr>
													<td>Dosen</td>
													<td>:</td>
													<td>{matkul.dosen}</td>
												</tr>
											</table>
										</div>
									);
								})}
							</div>
						);
					})}
				</div>
			</section>
		</>
	);
};
