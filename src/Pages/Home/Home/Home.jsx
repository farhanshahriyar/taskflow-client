import React, { useEffect, useState } from "react";
import { useViewportScroll, motion } from "framer-motion";
import Banner from "./Banner/Banner";
import Section2 from "./Section2/Section2";
import Testimonials from "./Testimonials/Testimonials";
import KeyFeatures from "./KeyFeatures/KeyFeatures";
import Price from "./Price/Price";
import Clients from "./Clients/Clients";

const Home = () => {
  const { scrollY } = useViewportScroll();
  const [scrollYProgress, setScrollYProgress] = useState(0);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setScrollYProgress(latest);
    });
  }, [scrollY]);

  // Animation variants for the components
  const bannerVariants = {
    hidden: { opacity: 0 },
    visible: (custom) => ({
      opacity: 1,
      transition: { delay: custom * 0.002 },
    }),
  };

  const section2Variants = {
    hidden: { opacity: 0 },
    visible: (custom) => ({
      opacity: 1,
      transition: { delay: custom * 0.004 },
    }),
  };

  return (
    <div>
      <motion.div
        custom={scrollYProgress}
        initial="hidden"
        animate="visible"
        variants={bannerVariants}
      >
        <Banner />
      </motion.div>
      <motion.div
        custom={scrollYProgress}
        initial="hidden"
        animate="visible"
        variants={section2Variants}
      >
        <Section2 />
      </motion.div>
      <motion.div
        custom={scrollYProgress}
        initial="hidden"
        animate="visible"
        variants={section2Variants}
      >
        <KeyFeatures />
      </motion.div>
      <motion.div
        custom={scrollYProgress}
        initial="hidden"
        animate="visible"
        variants={section2Variants}
      >
        <Testimonials />
      </motion.div>
      <motion.div
        custom={scrollYProgress}
        initial="hidden"
        animate="visible"
        variants={section2Variants}
      >
        <Price />
      </motion.div>
      <motion.div
        custom={scrollYProgress}
        initial="hidden"
        animate="visible"
        variants={section2Variants}
        >
            <Clients/>
        </motion.div>
    </div>
  );
};

export default Home;
