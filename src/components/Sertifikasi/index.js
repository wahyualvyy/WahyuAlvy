import React from "react";

const Sertifikasi = () => {
  const certificates = [
    { title: "Belajar Dasar Pemrograman Web", url: "https://www.dicoding.com/certificates/ERZR1Y0NOZYV", image: "https://www.dropbox.com/scl/fi/0kbdr2uc85m6nfafq4bd7/sertifikat_course_123_2898745_010624122633_page-0001.jpg?rlkey=o27yq4hr0eqz0d4ksn091p898&st=swxf9rmz&raw=1" },
    { title: "Belajar Membuat Front-End Web untuk Pemula", url: "https://www.dicoding.com/certificates/MEPJNQ26JX3V", image: "https://www.dropbox.com/scl/fi/yyesjgpdupe1x7ywsa14z/sertifikat_course_315_2898745_100624145520_page-0001.jpg?rlkey=w4zv92ktuu88u5t7nnmt46irp&st=l94vpyj2&raw=1" },
    { title: "Belajar Dasar Pemrograman JavaScript", url: "https://www.dicoding.com/certificates/NVP7Q4L7VZR0", image: "https://www.dropbox.com/scl/fi/s4sjhund3o7n29xv75qse/sertifikat_course_256_2898745_050624154537_page-0001.jpg?rlkey=uw7o7gy47c1k1uxzq2o0sf0bx&st=c01xln3p&raw=1" },
    { title: "Certificate 4", url: "#", image: "https://i.ebayimg.com/images/g/mIwAAOSwLOdiniHz/s-l1600.jpg" },
    { title: "Certificate 5", url: "#", image: "https://i.ebayimg.com/images/g/mIwAAOSwLOdiniHz/s-l1600.jpg" },
    { title: "Certificate 6", url: "#", image: "https://i.ebayimg.com/images/g/mIwAAOSwLOdiniHz/s-l1600.jpg" }
  ];

  return (
    <div id="sertifikasi-section" className="mt-6 flexg justify-center items-center p-4">
      <div className="w-full max-w-screen-xl border-2 border-solid border-white p-8 rounded-lg shadow-lg">
        <h1 className="text-white font-bold text-[35px] mb-6">My Certificate</h1>
        
        {/* Grid untuk Sertifikat */}
        <div className="grid grid-cols-3 gap-6">
          {certificates.map((certificate, index) => (
            <div 
              key={index} 
              className="relative bg-gray-800 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-[0_0_20px_5px_rgba(0,123,255,0.7)] hover:shadow-blue-500/70 overflow-hidden"
            >
              <div className="w-full h-40 rounded-md overflow-hidden">
                <img src={certificate.image} alt={certificate.title} className="w-full h-full object-cover transition-transform duration-300" />
              </div>
              <div className="flex justify-between items-center mt-2">
                <h2 className="text-white font-semibold">{certificate.title}</h2>
                <a href={certificate.url} target="_blank" rel="noopener noreferrer" className="text-white bg-blue-600 p-2 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14 3h7v7h-2V5.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sertifikasi;
