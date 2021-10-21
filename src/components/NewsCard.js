import React from 'react'
import styled from 'styled-components';
import moment from 'moment';

function NewsCard(news) {
    const { name, description, image, url, provider, datePublished } = news
    const defaultImage = "https://iitpkd.ac.in/sites/default/files/default_images/default-news-image_0.png"
    return (
        <Wrapper>
            <a href={url} target='_blank' rel='noopener noreferrer'>
                <div className="card">
                    <section className="header">
                        <p>{name}</p>
                        <img src={image ? image.thumbnail.contentUrl : defaultImage} alt="bitcoin" />
                    </section>
                    <div className="info">
                        <p>{description}</p>
                    </div>
                    <footer>
                        <div className='provider'>
                            <span className='provider-image' >
                                <img src={provider[0].image ? provider[0].image.thumbnail.contentUrl : defaultImage} alt="" />
                            </span>
                            <p>Business inside on MSN.com</p>
                        </div>
                        <div className='time'>
                            <p>{moment(datePublished).startOf("ss").fromNow()}</p>
                        </div>
                    </footer>
                </div>
            </a>
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
        position: relative;
        border: 1px solid #f0f0f0;
        padding: 1.7rem;
        background-color: #fff;
        cursor: pointer;
        transition: .3s ease;
        margin:10px 0px;
    }

    .card:hover{
        box-shadow: 4px 5px 6px 0px rgba(0,0,0,0.15);
    }

    .header{
        display: flex;
        /* flex-direction: row; */
        font-weight: 600;
        font-size: 22px;
        letter-spacing: 1px;
        max-width: 250px;
        min-width: 100%;
        margin-bottom: 20px;
        padding: 3px;
        color:rgba(0,0,0,0.85);
        img{
            width: 100px;
            height: 100px;
            margin-left: 10px;
        }
    }

    .info{
        font-weight: 400;
        color: #000;
        font-size: 1.06rem;
        max-width:320px;
        line-height: 1.4;
    }

    footer{
        margin-top: 15px;
        display: flex;
        align-items: center;
        padding-top: 9px;
        justify-content: space-between;
    }
    .provider{
        display: flex;
        align-items: center;
        img{
            height: 32px;
            object-fit: contain;
            border-radius: 50%;
        }
        p{
            padding-left: 5px;
            font-size: 15px;
            max-width: 180px;
        }
    }
    .time{
        p{
            font-size: 14px;
        }
    }
`

export default NewsCard
