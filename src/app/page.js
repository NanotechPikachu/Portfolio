import BasicInfo from '../components/BasicInfo.jsx';
import Socials from '../components/Socials.jsx';
import TechStack from '../components/TechStack.jsx';

export default function Home() {
  return (
    <>
    <div className="w-full h-full">
    <div className="ml-8 mr-8 mt-24 mb-20">
    <BasicInfo />
    <Socials />
    <TechStack />
    </div>
    <div className="bg-blue-500 bottom-0 text-center">
    <p>hi</p>
    </div>
    </div>
    </>
  )
}