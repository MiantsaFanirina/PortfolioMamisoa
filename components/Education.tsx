import React from "react";

import { EducationData } from "@/data";
import { Button } from "./ui/moving-borders";

const Education = () => {
    return (
        <section id={'education'} className="py-20 w-full px-10 md:px-0 ">
            <h1  className={'text-center font-electro text-[40px] md:text-5xl lg:text-6xl text-white relative mb-20'}>
                My <span className="text-purple-300">Education</span>
            </h1>

            <div className="w-full mt-12 grid md:grid-cols-4 lg:grid-cols-6 grid-cols-1 gap-10">
                {EducationData.map((card) => (
                    <Button
                        key={card.id}
                        //   random duration will be fun , I think , may be not
                        duration={Math.floor(Math.random() * 10000) + 10000}
                        borderRadius="1.75rem"
                        style={{
                            //   add these two
                            //   you can generate the color from here https://cssgradient.io/
                            background: "rgb(4,7,29)",
                            backgroundColor:
                                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                            // add this border radius to make it more rounded so that the moving border is more realistic
                            borderRadius: `calc(1.75rem* 0.96)`,
                        }}
                        // remove bg-white dark:bg-slate-900
                        className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                        <div className="flex lg:flex-row flex-col lg:items-center p-5 py-6 md:p-5 lg:p-10 gap-2">
                            <div className="lg:ms-5">
                                <h1 className="text-start text-xl md:text-2xl font-bold">
                                    {card.title}
                                </h1>
                                <p className="text-start text-white-100 mt-3 font-semibold">
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    </Button>
                ))}
            </div>
        </section>
    );
};

export default Education;
