import {FC, useEffect} from 'react';
import {Link} from 'react-router-dom';
import '../../static/css/footer.css'

import logo from '../../static/img/logo.svg'
import send from '../../static/img/send.svg'

const FooterComponent: FC = () => {

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
    <footer className="footer">
        <div className="footer__items">
            <div className="footer__item">
                <Link to="#"> <img src={logo} alt="logo"/></Link>
                <div>Join our newsletter to stay up to date <br/> on features and releases</div>
                <form action="">
                    <input type="text" placeholder="Enter your email address"/>
                    <button type="submit"><img className="send" src={send} alt=""/></button>
                </form>
            </div>
            <div className="footer__item">
                <ul>
                    <li><Link to="#">All recipes</Link></li>
                    <li><Link to="#">Blog</Link></li>
                    <li><Link to="#">About us</Link></li>
                    <li><Link to="#">Create recipes</Link></li>
                </ul>
            </div>
            <div className="footer__item">
                <ul className="list">
                    <li className="media"><Link to="#">Instagram</Link></li>
                    <li className="media"><Link to="#">Facebook</Link></li>
                    <li className="media"><Link to="#">Twitter</Link></li>
                </ul>
            </div>
        </div>
    </footer>

  );
};

export default FooterComponent;
