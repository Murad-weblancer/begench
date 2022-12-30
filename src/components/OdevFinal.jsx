import React from "react";
import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import pp from "../assets/for.jpg";
import three from "../assets/three.jpg";
import { motion } from "framer-motion";
export const OdevFinal = () => {
  return (
    <div className="bg-secondary w-full h-full">
      <div className="   ml-10">
        <p>p</p>
        <motion.h1
        initial={{
            opacity:0,
        }}
        transition={{
            duration:0.3
        }}
        animate={{
            opacity:1
        }}
        className="mt-32 text-center text-4xl font-bold"
        >Final Ödevi</motion.h1>

        <motion.h2
        initial={{
            opacity:0,
        }}
        transition={{
            duration:0.3,
            delay:1
        }}
        animate={{
            opacity:1
        }}
        className=" text-3xl font-bold"> AD: Begench Shamiyev</motion.h2>
        <motion.h2
        initial={{
            opacity:0,
        }}
        transition={{
            duration:0.3,
            delay:1.2
        }}
        animate={{
            opacity:1
        }}
        className=" text-3xl font-bold mt-5"> SOYAD: Begench Shamiyev</motion.h2>
        <motion.h2
        initial={{
            opacity:0,
        }}
        transition={{
            duration:0.3,
            delay:1.3
        }}
        animate={{
            opacity:1
        }}
        className=" text-3xl font-bold mt-5"> Öğrenci no: 2110809638</motion.h2>
        <div className="w-full flex justify-center mt-10 ">
          <motion.img
          initial={{opacity:0, y:-100}}
          transition={{
            delay:1.5,
            duration:0.3
          }}
          animate={{
            opacity:1,
            y:0
          }}
          src={one} alt="" />
        </div>

        <h3 className="mt-16 mb-7 font-semibold ">
          Şekil 1. Ülkelerin milli geliri. Yaşam maliyetleri.
        </h3>
        <div className="w-full flex justify-between items-center">
          <div>
            <img src={two} className="w-[700px] object-cover" alt="" />
          </div>
          <div className="w-[50%]">
            <p>
              Şimdi burada ülkelerin milli gelirlerine bakalım, burada en yüksek
              milli gelir Amerika olmak üzere, ikinci sırada Katar gelmekte.
              Veya son iki sırada Pakistan, Hindistan yer almaktadır.
              Türkmenistan’a ve Türkiye ye baktığımızda arada çok fark
              görülmemekte buna rağmen, bazı Türkmenistan vatandaşları Türkiye
              ye çalışmak için geliyorlar. Katar’ın hem milli geliri daha
              yüksek, herkesin bildiği gibi Katar petrol a çok zengin ve o
              yüzden milli geliri çok ülkelere bakanından yüksek görülmekte.
              Azerbaycan hem Petrol’e çok zengin ülke ama ülkenin milli geliri
              Katar’a göre düşük. Amerika veya Rusya’nı kıyasladığımızda arada
              çok fark var Amerika’nın ülke milli geliri daha yüksek ve benim
              kendi fikrim Amerika’da
            </p>
          </div>
        </div>

        <h3 className="mt-16 mb-7 font-semibold ">
          Şekil 2. Türkmenistan ve Amerika’nın milli gelirini kıyaslamak.{" "}
        </h3>
        <div className="w-full flex justify-between items-center">
          <div className="w-[50%]">
            <p>
              Bu grafiğe bakarsak Amerika’nın ülke milli geliri Türkmenistan’ın
              ülke milli gelirin den daha fazla. Çünkü Türkmenistan’ın ülke
              milli geliri az olduğu üçün, işsizlik oranı çok ve göçmen oranı
              az, fakat Amerika’da ülke milli geliri çok olduğu üçün göçmen
              oranları da çok. Ve o yüzden Amerika ya insanlar para kazanmak
              üçüm gidiyorlar.
            </p>
          </div>
          <div>
            <img src={pp} className="w-[700px] object-cover" alt="" />
          </div>
        </div>

        <h3 className="mt-16 mb-7 font-semibold ">
          Şekil 3. Ülkelerin işsizlil ve göçmen oranları.{" "}
        </h3>
        <div className="w-full flex justify-between items-center">
          <div>
            <img src={three} className="w-[700px] object-cover" alt="" />
          </div>
          <div className="w-[50%]">
            <p>
              Gelelim ülkelerin işsizlik oranı ve göçmen oranlarına. Burada
              öncelikle Katara bakalım burada işsizlik oranı çok düşük, bunun
              nedeni ise ülke zengin ve nüfusun az olduğundan diye bileriz.
              Hindistan’a bakarsak göçmen oranı çok az bunun nedeni ise ülkenin
              yaşam ve ekonomi şartları yüzünden olabilir. Türkmenistan veya
              Türkiye’yi kıyasladığımızda Türkiye’nin işsizlik oranı yüksek
              görünmekte, ama Türkmenistan vatandaşları Türkiye’ye çalışmak için
              geliyorlar.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
