import React from 'react'
import styled from 'styled-components'
import Loading from '../components/Loading';
import NewsCard from '../components/NewsCard';
import { useGlobalContext } from '../context/context'

function News() {
    const { newsQuery, newsSearch, news, coins, loading } = useGlobalContext();
    if (loading) {
        return <Loading />
    }
    return (
        <Wrapper>
            <section className="search-section">
                <form onSubmit={(e) => e.preventDefault()}>
                    <select className="select" value={newsSearch} onChange={(e) => { newsQuery(e.target.value) }}>
                        <option className='option'>select a Crypto</option>
                        {
                            coins.map((coin, index) => {
                                return <option key={index} value={coin.name}>{coin.name}</option>
                            })
                        }
                    </select>
                </form>
            </section>
            {
                <section className="cryptos">
                    {news.map((article, index) => {
                        return <NewsCard key={index} {...article} />
                    })}
                </section>
            }
        </Wrapper>
    )

}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    .cryptos{
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(400px,1fr));
        grid-row-gap: 2rem;
        grid-column-gap: 2rem;
    }
    .option{
        color: #d9d9d9;
        display: none;
    }
    .search-section{
        display: flex;
        background-color: inherit;
        /* justify-content: center; */
        align-items: center;
        width: 100%;
        height: 70px;

    }
    .select{
        width: 200px;
        padding: 5px;
        border-radius: 3px;
        font-size: 1.1rem;
        text-transform: capitalize;
        border: 1px solid #d9d9d9;
    }
    .select:focus{
        border: 1px solid #218AE3;
        outline: none;
    }
    
`
export default News
