/* eslint-disable react/no-danger-with-children */
import { useState } from 'react';
import { useParams } from 'react-router'
import styled from 'styled-components';
import Chart from '../components/Chart';
import Loading from '../components/Loading';
import { useGlobalContext } from '../context/context';
import formatNumber from '../extras/FormatNumber';

function SingleCrypto() {
    const { coinHistoryQuery, global, coinHistory, coinMarket, loading, singleCoinData } = useGlobalContext();
    const params = useParams();
    if (loading) {
        return <Loading />
    }
    return (
        <Wrapper>
            <header>
                <h1><span className='name'>{params.id}</span> Price</h1>
                <p><span className='name'>{params.id}</span> live price in US dollars. View value statistics, market cap and supply.</p>
            </header>
            <hr />
            <section className="chart">
                <div className="chart-head">
                    <div>
                        <select defaultValue={coinHistory.days} onChange={(e) => {
                            coinHistoryQuery(e.target.value, params.id);
                        }}>
                            <option value='1'>1d</option>
                            <option value='7'>7d</option>
                            <option value='30'>30d</option>
                            <option value='365'>1y</option>
                            <option value='1095'>3y</option>
                        </select>
                    </div>
                    <div className="info">
                        <p>Current ({params.id}) Price: ${formatNumber(singleCoinData?.market_data?.current_price?.usd)}</p>
                    </div>
                </div>
                <div className="line-chart">
                    <Chart marketData={coinMarket} id={params.id} />
                </div>
            </section>
            <div className="stats">
                <div className="currentStats">
                    <h2>
                        {params.id} Value Statistics</h2>
                    <p>An overview showing the stats of Bitcoin</p>
                    <div className="stackInfo">
                        <ul>
                            <li>
                                price to USD
                                <span>
                                    ${formatNumber(singleCoinData?.market_data?.current_price?.usd)}

                                </span>
                            </li>
                            <li>
                                Rank <span>{formatNumber(singleCoinData?.market_cap_rank)}</span>
                            </li>
                            <li>
                                24h Volume
                                <span>
                                    ${formatNumber(singleCoinData?.market_data?.total_volume?.usd)}

                                </span>
                            </li>
                            <li>
                                Market Cap
                                <span>
                                    ${formatNumber(singleCoinData?.market_data?.market_cap?.usd)}

                                </span>
                            </li>
                            <li>
                                All-time-high(daily avg.)
                                <span>
                                    ${formatNumber(singleCoinData?.market_data?.high_24h?.usd)}

                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="otherStats">
                    <h2>Other Statistics</h2>
                    <p>An overview showing the stats of all crpytocurrencies</p>
                    <div className="stackInfo">
                        <ul>
                            <li>
                                Total Cryptocurrencies <span>{global.totalCoins}</span>
                            </li>
                            <li>
                                Total Mraket Cap <span>{formatNumber(global.totalMarketCap)}</span>
                            </li>
                            <li>
                                Total Markets <span>{formatNumber(global.totalMarkets)}</span>
                            </li>
                            <li>
                                Total Exchanges <span>${formatNumber(global.totalExchanges)}</span>
                            </li>
                            <li>
                                Total 24h Volume <span>${formatNumber(global.total24hVolume)}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='desc-section'>
                <h4>About {params.id}</h4>
                <div className='desc' dangerouslySetInnerHTML={{ __html: singleCoinData?.description?.en }} />
            </div>
        </Wrapper>
    )

}

const Wrapper = styled.div`

    .desc-section{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 3rem;
        h4{
            text-transform: capitalize;
            font-size: 29px;
            font-weight: 600;
            color: #0071BD;
        }
        a{
            text-decoration: none;
            color:inherit;
            :hover{
                color: #0071BD;
            }
        }
        .desc{
            margin-top: 2rem;
            font-weight: 500;
            font-size: 1.199rem;
        }
    }

    .stats{
        line-height: 2.5;
        padding: 3rem;
        li{
            list-style-type: none;
        }
        h2{
            text-transform: capitalize;
            display: flex;
            justify-content: center;
            font-weight: 600;
            font-size: 24px;
        }
        p{
            display: flex;
            justify-content: center;
        }
        h2,p,li{
            color: rgba(0,0,0,0.85);
        }
            .stackInfo{
                ul{
                    li{
                        display: flex;
                        justify-content: space-between;
                        padding: 1.2rem;
                        font-size: 1.1rem;
                        border-bottom: 1px solid #c0c0c0;
                        :hover{
                            background-color: white;
                            cursor: default;
                        }
                        span{
                            font-weight: 800;
                        }
                    }
                }
            }
    }


    .name{
        text-transform: capitalize;
    }
    h1{
        font-weight: 900;
        /* font-size: xx-large; */
        color: rgb(0,113,189);
    }
    header{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        height: 200px;
        p{
            color: rgba(0,0,0,0.85);
        }
    }

    hr{
        border: 1px solid #d9d9d9;
    }
    .chart{
        display: flex;
        flex-direction: column;
    }
    .chart-head{
        display: flex;
        height: 50px;
        justify-content: space-between;
        align-items: center;
        select{
            width: 150px;
            height: 30px;
            outline: none;
            border: 1px solid #d9d9d9;
            :focus{
                outline: none;
            }
            
        }
        .info{
            display: flex;
            p{
                margin-left: 2rem;
                text-transform: capitalize;
                font-weight: 900;
                font-size: 18px;
                text-transform: capitalize;
                color: rgba(0,0,0,0.85);
            }
        }
    }
`

export default SingleCrypto
