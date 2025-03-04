import React from 'react';
import {Spotlight} from "@/components/ui/spotlight";
import {BackgroundLines} from "@/components/ui/background-lines";
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
import MagicButton from "@/components/ui/magic-button";
import {FaLocationArrow} from "react-icons/fa6";

function Hero() {
    return (
        <div className={'pb-20 pt-36'}>
            <div>
                <Spotlight/>
            </div>

            <div
                className="h-screen w-full rounded-md bg-white dark:bg-black-100 absolute top-0 left-0 flex flex-col items-center justify-center antialiased">
                <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
                   <></>
                </BackgroundLines>
            </div>

            <div
                className={`
                    flex justify-center
                    relative my-20 
                    z-10
                `}
            >
                <div className={'max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'}>
                    <h2 className={'uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'}>
                        I create
                        <span className={'font-bold'}> powerful</span>,
                        <span className={'font-bold'}> scalable</span>, and
                        <span className={'font-bold'}> secure </span>
                        solutions that drive business success
                    </h2>
                    
                    <TextGenerateEffect
                        className={`text-center text-[40px] md:text-5xl lg:text-6xl`}
                        words={'Tell me your project and I will make it concrete'}
                    />

                    <p className={'text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'}>
                        Hi, I&apos;m Mamisoa Hyacinthe, a .NET C# Developer based in UAE.
                    </p>

                    <a href="#about">
                        <MagicButton
                            title={'Show my work'}
                            icon={<FaLocationArrow/>}
                            position={'right'}
                        />
                    </a>
                    
                </div>
            </div>
        </div>
    );
}

export default Hero;