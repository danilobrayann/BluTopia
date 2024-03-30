import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const Animate: React.FC = () => {
  useEffect(() => {
    const scrollRevealInstance = ScrollReveal({
      reset: true,
      distance: "300px",
      duration: 2000,
      delay: 2000,
    });

    scrollRevealInstance.reveal('h1,img, a', { origin: 'top' });

    return () => scrollRevealInstance.destroy();
  }, []);

  return null; // Ou substitua por um elemento JSX, se desejar renderizar algo
}

export default Animate;
