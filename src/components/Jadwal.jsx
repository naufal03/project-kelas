import React from 'react';

const dosen = [
  {
    nama: 'I KOMANG SUGIARTHA',
    hp: '081234567890',
    vClass: 'https://v-class.gunadarma.ac.id/login/index.php'
  },
  {
    nama: 'DIANA IKASARI',
    hp: '081234567890',
    vClass: 'https://v-class.gunadarma.ac.id/login/index.php'
  },
  {
    nama: 'UMI KULSUM',
    hp: '081234567890',
    vClass: 'https://v-class.gunadarma.ac.id/login/index.php'
  },
  {
    nama: 'WIDIANTO MUTTAQIEN M ',
    hp: '081234567890',
    vClass: 'https://v-class.gunadarma.ac.id/login/index.php'
  },
  {
    nama: 'METI NURHAYATI',
    hp: '081234567890',
    vClass: 'https://v-class.gunadarma.ac.id/login/index.php'
  },
  {
    nama: 'DIAH PRASTIWI',
    hp: '081234567890',
    vClass: 'https://v-class.gunadarma.ac.id/login/index.php'
  },
  {
    nama: 'ETY SUTANTY',
    hp: '081234567890',
    vClass: 'https://v-class.gunadarma.ac.id/login/index.php'
  },
  {
    nama: 'ESTI SETIYANINGSIH',
    hp: '081234567890',
    vClass: 'https://v-class.gunadarma.ac.id/login/index.php'
  },
  {
    nama: 'SEPTIAN DWI PUTRI',
    hp: '081234567890',
    vClass: 'https://v-class.gunadarma.ac.id/login/index.php'
  },
  {
    nama: 'SARI NOORLIMA YANTI',
    hp: '081234567890',
    vClass: 'https://v-class.gunadarma.ac.id/login/index.php'
  },
  {
    nama: "MU'MINATUS FITRIATI FIRDAUS",
    hp: '081234567890',
    vClass: 'https://v-class.gunadarma.ac.id/login/index.php'
  },
  {
    nama: 'ORITA DWI PURBIYANTI',
    hp: '081234567890',
    vClass: 'https://v-class.gunadarma.ac.id/login/index.php'
  },
  {
    nama: 'SANDY SURYO PRAYOGO',
    hp: '081234567890',
    vClass: 'https://v-class.gunadarma.ac.id/login/index.php'
  },
  {
    nama: 'AGUS HADI ISMOYO ',
    hp: '081234567890',
    vClass: 'https://v-class.gunadarma.ac.id/login/index.php'
  }
];

const jadwalKuliah = [
  {
    hari: 'Senin',
    matkul: [
      {
        namaMatkul: 'Algoritma & Pemrograman 1A',
        link: 'https://v-class.gunadarma.ac.id/course/view.php?id=52824',
        jam: '07.30-9.30',
        ruang: 'G345',
        dosen: dosen[0]
      },
      {
        namaMatkul: 'Algoritma & Pemrograman 1B',
        link: 'https://v-class.gunadarma.ac.id/course/view.php?id=45933',
        jam: '09.30-11.30',
        ruang: 'G345',
        dosen: dosen[1]
      },
      {
        namaMatkul: 'Pendidikan Kewarganegaraan',
        link: 'https://v-class.gunadarma.ac.id/course/view.php?id=48968',
        jam: '13.30-15.30',
        ruang: 'G313',
        dosen: dosen[2]
      },
      {
        namaMatkul: 'Matematika Dasar 1',
        link: 'https://v-class.gunadarma.ac.id/course/view.php?id=49135',
        jam: '15.30-17.30',
        ruang: 'G313',
        dosen: dosen[3]
      }
    ]
  },
  {
    hari: 'Selasa',
    matkul: []
  },
  {
    hari: 'Rabu',
    matkul: [
      {
        namaMatkul: 'Ilmu Budaya Dasar',
        link: 'https://v-class.gunadarma.ac.id/course/view.php?id=50592',
        jam: '09.30-11.30',
        ruang: 'E231',
        dosen: dosen[4]
      },
      {
        namaMatkul: 'Matematika Informatika 1 **',
        link: 'https://v-class.gunadarma.ac.id/course/view.php?id=46874',
        jam: '11.30-13.30',
        ruang: 'E231',
        dosen: dosen[5]
      },
      {
        namaMatkul: 'Algoritma & Pemrograman 1C',
        link: 'https://v-class.gunadarma.ac.id/course/view.php?id=51237',
        jam: '13.30-15.30',
        ruang: 'E231',
        dosen: dosen[6]
      }
    ]
  },
  {
    hari: 'Kamis',
    matkul: [
      {
        namaMatkul: 'Peng. Tekno. Komp. & Inf. A **',
        link: 'https://v-class.gunadarma.ac.id/course/view.php?id=51228',
        jam: '07.30-09.30',
        ruang: 'G223',
        dosen: dosen[7]
      },
      {
        namaMatkul: 'Bahasa Inggris',
        link: 'https://v-class.gunadarma.ac.id/course/view.php?id=48390',
        jam: '09.30-11.30',
        ruang: 'G223',
        dosen: dosen[8]
      },
      {
        namaMatkul: 'Peng. Tekno. Komp. & Inf. C **',
        link: 'https://v-class.gunadarma.ac.id/course/view.php?id=48321',
        jam: '12.30-14.30',
        ruang: 'G344',
        dosen: dosen[9]
      }
    ]
  },
  {
    hari: 'Jum`at',
    matkul: [
      {
        namaMatkul: 'Pendidikan Agama Islam	',
        link: 'https://v-class.gunadarma.ac.id/course/view.php?id=51552',
        jam: '07.30-9.30',
        ruang: 'E427',
        dosen: dosen[10]
      },
      {
        namaMatkul: 'Peng. Tekno. Komp. & Inf. B **	',
        link: 'https://v-class.gunadarma.ac.id/course/view.php?id=52670',
        jam: '09.30-11.30',
        ruang: 'E427',
        dosen: dosen[11]
      },
      {
        namaMatkul: 'Fisika & Kimia Dasar 1A',
        link: 'https://v-class.gunadarma.ac.id/course/view.php?id=48300',
        jam: '13.30-15.30',
        ruang: 'E427',
        dosen: dosen[12]
      },
      {
        namaMatkul: 'Fisika & Kimia Dasar 1B	',
        jam: '15.30-17.30',
        ruang: 'E427',
        dosen: dosen[13]
      }
    ]
  }
];

export default function Jadwal() {
  return (
    <>
      <section
        id="jadwal"
        className="bg-gradient-to-r from-[#4B56D2] to-[#472183] text-white pt-10 ">
        <h1 className="text-4xl font-bold  text-center mb-20 ">Jadwal Pelajaran cuy</h1>
        <div className="container mx-auto flex flex-wrap justify-center text-center">
          {jadwalKuliah.map((jadwal, index) => {
            if (jadwal.matkul.length === 0) return <div key={index}></div>;
            return (
              <div
                className="w-[320px] h-[730px]  border shadow-lg shadow-black bg-blue-100 text-black rounded-2xl m-5 box-content px-5 py-3"
                key={index}>
                <div className="text-xl font-bold mb-3">{jadwal.hari.toUpperCase()}</div>
                {jadwal.matkul.map((matkul, index) => {
                  return (
                    <div
                      key={index}
                      className="mb-4 box-content bg-white border border-black  rounded-xl p-3">
                      <table className="flex flex-col items-start ">
                        <tr className="">
                          <td>Matkul</td>
                          <td>:</td>
                          <a href={matkul.link}>
                            <td>{matkul.namaMatkul}</td>
                          </a>
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
      </section>
    </>
  );
}
