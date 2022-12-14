import React from 'react';
import hero from '../../public/hero.jpg';
import Tugas from './Tugas';

const dosen = [
	{
		nama: 'I KOMANG SUGIARTHA',
		hp: '081234567890',
		vClass: 'https://v-class.gunadarma.ac.id/login/index.php',
	},
	{
		nama: 'DIANA IKASARI',
		hp: '081234567890',
		vClass: 'https://v-class.gunadarma.ac.id/login/index.php',
	},
	{
		nama: 'UMI KULSUM',
		hp: '081234567890',
		vClass: 'https://v-class.gunadarma.ac.id/login/index.php',
	},
	{
		nama: 'WIDIANTO MUTTAQIEN M ',
		hp: '081234567890',
		vClass: 'https://v-class.gunadarma.ac.id/login/index.php',
	},
	{
		nama: 'METI NURHAYATI',
		hp: '081234567890',
		vClass: 'https://v-class.gunadarma.ac.id/login/index.php',
	},
	{
		nama: 'DIAH PRASTIWI',
		hp: '081234567890',
		vClass: 'https://v-class.gunadarma.ac.id/login/index.php',
	},
	{
		nama: 'ETY SUTANTY',
		hp: '081234567890',
		vClass: 'https://v-class.gunadarma.ac.id/login/index.php',
	},
	{
		nama: 'ESTI SETIYANINGSIH',
		hp: '081234567890',
		vClass: 'https://v-class.gunadarma.ac.id/login/index.php',
	},
	{
		nama: 'SEPTIAN DWI PUTRI',
		hp: '081234567890',
		vClass: 'https://v-class.gunadarma.ac.id/login/index.php',
	},
	{
		nama: 'SARI NOORLIMA YANTI',
		hp: '081234567890',
		vClass: 'https://v-class.gunadarma.ac.id/login/index.php',
	},
	{
		nama: "MU'MINATUS FITRIATI FIRDAUS",
		hp: '081234567890',
		vClass: 'https://v-class.gunadarma.ac.id/login/index.php',
	},
	{
		nama: 'ORITA DWI PURBIYANTI',
		hp: '081234567890',
		vClass: 'https://v-class.gunadarma.ac.id/login/index.php',
	},
	{
		nama: 'SANDY SURYO PRAYOGO',
		hp: '081234567890',
		vClass: 'https://v-class.gunadarma.ac.id/login/index.php',
	},
	{
		nama: 'AGUS HADI ISMOYO ',
		hp: '081234567890',
		vClass: 'https://v-class.gunadarma.ac.id/login/index.php',
	},
]

const jadwalKuliah = [
	{
		hari: 'Senin',
		matkul: [
			{
				namaMatkul: 'Algoritma & Pemrograman 1A',
				jam: '07.30-9.30',
				ruang: 'G345',
				dosen: dosen[0]
			},
			{
				namaMatkul: 'Algoritma & Pemrograman 1B',
				jam: '09.30-11.30',
				ruang: 'G345',
				dosen: dosen[1]
			},
			{
				namaMatkul: 'Pendidikan Kewarganegaraan',
				jam: '13.30-15.30',
				ruang: 'G313',
				dosen: dosen[2]
			},
			{
				namaMatkul: 'Matematika Dasar 1',
				jam: '15.30-17.30',
				ruang: 'G313',
				dosen: dosen[3]
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
				dosen: dosen[4]
			},
			{
				namaMatkul: 'Matematika Informatika 1 **',
				jam: '11.30-13.30',
				ruang: 'E231',
				dosen: dosen[5]
			},
			{
				namaMatkul: 'Algoritma & Pemrograman 1C',
				jam: '13.30-15.30',
				ruang: 'E231',
				dosen: dosen[6]
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
				dosen: dosen[7]
			},
			{
				namaMatkul: 'Bahasa Inggris',
				jam: '09.30-11.30',
				ruang: 'G223',
				dosen: dosen[8]
			},
			{
				namaMatkul: 'Peng. Tekno. Komp. & Inf. C **',
				jam: '12.30-14.30',
				ruang: 'G344',
				dosen: dosen[9]
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
				dosen: dosen[10]
			},
			{
				namaMatkul: 'Peng. Tekno. Komp. & Inf. B **	',
				jam: '09.30-11.30',
				ruang: 'E427',
				dosen: dosen[11]
			},
			{
				namaMatkul: 'Fisika & Kimia Dasar 1A',
				jam: '13.30-15.30',
				ruang: 'E427',
				dosen: dosen[12]
			},
			{
				namaMatkul: 'Fisika & Kimia Dasar 1B	',
				jam: '15.30-17.30',
				ruang: 'E427',
				dosen: dosen[13]
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
														<td>{matkul.dosen.nama}</td>
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
