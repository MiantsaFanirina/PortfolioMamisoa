import Feature from "@/components/ui/feature";
import {FeaturesData} from "@/data";

export function Features() {

    return (
        <section id={'offers'} className={'scroll-mt-36 px-6'}>
            <h2 className={'text-center font-electro text-[40px] md:text-5xl lg:text-6xl text-white relative md:mb-20'}>
                What can I <span className={'text-purple'}>give</span> to you ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl px-6 md:px-0 mx-auto">
                {FeaturesData.map((feature, index) => (
                    <Feature key={feature.title} {...feature} index={index}/>
                ))}
            </div>
        </section>
    );
}