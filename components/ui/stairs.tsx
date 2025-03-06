"use client"
import {animate, motion} from "framer-motion";

const stairAnimation = {
    initial: {
        top: "0%"
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    }
}

const reverseIndex = (index: number) => {
    const totalSteps = 6;
    return totalSteps - (index - 1);
}

const Stairs = () => {
    return (
        <>
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    variants={stairAnimation}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{
                        duration: 0.4,
                        ease: "easeInOut",
                        delay: reverseIndex(i) * 0.1
                    }}
                    className={' h-full w-full relative'}
                    style={{
                        backdropFilter: "blur(16px) saturate(180%)",
                        backgroundColor: "rgba(17, 25, 40, 0.75)",
                    }}
                >
                </motion.div>
            ))}
        </>
    );
};

export default Stairs;