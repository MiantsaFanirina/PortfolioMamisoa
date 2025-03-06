import Hero from "@/components/Hero";
import {Features} from "@/components/Features";
import Education from "@/components/Education";
import {Work} from "@/components/Work";
import {FloatingNav} from "@/components/ui/floating-navbar";
import Experiences from "@/components/Experiences";
import Stack from "@/components/Stack";
import {navItems} from "@/data";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Loading from "@/app/loading";

export default function Home() {
  return (
   <main
       className={`
            relative bg-black-100 
            flex flex-center items-center flex-col 
            overflow-hidden mx-auto sm:px-10
            
       `}
   >
        <div
            className={`
                max-w-7xl w-full
            `}
        >

            <FloatingNav navItems={navItems} />
            <Loading/>
            <Hero/>
            <Work/>
            <About/>
            <Stack/>
            <Features/>
            <Education/>
            <Experiences/>
            <Footer/>
        </div>
   </main>
  );
}
