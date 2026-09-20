import { useEffect, useState } from "react";
import { motion } from "motion/react";
import FloralBloom from "./FloralBloom";

function calculateTimeTogether() {
  // 10 de mayo de 2024 - 00:00:00
  const startDate = new Date(2024, 4, 10, 0, 0, 0);
  const now = new Date();

  let years = now.getFullYear() - startDate.getFullYear();
  let months = now.getMonth() - startDate.getMonth();
  let days = now.getDate() - startDate.getDate();

  if (days < 0) {
    months--;

    const previousMonth = new Date(
      now.getFullYear(),
      now.getMonth(),
      0
    );

    days += previousMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  return {
    years,
    months,
    days,
    hours,
    minutes,
    seconds,
  };
}

function TogetherCounter() {
  const [time, setTime] = useState(calculateTimeTogether());

    useEffect(() => {
    const interval = setInterval(() => {
        setTime(calculateTimeTogether());
    }, 1000);

    return () => clearInterval(interval);
    }, []);

  return (
    <section
      id="tiempo"
      className="relative overflow-hidden bg-white px-6 py-28"
    >
      <div className="absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-yellow-100/60 blur-3xl" />
      <div className="pointer-events-none absolute left-[7%] top-[22%] hidden opacity-85 lg:block">
        <FloralBloom className="rotate-[-12deg]" size="lg" variant="coral" withStem />
      </div>
      <div className="pointer-events-none absolute bottom-[12%] right-[8%] hidden opacity-80 lg:block">
        <FloralBloom className="rotate-12" size="lg" variant="white" withStem />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-5xl text-center"
      >
        <div className="mx-auto mb-6 flex h-12 w-16 items-center justify-center rounded-full bg-yellow-100 text-amber-500">
          <FloralBloom size="sm" variant="coral" />
        </div>

        <p className="text-sm font-medium tracking-[0.3em] text-amber-600">
          TE AMO MUCHO ANTES DE HABERTE TOCADO Y BESADO.
        </p>

        <h2 className="mt-5 text-4xl font-semibold text-stone-800 sm:text-5xl">
          Nuestro tiempo juntos
        </h2>

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-stone-500">
          Esto comenzó como algo imprevisto, pero hoy es
          nuestra historia hecha de pequeños y grandes momentos que significan mucho para mí.
        </p>

       <div className="mt-14 grid grid-cols-3 gap-3 lg:grid-cols-6 lg:gap-5">
      <TimeCard number={time.years} label="Años" />
      <TimeCard number={time.months} label="Meses" />
      <TimeCard number={time.days} label="Días" />
      <TimeCard number={time.hours} label="Horas" />
      <TimeCard number={time.minutes} label="Minutos" />
      <TimeCard number={time.seconds} label="Segundos" />
    </div>

        <p className="mx-auto mt-12 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white/65 px-5 py-2 text-sm font-medium italic text-amber-800 shadow-sm">
          Y todavía nos quedan muchos momentos por vivir juntos mi amor.
        </p>
      </motion.div>
    </section>
  );
}

function TimeCard({ number, label }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
      className="rounded-3xl border border-yellow-100 bg-amber-50/60 px-3 py-8 shadow-sm sm:px-8"
    >
      <p className="text-3xl font-semibold tabular-nums text-amber-500 sm:text-4xl lg:text-5xl">
        {String(number).padStart(2, "0")}
      </p>

      <p className="mt-2 text-sm text-stone-500 sm:text-base">
        {label}
      </p>
    </motion.div>
  );
}

export default TogetherCounter;
