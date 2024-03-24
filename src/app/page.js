import BasicInfo from '../components/BasicInfo.jsx';
import Socials from '../components/Socials.jsx';
import TechStack from '../components/TechStack.jsx';

export default function Home() {
  return (
    <>
    <div className="ml-8 mr-8 mt-24 mb-20">
    <BasicInfo />
    <Socials />
    <TechStack />
    </div>
    </>
  )
}