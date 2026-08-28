"use client"
import {motion} from "framer-motion";

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
                        duration: 1,
                        ease: "easeInOut",
                        delay: reverseIndex(i) * 0.1
                    }}
                    className={' h-full w-full relative'}
                    style={{
                        backgroundColor: "#0B0B0C",
                        boxShadow: "inset -1px 0 0 rgba(255,74,28,0.35)",
                    }}
                >
                </motion.div>
            ))}
        </>
    );
};

export default Stairs;