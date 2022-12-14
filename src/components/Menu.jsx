import React from 'react';
import hero from '../../public/hero.jpg';
import Tugas from './Tugas';

const jadwalKuliah = [
	{
		hari: 'Senin',
		matkul: [
			{
				namaMatkul: 'Algoritma & Pemrograman 1A',
				jam: '07.30-9.30',
				ruang: 'G345',
				dosen: 'I KOMANG SUGIARTHA',
			},
			{
				namaMatkul: 'Algoritma & Pemrograman 1B',
				jam: '09.30-11.30',
				ruang: 'G345',
				dosen: 'DIANA IKASARI',
			},
			{
				namaMatkul: 'Pendidikan Kewarganegaraan',
				jam: '13.30-15.30',
				ruang: 'G313',
				dosen: 'UMI KULSUM',
			},
			{
				namaMatkul: 'Matematika Dasar 1',
				jam: '15.30-17.30',
				ruang: 'G313',
				dosen: 'WIDIANTO MUTTAQIEN M ',
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
				dosen: 'METI NURHAYATI',
			},
			{
				namaMatkul: 'Matematika Informatika 1 **',
				jam: '11.30-13.30',
				ruang: 'E231',
				dosen: 'DIAH PRASTIWI',
			},
			{
				namaMatkul: 'Algoritma & Pemrograman 1C',
				jam: '13.30-15.30',
				ruang: 'E231',
				dosen: 'ETY SUTANTY',
			},
		],
	},
	{
		hari: 'Kamis',
		matkul: [
			{
				namaMatkul: 'Peng. Tekno. Komp. & Inf. A **',
				jam: '07.30-09.30',
				ruang: 'G223',
				dosen: 'ESTI SETIYANINGSIH',
			},
			{
				namaMatkul: 'Bahasa Inggris',
				jam: '09.30-11.30',
				ruang: 'G223',
				dosen: 'SEPTIAN DWI PUTRI',
			},
			{
				namaMatkul: 'Peng. Tekno. Komp. & Inf. C **',
				jam: '12.30-14.30',
				ruang: 'G344',
				dosen: 'SARI NOORLIMA YANTI',
			},
		],
	},
	{
		hari: 'Jum`at',
		matkul: [
			{
				namaMatkul: 'Pendidikan Agama Islam	',
				jam: '07.30-9.30',
				ruang: 'E427',
				dosen: "MU'MINATUS FITRIATI FIRDAUS",
			},
			{
				namaMatkul: 'Peng. Tekno. Komp. & Inf. B **	',
				jam: '09.30-11.30',
				ruang: 'E427',
				dosen: 'ORITA DWI PURBIYANTI',
			},
			{
				namaMatkul: 'Fisika & Kimia Dasar 1A',
				jam: '13.30-15.30',
				ruang: 'E427',
				dosen: 'SANDY SURYO PRAYOGO',
			},
			{
				namaMatkul: 'Fisika & Kimia Dasar 1B	',
				jam: '15.30-17.30',
				ruang: 'E427',
				dosen: 'AGUS HADI ISMOYO ',
			},
		],
	},
];

export const Menu = () => {
	return (
		<>
			<div className="bg-gradient-to-r from-[#4B56D2] to-[#472183] text-white">
				<section>
					<div className="container-xl">
						<div className="flex flex-col justify-center items-center mx-auto w-full h-screen ">
							<h1 className="text-4xl xl:text-7xl md:text-5xl">
								Selamat datang Di Website
							</h1>
							<h3 className="text-4xl mt-4">1IA10</h3>
						</div>
					</div>
				</section>

				<section id="jadwal" className="pt-10 ">
					<div className="container mx-auto flex flex-wrap justify-evenly text-center   ">
						{jadwalKuliah.map((jadwal, index) => {
							return (
								<div
									className="w-[320px] h-[520px]  border shadow-lg shadow-black rounded-3xl m-5 box-content p-5 "
									key={index}
								>
									{jadwal.hari}
									{jadwal.matkul.map((matkul, index) => {
										return (
											<div key={index} className="m-4 box-content ">
												<table className="flex flex-col items-start ">
													<tr className="">
														<td>Matkul</td>
														<td>:</td>
														<td> {matkul.namaMatkul}</td>
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
						<div id='Tugass' className=' pt-20'>
							<Tugas/>
						</div>
				</section>
			</div>
		</>
	);
};
