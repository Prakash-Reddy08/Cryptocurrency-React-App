import React from 'react'
import styled from 'styled-components'
import image from '../images/crypto-loader.gif'

function Loading() {
    return (
        <Wrapper>
            <div>
                <img src={image} alt="loading" />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: white;
    img{
        width: 200px;
        height:200px;
    }
    @media (max-width:800px){
        margin: auto;
    }
`

export default Loading
