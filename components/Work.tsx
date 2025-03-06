import React from "react";
import {LayoutGrid} from "@/components/ui/layout-grid";
import {gridItems, WorkData} from "@/data";
import {BentoGrid, BentoGridItem} from "@/components/ui/bento-grid";

export function Work() {

    return (
        <section id="work" className={'mb-36 px-10 md:px-0'}>
            <BentoGrid>
                {gridItems.map((item) => (
                    <BentoGridItem
                        id={item.id}
                        key={item.id}
                        title={item.title}
                        description={item.description}
                        className={item.className}
                        img={item.img}
                        imgClassName={item.imgClassName}
                        titleClassName={item.titleClassName}
                        spareImg={item.spareImg}
                    />
                )) }
            </BentoGrid>
        </section>
    );
}
