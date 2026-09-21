import { useState } from "react";
import { motion } from "motion/react";
import FloralBloom from "./FloralBloom";

const chapters = [
  {
    number: "01",
    date: "03 de enero de 2024",
    title: "Nuestra primera foto juntos",
    description:
      "Todavía no éramos pareja, pero ya estábamos comenzando a guardar momentos juntos. Esta fue nuestra primera foto y, aunque en ese momento no sabíamos todo lo que vendría después, hoy tiene un significado muy especial para mí.",
    image: "./photos/historia/primera-foto.jpg",
  },
  {
    number: "02",
    date: "10 de junio de 2024",
    title: "Nuestro primer mes juntos",
    description:
      "Cumplíamos nuestro primer mes como pareja. En ese momento parecía muy poco tiempo, pero hoy, al recordar este día, me doy cuenta de que fue el inicio de algo muy bonito. Un recuerdo que siempre guardaré con mucho cariño.",
    image: "./photos/historia/primer-mes.jpg",
  },
  {
    number: "03",
    date: "02 de abril de 2025",
    title: "Celebrando tu cumpleaños",
    description:
      "Fue de los días que más me esmeré para que todo fuera bonito para ti. Poder acompañarte, compartir contigo y formar parte de uno de tus días importantes es de lo que me hace feliz.",
    image: "./photos/historia/cumpleanos.jpg",
  },
  {
    number: "04",
    date: "10 de mayo de 2025",
    title: "Nuestro primer año juntos",
    description:
      "Sin darnos cuenta, ya habíamos cumplido un año juntos. Doce meses de momentos buenos, aprendizajes, risas, diferencias y muchísimos obstáculos, pero siempre juntos y apoyándonos. Teniendo en mente que queríamos esto para siempre.",
    image: "./photos/historia/primer-anio.jpg",
  },
  {
    number: "05",
    date: "31 de octubre de 2025",
    title: "Halloween juntos",
    description:
      "Una fecha diferente y muy divertida por lo que hicimos; por eso la quise guardar aquí. Sé que más adelante haremos más cosas parecidas a esta. Solo es cuestión de tiempo y de vivir nuestro amor como se puede.",
    image: "./photos/historia/halloween.jpg",
  },
];

function OurStory() {
  return (
    <section
      id="historia"
      className="relative overflow-hidden bg-amber-50/60 px-6 py-28"
    >
      <div className="absolute -left-32 top-32 h-80 w-80 rounded-full bg-yellow-200/20 blur-3xl" />
      <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-amber-200/20 blur-3xl" />
      <div className="pointer-events-none absolute left-[3%] top-[16%] hidden opacity-75 xl:block">
        <FloralBloom className="rotate-[-18deg]" size="lg" variant="golden" withStem />
      </div>
      <div className="pointer-events-none absolute bottom-[8%] right-[4%] hidden opacity-80 xl:block">
        <FloralBloom className="rotate-12" size="lg" variant="coral" withStem />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="pointer-events-none absolute inset-x-0 top-72 bottom-16 rounded-[3rem] border border-amber-300/70 bg-white/35 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.5)]" />
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mx-auto mb-6 flex h-12 w-16 items-center justify-center rounded-full bg-white text-amber-500 shadow-sm">
            <FloralBloom size="sm" variant="coral" />
          </div>

          <p className="text-sm font-medium tracking-[0.3em] text-amber-600">
            EL COMIENZO DE ALGO QUE NO TIENE FIN...
          </p>

          <h2 className="mt-5 text-4xl font-semibold text-stone-800 sm:text-5xl">
            Nuestra historia
          </h2>

          <p className="mt-5 leading-8 text-stone-500">
            Si pudiera guardar todos nuestros recuerdos dentro de un libro,
            estos serían algunos de los capítulos que nunca quisiera olvidar.
          </p>
        </motion.div>

        {/* Línea de tiempo */}
        <div className="relative mt-20 px-3 py-10 sm:px-8 lg:px-12">
          <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-amber-200 via-amber-500 to-amber-300 shadow-[0_0_14px_rgba(217,119,6,0.45)] lg:block" />

          <div className="space-y-16 lg:space-y-24">
            {chapters.map((chapter, index) => (
              <StoryCard
                key={chapter.number}
                chapter={chapter}
                reverse={index % 2 !== 0}
              />
            ))}
          </div>
        </div>

        {/* Final */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="mt-24 text-center"
        >
          <FloralBloom className="mx-auto mb-4" size="sm" variant="coral" />

          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/65 px-5 py-2 text-sm font-medium italic leading-7 text-amber-800 shadow-sm">
            Cinco capítulos de muchos que todavía nos quedan por escribir.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function StoryCard({ chapter, reverse }) {
  const [imageAvailable, setImageAvailable] = useState(true);

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: reverse ? 40 : -40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.7 }}
      className={`relative z-10 flex ${
        reverse ? "lg:justify-end" : "lg:justify-start"
      }`}
    >
      {/* Punto central */}
      <div className="absolute left-1/2 top-14 z-20 hidden h-5 w-5 -translate-x-1/2 rounded-full border-4 border-[#fff2c8] bg-amber-500 shadow-[0_0_0_4px_rgba(245,158,11,0.18)] lg:block" />
      <div className={`absolute top-[4.6rem] z-0 hidden h-1 w-[4%] bg-gradient-to-r from-amber-500 to-amber-300 lg:block ${reverse ? "left-1/2" : "right-1/2 bg-gradient-to-l"}`} />

      <div
        className={`absolute top-1/2 hidden w-[37%] -translate-y-1/2 lg:block ${
          reverse ? "left-[5%]" : "right-[5%]"
        }`}
      >
        <div className={`relative min-h-72 overflow-hidden rounded-[2rem] border border-amber-300/80 bg-gradient-to-br from-[#fff4d2] via-[#ffe7a5] to-[#ffd67a] p-9 shadow-[0_22px_42px_-26px_rgba(112,57,9,0.38)] ${reverse ? "text-left" : "text-right"}`}>
          <div className="absolute inset-0 opacity-35 [background-image:radial-gradient(rgba(173,87,7,0.35)_1px,transparent_1px)] [background-size:13px_13px]" />
          <div className={`absolute top-5 flex items-center gap-3 ${reverse ? "left-6" : "right-6 flex-row-reverse"}`}>
            <span className="h-px w-9 bg-amber-400/70" />
            <span className="text-[9px] font-bold tracking-[0.22em] text-amber-700">UN RECUERDO</span>
          </div>

          <p className="relative mt-8 font-display text-[8rem] leading-none italic text-amber-600/55">
            {chapter.number}
          </p>

          <div className={`absolute bottom-7 flex items-center gap-4 ${reverse ? "left-7" : "right-7 flex-row-reverse"}`}>
            <FloralBloom className="shrink-0" size="md" variant={reverse ? "golden" : "coral"} />
            <div>
              <p className="text-[10px] font-bold tracking-[0.2em] text-amber-600">CAPÍTULO {chapter.number}</p>
              <p className="mt-2 font-display text-base italic text-stone-600">{chapter.date}</p>
            </div>
          </div>

          <div className={`absolute bottom-0 h-24 w-24 rounded-full border border-amber-200/70 ${reverse ? "-right-10" : "-left-10"}`} />
          <div className={`absolute top-14 h-2 w-2 rounded-full bg-amber-400 ${reverse ? "right-10" : "left-10"}`} />
        </div>
      </div>

      <div className="w-full lg:w-[45%]">
        <div className="overflow-hidden rounded-[2rem] border border-amber-200/80 bg-white/95 shadow-[0_18px_35px_-25px_rgba(112,57,9,0.45)] transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-900/10">

          {/* FOTO */}
          <div className="aspect-[4/3] overflow-hidden bg-amber-100">
            {imageAvailable ? (
              <img
                src={chapter.image}
                alt={chapter.title}
                onError={() => setImageAvailable(false)}
                className="h-full w-full object-cover object-[center_25%]"
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center px-8 text-center">
                <FloralBloom className="mb-3" size="sm" variant="golden" />
                <p className="font-medium text-stone-600">
                  Tu fotografía irá aquí
                </p>

                <p className="mt-2 text-sm text-stone-400">
                  Agrega la foto correspondiente a este recuerdo.
                </p>
              </div>
            )}
          </div>

          {/* TEXTO */}
          <div className="p-7 sm:p-9">
            <div className="flex items-start justify-between gap-5">
              <div>
                <span className="text-xs font-semibold tracking-[0.25em] text-amber-500">
                  CAPÍTULO {chapter.number}
                </span>
                <div className="mt-3 flex items-center gap-3">
                  <span className="h-px w-8 bg-amber-400/70" />
                  <p className="text-xs font-medium tracking-[0.08em] text-stone-400">
                  {chapter.date}
                  </p>
                </div>
              </div>
              <span className="font-display text-5xl leading-none italic text-amber-200/80">{chapter.number}</span>
            </div>

            <h3 className="mt-8 max-w-md text-3xl leading-[1.08] text-stone-800 sm:text-[2rem]">
              {chapter.title}
            </h3>
            <div className="mt-5 h-px w-14 bg-gradient-to-r from-amber-400 to-transparent" />
            <p className="mt-5 leading-7 text-stone-500">
              {chapter.description}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default OurStory;
