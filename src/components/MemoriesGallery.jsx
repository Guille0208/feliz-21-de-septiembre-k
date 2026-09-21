import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import FloralBloom from "./FloralBloom";

const photos = [
  {
    src: "./photos/galeria/foto-01.jpg",
    text: "De nuestra primera etapa juntos, saliendo de la academia.",
    position: "center",
  },
  {
    src: "./photos/galeria/foto-02.jpg",
    text: "Tener tiempo para hacer cosas juntos y crear recuerdos eternos.",
    position: "center",
  },
  {
    src: "./photos/galeria/foto-03.jpg",
    text: "Una salida para recordar, aunque no fue largo, es la primera de las que tendremos.",
    position: "center 35%",
  },
  {
    src: "./photos/galeria/foto-04.jpg",
    text: "Me gusta cocinar y me gusta mucho más cuando estás tú conmigo.",
    position: "center",
  },
  {
    src: "./photos/galeria/foto-05.jpg",
    text: "El dulce de las cosas nunca será igual a lo dulce que es estar contigo.",
    position: "center 30%",
  },
  {
    src: "./photos/galeria/foto-06.jpg",
    text: "Ver esos ojitos de miel son de las cosas que más amo.",
    position: "center",
  },
  {
    src: "./photos/galeria/foto-07.jpg",
    text: "Desde que estamos juntos siempre hubo y siempre habrá detalles para ti mi chanchita preciosa.",
    position: "center",
  },
  {
    src: "./photos/galeria/foto-08.jpg",
    text: "Y lo mejor de todo estos recuerdos es pensar que iremos juntos por muchos más.",
    position: "center",
  },
];

function MemoriesGallery() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const previousPhoto = () => {
    setSelectedIndex((current) =>
      current === 0 ? photos.length - 1 : current - 1
    );
  };

  const nextPhoto = () => {
    setSelectedIndex((current) =>
      current === photos.length - 1 ? 0 : current + 1
    );
  };

  return (
    <>
      <section
        id="recuerdos"
        className="relative overflow-hidden bg-amber-50/50 px-6 py-28"
      >
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-yellow-200/20 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-amber-200/20 blur-3xl" />
        <div className="pointer-events-none absolute left-[3%] top-[18%] hidden opacity-85 lg:block">
          <FloralBloom className="rotate-[-18deg]" size="lg" variant="white" withStem />
        </div>
        <div className="pointer-events-none absolute right-[4%] top-[40%] hidden opacity-85 lg:block">
          <FloralBloom className="rotate-12" size="lg" variant="golden" withStem />
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-[30%] hidden h-40 opacity-45 lg:block">
          <svg viewBox="0 0 1200 180" fill="none" className="h-full w-full text-amber-300/60" aria-hidden="true">
            <path d="M-20 124c159-92 270 59 452-15 167-68 250-132 421-57 117 52 190 28 367-84" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 12" strokeLinecap="round" />
            <path d="M45 150c120-37 210-5 302-39" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
        <div className="pointer-events-none absolute left-[12%] top-[57%] hidden h-24 w-24 rounded-full border border-amber-200/60 bg-white/25 shadow-[inset_0_0_0_10px_rgba(255,255,255,0.17)] lg:block" />
        <div className="pointer-events-none absolute bottom-[13%] right-[15%] hidden h-14 w-14 rounded-full border border-dashed border-amber-300/70 lg:block" />
        <div className="pointer-events-none absolute bottom-[8%] left-[7%] hidden opacity-80 lg:block">
          <FloralBloom className="rotate-[-10deg]" size="lg" variant="coral" withStem />
        </div>

        <div className="relative mx-auto max-w-6xl">

          {/* Título */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="mx-auto mb-6 flex h-12 w-16 items-center justify-center rounded-full bg-white text-amber-500 shadow-sm">
              <FloralBloom size="sm" variant="golden" />
            </div>

            <p className="text-sm font-medium tracking-[0.3em] text-amber-600">
              MÁS RECUERDOS PARA GUARDAR
            </p>

            <h2 className="mt-5 text-4xl font-semibold text-stone-800 sm:text-5xl">
              Momentos que siempre quedarán en nuestra memoria
            </h2>

            <p className="mx-auto mt-6 max-w-xl leading-8 text-stone-500">
              Algunas fotos dicen mucho más de lo que las palabras pueden expresar.
              Estas son solo algunas de esas que me hacen feliz cuando las veo y recuerdo mi vidita.
            </p>
          </motion.div>

          {/* Galería */}
          <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
            {photos.map((photo, index) => (
              <PhotoCard
                key={photo.src}
                photo={photo}
                index={index}
                onClick={() => setSelectedIndex(index)}
              />
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            className="mx-auto mt-12 flex w-fit items-center gap-2 rounded-full border border-amber-200 bg-white/65 px-5 py-2 text-center text-sm font-medium italic text-amber-800 shadow-sm"
          >
            Esta colección todavía está lejos de terminar.
          </motion.p>
        </div>
      </section>

      {/* Visor de fotografía */}
      <AnimatePresence mode="wait">
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#2b1609]/90 p-4 backdrop-blur-md"
            onClick={() => setSelectedIndex(null)}
          >
            {/* Cerrar */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Anterior */}
            <button
              onClick={(event) => {
                event.stopPropagation();
                previousPhoto();
              }}
              className="absolute left-3 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 sm:left-7"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Siguiente */}
            <button
              onClick={(event) => {
                event.stopPropagation();
                nextPhoto();
              }}
              className="absolute right-3 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/20 sm:right-7"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Imagen grande */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9, y: 28, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 18, rotate: 2 }}
              transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
              className="flex max-h-[90vh] max-w-5xl flex-col items-center"
            >
              <div className="rounded-[1.8rem] border-8 border-[#fff7e4] bg-[#fff7e4] shadow-2xl shadow-black/30">
                <img
                  src={photos[selectedIndex].src}
                  alt="Uno de nuestros recuerdos"
                  className="max-h-[68vh] max-w-full rounded-[1.25rem] object-contain"
                />
              </div>

              <div className="mt-5 max-w-xl rounded-2xl border border-white/15 bg-white/10 px-7 py-5 text-center backdrop-blur-sm">
                <p className="font-display text-2xl italic text-[#ffe4a0]">Un recuerdo para siempre</p>
                <p className="mt-2 text-sm leading-6 text-white/80 sm:text-base">{photos[selectedIndex].text}</p>
                <p className="mt-3 text-[10px] font-bold tracking-[0.22em] text-amber-200/80">{String(selectedIndex + 1).padStart(2, "0")} · {String(photos.length).padStart(2, "0")}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function PhotoCard({ photo, index, onClick }) {
  const [available, setAvailable] = useState(true);

  return (
    <motion.button
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{
        duration: 0.5,
        delay: (index % 4) * 0.06,
      }}
      whileHover={{ y: -5 }}
      onClick={onClick}
      className="group relative aspect-[4/5] w-full overflow-hidden rounded-[1.5rem] border border-amber-200/70 bg-amber-100 shadow-[0_12px_24px_-18px_rgba(112,57,9,0.45)]"
    >
      {available ? (
        <img
          src={photo.src}
          alt="Recuerdo juntos"
          onError={() => setAvailable(false)}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          style={{
            objectPosition: photo.position || "center",
          }}
        />
      ) : (
        <div className="flex h-full items-center justify-center p-5 text-center text-sm text-stone-400">
          Agrega aquí una fotografía
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-40 transition duration-300 group-hover:opacity-70" />

      <span className="absolute bottom-4 left-4 translate-y-2 text-xs font-medium text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        Ver recuerdo
      </span>
    </motion.button>
  );
}

export default MemoriesGallery;
