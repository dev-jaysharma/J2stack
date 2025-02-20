import {
  motion as m,
  useSpring,
} from "motion/react";
import { useEffect } from "react";


const App = () => {
  const cursorX = useSpring(0, { damping: 200, stiffness: 809, mass:1 });
  const cursorY = useSpring(0, { damping: 200, stiffness: 809, mass:1 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Subtract half the circle's width/height to center it on the cursor
      cursorX.set(event.clientX - 8);
      cursorY.set(event.clientY - 8);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  // const numDots = 12;
  return (
    <div className="fixed inset-0 bg-black">
      <m.div
        className="w-4 h-4 bg-amber-100 rounded-full fixed"
        style={{
          x: cursorX,
          y: cursorY
        }}
      />
    </div>

  );
};

export default App;