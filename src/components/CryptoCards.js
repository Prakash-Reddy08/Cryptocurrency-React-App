import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/context'
import Cards from './Cards';

function CryptoCards() {
    const { coins } = useGlobalContext()
    return (
        <Wrapper>
            <div className="flex-container">
                {coins.slice(0, 10).map((coin, index) => {
                    return <Cards key={index} {...coin} />
                })}
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
white-space: nowrap;
    .flex-container{
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(280px,1fr));
        grid-row-gap: 2rem;
        grid-column-gap: 2rem;
    }

`



export { CryptoCards }
