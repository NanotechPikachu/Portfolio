import Callout from './Callout.jsx';
import { Hobbies, Fav } from './ExtraInfo.jsx';

export default function Extra() {
  return (
    <>
    <div className="mr-6 ml-6 mt-6 border-2 rounded-lg dark:border-teal-100 border-teal-200 dark:bg-[#2E3532] bg-slate-100">
    <Callout summary="Feel interested in knowing my hobbies and favorites? Click here!">
    <Hobbies />
    <Fav />
    </Callout>
    </div>
    </>
  )
}