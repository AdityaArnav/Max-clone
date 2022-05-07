import React from 'react';
import { Link } from "react-router-dom";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';

import styled from "styled-components";


const Wrap = styled.div`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
nav{
  position: fixed;
  z-index: 99;
  width: 100%;
  margin-top:2.8%;
  
  background: #f7f8f7;
}
nav .wrapper{
  position: relative;
  max-width: 1300px;
  padding: 0px 30px;
  height: 70px;
  line-height: 70px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

}

.wrapper .logo{
  color: #f2f2f2;
  font-size: 30px;
  font-weight: 600;
  text-decoration: none;
}
.wrapper .nav-links{
  display: inline-flex;
}
.nav-links li{
  list-style: none;
}
.nav-links li a{
  color:black;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  padding: 20px 20px;
  border-radius: 5px;
  transition: all 0.3s ease;
}
.nav-links li a:hover{
  background: white;
  color:gray;
}
.nav-links .mobile-item{
  display: none;
}
.nav-links .drop-menu{
  position: absolute;
  background: white;
  width: 100%;
  line-height: 45px;
  top: 85px;
  display:inline-block;
  opacity: 0;
  visibility: hidden;
  box-shadow: 0 6px 10px rgba(0,0,0,0.15);
  transition: top 0.3s;
}
.nav-links li:hover .drop-menu,
.nav-links li:hover .mega-box{
  transition: all 0.3s ease;
  top: 70px;
  opacity: 1;
  visibility: visible;
}
.row img{
  cursor: pointer;
 
}
.drop-menu li a{
  width: 100%;
  display: block;
  padding: 0 0 0 0px;
  font-weight: 400;
  border-radius: 0px;
}
.mega-box{
  position: absolute;
  left: 0;
  width: 100%;
  padding: 0 0px;
  top: 85px;
  opacity: 0;
  visibility: hidden;
}
.mega-box .content{
  background: white;
  padding: 25px 20px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  box-shadow: 0 6px 10px rgba(0,0,0,0.15);
}
.mega-box .content .row{
  width: calc(25% - 30px);
  line-height: 45px;
}
.content .row img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.content .row header{
  color: Black;
  font-size: 16px;
  font-weight: 600;
}
.content .row .mega-links{
  margin-left: -40px;
  border-left: 1px solid rgba(255,255,255,0.09);
}
.row .mega-links li{
  padding: 0 20px;
}
.row .mega-links li a{
  padding: 0px;
  padding: 0 20px;
  color: black;
  font-size: 17px;
  display: block;
}
.row .mega-links li a:hover{
  color: blue;
  text-decoration: underline;
}
.wrapper .btn{
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  display: none;
}
.wrapper .btn.close-btn{
  position: absolute;
  right: 30px;
  top: 10px;
}

@media screen and (max-width: 0px) {
  .wrapper .btn{
    display: block;
  }
  .wrapper .nav-links{
    position: fixed;
    height: 100vh;
    width: 100%;
    max-width: 350px;
    top: 0;
    left: -100%;
    background: #242526;
    display: block;
    padding: 50px 10px;
    line-height: 50px;
    overflow-y: auto;
    box-shadow: 0px 15px 15px rgba(0,0,0,0.18);
    transition: all 0.3s ease;
  }
  /* custom scroll bar */
  ::-webkit-scrollbar {
    width: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #242526;
  }
  ::-webkit-scrollbar-thumb {
    background: #3A3B3C;
  }
  #menu-btn:checked ~ .nav-links{
    left: 0%;
  }
  #menu-btn:checked ~ .btn.menu-btn{
    display: none;
  }
  #close-btn:checked ~ .btn.menu-btn{
    display: block;
  }
  .nav-links li{
    margin: 15px 10px;
  }
  .nav-links li a{
    padding: 0 20px;
    display: block;
    font-size: 20px;
  }
  .nav-links .drop-menu{
    position: static;
    opacity: 1;
    top: 65px;
    visibility: visible;
    padding-left: 20px;
    width: 100%;
    max-height: 0px;
    overflow: hidden;
    box-shadow: none;
    transition: all 0.3s ease;
  }
  #showDrop:checked ~ .drop-menu,
  #showMega:checked ~ .mega-box{
    max-height: 100%;
  }
  .nav-links .desktop-item{
    display: none;
  }
  .nav-links .mobile-item{
    display: block;
    color: #f2f2f2;
    font-size: 20px;
    font-weight: 500;
    padding-left: 20px;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.3s ease;
  }
  .nav-links .mobile-item:hover{
    background: #3A3B3C;
  }
  .drop-menu li{
    margin: 0;
  }
  .drop-menu li a{
    border-radius: 5px;
    font-size: 18px;
  }
  .mega-box{
    position: static;
    top: 65px;
    opacity: 1;
    visibility: visible;
    padding: 0 20px;
    max-height: 0px;
    overflow: hidden;
    transition: all 0.3s ease;
  }
  .mega-box .content{
    box-shadow: none;
    flex-direction: column;
     padding: 20px 20px 0 20px;
  }
  .mega-box .content .row{
    width: 100%;
    margin-bottom: 15px;
    border-top: 1px solid rgba(255,255,255,0.08);
  }
  .mega-box .content .row:nth-child(1),
  .mega-box .content .row:nth-child(2){
    border-top: 0px;
  }
  .content .row .mega-links{
    border-left: 0px;
    padding-left: 15px;
  }
  .row .mega-links li{
    margin: 0;
  }
  .content .row header{
    font-size: 19px;
  }
}
input{
 height:35px;
 width:250px;
 margin-right:150px;
}
textarea:focus, input:focus{
    outline: none;
}


.body-text{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  padding: 0 30px;
}
.body-text div{
  font-size: 45px;
  font-weight: 600;
}


`



export const NavbarSecond = () => {
  // const { token } = useContext(AuthContext);
  // use token to chnage the text from Login to Logout once logged in successfully
 
  return (
    <>
    <Wrap>

  <nav>
    <div class="wrapper">
     <Link class="logo" to="/home"><img style={{ width: "110px" }} src="https://i1.lmsin.net/website_images/in/logos/header/logo-max.svg" alt="logo"  /></Link>
      {/* <input type="radio" name="slider" id="menu-btn"/> */}
      {/* <input type="radio" name="slider" id="close-btn"/> */}
      <ul class="nav-links">
          
          <li>  <Link class="desktop-item" to="/women">Women</Link> 
          <label for="showMega" class="mobile-item"></label>
          <div class="mega-box">
            <div class="content">
            
              <div class="row">
                <header>Verieties of Women Dresses</header>
                <ul class="mega-links">
                  <li><Link class="desktop-item" to="/tops">Tops</Link></li>
                  <li><Link class="desktop-item" to="/bottoms">Bottoms</Link></li>
                  <li><Link class="desktop-item" to="/indian-wear">Indian Wear</Link></li>
                  <li><Link class="desktop-item" to="/accessories">Accessories</Link></li>
                  <li><Link class="desktop-item" to="/winterwear">Winterwear</Link></li>
                  {/* <li><Link class="desktop-item" to="/more">More</Link></li> */}

                </ul>
              </div>
              <div class="row">
              <img src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/Max-Flyout-Women-Bottoms-Desktop2-05Nov2019.jpg"/>
              </div>
              <div class="row">
              <img src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/Max-Flyout-Women-SportsWear-Desktop1-05Nov2019.jpg"/>
              </div>
              <div class="row">
              <img src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/Max-Flyout-Women-Winterwear-Desktop1-05Nov2019.jpg"/>
              </div>
            </div>
          </div>
        </li>



        <li>  <Link class="desktop-item" to="/men">Men</Link> 
          <label for="showMega" class="mobile-item"></label>
          <div class="mega-box">
            <div class="content">
            
              <div class="row">
                <header>Verieties of Men Dresses</header>
                <ul class="mega-links">
                  <li><Link class="desktop-item" to="/shirt">Shirts</Link></li>
                  <li><Link class="desktop-item" to="/pent">Pents</Link></li>
                  <li><Link class="desktop-item" to="/indian-wear">Indian Wear</Link></li>
                  <li><Link class="desktop-item" to="/accessories">Accessories</Link></li>
                  <li><Link class="desktop-item" to="/winterwear">Winterwear</Link></li>
                  <li><Link class="desktop-item" to="/more">More</Link></li>

                </ul>
              </div>
              <div class="row">
                <img src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/Max-Flyout-Mens-Ethnicwear-Desktop1-05Nov2019.jpg" alt="" />
              </div>
              <div class="row">
               <img src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/Max-Flyout-Mens-Tops-Desktop2-19May2021.jpg" alt="" />
              </div>
              <div class="row">
               <img src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/Max-Flyout-Mens-Bottoms-Desktop3-05Nov2019.jpg " alt="" />
              </div>
            </div>
          </div>
        </li>

        <li>  <Link class="desktop-item" to="/girls">Girls</Link> 
          <label for="showMega" class="mobile-item"></label>
          <div class="mega-box">
            <div class="content">
            
              <div class="row">
                <header>Verieties of Girls Dresses</header>
                <ul class="mega-links">
                  <li><Link class="desktop-item" to="/tops">Tops</Link></li>
                  <li><Link class="desktop-item" to="/bottoms">Bottoms</Link></li>
                  <li><Link class="desktop-item" to="/indian-wear">Indian Wear</Link></li>
                  <li><Link class="desktop-item" to="/accessories">Accessories</Link></li>
                  <li><Link class="desktop-item" to="/winterwear">Winterwear</Link></li>
                  <li><Link class="desktop-item" to="/more">More</Link></li>

                </ul>
              </div>
              <div class="row">
                <img src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/Max-Flyout-Girls-Tops-Desktop1-05Nov2019.jpg" alt="" />
              </div>
              <div class="row">
                <img src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/Max-Flyout-Girls-Tops-Desktop2-05Nov2019.jpg" alt="" />
              </div>
              <div class="row">
                 <img src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/Max-Flyout-Girls-OE-Desktop1-05May22.jpg" alt="" />
              </div>

            </div>
          </div>
        </li>

        <li>  <Link class="desktop-item" to="/boys">Boys</Link> 
          <label for="showMega" class="mobile-item"></label>
          <div class="mega-box">
            <div class="content">
            
              <div class="row">
                <header>Verieties of Boys Dresses</header>
                <ul class="mega-links">
                  <li><Link class="desktop-item" to="/shirt">Shirts</Link></li>
                  <li><Link class="desktop-item" to="/pent">Pents</Link></li>
                  <li><Link class="desktop-item" to="/indian-wear">Indian Wear</Link></li>
                  <li><Link class="desktop-item" to="/accessories">Accessories</Link></li>
                  <li><Link class="desktop-item" to="/winterwear">Winterwear</Link></li>
                  <li><Link class="desktop-item" to="/more">More</Link></li>

                </ul>
              </div>
              <div class="row">
              <img src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/Max-Flyout-Boys-OE-Desktop1-05May2022.jpg" alt="" />
              </div>
              <div class="row">
                 <img src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/Max-Flyout-Boys-BabyBoy-Desktop4-04Mar2022.jpg" alt="" />
              </div>
              <div class="row">
                <img src="https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/MAX-Friday/MAX2.O/Max-Flyout-Boys-Shoes-Desktop1-05Nov2019.jpg" alt="" />
              </div>
            </div>
          </div>
        </li>

            <div><label ><SearchOutlinedIcon/></label><input type="text" placeholder='What are you looking for?'/></div>

 
            <li><Link to="/signup">Sign Up</Link>  </li>
            <li><Link to="/signin">Sign In</Link></li>
            <li><Link to="/basket">|  Basket <LocalMallRoundedIcon/> </Link></li>
      </ul>
      <label for="menu-btn" class="btn menu-btn"><i class="fas fa-bars"></i></label>
    </div>
  </nav>
    </Wrap>
    </>
)
  }


export default NavbarSecond