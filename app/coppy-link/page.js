'use client'
import { useEffect, useState } from "react"
import { fetchData } from "../firebase"
import PropTypes from "prop-types"

 export default function PageUser({id}) {

    const [namaTeman, setNamaTeman] = useState('')
    const [data, setData] = useState([])
    const formattedText = namaTeman.replace(/\s+/g, "_");
  //  console.log(formattedText);
    const [status, setStatus] = useState(false)
    const [konf, setKonf] = useState(false)

    useEffect(() => {
      const getData = async () => {
        const data = await fetchData(id)
        setData(data)
      }
      getData()
    },[])

    const ShareText = `Assalamualaikum.wr.wb \nBismillahirrahmanirrohim \n\nYth. Bapak/Ibu/Saudara/i \n\n${namaTeman}
                        
                    \nTanpa mengurangi rasa hormat, perkenankan kami mengundang Bapak/Ibu/Saudara/i, teman sekaligus sahabat, untuk menghadiri acara Pernikahan kami :

                    \n*${data?.namaMempelai}*

                    \nBerikut link undangan kami untuk info lengkap dari acara bisa kunjungi :
                    \n${data?.link}/${formattedText}

                    \nMerupakan suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan untuk hadir dan memberikan doa restu.

                    \n*Mohon maaf perihal undangan hanya dibagikan melalui pesan ini*.

                    \nTerima kasih banyak atas perhatiannya.

                    \nWassalamu'alaikum Wr. Wb

                    \n\nKami yang berbahagia
                    \n\n*${data?.namaMempelai}*`
    const handleShare = async () => {
        if (!namaTeman.trim()) {
        // alert("Masukkan nama teman dulu.");
        setKonf(true)
        setTimeout(() => {
          setKonf(false)
        }, 1000);
        return;
        return;
        }
            if (navigator.share) {
        try {
            await navigator.share({
            title: 'Undangan Pernikahan',
            text: ShareText,
            // url: window.location.href, // opsional, bisa dihilangkan atau diganti
            });
        } catch (err) {
            alert("Gagal membagikan.");
        }
        } else {
        alert("Fitur berbagi tidak didukung di perangkat ini.");
        }
    }
  //   const handleCopy = () => {
  //   if (namaTeman.trim() !== "") {
  //     navigator.clipboard.writeText(ShareText);
  //     alert("Nama berhasil disalin!");
  //   } else {
  //     alert("Masukkan nama terlebih dahulu.");
  //   }
  // };
  


  const handleCopy = () => {
  if (namaTeman.trim() === "") {
    setKonf(true)
    setTimeout(() => {
      setKonf(false)
    }, 1000);
    return;
  }

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(ShareText)
      .then(() => {
        // alert("Nama berhasil disalin!");
        setStatus(true)
        setTimeout(() => {
          setStatus(false)
        }, 2000);
      })
      .catch((err) => {
        console.error("Gagal menyalin:", err);
        // alert("Gagal menyalin teks.");
      });
  } else {
    alert("Clipboard tidak didukung di browser ini.");
  }
};

  // console.log(data);
  

    return(
        <div className="text-center ">
        <h1 className="text-5xl sm:text-7xl font-bold text-yellow-400 italic  mt-10 " style={{textShadow: '2px 2px #acaaaa'}}>Selamat!!</h1>
        <p className="text-xl py-5 italic text-blue-800 font-bold ">{data?.namaMempelai}</p>
        <p className="italic text-gray-700 text-sm sm:text-md">Semoga acaranya lancar,<br/> Semoga hidup baru kalian membawa <br/> banyak berkah dan kebahagiaan</p>
        <h1 className="text-green-700 italic sm:text-xl pt-10">
          Jangan lupa undang teman-teman kamu untuk memeriahkan acaranya
        </h1>
        <input 
          type="text"
          placeholder="Masukkan Nama Teman Kamu"
          className="bg-white rounded-md p-2 sm:p-3 w-[80%] sm:w-1/2 outline-0 mt-5" 
          onChange={(e) => setNamaTeman(e.target.value)}
          value={namaTeman}
          // onChange={(e) => {
          //   const formatted = e.target.value.replace(/\s+/g, "_");
          //   setNamaTeman(formatted);
          // }}
          />
          <p className="text-red-400 text-sm p-2">{konf ? 'Masukkan Nama terlebih dahulu!!': ''}</p>
        <button 
        onClick={handleShare}
        className="grid mx-auto bg-green-700 rounded-md p-2 w-20 text-white mb-5" >Bagikan</button>
        <button 
        onClick={handleCopy}
        className="grid mx-auto bg-green-500 rounded-md p-2 w-20 text-white" >{status ? 'succes' : 'salin'}</button>
      </div>
    )
}


// export default PageUser
PageUser.propTypes = {
  id: PropTypes.string
}