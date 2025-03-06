"use client";
import React, {useState, JSX} from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {GlowingStarsBackgroundCard, GlowingStarsDescription, GlowingStarsTitle} from "@/components/ui/glowing-stars";

type Card = {
    id: number;
    content: JSX.Element | React.ReactNode | string;
    title: string;
    className: string;
    thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
    const [selected, setSelected] = useState<Card | null>(null);
    const [lastSelected, setLastSelected] = useState<Card | null>(null);

    const handleClick = (card: Card) => {
        setLastSelected(selected);
        setSelected(card);
    };

    const handleOutsideClick = () => {
        setLastSelected(selected);
        setSelected(null);
    };

    return (
        <div className="w-full h-full p-10 grid grid-cols-1 md:grid-cols-3  max-w-7xl mx-auto gap-4 relative">
            {cards.map((card, i) => (
                <div key={i} className={cn(card.className, "")}>
                    <motion.div
                        onClick={() => handleClick(card)}
                        className={cn(
                            card.className,
                            "relative overflow-hidden",
                            selected?.id === card.id
                                ? "rounded-lg cursor-pointer absolute inset-0 h-fit w-full md:w-fit m-auto z-50 flex justify-center items-center flex-wrap flex-col"
                                : lastSelected?.id === card.id
                                    ? "z-40 bg-black-100 rounded-xl h-full w-full"
                                    : "bg-black-100 rounded-xl h-full w-full"
                        )}
                        layoutId={`card-${card.id}`}
                    >
                        {selected?.id === card.id && <SelectedCard selected={selected} />}
                        <ImageComponent card={card} />
                    </motion.div>
                </div>
            ))}
            <motion.div
                onClick={handleOutsideClick}
                className={cn(
                    "absolute h-full w-full left-0 top-0 bg-black opacity-0 z-10",
                    selected?.id ? "pointer-events-auto" : "pointer-events-none"
                )}
                animate={{ opacity: selected?.id ? 0 : 0 }}
            />
        </div>
    );
};

const ImageComponent = ({ card }: { card: Card }) => {
    return (
        <motion.div
            layoutId={`image-${card.id}-image`}
            className={cn(
                "absolute inset-0 h-full w-full transition duration-200"
            )}
        >
            <GlowingStarsBackgroundCard className={'relative'}>
                <div className={'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'}>
                    <GlowingStarsTitle>{card.title}</GlowingStarsTitle>
                    <GlowingStarsDescription>{card.thumbnail}</GlowingStarsDescription>
                </div>
            </GlowingStarsBackgroundCard>
        </motion.div>
    );
};

const SelectedCard = ({ selected }: { selected: Card | null }) => {
    return (
        <div className="bg-transparent h-full w-full flex flex-col justify-end rounded-lg shadow-2xl relative z-[60]">
            <motion.div
                initial={{
                    opacity: 0,
                }}
                animate={{
                    opacity: 100,
                }}
                className="absolute inset-0 h-full w-full bg-black z-10 overflow-y-auto"
            />
            <motion.div
                layoutId={`content-${selected?.id}`}
                initial={{
                    opacity: 0,
                    y: 100,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                exit={{
                    opacity: 0,
                    y: 100,
                }}
                transition={{
                    duration: 0.3,
                    ease: "easeInOut",
                }}
                className="relative px-20 py-10 z-[70] overflow-y-auto"
            >
                {selected?.content}
            </motion.div>
        </div>
    );
};
