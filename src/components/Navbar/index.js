import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="p-4 shadow-md sticky top-0 z-10 bg-black">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 mx-auto">
          <span className="text-xl font-semibold dark:text-white">Mochammad Wahyu Alvy Kusuma</span>
        </Link>

        {/* Menu Navigation (Tengah) */}
        <div className="hidden md:flex flex-1 justify-center space-x-12">
          <Link
            href="/"
            className="text-gray-900 font-bold dark:text-white hover:text-blue-700"
          >
            Home
          </Link>
          <Link
            href="/#"
            className="text-gray-900 font-bold dark:text-white hover:text-blue-700"
          >
            About
          </Link>
          <Link
            href="/#"
            className="text-gray-900 font-bold dark:text-white hover:text-blue-700"
          >
            Portofolio
          </Link>
          <Link
            href="/Sertifikasi#sertifikasi-section"
            className="text-gray-900 font-bold dark:text-white hover:text-blue-700"
          >
            Sertifikasi 
          </Link>
        </div>

        {/* Gambar GitHub (Posisikan ke Kanan) */}
        <div className="flex items-center space-x-3 ml-auto">
          <Link
            href="/#"
            className="text-gray-900 dark:text-white hover:text-blue-700"
          >
            <img
              src="https://imgs.search.brave.com/GduSKacK9ReAYwmDLPyB3b294OleC4df4OvTGmJcr3M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yYXcu/Z2l0aHVidXNlcmNv/bnRlbnQuY29tL2ph/eXdjamxvdmUvbG9n/by9tYXN0ZXIvaW1n/L2dpdGh1Yi5zdmc"
              className="h-8 bg-white rounded-full"
              alt="GitHub"
            />
          </Link>
        </div>

        {/* Tombol Placeholder untuk menjaga keseimbangan */}
        <div className="hidden md:block"></div>
      </div>
    </nav>
  );
};

export default Navbar;
