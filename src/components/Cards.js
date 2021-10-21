import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import { useGlobalContext } from '../context/context';
import formatNumber from '../extras/FormatNumber';

function Cards(coin) {
    const { coinHistoryQuery } = useGlobalContext();
    const { id, name, image, current_price: price, market_cap: marketCap, price_change_percentage_24h: priceChange, market_cap_rank: rank } = coin;

    return (
        <Wrapper>
            <Link to={`/crypto/${id}`} onClick={() => coinHistoryQuery(7, id)}>
                <div className="card">
                    <section className="header">
                        <p className='name'>{rank}. {name}</p>
                        <img src={image} alt="bitcoin" />
                    </section>
                    <div className="info">
                        <p>Price: {formatNumber(price)}</p>
                        <p>Market Cap: {formatNumber(marketCap)}</p>
                        <p>Daily Charge: {priceChange.toFixed(2)}%</p>
                    </div>
                </div>
            </Link>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    a{
        text-decoration: none;
        list-style-type:none;
        color: initial;
    }
    .card{
        border: 1px solid #f0f0f0;
        padding: 1.7rem;
        background-color: #fff;
        cursor: pointer;
        transition: .3s ease;
        /* margin:10px 8px; */
        /* margin-left: 9px; */
    }

    .card:hover{
        box-shadow: 1px 5px 6px 1px rgba(0,0,0,0.15);
    }
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        img{
            width: 35px;
        }
        padding-bottom: 1.3rem;
        border-bottom: 1px solid #f0f0f0;
    }
    .name{
        font-size: 1.199rem;
    }
    .info{
        padding-top: 1.4rem;
        padding-bottom: 0.2rem;
        p{
            line-height: 2.5;
            font-size: 1.2rem;
            color: rgba(0,0,0,.85);
        }
    }
`

export default Cards
