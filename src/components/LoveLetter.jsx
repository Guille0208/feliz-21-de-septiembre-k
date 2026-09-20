import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import FloralBloom from "./FloralBloom";


const petals = [
  { x: -240, y: -130, rotate: -45, delay: 0.25, size: "h-3 w-3" },
  { x: -210, y: -210, rotate: 25, delay: 0.35, size: "h-4 w-4" },
  { x: -175, y: -270, rotate: -20, delay: 0.45, size: "h-3.5 w-3.5" },
  { x: -130, y: -190, rotate: 40, delay: 0.5, size: "h-5 w-5" },
  { x: -90, y: -300, rotate: -35, delay: 0.55, size: "h-3 w-3" },
  { x: -45, y: -225, rotate: 20, delay: 0.6, size: "h-4 w-4" },

  { x: 35, y: -280, rotate: -15, delay: 0.38, size: "h-3.5 w-3.5" },
  { x: 80, y: -215, rotate: 35, delay: 0.48, size: "h-4 w-4" },
  { x: 125, y: -295, rotate: -25, delay: 0.58, size: "h-3 w-3" },
  { x: 165, y: -190, rotate: 45, delay: 0.42, size: "h-5 w-5" },
  { x: 210, y: -250, rotate: -35, delay: 0.52, size: "h-3.5 w-3.5" },
  { x: 250, y: -135, rotate: 25, delay: 0.62, size: "h-4 w-4" },

  { x: -280, y: -70, rotate: 55, delay: 0.7, size: "h-3 w-3" },
  { x: 285, y: -75, rotate: -50, delay: 0.72, size: "h-3 w-3" },
];

function LoveLetter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      id="carta"
      className="relative overflow-hidden bg-white px-6 pb-24 pt-16 sm:pt-20"
    >
      {/* Fondo decorativo */}
      <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-yellow-100/50 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-amber-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mx-auto mb-6 flex h-12 w-16 items-center justify-center rounded-full bg-amber-50 text-amber-500">
            <FloralBloom size="sm" variant="coral" />
          </div>

          <p className="text-sm font-medium tracking-[0.3em] text-amber-600">
            UNAS PALABRAS PARA MI AMOR ETERNO
          </p>

          <h2 className="mt-5 text-4xl font-semibold text-stone-800 sm:text-5xl">
            Una carta para mi puerquita
          </h2>

          <p className="mx-auto mt-6 max-w-xl leading-8 text-stone-500">
            Esta vez no quería dejarte solamente unas palabras, quería que
            también pudieras abrirlas de una forma especial, una carta desde mi corazón.
          </p>
        </motion.div>

        {/* Zona carta */}
        <div className="relative mx-auto mt-20 flex min-h-[560px] max-w-3xl items-center justify-center">
          <AnimatePresence mode="wait">
            {/* SOBRE CERRADO */}
            {!isOpen && (
              <motion.div
                key="closed-envelope"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative w-full max-w-xl"
              >
                <motion.button
                  onClick={() => setIsOpen(true)}
                  whileHover={{ y: -6 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative block w-full"
                  style={{ perspective: "1200px" }}
                >
                  {/* Sombra */}
                  <div className="absolute -bottom-8 left-1/2 h-14 w-[85%] -translate-x-1/2 rounded-full bg-stone-900/10 blur-2xl" />

                  {/* Sobre */}
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] border border-amber-300 bg-gradient-to-br from-[#f9df9b] via-[#f2c95e] to-[#d89e32] shadow-2xl shadow-amber-900/20">
                    <div className="absolute inset-3 rounded-[1.5rem] border border-amber-100/80 bg-[#fff8df]" />
                    <div className="absolute inset-5 rounded-[1.25rem] border border-dashed border-amber-300/65" />

                    {/* Hoja dentro */}
                    <motion.div
                      animate={{ y: [0, -8, 0] }}
                      transition={{
                        duration: 2.4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      className="absolute bottom-12 left-1/2 h-[72%] w-[82%] -translate-x-1/2 rounded-t-2xl border-x border-t border-amber-100 bg-[#fffdf8] shadow-md"
                    >
                      <div className="relative h-full overflow-hidden px-8 pt-8 text-left">
                        <div className="absolute right-5 top-4 text-5xl font-semibold text-amber-100">
                          K
                        </div>

                        <div className="flex items-center justify-between gap-3">
                          <p className="text-xs tracking-[0.2em] text-amber-500">PARA KARINA</p>
                          <FloralBloom className="scale-[0.38]" size="sm" variant="coral" />
                        </div>

                        <div className="mt-5 h-2 w-3/4 rounded-full bg-stone-100" />
                        <div className="mt-3 h-2 w-full rounded-full bg-stone-100" />
                        <div className="mt-3 h-2 w-5/6 rounded-full bg-stone-100" />
                      </div>
                    </motion.div>

                    {/* Laterales */}
                    <div
                      className="absolute inset-y-0 left-0 w-[55%] bg-[#f1ca6c]"
                      style={{ clipPath: "polygon(0 0, 100% 50%, 0 100%)" }}
                    />
                    <div
                      className="absolute inset-y-0 right-0 w-[55%] bg-[#f1ca6c]"
                      style={{ clipPath: "polygon(100% 0, 0 50%, 100% 100%)" }}
                    />
                    <div
                      className="absolute bottom-0 left-0 h-[63%] w-full bg-[#eabb52]"
                      style={{ clipPath: "polygon(0 100%, 50% 20%, 100% 100%)" }}
                    />

                    {/* Solapa */}
                    <motion.div
                      className="absolute left-0 top-0 h-[58%] w-full origin-top bg-gradient-to-b from-[#ffe9a8] to-[#f6cf67]"
                      style={{
                        clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                      }}
                    />

                    {/* Sello */}
                    <motion.div
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute left-1/2 top-[47%] z-20 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-[#fff0bf] bg-[#cf7c2c] shadow-lg"
                    >
                      <span className="absolute inset-1 rounded-full border border-amber-100/70" />
                      <span className="relative font-script text-3xl text-white">K</span>
                    </motion.div>
                  </div>

                  <div className="mt-10 text-center">
                    <p className="text-lg font-medium text-stone-700">
                      Tengo algo que decirte...
                    </p>

                    <p className="mt-2 text-sm text-stone-400">
                      Tócame mi amor.
                    </p>
                  </div>
                </motion.button>
              </motion.div>
            )}

            {/* SOBRE ABIERTO + CARTA */}
            {isOpen && (
              <motion.div
                key="open-letter"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="relative w-full"
              >
                {/* Pétalos */}
                <div className="pointer-events-none absolute left-1/2 top-28 z-30 -translate-x-1/2">
                  {petals.map((petal, index) => (
                    <motion.span
                      key={`petal-${index}`}
                      initial={{
                        opacity: 0,
                        x: 0,
                        y: 0,
                        rotate: 0,
                        scale: 0.7,
                      }}
                      animate={{
                        opacity: [0, 1, 1, 0.8, 0],
                        x: [0, petal.x * 0.5, petal.x, petal.x + 15],
                        y: [0, petal.y * 0.45, petal.y, petal.y + 20],
                        rotate: [0, petal.rotate, petal.rotate + 70, petal.rotate + 130],
                        scale: [0.5, 1, 1, 0.9],
                        }}
                      transition={{
                        duration: 2.2,
                        delay: petal.delay,
                        ease: [0.22, 1, 0.36, 1],
                        }}
                      className={`absolute ${petal.size} rounded-full bg-yellow-300 shadow-sm`}
                    />
                  ))}

                </div>

                {/* Sobre abierto */}
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: 120, opacity: 0.9 }}
                  transition={{
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute left-1/2 top-28 z-0 w-full max-w-xl -translate-x-1/2"
                  style={{ perspective: "1200px" }}
                >
                  <div className="relative aspect-[16/10] overflow-visible rounded-[2rem] bg-[#f2ca69] shadow-xl">
                    <div className="absolute inset-4 rounded-[1.5rem] bg-[#fff3cc]" />

                    <motion.div
                      initial={{ rotateX: 0 }}
                      animate={{ rotateX: -180 }}
                      transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="absolute left-0 top-0 z-10 h-[58%] w-full origin-top bg-[#f7dfa0]"
                      style={{
                        clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                        transformStyle: "preserve-3d",
                      }}
                    />

                    <div
                      className="absolute bottom-0 left-0 h-[65%] w-full bg-[#eabb52]"
                      style={{ clipPath: "polygon(0 100%, 50% 20%, 100% 100%)" }}
                    />
                  </div>
                </motion.div>

                {/* Carta */}
                <motion.article

                  initial={{ opacity: 0, y: 180, scale: 0.88 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    delay: 0.45,
                    duration: 1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative z-20 mx-auto w-full max-w-5xl overflow-visible"
                >
                  <div className="relative">
                    {/* Flores exteriores: decoran el marco sin invadir la carta. */}
                    <div className="pointer-events-none absolute -left-5 top-[16%] z-30 -translate-x-1/2">
                      <FloralBloom className="rotate-[-14deg]" size="sm" variant="golden" />
                    </div>
                    <div className="pointer-events-none absolute -right-5 top-[34%] z-30 translate-x-1/2">
                      <FloralBloom className="rotate-12" size="sm" variant="coral" />
                    </div>
                    <div className="pointer-events-none absolute -left-5 bottom-[18%] z-30 -translate-x-1/2">
                      <FloralBloom className="rotate-6" size="sm" variant="white" />
                    </div>
                    <div className="relative overflow-hidden rounded-[2rem] border border-amber-200 bg-[#fffdf7] px-7 py-12 shadow-2xl shadow-amber-900/10 sm:px-12 sm:py-16 md:pl-40">
                    {/* Franja superior */}
                    <div className="absolute left-0 top-0 h-1.5 w-full bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-300" />

                    <aside className="absolute bottom-0 left-0 top-0 hidden w-28 border-r border-amber-200/70 bg-gradient-to-b from-[#ffe9a8] via-[#fff6d8] to-[#f9d982] md:flex md:flex-col md:items-center md:justify-between md:py-10">
                      <span className="font-script text-5xl text-amber-700">K</span>
                      <span className="rotate-[-90deg] whitespace-nowrap text-[10px] font-bold tracking-[0.32em] text-amber-800">UNA CARTA PARA TI</span>
                      <span className="font-display text-3xl italic text-amber-700">21</span>
                    </aside>

                    {/* Marca de agua */}
                    <div className="pointer-events-none absolute right-6 top-6 text-[110px] font-semibold leading-none text-amber-50 sm:text-[150px]">
                      K
                    </div>

                    {/* Monograma */}
                    <div className="mb-8 flex items-center justify-between gap-4">
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.05 }}
                        className="text-sm tracking-[0.18em] text-amber-500"
                      >
                        21 DE SEPTIEMBRE DE 2026
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.1 }}
                        className="flex h-12 w-12 items-center justify-center rounded-full border border-amber-200 bg-amber-50 text-lg font-semibold text-amber-500 shadow-sm"
                      >
                        K
                      </motion.div>
                    </div>

                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 }}
                      className="text-3xl font-semibold text-stone-800 sm:text-4xl"
                    >
                      Para mi Kari, mi princesita
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.28 }}
                      className="mt-3 text-sm italic text-stone-400"
                    >
                      Hay detalles que nacen del corazón y se encuentran en lugares
                      incluso como estos, desde la virtualidad hacia ti.
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: 1.35,
                        duration: 0.8,
                      }}
                      className="mt-10 space-y-6 text-base leading-8 text-stone-600 sm:text-lg"
                    >
                      <p>
                        Quise hacerte algo diferente este año. No solamente
                        darte una sorpresa como las de antes, sino también regalarte algo
                        que lleva tiempo, dedicación y una parte de mí.
                      </p>

                      <p>
                        Llevamos ya un buen tiempo juntos, más de dos años, y cada día que pasa
                        me doy cuenta de lo afortunado que soy de tenerte a mi lado, tener una mujer
                        tan increíble como tú, no solo físicamente sino también por tu forma de ser.
                      </p>

                      <p>
                        A veces recuerdo todo lo que hemos vivido hasta ahora, y
                        me doy cuenta de lo mucho que significa para mí
                        tenerte en mi vida.
                      </p>

                      <p>
                        Cada foto que viste antes guarda un momento
                        distinto, pero todas tienen algo bonito en común:
                        tú formas parte de ellas, lo más bonito en mi vida.
                      </p>

                      <p>
                        Y eso hace que incluso los recuerdos más sencillos
                        tengan un valor especial para mí.
                      </p>

                      <p>
                        Espero que cuando leas estas palabras, sientas todo el amor que tengo por ti y lo que significas en mí.
                      </p>

                      <p>
                        Ojalá puedas ver el cariño con el que fui preparando
                        cada parte de todo esto pensando en ti.
                      </p>

                      <p>
                        Gracias por los momentos que ya vivimos y por todos
                        los que todavía nos quedan por vivir mi princesita.
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.6 }}
                      className="relative z-20 ml-auto mt-12 flex max-w-xs flex-col items-end border-t border-amber-100 pt-8 text-right"
                    >
                      <p className="text-sm text-stone-400">
                        Con mucho mucho amor,
                      </p>

                      <p className="mt-2 text-2xl font-semibold text-amber-500">
                        Para ti, mi bubucita.
                      </p>
                    </motion.div>

                    </div>
                  </div>

                  {/* Botón cerrar */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                    className="mt-8 flex justify-center"
                  >
                    <button
                      onClick={() => setIsOpen(false)}
                      className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-6 py-3 text-sm font-medium text-stone-600 transition hover:-translate-y-0.5 hover:bg-amber-50"
                    >
                      Cerrar carta
                    </button>
                  </motion.div>
                </motion.article>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

export default LoveLetter;
