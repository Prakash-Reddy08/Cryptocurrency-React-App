import React from 'react'
import styled from 'styled-components'
import { useGlobalContext } from '../context/context'
import NewsCard from './NewsCard';

function CryptoNews() {
    const { homeNews } = useGlobalContext()
    const newData = homeNews.slice(0, 6);
    return (
        <Wrapper>
            <div className="grid-container">
                {
                    newData.map((news, index) => {
                        return <NewsCard key={index} {...news} />
                    })
                }
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    .grid-container{
        display: grid;
        grid-template-columns: repeat(auto-fit,minmax(400px,1fr));
        grid-row-gap: 2rem;
        grid-column-gap: 2rem;
    }
`


export default CryptoNews
