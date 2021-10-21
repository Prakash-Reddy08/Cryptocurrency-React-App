import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CryptoCards } from '../components/CryptoCards';
import CryptoNews from '../components/CryptoNews';
import GlobalStats from '../components/GlobalStats';
import Loading from '../components/Loading';
import { useGlobalContext } from '../context/context';

function Home() {
    const { loading } = useGlobalContext();
    if (loading) {
        return <Loading />
    }
    return (
        <Wrapper>
            <h1>Global crypto stats</h1>
            <GlobalStats />
            <div className='cards-container'>
                <div className='top10'>
                    <h2>Top 10 cryptocurrencies in the world</h2>
                    <Link to='/cryptos'>Show More</Link>
                </div>
                <CryptoCards />
            </div>
            <div className='news-container'>
                <div className='news'>
                    <h2>Latest crypto news</h2>
                    <Link to='/cryptonews'>Show More</Link>
                </div>
                <CryptoNews />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 1rem;
    h1{
        font-size: 30px;
        font-weight: 600;
        color: rgba(0,0,0,.85);
        line-height: 1.3;
        text-transform: capitalize;
    }

    h2{
        font-size: 28px;
        font-weight: 600;
        color: rgba(0,0,0,.85);
        line-height: 2;
        text-transform: capitalize;
        
    }
    
    .top10,.news{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        margin-top: 2rem;
        a{
            color: #1890FF;
            text-decoration: none;
            list-style-type: none;
            font-weight: 600;
            font-size: 25px;
        }
    }

    .cards-container,.news-container{
        display: flex;
        flex-direction: column;
    }

`

export default Home
