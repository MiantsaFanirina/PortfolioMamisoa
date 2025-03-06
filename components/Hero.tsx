import React from 'react';
import {Spotlight} from "@/components/ui/spotlight";
import {BackgroundLines} from "@/components/ui/background-lines";
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";
import MagicButton from "@/components/ui/magic-button";
import {FaLocationArrow} from "react-icons/fa6";
import {TextHoverEffect} from "@/components/ui/text-hover-effect";

function Hero() {
    return (
        <div className={'pb-20'}>
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

                    <TextHoverEffect text={"Hi, I'm Mamisoa"} duration={0.3}/>

                    
                    <TextGenerateEffect
                        className={`text-center text-[40px] md:text-5xl lg:text-6xl md:-translate-y-1/4`}
                        words={`I create powerful, scalable and secure solutions that drive business success`}
                    />

                    <a href="#offers">
                        <MagicButton
                            title={'What can I offer ?'}
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