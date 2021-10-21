import React, { useState } from 'react'
import styled from 'styled-components';
import Cards from '../components/Cards';
import Loading from '../components/Loading';
import { useGlobalContext } from '../context/context';

function Cryptos() {
    const { coins, loading } = useGlobalContext()
    const [query, setQuery] = useState('');
    const handleChange = (e) => {
        setQuery(e.target.value)
    }
    const filteredCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(query.toLowerCase())
    );

    if (loading) {
        return <Loading />
    }

    return (
        <Wrapper>
            <section className="search-section">
                <form onSubmit={(e) => e.preventDefault()}>
                    <input autoComplete='off' type="text" value={query} onChange={handleChange} name="search" placeholder='Search Cryptocurrency' />
                </form>
            </section>
            {
                <section className="cryptos">
                    {!query ?
                        coins.map((coin, index) => {
                            return <Cards key={index} {...coin} />
                        }) :
                        (filteredCoins.map((item, index) => {
                            return <Cards key={index} {...item} />
                        }))
                    }
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
        grid-template-columns: repeat(auto-fill,minmax(280px,1fr));
        grid-row-gap: 2rem;
        grid-column-gap: 2rem;
    }

    .search-section{
        display: flex;
        background-color: inherit;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 70px;
        input{
            width: 14rem;
            padding: .3rem;
            font-size: 1.1rem;
        }

    }
`

export default Cryptos
