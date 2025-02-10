'use client';

import { useState } from "react";

export default function TableMahasiswa() {
  const [expandedRow, setExpandedRow] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const data = [
    {
      no: 1,
      nim: "12345678",
      nama: "John Doe",
      gender: "Laki-laki",
      prodi: "Teknik Informatika",
      kelas: "A",
      semester: 4,
      alamat: "Jl. Merdeka No. 123",
      hobby: "Bermain Game",
      citaCita: "Software Engineer"
    },
    {
      no: 2,
      nim: "87654321",
      nama: "Jane Doe",
      gender: "Perempuan",
      prodi: "Sistem Informasi",
      kelas: "B",
      semester: 6,
      alamat: "Jl. Sudirman No. 456",
      hobby: "Membaca",
      citaCita: "Data Scientist"
    },
    {
      no: 3,
      nim: "23456789",
      nama: "Ahmad Rahman",
      gender: "Laki-laki",
      prodi: "Teknik Informatika",
      kelas: "C",
      semester: 2,
      alamat: "Jl. Ahmad Yani No. 789",
      hobby: "Coding",
      citaCita: "Full Stack Developer"
    },
    {
      no: 4,
      nim: "34567890",
      nama: "Siti Aminah",
      gender: "Perempuan",
      prodi: "Sistem Informasi",
      kelas: "A",
      semester: 4,
      alamat: "Jl. Gatot Subroto No. 321",
      hobby: "Desain Grafis",
      citaCita: "UI/UX Designer"
    },
    {
      no: 5,
      nim: "45678901",
      nama: "Budi Santoso",
      gender: "Laki-laki",
      prodi: "Teknik Informatika",
      kelas: "B",
      semester: 6,
      alamat: "Jl. Diponegoro No. 567",
      hobby: "Fotografi",
      citaCita: "Mobile Developer"
    },
    {
      no: 6,
      nim: "56789012",
      nama: "Linda Wahyu",
      gender: "Perempuan",
      prodi: "Sistem Informasi",
      kelas: "C",
      semester: 2,
      alamat: "Jl. Veteran No. 890",
      hobby: "Menulis",
      citaCita: "Business Analyst"
    },
    {
      no: 7,
      nim: "67890123",
      nama: "Rudi Hermawan",
      gender: "Laki-laki",
      prodi: "Teknik Informatika",
      kelas: "A",
      semester: 4,
      alamat: "Jl. Pahlawan No. 234",
      hobby: "Music",
      citaCita: "Game Developer"
    },
    {
      no: 8,
      nim: "78901234",
      nama: "Diana Putri",
      gender: "Perempuan",
      prodi: "Sistem Informasi",
      kelas: "B",
      semester: 6,
      alamat: "Jl. Pemuda No. 567",
      hobby: "Menari",
      citaCita: "Project Manager"
    },
    {
      no: 9,
      nim: "89012345",
      nama: "Eko Prasetyo",
      gender: "Laki-laki",
      prodi: "Teknik Informatika",
      kelas: "C",
      semester: 2,
      alamat: "Jl. Asia Afrika No. 890",
      hobby: "Olahraga",
      citaCita: "DevOps Engineer"
    },
    {
      no: 10,
      nim: "90123456",
      nama: "Maya Sari",
      gender: "Perempuan",
      prodi: "Sistem Informasi",
      kelas: "A",
      semester: 4,
      alamat: "Jl. Imam Bonjol No. 123",
      hobby: "Traveling",
      citaCita: "System Analyst"
    }
  ];

  const filteredData = data.filter(item =>
    Object.values(item).some(
      value => value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const toggleRow = (index) => {
    setExpandedRow(expandedRow === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-blue-50 to-emerald-50 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">
            Data Mahasiswa
          </h1>
          <p className="mt-2 text-gray-600">
            Total: {filteredData.length} mahasiswa
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="max-w-md mx-auto">
            <input
              type="text"
              placeholder="Cari mahasiswa..."
              className="w-full p-3 rounded-xl border border-gray-200 shadow-sm focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Desktop Table - Hidden on Mobile */}
        <div className="hidden sm:block overflow-hidden bg-white rounded-xl shadow-lg border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-violet-500 to-indigo-500 text-white">
                  <th className="py-4 px-4 text-left">No</th>
                  <th className="py-4 px-4 text-left">NIM</th>
                  <th className="py-4 px-4 text-left">Nama</th>
                  <th className="py-4 px-4 text-left">Gender</th>
                  <th className="py-4 px-4 text-left">Prodi</th>
                  <th className="py-4 px-4 text-left">Kelas</th>
                  <th className="py-4 px-4 text-left">Semester</th>
                  <th className="py-4 px-4 text-left">Alamat</th>
                  <th className="py-4 px-4 text-left">Hobby</th>
                  <th className="py-4 px-4 text-left">Cita-cita</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredData.map((item, index) => (
                  <tr key={index} className="hover:bg-violet-50 transition-colors">
                    <td className="py-3 px-4">{item.no}</td>
                    <td className="py-3 px-4">{item.nim}</td>
                    <td className="py-3 px-4 font-medium text-violet-600">{item.nama}</td>
                    <td className="py-3 px-4">{item.gender}</td>
                    <td className="py-3 px-4">{item.prodi}</td>
                    <td className="py-3 px-4">{item.kelas}</td>
                    <td className="py-3 px-4">{item.semester}</td>
                    <td className="py-3 px-4">{item.alamat}</td>
                    <td className="py-3 px-4">{item.hobby}</td>
                    <td className="py-3 px-4">{item.citaCita}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards - Shown only on Mobile */}
        <div className="sm:hidden space-y-4">
          {filteredData.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              <div 
                className="p-4 cursor-pointer"
                onClick={() => toggleRow(index)}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-violet-600">{item.nama}</h3>
                    <p className="text-sm text-gray-500 mt-1">NIM: {item.nim}</p>
                    <p className="text-sm text-gray-500">{item.prodi}</p>
                  </div>
                  <span className="text-gray-400 transform transition-transform duration-200">
                    {expandedRow === index ? "▼" : "▶"}
                  </span>
                </div>
              </div>

              {expandedRow === index && (
                <div className="px-4 pb-4 border-t border-gray-100 bg-violet-50">
                  <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                    <div>
                      <p className="text-gray-500">Gender</p>
                      <p className="font-medium">{item.gender}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Kelas</p>
                      <p className="font-medium">{item.kelas}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Semester</p>
                      <p className="font-medium">{item.semester}</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Hobby</p>
                      <p className="font-medium">{item.hobby}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-gray-500">Alamat</p>
                      <p className="font-medium">{item.alamat}</p>
                    </div>
                    <div className="col-span-2">
                      <p className="text-gray-500">Cita-cita</p>
                      <p className="font-medium">{item.citaCita}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}