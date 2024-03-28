/* 
  ------- SUPPORT-FUNC -------
These functions provide support to other functions.
*/

import { FaGithub, FaDiscord } from 'react-icons/fa';

function Git() {
  return (
    <>
    <FaGithub size="40px" color="#b2f5ea" />
    </>
  )
}

function Discord() {
  return (
    <>
    <FaDiscord size="40px" color="#b2f5ea" />
    </>
  )
}

export { Git, Discord };

