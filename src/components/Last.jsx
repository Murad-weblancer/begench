import React from "react";
import one from "../assets/1.jpg";
import two from "../assets/2.jpg";
import pp from "../assets/3.jpg";
import three from "../assets/4.jpg";
import { motion } from "framer-motion";

const Last = () => {
  const textAnimation = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: custom => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 }, 
    }),
  }
  const featureAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  return (
    <div className="bg-secondary w-full h-full">
      <div className="   ml-10">
        <p>p</p>
        <motion.h1
          initial={{
            opacity: 0,
          }}
          transition={{
            duration: 0.3,
          }}
          animate={{
            opacity: 1,
          }}
          className="mt-32 text-center text-4xl font-bold"
        >
          Final Ödevi
        </motion.h1>

        <motion.h2
          initial={{
            opacity: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          animate={{
            opacity: 1,
          }}
          className=" text-3xl font-bold"
        >
          {" "}
          AD: Begench Shamiyev
        </motion.h2>
        <motion.h2
          initial={{
            opacity: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 1.2,
          }}
          animate={{
            opacity: 1,
          }}
          className=" text-3xl font-bold mt-5"
        >
          {" "}
          SOYAD: Begench Shamiyev
        </motion.h2>
        <motion.h2
          initial={{
            opacity: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 1.3,
          }}
          animate={{
            opacity: 1,
          }}
          className=" text-3xl font-bold mt-5"
        >
          {" "}
          Öğrenci no: 2110809638
        </motion.h2>
        <div className="w-full flex justify-center mt-10 ">
          <motion.img
            initial={{ opacity: 0, y: -100 }}
            transition={{
              delay: 1.5,
              duration: 0.3,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            src={one}
            alt=""
          />
        </div>

        <h3 className="mt-16 mb-7 font-semibold ">
          Şekil 1. Ülkelerin milli geliri ve işsizlik oranları.
        </h3>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
        >
          <motion.div className="w-full flex justify-between items-center">
            < motion.div custom={1} variants={featureAnimation}>
              <img src={two} className="w-[700px] object-cover" alt="" />
            </ motion.div>
            <motion.div
            custom={1} variants={featureAnimation}
            className="w-[50%]">
              <p>
                Bu grafiğe baktığımızda ülke milli geliri USA olmak üzere ikinci
                olarak Katar gelmekte. en düşük ülkeler olsa Pakistan ve İndia.
                Ve burada birazcık ülkeleri bu grafiğe göre kıyaslamak
                istiyorum. burada Katara baktığımızda ülke milli geliri oldukça
                yüksek ve işsizlik oranı neredeyse sıfır bunun açıklaması hem
                herkesin bildiği üzere petrol a zengin bi ülke. diğer tarafta
                Azerbaycan hem petrol a zengin bir ülke buna rağmen
                Azerbaycan'ın milli geliri oldukça düşük veya işsizlik oranı
                yüksek... gelelim Amerika ve Russia iki tane güçlü ülkeler ve
                yer altı zenginliklere sahip ülkeler. grafikte baktığımız zaman
                Amerika en yüksek milli gelire sahip bir ülke. Indıa veya
                Pakıstan ülke milli geliri düşük ve işsizlik oranı yüksekti, ve
                bu ülkelerde nüfusu çok ve ekonomik iyi değil.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
        <h3 className="mt-16 mb-7 font-semibold ">Şekil 2. Hukuk indexi. </h3>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
        >
        <div className="w-full flex justify-between items-center">
          <motion.div 
          custom={1} variants={textAnimation}
          className="w-[50%]">
            <p>
              Gelelim hukuk endeksine burada Almanya, Spaın, Usa yer almakta
              veya en son Pakıstan. ama burada Türkmenistan, Azerbaycan, Qatar
              görünmemekte. Hukuk Üstünlüğü ve demokrasi veya serbest piyasa
              tablosuna bakarsak orada en üst sıralarda Avrupa bileşik
              devletleri ve bazı Amerika devletleri yer almakta ve onların
              yıllık ülke milli geliri hem yüksek görünmekte...
            </p>
          </motion.div>
          <motion.div custom={1} variants={featureAnimation}>
            <img src={pp} className="w-[700px] object-cover" alt="" />
          </motion.div>
        </div>
        </motion.div>

        <h3 className="mt-16 mb-7 font-semibold ">
          Şekil 3. Demokrasi ve serbest piyasa.{" "}
        </h3>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
        >
        <div className="w-full flex justify-between items-center">
          <motion.div custom={1} variants={featureAnimation}>
            <img src={three} className="w-[700px] object-cover" alt="" />
          </motion.div>
          <motion.div 
          custom={1} variants={textAnimation}
          className="w-[50%]">
            <p>
              Demokrasi ve serbest piyasa. Bu grafiğa baktığımızda demokrasi
              yüksek olan ülkeler Almanya, Spaın,Usa olmak üzere en son iki ülke
              Azerbaycan veya Türkmenistan yer almakta. Ve demokrasi iyi olan
              ülkeler ekenomisi hem iyi gözükmekte. Serbest piyasa baktığımızda
              da aynı Ülkeler yer almakta. Bence bu demek oluyor ki demokrasi
              iyi olan ülke serbest piyasasi hem iyidir.
            </p>
          </motion.div>
        </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Last;
