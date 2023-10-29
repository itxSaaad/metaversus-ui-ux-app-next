'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

import { ExploreCard, TitleText, TypingText } from '@/components';
import { exploreWorlds } from '@/constants';
import styles from '@/styles';
import { staggerContainer } from '@/utils/motion';

function Explore() {
  const [active, setActive] = useState(0);
  return (
    <section id="explore" className={`${styles.paddings}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} flex flex-col mx-auto`}
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Choose the world you want <br className="md:block hidden" />
              to explore
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              index={index}
              key={world.id}
              active={active}
              handleClick={setActive}
              {...world}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Explore;
