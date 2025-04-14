// RevealAnimation.tsx
import { motion, useAnimation, useInView } from "framer-motion";
import { ReactElement, useEffect, useRef } from "react";

type RevealProps = {
  children: ReactElement;
  delay?: number;
};

const RevealAnimation = ({ children, delay = 0 }: RevealProps): ReactElement => {
  // 요소의 참조 생성
  const ref = useRef(null);
  
  // 요소가 화면에 보이는지 확인
  const inView = useInView(ref, { once: true, amount: 0.3 });
  
  // 애니메이션 컨트롤러 생성
  const mainControls = useAnimation();

  useEffect(() => {
    // 요소가 화면에 보이면 애니메이션 시작
    if (inView) {
      mainControls.start("visible");
    }
  }, [inView, mainControls]);

  return (
    <div ref={ref} className="w-full">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={mainControls}
        transition={{
          duration: 0.7,
          delay: delay,
          ease: "easeOut"
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default RevealAnimation;
