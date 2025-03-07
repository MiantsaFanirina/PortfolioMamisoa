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
import Loading from "@/components/loading";

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
            <Hero/>
            <Work/>
            <About/>
            <Stack/>
            <Features/>
            <Education/>
            <Experiences/>
            <div className={'px-6 md:px-36 text-center'}>
                <h1 className={'text-purple font-electro text-xl'}>Disclaimer !</h1>
                <p className={'text-sm md:text-md text-blue-50'}>🚧 My portfolio is still a work in progress! Some sections may be missing or under construction. Please bear with me as I continue to build and improve it. Thank you for your understanding! 💻✨</p>
            </div>
            <Footer/>
        </div>
   </main>
  );
}
