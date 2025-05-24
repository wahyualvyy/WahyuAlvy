import React from "react";

const About = () => {
  return (
    <div className="mt-6 flex justify-center items-center p-4">
      <div className="w-full max-w-screen-xl border-1 border-solid border-white p-8 rounded-lg shadow-xl bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <h1 className="text-white font-bold text-[35px] mb-6 border-b-4 border-yellow-500 pb-2">
          About Me
        </h1>

        {/* Wrapper for image and text */}
        <div className="flex items-center space-x-6">
          {/* Profile Image */}
          <img
            src="https://i.ibb.co/HLGBx1vn/fotoprofile.png"
            alt="Profile"
            className="w-48 h-48 object-cover rounded-full border-4 border-yellow-500 shadow-lg"
          />

          {/* Description Text */}
          <p className="text-white font-medium text-lg">
            Saya adalah seorang mahasiswa di Universitas Muhammadiyah Sidoarjo
            (UMSIDA), Prodi Informatika. Selama studi di UMSIDA, saya memperoleh
            berbagai pengetahuan dan keterampilan relevan, tidak hanya dari
            akademik tetapi juga melalui aktivitas organisasi. Saya bergabung
            dengan organisasi Asisten Laboratorium, yang memberikan pemahaman
            mendalam tentang keorganisasian dan bidang informatika. Dalam peran
            ini, saya mengembangkan keahlian teknis seperti pengelolaan
            laboratorium, pemrograman, dan jaringan komputer, serta keterampilan
            manajemen waktu, kerjasama tim, dan komunikasi. Pengalaman ini juga
            mengasah kepemimpinan, pemecahan masalah, presentasi, dan pelatihan.
            Melalui proyek kolaboratif dan inovatif, saya mampu menggabungkan
            teori dan praktek. Pengalaman sebagai asisten laboratorium membekali
            saya dengan keterampilan praktis yang penting di dunia kerja, siap
            untuk kontribusi profesional di industri informatika dan kegiatan
            keorganisasian lainnya.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
