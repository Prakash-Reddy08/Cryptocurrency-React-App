import React, { useState } from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react'
import image from '../images/icons8-iota (2).svg'
import { AiOutlineHome, AiOutlineBulb } from "react-icons/ai";
import { BsCurrencyBitcoin } from "react-icons/bs";

function Nav() {
    const [navSelected, setNavSelected] = useState(window.location.pathname);
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Wrapper>
            <nav className={`${isOpen ? 'nav' : null}`}>
                <header>
                    <img src={image} alt="" />
                    <h1>Cryptoverse</h1></header>
                <ul className={`${isOpen ? 'hamNav' : 'hideNav'}`} onClick={(e) => {
                    setNavSelected(window.location.pathname)
                }
                }>

                    <li className={navSelected === '/' ? 'active' : ''}>
                        <Link to='/' ><AiOutlineHome className='icon' /><p>Home</p></Link>
                    </li>
                    <li className={navSelected === '/cryptos' ? 'active' : ''}>
                        <Link to='/cryptos' ><BsCurrencyBitcoin className='icon' /><p>Cryptocurrencies</p></Link>
                    </li>
                    <li className={navSelected === '/cryptonews' ? 'active' : ""}>
                        <Link to='/cryptonews'><AiOutlineBulb className='icon' /><p>News</p> </Link>
                    </li>
                </ul>
                <span className="hamburger">
                    <Hamburger toggled={isOpen} toggle={setIsOpen} />
                </span>
            </nav>
        </Wrapper>
    )
}

const Wrapper = styled.div`
  *{
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    }
    
    a,li{
        color: inherit;
        text-decoration: none;
        list-style-type: none;
    }
    nav{  
        background-color: #001427;
        color: #F0F2F4;
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        min-width: 300px;
        max-width: 500px;
    }
    .active{
        background-color: #1890F7;
    }
    
    h1{
        color: #218AE3;
        font-size: xx-large;
      }
    header{
        display: flex;
        align-items: center;
    }

    img{
        margin:20px;
        width: 3rem;
    }

    ul{
        
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: flex-end;
        padding: 13px 0 13px 0;
    }

    li a{
        display: flex;
        flex-direction: row;
        font-size: 10px;
        width: 100%;
        align-items: baseline;
        padding: 10px 2px;
        .icon{
            display: none;
        }
        p{
            padding-left: 10px;
            font-size: 1.29rem;
        }
    }

    li:hover{
        background-color: #1890F7;
    }


    main{
        margin-left: 300px;
    }

    .hamburger{
        display: none;
    }
    
  @media (max-width:800px){
      nav{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        min-width: 100vw;
        justify-content: space-between;
        align-items: center;
        height: auto;
      }
      
      .nav{
          height: 200px;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          position: relative;
      }
      .hideNav{
          display: none;
      }
      .hamNav{
          display: flex;
          position: absolute;
          flex-direction: row;
          min-width: auto;
          max-width: 100px;
          justify-content: center;
          top:90px;
          left: 34%;
          li a{

              p,.icon{
                font-size: 1.2rem;
              }
          }
          li:hover{
              background-color: inherit;
              color: #1890F7;
          }
      }
      .active{
          background-color: inherit;
      }
      .hamburger{
        display: flex;
        position: relative;
        right: 20px;
      }
  }
`;

export default Nav
