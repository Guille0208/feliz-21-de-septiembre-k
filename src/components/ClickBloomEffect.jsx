import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import FloralBloom from "./FloralBloom";

const burstFlowers = ["golden", "coral", "rose", "white", "lavender"];
const petals = [
  { x: -58, y: -42, rotate: -45, color: "#f6bf38" },
  { x: 54, y: -48, rotate: 38, color: "#f29a70" },
  { x: -72, y: 18, rotate: -72, color: "#f4c1cf" },
  { x: 70, y: 20, rotate: 68, color: "#f3dfaa" },
  { x: -26, y: 65, rotate: 24, color: "#c5a8e8" },
  { x: 32, y: 70, rotate: -20, color: "#f2b636" },
];

function ClickBloomEffect() {
  const [bursts, setBursts] = useState([]);
  const nextId = useRef(0);
  const timers = useRef([]);

  useEffect(() => {
    const activeTimers = timers.current;
    const createBurst = (event) => {
      if (event.button !== undefined && event.button !== 0) return;

      const id = nextId.current++;
      setBursts((current) => [...current.slice(-4), { id, x: event.clientX, y: event.clientY }]);

      const timer = window.setTimeout(() => {
        setBursts((current) => current.filter((burst) => burst.id !== id));
      }, 1250);
      activeTimers.push(timer);
    };

    window.addEventListener("click", createBurst, true);
    return () => {
      window.removeEventListener("click", createBurst, true);
      activeTimers.forEach(window.clearTimeout);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" style={{ zIndex: 9999 }} aria-hidden="true">
      <AnimatePresence>
        {bursts.map((burst) => (
          <motion.div key={burst.id} className="absolute" style={{ left: burst.x, top: burst.y }} initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.span initial={{ scale: 0, opacity: 0.8 }} animate={{ scale: 2.8, opacity: 0 }} transition={{ duration: 0.75 }} className="absolute -left-5 -top-5 h-10 w-10 rounded-full border-2 border-amber-400/70" />
            <motion.div initial={{ x: -18, y: -18, scale: 0, opacity: 0 }} animate={{ scale: [0, 0.8, 0.45], opacity: [0, 1, 0] }} transition={{ duration: 0.9, ease: "easeOut" }} className="absolute">
              <FloralBloom size="sm" variant="golden" />
            </motion.div>

            {burstFlowers.map((variant, index) => {
              const angle = (Math.PI * 2 * index) / burstFlowers.length - Math.PI / 2;
              return (
                <motion.div
                  key={variant}
                  initial={{ x: -18, y: -18, scale: 0.15, opacity: 0, rotate: -20 }}
                  animate={{ x: Math.cos(angle) * 74 - 18, y: Math.sin(angle) * 74 - 18, scale: [0.15, 0.52, 0.35], opacity: [0, 1, 0], rotate: index % 2 ? 55 : -55 }}
                  transition={{ duration: 1.05, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute"
                >
                  <FloralBloom size="sm" variant={variant} />
                </motion.div>
              );
            })}

            {petals.map((petal, index) => (
              <motion.span
                key={index}
                initial={{ x: -4, y: -7, scale: 0.4, opacity: 0 }}
                animate={{ x: petal.x, y: petal.y, scale: [0.4, 1, 0.7], opacity: [0, 0.9, 0], rotate: petal.rotate + 110 }}
                transition={{ duration: 0.9, delay: 0.05 + index * 0.025, ease: "easeOut" }}
                className="absolute h-3.5 w-2 rounded-[70%_30%_70%_30%] shadow-sm"
                style={{ backgroundColor: petal.color }}
              />
            ))}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default ClickBloomEffect;
