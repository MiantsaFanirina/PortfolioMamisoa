import React from 'react';
import Image from "next/image";

const About = () => {
    return (
        <section id={'about'} className={'mb-36 px-10 md:px-0 flex flex-col items-center scroll-mt-20'}>

            <h2 className={'text-center font-electro text-[40px] md:text-5xl lg:text-6xl text-white relative mb-20'}>
                About <span className={'text-purple-300'}>me</span>
            </h2>

            <Image
                src={'/avatar.png'}
                alt={'avatar'} width={1000}
                height={1000}
                className={`
                    w-[150px] h-[150px] object-cover object-center
                    rounded-full
                    p-1 border-2 border-purple-300
                    bg-white
                `}
            />

            <h3 className={'font-electro tracking-widest font-semibold text-xl md:text-2xl mt-10'}>I&apos;m <span className={'text-purple-300'}>MAMISOA HYACINTHE</span></h3>

            <p className={'text-center text-md md:text-lg md:px-10 lg:px-36 mt-3'}>
                As a business application developer (WEB, Mobile, Desktop) with <span className="font-bold">10 years of experience</span> in <span className="font-bold">.NET C#</span>, <span className="font-bold">PHP</span>, <span className="font-bold">Java</span>, <span className="font-bold">JavaScript</span>, and <span className="font-bold">TypeScript</span>, I stand out for my <span className="font-bold">leadership</span> and <span className="font-bold">strong communication skills</span>. My <span className="font-bold">extensive experience</span> has also taught me to continuously <span className="font-bold">adapt</span> in the ever-evolving field of <span className="font-bold">information technology</span>.
                I am eager to join your company to share my <span className="font-bold">expertise</span> and <span className="font-bold">passion</span> for <span className="font-bold">IT</span> while contributing to your projects&apos; <span className="font-bold">success</span>. I am <span className="font-bold">available immediately</span> and open to an <span className="font-bold">interview</span> at your convenience. Additionally, I hold a <span className="font-bold">valid passport</span> for any potential <span className="font-bold">international opportunities</span>.
            </p>

        </section>
    );
};

export default About;