import styles from '@/styles';

function StartSteps({ number, title }) {
  return (
    <div className={`${styles.flexCenter} flex-row`}>
      <div
        className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]`}
      >
        <p className="font-bold text-white text-[20]">0{number}</p>
      </div>
      <p className="flex-1 ml-[30px] text-[18px] text-[#B0B0B0] leading-[32px]">
        {title}
      </p>
    </div>
  );
}

export default StartSteps;
