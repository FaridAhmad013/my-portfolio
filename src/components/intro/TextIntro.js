import React from 'react'
import Typical from "react-typical"


const TextIntro = () => {
  return (
    <>
         <h1>
            Hi Saya
            </h1>
            <h1>
              Farid Ahmad Fadhilah
            </h1>
            <p className="text-sm text-gray-700 lg:text-base">
            <Typical steps={[`Saya fresh graduate dari smk assalaam Bandung Lulusan Tahun 2022, Walaupun saya seorang fresh graduate selama sekolah saya freelance di perusahaan CV Icommmits Karya Solusi sebagai Frontend Web Developer Selama 6 Bulan Saya Biasa Mengembangkan maupun membuat Website dari sisi Frontend dengan tampilan yang responsif dan animatif.`]} />
             
            </p>
           <a href={"#contact"}>
            <button className="mt-3 btn btn-primary">Hire Me</button>
           </a>
    </>
  )
}

export default TextIntro