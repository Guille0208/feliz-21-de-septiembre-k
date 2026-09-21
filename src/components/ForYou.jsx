import { motion } from "motion/react";
import FloralBloom from "./FloralBloom";

const lessons = [
  {
    number: "01",
    image: "./photos/aprendizajes/01.jpeg",
    imagePosition: "center 58%",
    title: "Que los pequeños detalles importan",
    description:
      "Personalmente nunca fui de hacer detalles ni darle la importancia que merecen pero tú con todas las cosas que me diste y me enseñaste, aprendí a valorar más esos pequeños detalles con grandes sentimientos.",
  },
  {
    number: "02",
    image: "./photos/aprendizajes/02.jpeg",
    imagePosition: "center 34%",
    title: "Que querer también es aprender",
    description:
      "Estar contigo me ha enseñado a conocer otra forma de pensar, de sentir y de ver algunas cosas. Y todavía sigo aprendiendo mucho de ti: en cómo tratarte, en cómo amarte y en cómo ser el hombre que mereces.",
  },
  {
    number: "03",
    image: "./photos/aprendizajes/03.jpeg",
    imagePosition: "63% center",
    title: "Que los días simples también se recuerdan",
    description:
      "Algunos de mis recuerdos favoritos contigo no son de días importantes, sino de esos días normales que terminaron siendo especiales porque eran a tu lado, la mujer que amo y siempre amaré.",
  },
  {
    number: "04",
    image: "./photos/aprendizajes/04.jpeg",
    imagePosition: "center 24%",
    title: "Que todavía tenemos mucho por vivir",
    description:
      "Todo lo que hemos vivido hasta ahora es solo una parte de nuestra historia. Todavía quedan lugares, días, momentos y recuerdos que quiero seguir descubriendo contigo mi bubucita.",
  },
];

function ForYou() {
  return (
    <section
      id="para-ti"
      className="relative overflow-hidden px-6 py-28"
    >
      {/* Decoración */}
      <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-yellow-100/50 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-amber-100/50 blur-3xl" />
      <div className="pointer-events-none absolute left-[5%] top-[17%] hidden opacity-80 lg:block">
        <FloralBloom className="rotate-[-14deg]" size="lg" variant="white" withStem />
      </div>
      <div className="pointer-events-none absolute bottom-[11%] right-[5%] hidden opacity-80 lg:block">
        <FloralBloom className="rotate-12" size="lg" variant="coral" withStem />
      </div>

      <div className="relative mx-auto max-w-6xl">

        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mx-auto mb-6 flex h-12 w-16 items-center justify-center rounded-full border border-amber-200 bg-[#fff9e9] text-amber-500 shadow-sm">
            <FloralBloom size="sm" variant="coral" />
          </div>

          <p className="text-sm font-medium tracking-[0.3em] text-amber-600">
            ALGO QUE QUIERO QUE SEPAS
          </p>

          <h2 className="mt-5 text-4xl font-semibold text-stone-800 sm:text-5xl">
            De las muchas cosas que aprendí contigo mi niña bonita
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-stone-500">
            Quizá no fue en un salón y tú como mi profesorita, pero durante todo este tiempo
            también me has enseñado cosas que quiero llevar siempre conmigo.
          </p>
        </motion.div>

        {/* Tarjetas */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {lessons.map((lesson, index) => (
            <LessonCard
              key={lesson.number}
              lesson={lesson}
              index={index}
            />
          ))}
        </div>

        {/* Mensaje especial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mx-auto mt-20 max-w-3xl"
        >
          <div className="relative rounded-[2rem] border border-amber-100 bg-amber-50/70 px-7 py-10 text-center sm:px-12">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-white px-5 py-2 text-xs font-semibold tracking-[0.2em] text-amber-500 shadow-sm">
              PARA MI PRINCESITA
            </span>

            <p className="mt-3 text-lg leading-8 text-stone-600">
              Tú elegiste una carrera dedicada a enseñar,
              pero sin pensarlo también me has enseñado muchas cosas a mí.
              Quiero que nunca olvides lo orgulloso que estoy de ti. Una de mis cosas favoritas ha sido, y sigue siendo, ver
              cómo pasa el tiempo y continúas mejorando; también, descubrir lo bonito que puede ser compartir la vida con alguien especial, como lo que nosotros estamos viviendo ahora.
            </p>

            <FloralBloom className="mx-auto mt-6" size="sm" variant="golden" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

function LessonCard({ lesson, index }) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -6,
      }}
      className="group grid overflow-hidden rounded-[2rem] border border-amber-200/80 bg-white/90 shadow-[0_14px_32px_-24px_rgba(112,57,9,0.45)] transition-shadow duration-300 hover:shadow-xl hover:shadow-amber-900/10 sm:grid-cols-[12rem_1fr]"
    >
      <div className="relative min-h-56 overflow-hidden bg-amber-100 sm:min-h-full">
        <img
          src={lesson.image}
          alt={`Recuerdo ${lesson.number}`}
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
          style={{ objectPosition: lesson.imagePosition }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-900/5 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5 text-left text-white">
          <span className="block text-[9px] font-bold tracking-[0.22em] text-amber-100">RECUERDO</span>
          <span className="font-display text-4xl italic text-white">{lesson.number}</span>
        </div>
      </div>

      <div className="relative p-7 sm:p-8">
        <span className="absolute right-6 top-5 text-4xl font-display italic text-amber-200/80">
          {lesson.number}
        </span>

        <h3 className="pr-8 text-2xl leading-tight text-stone-800 sm:text-[1.7rem]">
          {lesson.title}
        </h3>

        <p className="mt-4 leading-7 text-stone-500">
          {lesson.description}
        </p>
      </div>
    </motion.div>
  );
}

export default ForYou;
