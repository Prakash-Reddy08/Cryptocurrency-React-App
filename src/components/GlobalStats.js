import React from 'react'
import styled from 'styled-components';
import { useGlobalContext } from '../context/context';
import formatNumber from '../extras/FormatNumber';

function GlobalStats() {
    const { global } = useGlobalContext();
    return (
        <Wrapper>
            <div className='container'>
                <div className="left">
                    <p>Total Cryptocurrencies</p>
                    <h4>{global.totalCoins}</h4>
                    <p>Total Market Cap</p>
                    <h4>{formatNumber(global.totalMarketCap)}</h4>
                    <p>Total Markets</p>
                    <h4>{formatNumber(global.totalMarkets)}</h4>
                </div>
                <div className="right">
                    <p>Total Exchanges</p>
                    <h4>{formatNumber(global.totalExchanges)}</h4>
                    <p>Total 24h volume</p>
                    <h4>{formatNumber(global.total24hVolume)}</h4>
                </div>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .container{
        display: flex;
        padding-top: 1.3rem;
    }
    .left{
        width: 50%;
    }
    .right{
        width: 50%;
    }
    p{
        color: rgba(0,0,0,.65);
        text-transform: capitalize;
        line-height: 2.4;
    }
    h4{
        font-weight: 400;
        color: rgba(0,0,0,.85);
        font-size: 24px;
    }

`

export default GlobalStats
