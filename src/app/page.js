import BasicInfo from '../components/BasicInfo.jsx';
import Socials from '../components/Socials.jsx';
import TechStack from '../components/TechStack.jsx';
import Exp from '../components/Exp.jsx';
import Extra from '../components/Extra.jsx';
import Av from '../components/Av.jsx';

export default function Home() {
  return (
    <>
    <div className="flex flex-col min-h-screen">
    <div className="flex-grow">
    <div className="ml-8 md:ml-12 md:mr-12 xl:ml-24 xl:mr-24 mr-8 mt-24 mb-20">
    <Av />
    <BasicInfo />
    <Socials />
    <TechStack />
    <Exp />
    <Extra />
    </div>
    </div>
    <div className="dark:bg-teal-100 bg-teal-200 bottom-0 text-center text-black text-xs md:text-sm font-mono">
    <p className="m-4 md:m-6">Made with &hearts; and NextJS by <span className="font-bold italic">NanotechPikachu</span></p>
    </div>
    </div>
    </>
  )
}