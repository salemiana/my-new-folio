import Sidebar from '../Sidebar/sidebar'
import './layout.scss';
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return ( 
        <div className='App'>
            < Sidebar/>
            <div className='page'>
                <span className='tags top-tags'>&alt;body&gt;</span>

                <Outlet />

                <span className='tags bottom-tags'>&alt;body&gt;</span>    
                <br />
                <span className='bottom-tag-html'>&alt;/html&gt;</span>
            </div>
        </div>
    )
}


export default Layout;