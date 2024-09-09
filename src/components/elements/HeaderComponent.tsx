import {FC, useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../../static/css/header.css'

import logo from '../../static/img/logo.svg'
import search from '../../static/img/search.svg'
import profile from '../../static/img/profile.svg'

const HeaderComponent: FC = () => {

    useEffect(() => {
        // const burger = document.getElementById('burger') as HTMLInputElement;
        // const burgerMenu = document.getElementById('burger-menu') as HTMLInputElement;
        // const body = document.body as HTMLInputElement
        
    
        // const burgerEvent = () => {
        //     window.scrollTo(0, 0);
        //     burger.classList.toggle('active');
        //     burgerMenu.classList.toggle('active');
        //     body.classList.toggle('not-scroll');
        // };
    
        // burger.addEventListener('click', burgerEvent);
        // return () => {
        //     burger.removeEventListener('click', burgerEvent);
        // };
    
      },[]);

  return (
    <header>
        <div>
            <Link to="#"> <img src={logo} alt="logo"/></Link>
        </div>
        <nav>
            <ul className="items">
                <li className="item"><Link className="a-item" to="#">All recipes</Link></li>
                <li className="item"><Link className="a-item" to="#">Blog</Link></li>
                <li className="item"><Link className="a-item" to="#">About us</Link></li>
            </ul>
        </nav>
        <button className="add_recipes">Create recipes</button>
        <div className="img-items">
            <Link to="#">
                <img className="img-item" src={search} alt="search"/>
            </Link>
            <Link to="#">
                <img className="img-item" src={profile} alt="profile"/>
            </Link>
        </div>
    </header>

  );
};

export default HeaderComponent;
