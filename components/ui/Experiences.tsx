import React from 'react';
import {Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger} from "@/components/ui/animated-modal";
import {WorkData} from "@/data";
import MagicButton from "@/components/ui/magic-button";
import {FaGithub, FaLocationArrow} from "react-icons/fa6";

const Experiences = () => {
    return (
        <section id="experiences" className={'mb-36 px-6 md:px-0 scroll-mt-20 z-50'}>


            <h2 className={'text-center font-electro text-[40px] md:text-5xl lg:text-6xl text-white relative mb-20'}>
                My work <span className={'text-purple-300'}>Experiences</span>
            </h2>

            <div className="grid grid-cols-4 gap-10 md:gap-36">
                {WorkData.map((item) => (
                    <div key={item.id} className={'col-span-4 md:col-span-2'}>
                        <Modal>
                            <ModalTrigger className={'w-full'}>
                                <div className={'flex w-full group cursor-hidden'}>
                                    <div
                                        className={'w-1/4 flex flex-col items-end pr-6 shrink-0 font-electro uppercase font-bold text-lg tracking-widest'}>
                                        {item.thumbnail.map((date, i) => (
                                            <span key={i} className={'text-nowrap'}>{date}</span>
                                        ))}
                                    </div>
                                    <div className={'flex flex-col gap-3 text-start'}>
                                        {item.location &&
                                            <h3 className={'font-semibold uppercase text-[#2b2d3d] group-hover:text-purple-300 transition-all'}>{item.location}</h3>}
                                        <h4 className={'font-bold uppercase text-blue-50'}>{item.title}</h4>
                                        <div className={'flex gap-3 flex-wrap'}>
                                            {item.stacks.map((stack, i) => (
                                                <span key={i}
                                                      className={'border px-3 py-1 rounded-2xl text-xs group-hover:border-purple-300 transition-all'}>{stack}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                            </ModalTrigger>
                            <ModalBody>
                                <ModalContent>
                                    <div className={'p-6 overflow-y-auto'}>{item.content}</div>
                                </ModalContent>
                                {item.github &&
                                    <ModalFooter>
                                        <a href={item.github}>
                                            <MagicButton
                                                title={'Take a look'}
                                                icon={<FaGithub/>}
                                                position={'left'}
                                            />
                                        </a>
                                    </ModalFooter>
                                }
                            </ModalBody>
                        </Modal>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experiences;