// export default function About() {
//   <section id="about">
//     <div className="container ms-auto flex px-10 py-20 md:flex-row flex col items-center">
//       <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
//         <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
//             Hi, I'm Salem.
//             <br className="hidden lg:inline-block" /> I love to build amazing apps.
//         </h1>
//         <p className="mb-8 leading-relaxed">
//         Recently certified full stack developer with passion for developing scalable web applications, and ready to contribute and grow my skills through creating apps and simplifying technnology for users.
//         </p>
//         <div className="flex justify-center">
//             <a
//               href="#contact"
//               className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
//               Work With Me
//             </a>
//             <a
//               href="#projects"
//               className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
//               See My Past Work
//             </a>
//           </div>
//         </div>
//         <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
//           <img
//             className="object-cover object-center rounded"
//             alt="hero"
//             src="../img/selfphoto.jpg"
//           />
//       </div>
//     </div>
//   </section>;
// }

import { useEffect, useState } from 'react'
import {
  
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNode,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters/animated.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './about.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            Recently certified full stack developer with passion for developing
            scalable web applications, and ready to contribute and grow my
            skills through creating apps and simplifying technnology for users.
          </p>
          <p>
            If I need to define myself in one sentence that would be a family
            person, mother of two beautiful daughters, always working on being
            better!!!
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNode} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
