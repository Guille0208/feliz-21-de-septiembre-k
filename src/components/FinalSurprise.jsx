import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { RotateCcw } from "lucide-react";
import FloralBloom from "./FloralBloom";

const TOTAL_FLOWERS = 7;
const FLOWER_TIME = 3;
const gameFlowerColors = ["golden", "coral", "rose", "lavender", "sky", "mint", "white"];
const gameBubbleThemes = [
  { fill: "radial-gradient(circle at 30% 22%, #fffdf4 0 14%, #ffe8a5 36%, #efae2b 100%)", ring: "#d98212", glow: "rgba(245,158,11,0.55)" },
  { fill: "radial-gradient(circle at 30% 22%, #fff8f1 0 14%, #ffc9aa 38%, #e36d48 100%)", ring: "#c9573b", glow: "rgba(225,100,70,0.5)" },
  { fill: "radial-gradient(circle at 30% 22%, #fff8fb 0 14%, #f8b5ca 38%, #d65f88 100%)", ring: "#bb4d70", glow: "rgba(214,95,136,0.5)" },
  { fill: "radial-gradient(circle at 30% 22%, #fcfaff 0 14%, #d2bef3 38%, #9270c9 100%)", ring: "#7754a9", glow: "rgba(146,112,201,0.48)" },
  { fill: "radial-gradient(circle at 30% 22%, #f8fdff 0 14%, #b9e6f5 38%, #5aabd0 100%)", ring: "#438db4", glow: "rgba(90,171,208,0.48)" },
  { fill: "radial-gradient(circle at 30% 22%, #fbfffa 0 14%, #bdebc9 38%, #55a979 100%)", ring: "#3f8e63", glow: "rgba(85,169,121,0.48)" },
  { fill: "radial-gradient(circle at 30% 22%, #ffffff 0 14%, #f1e6c3 42%, #cfb66d 100%)", ring: "#b6923c", glow: "rgba(207,182,109,0.48)" },
];

/*
  Posiciones de las flores dentro del área de juego.
  Están definidas manualmente para que funcionen bien
  tanto en PC como en celular.
*/
const flowerPositions = [
  {
    left: "20%",
    top: "25%",
    size: 72,
    rotate: -12,
  },
  {
    left: "76%",
    top: "30%",
    size: 64,
    rotate: 14,
  },
  {
    left: "48%",
    top: "58%",
    size: 76,
    rotate: -5,
  },
  {
    left: "18%",
    top: "72%",
    size: 66,
    rotate: 10,
  },
  {
    left: "80%",
    top: "68%",
    size: 72,
    rotate: -15,
  },
  {
    left: "58%",
    top: "23%",
    size: 64,
    rotate: 12,
  },
  {
    left: "35%",
    top: "42%",
    size: 80,
    rotate: -8,
  },
];

/*
  Flores decorativas que aparecen cuando
  termina el juego.
*/
const finalFlowers = [
  { left: "7%", top: "12%", size: 32, delay: 0.1, rotate: -12 },
  { left: "17%", top: "72%", size: 40, delay: 0.25, rotate: 9 },
  { left: "27%", top: "18%", size: 26, delay: 0.35, rotate: -6 },
  { left: "38%", top: "80%", size: 34, delay: 0.5, rotate: 13 },
  { left: "50%", top: "10%", size: 38, delay: 0.2, rotate: -4 },
  { left: "62%", top: "82%", size: 30, delay: 0.4, rotate: 8 },
  { left: "73%", top: "16%", size: 42, delay: 0.3, rotate: -10 },
  { left: "85%", top: "70%", size: 34, delay: 0.55, rotate: 12 },
  { left: "92%", top: "28%", size: 26, delay: 0.65, rotate: -8 },
  { left: "8%", top: "48%", size: 24, delay: 0.6, rotate: 7 },
  { left: "90%", top: "48%", size: 28, delay: 0.45, rotate: -5 },
  { left: "48%", top: "90%", size: 24, delay: 0.7, rotate: 11 },
];

function FinalSurprise() {
  const [phase, setPhase] = useState("intro");
  const [caught, setCaught] = useState(0);
  const [timeLeft, setTimeLeft] = useState(FLOWER_TIME);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (phase !== "playing" || caught >= TOTAL_FLOWERS) return undefined;

    const interval = setInterval(() => {
      setTimeLeft((current) => Math.max(0, current - 0.1));
    }, 100);
    const timeout = setTimeout(() => {
      setTimeLeft(FLOWER_TIME);
      setAttempt((current) => current + 1);
    }, FLOWER_TIME * 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [phase, caught, attempt]);

  const startGame = () => {
    setCaught(0);
    setAttempt(0);
    setTimeLeft(FLOWER_TIME);
    setPhase("playing");
  };

  const catchFlower = () => {
    const next = caught + 1;

    if (next >= TOTAL_FLOWERS) {
      setCaught(TOTAL_FLOWERS);

      setTimeout(() => {
        setPhase("complete");
      }, 450);

      return;
    }

    setTimeLeft(FLOWER_TIME);
    setCaught(next);
  };

  const restartGame = () => {
    setCaught(0);
    setAttempt(0);
    setTimeLeft(FLOWER_TIME);
    setPhase("playing");
  };

  return (
    <section
      id="sorpresa"
      className="relative min-h-screen overflow-hidden bg-[#fffdf7]"
    >
      {/* Fondo */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-100/60 blur-3xl" />
      <div className="pointer-events-none absolute left-[7%] top-[15%] hidden opacity-80 lg:block">
        <FloralBloom className="rotate-[-15deg]" size="lg" variant="white" withStem />
      </div>
      <div className="pointer-events-none absolute bottom-[12%] right-[7%] hidden opacity-85 lg:block">
        <FloralBloom className="rotate-12" size="lg" variant="coral" withStem />
      </div>

      <AnimatePresence mode="wait">

        {/* =========================
            PANTALLA DE INICIO
        ========================== */}
        {phase === "intro" && (
          <motion.div
            key="intro"
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
            }}
            transition={{
              duration: 0.7,
            }}
            className="relative mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 text-center"
          >
            {/* Flor principal */}
            <motion.div
              animate={{
                y: [0, -8, 0],
                rotate: [-5, 5, -5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              <div className="absolute inset-0 scale-150 rounded-full bg-yellow-200/50 blur-xl" />

              <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-amber-200/70 bg-[#fff8df] shadow-lg shadow-amber-900/10">
                <FloralBloom size="md" variant="coral" />
              </div>
            </motion.div>

            <p className="mt-10 text-sm font-medium tracking-[0.3em] text-amber-600">
              UNA ÚLTIMA SORPRESA
            </p>

            <h2 className="mt-5 text-4xl font-semibold text-stone-800 sm:text-6xl">
              Atrapa tus
              <span className="block text-amber-500">
                flores de colores
              </span>
            </h2>

            <p className="mt-6 text-stone-500">
              Encuentra las 7 flores que completarán el ramo.
            </p>

            <motion.button
              onClick={startGame}
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-stone-800 px-9 py-4 text-sm font-medium text-white shadow-xl shadow-stone-900/10 transition hover:bg-stone-700"
            >
              <FloralBloom className="scale-[0.55]" size="sm" variant="white" />
              Comenzar
            </motion.button>

            <p className="mt-5 text-xs text-stone-400">
              Toca cada flor cuando aparezca.
            </p>
          </motion.div>
        )}

        {/* =========================
            JUEGO
        ========================== */}
        {phase === "playing" && (
          <motion.div
            key="game"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-10 sm:px-6"
          >
            {/* Cabecera del juego */}
            <div className="relative z-20 mx-auto w-full max-w-lg text-center">
              <div className="mb-5 flex justify-center gap-2">
                <button
                  onClick={() => { setAttempt((current) => current + 1); setTimeLeft(FLOWER_TIME); }}
                  className="rounded-full border border-amber-300 bg-white/70 px-4 py-2 text-[10px] font-bold tracking-[0.14em] text-amber-800 transition hover:bg-white"
                >
                  REINICIAR FLOR
                </button>
                <button
                  onClick={() => setPhase("intro")}
                  className="rounded-full border border-amber-300 bg-white/70 px-4 py-2 text-[10px] font-bold tracking-[0.14em] text-amber-800 transition hover:bg-white"
                >
                  SALIR DEL JUEGO
                </button>
              </div>
              <p className="text-xs font-semibold tracking-[0.25em] text-amber-500">
                FLORES ATRAPADAS
              </p>

              <div className="mt-3 flex items-end justify-center gap-2">
                <motion.span
                  key={caught}
                  initial={{
                    scale: 1.4,
                    opacity: 0,
                  }}
                  animate={{
                    scale: 1,
                    opacity: 1,
                  }}
                  className="text-4xl font-semibold text-amber-500"
                >
                  {caught}
                </motion.span>

                <span className="mb-1 text-xl text-stone-300">
                  /
                </span>

                <span className="mb-1 text-xl text-stone-400">
                  {TOTAL_FLOWERS}
                </span>
              </div>

              {/* Barra de progreso */}
              <div className="mx-auto mt-5 h-2 w-full max-w-xs overflow-hidden rounded-full bg-amber-100">
                <motion.div
                  animate={{
                    width: `${(caught / TOTAL_FLOWERS) * 100}%`,
                  }}
                  transition={{
                    duration: 0.35,
                  }}
                  className="h-full rounded-full bg-amber-400"
                />
              </div>
              <div className="mx-auto mt-4 flex max-w-xs items-center justify-between text-[10px] font-bold tracking-[0.16em] text-amber-800">
                <span>TIEMPO PARA ATRAPARLA</span>
                <span>{timeLeft.toFixed(1)} S</span>
              </div>
              <div className="mx-auto mt-2 h-1.5 w-full max-w-xs overflow-hidden rounded-full bg-amber-100/80">
                <motion.div
                  animate={{ width: `${(timeLeft / FLOWER_TIME) * 100}%` }}
                  transition={{ duration: 0.1, ease: "linear" }}
                  className="h-full rounded-full bg-gradient-to-r from-amber-500 to-yellow-400"
                />
              </div>
            </div>

            {/* Área de juego */}
            <div className="relative mt-6 flex-1 overflow-hidden rounded-[2.5rem] border border-yellow-100 bg-gradient-to-b from-yellow-50/60 via-white to-amber-50/60 shadow-inner">
              {/* Decoraciones de fondo */}
              <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-yellow-100/50 blur-3xl" />
              <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-amber-100/50 blur-3xl" />

              <AnimatePresence mode="wait">
                {caught < TOTAL_FLOWERS && (
                  <TargetFlower
                    key={`${caught}-${attempt}`}
                    flower={flowerPositions[(caught + attempt) % flowerPositions.length]}
                    onCatch={catchFlower}
                    number={caught}
                  />
                )}
              </AnimatePresence>
            </div>

            <p className="mt-5 text-center text-xs text-stone-400">
              Toca la flor antes de que se acabe el tiempo
            </p>
          </motion.div>
        )}

        {/* =========================
            FINAL
        ========================== */}
        {phase === "complete" && (
          <motion.div
            key="complete"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative mx-auto flex min-h-screen max-w-6xl items-center justify-center overflow-hidden px-6 py-20"
          >
            {/* Flores alrededor */}
            <div className="pointer-events-none absolute inset-0">
              {finalFlowers.map((flower, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    scale: 0,
                    rotate: -30,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: flower.rotate,
                  }}
                  transition={{
                    delay: flower.delay,
                    duration: 0.7,
                    type: "spring",
                  }}
                  style={{
                    position: "absolute",
                    left: flower.left,
                    top: flower.top,
                  }}
                >
                  <motion.div
                    animate={{
                      y: [0, -9, 0],
                      rotate: [
                        flower.rotate,
                        flower.rotate + 5,
                        flower.rotate,
                      ],
                    }}
                    transition={{
                      duration: 3 + index * 0.08,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div style={{ transform: `scale(${flower.size / 52})` }}>
                      <FloralBloom size="sm" variant={index % 2 ? "coral" : "white"} />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <div className="relative z-10 grid w-full max-w-6xl items-center gap-8 text-center lg:grid-cols-[1fr_21rem_1fr] lg:gap-10">
              <motion.div initial={{ opacity: 0, x: -22 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }} className="lg:text-right">
                <p className="text-sm font-medium tracking-[0.25em] text-amber-600">7 DE 7 · FLORES ATRAPADAS</p>
                <h2 className="mt-5 text-4xl leading-tight text-stone-800 sm:text-5xl">Entre todas las flores,</h2>
              </motion.div>

              <Bouquet />

              <motion.div initial={{ opacity: 0, x: 22 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.1 }} className="lg:text-left">
                <h2 className="text-4xl leading-tight text-amber-600 sm:text-5xl">siempre te elegiría a ti.</h2>
                <p className="mt-5 text-lg leading-8 text-stone-600">Feliz día de las flores amarillas, mis ojitos de miel.</p>
              </motion.div>

              <motion.button initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }} onClick={restartGame} className="mx-auto inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white/80 px-7 py-3 text-sm font-medium text-stone-600 shadow-sm backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-amber-50 lg:col-span-3">
                <RotateCcw className="h-4 w-4" /> Volver a jugar
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function Bouquet() {
  const bouquetFlowers = [
    { x: 44, y: 145, variant: "golden", rotate: -12, scale: 0.76 },
    { x: 69, y: 102, variant: "golden", rotate: 8, scale: 0.82 },
    { x: 103, y: 75, variant: "golden", rotate: -7, scale: 0.88 },
    { x: 153, y: 92, variant: "golden", rotate: 5, scale: 0.84 },
    { x: 198, y: 73, variant: "golden", rotate: -7, scale: 0.9 },
    { x: 244, y: 106, variant: "golden", rotate: 10, scale: 0.82 },
    { x: 274, y: 150, variant: "golden", rotate: -9, scale: 0.76 },
    { x: 76, y: 174, variant: "golden", rotate: 7, scale: 0.86 },
    { x: 119, y: 141, variant: "golden", rotate: -8, scale: 0.9 },
    { x: 165, y: 143, variant: "golden", rotate: 6, scale: 0.94 },
    { x: 215, y: 148, variant: "golden", rotate: -6, scale: 0.88 },
    { x: 255, y: 184, variant: "golden", rotate: 8, scale: 0.8 },
    { x: 102, y: 205, variant: "golden", rotate: -7, scale: 0.84 },
    { x: 147, y: 190, variant: "golden", rotate: 5, scale: 0.94 },
    { x: 205, y: 200, variant: "golden", rotate: -5, scale: 0.88 },
    { x: 131, y: 236, variant: "golden", rotate: 7, scale: 0.82 },
    { x: 185, y: 230, variant: "golden", rotate: -6, scale: 0.86 },
    { x: 86, y: 128, variant: "rose", rotate: -5, scale: 0.68, captured: true },
    { x: 139, y: 55, variant: "lavender", rotate: 7, scale: 0.66, captured: true },
    { x: 226, y: 126, variant: "sky", rotate: -6, scale: 0.68, captured: true },
    { x: 61, y: 202, variant: "mint", rotate: 5, scale: 0.65, captured: true },
    { x: 265, y: 215, variant: "white", rotate: -7, scale: 0.66, captured: true },
    { x: 221, y: 232, variant: "coral", rotate: 6, scale: 0.68, captured: true },
    { x: 111, y: 249, variant: "soft", rotate: -5, scale: 0.7, captured: true },
  ];

  return (
    <motion.div initial={{ opacity: 0, scale: 0.7, y: 24 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: 0.3, type: "spring", stiffness: 115 }} className="relative mx-auto h-[22rem] w-80">
      <div className="absolute inset-10 rounded-full bg-yellow-300/65 blur-3xl" />
      <svg viewBox="0 0 320 350" className="absolute inset-0 h-full w-full" aria-hidden="true">
        <ellipse cx="160" cy="329" rx="78" ry="13" fill="#8B4A12" opacity=".16" />
        {bouquetFlowers.map((flower, index) => (
          <path key={`stem-${index}`} d={`M160 286 Q${160 + (flower.x - 160) * 0.28 + (index % 2 ? 8 : -8)} ${222 + (index % 4) * 3} ${flower.x} ${flower.y + 12}`} stroke={flower.captured ? "#6C9B55" : "#4F853E"} strokeWidth={flower.captured ? "3" : "3.8"} strokeLinecap="round" fill="none" />
        ))}
        {[[68,184,-32],[91,158,29],[119,214,-25],[181,176,-31],[215,191,29],[243,220,-26],[151,230,25]].map(([cx,cy,rotate], index) => <ellipse key={`leaf-${index}`} cx={cx} cy={cy} rx="9" ry="23" fill={index % 2 ? "#91BA70" : "#6FA055"} opacity=".95" transform={`rotate(${rotate} ${cx} ${cy})`} />)}
        <path d="M70 224 Q160 192 250 224L215 330H105Z" fill="#FFF7DD" stroke="#E2B95E" strokeWidth="1.5" />
        <path d="M70 224 160 285 106 330 76 245Z" fill="#F2C45E" stroke="#D7972E" strokeWidth="1.5" />
        <path d="M250 224 160 285 214 330 244 245Z" fill="#E4A43C" stroke="#C57A25" strokeWidth="1.5" />
        <path d="M160 285 214 330H106Z" fill="#FFEAB0" stroke="#DDA947" strokeWidth="1.5" />
        <path d="M112 281Q160 296 208 281" stroke="#B96A28" strokeWidth="6" strokeLinecap="round" />
        <path d="M159 286c-22 4-38 14-48 29 18 2 36-6 49-21 13 15 31 23 49 21-10-15-26-25-50-29Z" fill="#D9794C" />
        <circle cx="160" cy="287" r="7" fill="#B85F37" />
      </svg>

      {bouquetFlowers.map((flower, index) => (
        <div key={`${flower.variant}-${index}`} className="absolute z-20 -translate-x-1/2 -translate-y-1/2" style={{ left: flower.x, top: flower.y }}>
          <motion.div initial={flower.captured ? { opacity: 0, scale: 0 } : false} animate={{ opacity: 1, scale: flower.scale, y: [0, -3, 0], rotate: [flower.rotate, flower.rotate + 4, flower.rotate] }} transition={{ opacity: { delay: 0.85 + index * 0.025 }, scale: { delay: 0.85 + index * 0.025, type: "spring" }, y: { duration: 2.8 + index * 0.04, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 3.2 + index * 0.04, repeat: Infinity, ease: "easeInOut" } }}>
            <FloralBloom size="md" variant={flower.variant} />
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
}

/*
  Flor interactiva.
*/
function TargetFlower({ flower, onCatch, number }) {
  const [collected, setCollected] = useState(false);
  const bubbleTheme = gameBubbleThemes[number % gameBubbleThemes.length];

  const handleCatch = () => {
    if (collected) return;
    setCollected(true);
    setTimeout(onCatch, 260);
  };

  return (
    <motion.button
      initial={{
        opacity: 0,
        scale: 0,
        rotate: flower.rotate - 40,
      }}
      animate={collected ? { opacity: 0, scale: 1.7, rotate: flower.rotate + 35 } : { opacity: 1, scale: 1, rotate: flower.rotate }}
      exit={{
        opacity: 0,
        scale: 1.8,
        rotate: flower.rotate + 35,
      }}
      transition={{
        duration: 0.4,
        type: "spring",
        stiffness: 170,
      }}
      whileHover={{
        scale: 1.12,
      }}
      whileTap={{
        scale: 0.8,
      }}
      onClick={handleCatch}
      aria-label={`Atrapar flor ${number + 1}`}
      className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
      style={{
        left: flower.left,
        top: flower.top,
      }}
    >
      {/* Brillo */}
      <motion.div
        animate={{
          scale: [1, 1.35, 1],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -inset-2 rounded-full blur-xl"
        style={{ backgroundColor: bubbleTheme.glow }}
      />

      {/* Flor */}
      <motion.div
        animate={{
          y: [0, -8, 0],
          rotate: [
            flower.rotate,
            flower.rotate + 6,
            flower.rotate,
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative flex items-center justify-center overflow-hidden rounded-full border-[3px] shadow-xl"
        style={{
          width: flower.size,
          height: flower.size,
          background: bubbleTheme.fill,
          borderColor: bubbleTheme.ring,
          boxShadow: `0 10px 20px -7px ${bubbleTheme.glow}, inset 0 0 0 2px rgba(255,255,255,0.6)`,
        }}
      >
        <motion.span
          aria-hidden="true"
          animate={{ opacity: [0.65, 1, 0.65], scale: [0.9, 1.05, 0.9] }}
          transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-[18%] top-[14%] h-[24%] w-[34%] rounded-full bg-white/70 blur-[1px]"
        />
        <span aria-hidden="true" className="absolute inset-1 rounded-full border border-white/75" />
        <div className="relative z-10" style={{ transform: `scale(${flower.size / 56})` }}>
          <FloralBloom size="sm" variant={gameFlowerColors[number % gameFlowerColors.length]} />
        </div>
        {collected && Array.from({ length: 8 }).map((_, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, x: Math.cos(index * Math.PI / 4) * 42, y: Math.sin(index * Math.PI / 4) * 42, scale: 0 }}
            className="absolute h-2 w-2 rounded-full bg-yellow-300"
          />
        ))}
      </motion.div>
    </motion.button>
  );
}

export default FinalSurprise;
