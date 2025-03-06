import React from 'react';
import {MyStack} from "@/data";
import Image from "next/image";

const Stack = () => {
    return (
        <section id={"stack"} className={'mb-36 px-10 md:px-0'}>
            <h2 className={'text-center font-electro text-[40px] md:text-5xl lg:text-6xl text-white relative mb-20'}>
                My Tech <span className={'text-purple-300'}>Stack</span>
            </h2>
            <div className={'flex items-center justify-center flex-wrap gap-6 md:gap-10'}>
                {MyStack.map((item, index) => (
                    <Image key={index} src={item} alt={item} width={50} height={50} className={'text-white w-[50px] h-[50px] object-center object-contain'}/>
                ))}
            </div>
        </section>
    );
};

export default Stack;