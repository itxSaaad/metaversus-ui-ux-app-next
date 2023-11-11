'use client';

import { motion } from 'framer-motion';

import { NewFeatures, TitleText, TypingText } from '@/components';
import { newFeatures } from '@/constants';
import styles from '@/styles';
import { fadeIn, planetVariants, staggerContainer } from '@/utils/motion';
import Image from 'next/image';

const WhatsNew = () => {
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
          variants={fadeIn('right', 'tween', 0.2, 1)}
          className={`flex-[0.75] flex flex-col justify-center`}
        >
          <TypingText title="| What's New?" />
          <TitleText title={<>What's new about Metaversus?</>} />

          <div className="mt-[48px] flex flex-wap justify-between gap-[24px]">
            {newFeatures.map((feature) => (
              <NewFeatures key={feature.title} {...feature} />
            ))}
          </div>
        </motion.div>
        <motion.div
          variants={planetVariants('right')}
          className={`flex-1 ${styles.flexCenter}`}
        >
          <Image
            src="/whats-new.png"
            alt="Get Started"
            className="w-[90%] h-[90%] object-contain"
            height={500}
            width={500}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhatsNew;
