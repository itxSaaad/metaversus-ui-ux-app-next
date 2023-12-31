'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { StartSteps, TitleText, TypingText } from '@/components';
import { startingFeatures } from '@/constants';
import styles from '@/styles';
import { fadeIn, planetVariants, staggerContainer } from '@/utils/motion';

function GetStarted() {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col lg:flex-row gap-8`}
      >
        <motion.div
          variants={planetVariants('left')}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <Image
            src="/get-started.png"
            alt="Get Started"
            height={500}
            width={500}
            className="w-[90%] h-[90%] object-contain"
          />
        </motion.div>

        <motion.div
          variants={fadeIn('left', 'tween', 0.2, 1)}
          className={`flex-[0.75] flex flex-col justify-center`}
        >
          <TypingText title="| How Metversus Works" />
          <TitleText title={<>Get Started with just a few Clicks</>} />

          <div className="mt-[31px] flex flex-col max-w-[370px] gap-[24px]">
            {startingFeatures.map((feature, index) => (
              <StartSteps
                key={feature}
                number={`${index < 10 ? '0' : ''} ${index + 1}`}
                title={feature}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default GetStarted;
