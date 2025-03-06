import Theme from '../../components/Theme.jsx';

export default function Profiles() {
  return (
    <>
    <div className="flex flex-col min-h-screen">
    <div className="flex-grow">
    </div>
    <Theme />
    <div className="dark:bg-teal-100 bg-teal-200 bottom-0 text-center text-black text-xs md:text-sm font-mono">
    <p className="m-4 md:m-6">Made with &hearts; and NextJS by <span className="font-bold italic">NanotechPikachu</span></p>
    </div>
    </div>
    </>
  )
}