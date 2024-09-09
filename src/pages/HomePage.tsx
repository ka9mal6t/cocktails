import React, { useEffect, useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { getReceptions, ReceptionResponces} from '../api/auth';
// import LoadingComponent from '../components/elements/LoadingComponent'
import HeaderComponent from "../components/elements/HeaderComponent";
import FooterComponent from "../components/elements/FooterComponent";
import { useAuth } from './../context/AuthContext';


import '../static/css/main.css'
import board_1 from '../static/img/board_1.svg'
import instruction_1 from '../static/img/instruction-1.png'
import instruction_2 from '../static/img/instruction-2.png'
import like from '../static/img/like.svg'
import arrow from '../static/img/arrow.svg'
import with_us_1 from '../static/img/with-us-1.svg'
import with_us_2 from '../static/img/with-us-2.svg'
import with_us_3 from '../static/img/with-us-3.svg'



const HomePage: React.FC = () => {

  const navigate = useNavigate();
  const [cocktails, setCocktails] = useState<ReceptionResponces[]>([]);
  const { user } = useAuth();

//   useEffect(()=>{
//     getReceptions().then((receptions)=>{
//       setCocktails(receptions)
//     })
//     .catch(()=>{navigate('/404')});
//   } ,[]);


  return (
    <div>
      <HeaderComponent/>
      <main>
        <div className="image-container">
            <img src={board_1} alt="board"/>
            <div className="overlay-board">
                <div>Feel like you're in <br/> seventh heaven</div>
                <button>Create recipes</button>
                <button>Explore cocktails</button>
            </div>
            <div className="blur-white-circle" style={{bottom: "-7%", right: '44%', width: '175px', height: '109px'}}></div>
            <div className="blur-circle" style={{top: "15%", right: "-10%", width: "369px", height: "449px"}}></div>
            <div className="blur-circle" style={{top: "-40%", left: "5%", width: "369px", height: "369px"}}></div>
            <div className="blur-circle" style={{top: "30%", left: "0", width: "269px", height: "269px"}}></div>
        </div>  

        <div className="cocktails">
            <div className="cocktails__title">
                <span>Popular cocktails</span>
                <a href="#">View all cocktails</a>
            </div>
            <div className="cocktails__items">
            {cocktails.length > 0 ? (
              cocktails.slice(0, 3).map((cocktail) => (
                <div className="cocktails__item popular">
                    <div>
                        <img src={cocktail.photo_url} alt="cocktail-image"/>
                        <div className="overlay-likes">
                            <span>{cocktail.likes}</span>
                            <img src={like} alt="like"/>
                        </div>
                    </div>
                    <span>{cocktail.name}</span>
                    <a href="#">See recipe</a>
                </div>
              ))):
              (
                <p>No cocktails available</p>
              )
            }
            </div>
            <div className="blur-circle" style={{top: "-20%", left: "0", width: "336px", height: "587px", transform: "rotate(45deg)"}}></div>
            <div className="blur-circle" style={{top: "0", right: "0%", width: "269px", height: "269px"}}></div>
        </div>


        <div className="instruction">
            <div className="instruction__imgs">
                <div>
                    <img src={instruction_1} alt=""/>
                    <img src={instruction_2} alt=""/>
                </div>
            </div>
            <div className="instruction__content">
                <div className="instruction__title">
                    Instruction how to create recipes
                </div>
                <ul className="instruction__items">
                    <li>First of all, name your cocktail.</li>
                    <li>Choose main spirit of your cocktail.</li>
                    <li>Choose flavor of your cocktail.</li>
                    <li>Choose difficulty of your cocktail.</li>
                    <li>Choose ingredients of your cocktail and their quantity.</li>
                    <li>Add step by step instruction of your cocktail.</li>
                    <li>Wait when check will be over and your recipe will be on our website.</li>
                </ul>
                <button>Create recipes</button>
            </div>
        
        </div>


        <div className="season">
            <div className="season__title">
                <span>Cocktails for season</span>
            </div>
            <div className="season__cocktails">
                
                {cocktails.length > 3 ? (
                cocktails.slice(3, 5).map((cocktail) => (
                    <div>
                    <div className="image-container">
                        <img src={cocktail.photo_url} alt="cocktail"/>
                        <div>
                            <span>For spring</span>
                            <div><a href="#">{cocktail.name}  <img src={arrow} alt=""/></a> </div>
                        </div>
                    </div>
            </div>
                ))):
                (
                    <p>No cocktails available</p>
                )
                }

            </div>
            <div className="blur-circle" style={{top: "-140%", left: "40%", width: "269px", height: "269px"}}></div>
            <div className="blur-circle" style={{top: "-50%", left: "-5%", width: "369px", height: "269px"}}></div>
            <div className="blur-circle" style={{top: "-50%", right: "0%", width: "369px", height: "300px"}}></div>
            <div className="blur-circle" style={{top: "0", right: "40%", width: "369px", height: "300px"}}></div>
            <div className="blur-circle" style={{top: "35%", left: "5%", width: "369px", height: "369px"}}></div>
        </div>


        <div className="cocktails">
            <div className="cocktails__title">
                <span>Trending cocktails</span>
                <a href="#">View all cocktails</a>
            </div>
            <div className="cocktails__items">

                {cocktails.length > 5 ? (
                    cocktails.slice(5, 8).map((cocktail) => (
                        <div className="cocktails__item">
                        <div>
                            <img src={cocktail.photo_url} alt="cocktail-image"/>
                            <div className="overlay-likes">
                                <span>{cocktail.likes}</span>
                                <img src={like} alt="like"/>
                            </div>
                        </div>
                        <span>{cocktail.name}</span>
                        <a href="#">See recipe</a>
                    </div>
                    ))):
                    (
                        <p>No cocktails available</p>
                    )
                }
            
            </div>
            <div className="blur-circle" style={{top: "-10%", right: "0", width: "259px", height: "259px"}}></div>
            <div className="blur-circle" style={{top: "5%", left: "20%", width: "469px", height: "469px"}}></div>
        </div>

        <div className="with-us">
            <div className="with-us__title">
                <span>Why you should be with us?</span>
            </div>
            <div className="with-us__items">
                <div className="with-us__item">
                    <img src={with_us_1} alt=""/>
                    <div>List of favourite <br/> recipes and articles</div>
                </div>
                <div className="with-us__item">
                    <img src={with_us_2} alt=""/>
                    <div>Build your virtual cocktail bar</div>
                </div>
                <div className="with-us__item">
                    <img src={with_us_3} alt=""/>
                    <div>Receive invites to attend cocktail events</div>
                </div>
            </div>
            <div className="blur-circle" style={{top: "140%", right: "10%", width: "570px", height: "336px", transform: "rotate(30deg)"}}></div>
            <div className="blur-circle" style={{top: "50%", left: "-25%", width: "570px", height: "336px"}}></div>
        </div>
    </main>

  <FooterComponent/>
</div>
  );
};

export default HomePage;
