import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import FloralBloom from "./FloralBloom";

function Hero({ onStartMusic }) {
  const [photoAvailable, setPhotoAvailable] = useState(true);

  return (
    <section
      id="inicio"
      className="relative isolate min-h-screen overflow-hidden bg-[#fff7e5]"
    >
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_12%_20%,rgba(255,207,77,0.48),transparent_23rem),radial-gradient(circle_at_91%_84%,rgba(247,161,95,0.28),transparent_27rem)]" />
      <div className="absolute inset-0 -z-10 opacity-50 [background-image:linear-gradient(rgba(120,113,108,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(120,113,108,0.035)_1px,transparent_1px)] [background-size:28px_28px]" />

      <motion.div
        aria-hidden="true"
        animate={{ rotate: [0, 4, 0], y: [0, -8, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[6%] top-[13%] hidden text-amber-400/60 lg:block"
      >
        <FloralBloom className="rotate-[-14deg]" size="sm" variant="soft" withStem />
      </motion.div>

      <motion.div
        aria-hidden="true"
        animate={{ rotate: [0, -5, 0], y: [0, 7, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute bottom-[14%] right-[7%] hidden text-yellow-500/60 lg:block"
      >
        <FloralBloom className="rotate-12" size="md" variant="golden" withStem />
      </motion.div>

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 py-16 lg:px-10">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1fr_0.92fr] lg:gap-20">

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 text-center lg:order-1 lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mb-6 inline-flex items-center gap-3 text-xs font-bold tracking-[0.28em] text-amber-700"
            >
              <span className="h-px w-8 bg-amber-500/70" />
              21 · SEPTIEMBRE · 2026
            </motion.p>

            <h1 className="font-display text-5xl leading-[0.98] tracking-[-0.035em] text-stone-800 sm:text-6xl lg:text-7xl">
              Para ti,
              <span className="mt-2 block italic text-amber-600">
                Mi princesita.
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-xl text-[15px] leading-8 text-stone-600 sm:text-base lg:mx-0">
                Desde ese 10 de mayo de 2024 hemos ido construyendo una historia
                llena de momentos que quiero seguir guardando contigo. Hoy quise
                regalarte algo más que flores amarillas: un pequeño lugar hecho
                especialmente para nosotros.
            </p>

            <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row lg:justify-start">
              <a
                href="#tiempo"
                onClick={onStartMusic}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-stone-800 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-stone-900/10 transition hover:-translate-y-0.5 hover:bg-stone-700 sm:w-auto"
              >
                Ver nuestro tiempo juntos
                <FloralBloom className="scale-[0.5] transition group-hover:scale-[0.6]" size="sm" variant="white" />
              </a>

              <p className="text-xs font-semibold tracking-wide text-stone-400">
                Desde el 10.05.2024
              </p>
            </div>
          </motion.div>

          {/* Fotografía */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="order-1 mx-auto w-full max-w-sm lg:order-2 lg:max-w-lg"
          >
            <div className="relative pb-7">
              <div className="absolute -inset-5 rotate-3 rounded-[2.15rem] border border-amber-200/70 bg-yellow-100/45" />
              <div className="absolute -inset-2 -rotate-2 rounded-[2rem] bg-amber-200/35" />

              <div className="relative rounded-[1.85rem] border-[10px] border-[#fffdf8] bg-amber-100 p-0 shadow-[0_28px_70px_-25px_rgba(120,53,15,0.34)]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[1.3rem]">
                {photoAvailable ? (
                  <img
                    src="./photos/portada.jpg"
                    alt="Uno de nuestros recuerdos juntos"
                    onError={() => setPhotoAvailable(false)}
                    className="h-full w-full object-cover object-[center_30%]"
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center p-10 text-center">
                    <FloralBloom className="mb-7" size="sm" variant="soft" />

                    <p className="text-lg font-medium text-stone-700">
                      Nuestra foto irá aquí
                    </p>

                    <p className="mt-2 text-sm leading-6 text-stone-500">
                      Más adelante colocaremos una de nuestras fotografías
                      favoritas.
                    </p>
                  </div>
                )}

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950/50 to-transparent p-6 pt-24">
                  <p className="font-display text-lg italic text-white/95">
                    Verte feliz siempre será lo más importante para mí.
                  </p>
                </div>
                </div>
              </div>

              <div className="absolute -bottom-1 left-1/2 z-10 w-max -translate-x-1/2 rounded-full border border-amber-200 bg-[#fffdf8] px-5 py-2 text-center shadow-sm">
                <p className="text-[10px] font-bold tracking-[0.18em] text-amber-700">ERES MI LUGAR FELIZ</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Indicador inferior */}
      <motion.a
        href="#tiempo"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 7, 0] }}
        transition={{
          opacity: { delay: 1.2, duration: 1 },
          y: { duration: 1.8, repeat: Infinity },
        }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-stone-400"
        aria-label="Continuar"
      >
        <ChevronDown className="h-6 w-6" />
      </motion.a>
    </section>
  );
}

export default Hero;
