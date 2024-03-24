import BasicInfo from '../components/BasicInfo.jsx';
import Socials from '../components/Socials.jsx';
import TechStack from '../components/TechStack.jsx';

export default function Home() {
  return (
    <>
    <div className="flex flex-col min-h-screen">
    <div className="flex-grow">
    <div className="ml-8 mr-8 mt-24 mb-20">
    <BasicInfo />
    <Socials />
    <TechStack />
    </div>
    </div>
    <div className="dark:bg-teal-100 bg-teal-200 bottom-0 text-center text-black text-xs md:text-sm font-mono">
    <p>Made with &hearts; and NextJS by <span className="font-bold italic">NanotechPikachu</span></p>
    </div>
    </div>
    </>
  )
}