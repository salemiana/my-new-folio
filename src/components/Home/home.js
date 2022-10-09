import LogoTitle from '../../assets/img/logo-s.png'
import { Link } from 'react-router-dom'
import './home.scss';

const Home = () => {
    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>Hi, <br /> I'm
                <img src={LogoTitle} alt='developer' />
                alem<br />software developer </h1>
                <h2>Full Stack developer</h2>
                <Link to='/contact' className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    )
}


export default Home;