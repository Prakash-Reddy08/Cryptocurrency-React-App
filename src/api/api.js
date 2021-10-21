import axios from 'axios';
const API_KEY = process.env.REACT_APP_API_KEY;

const fetchGlobal = async () => {
    let options = {
        method: 'GET',
        url: 'https://coinranking1.p.rapidapi.com/stats',
        headers: {
            'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
            'x-rapidapi-key': API_KEY
        }
    };
    const response = await axios.request(options);
    return response.data
}

const fetchCoins = async () => {
    var options = {
        method: 'GET',
        url: 'https://coingecko.p.rapidapi.com/coins/markets',
        params: { vs_currency: 'usd', page: '1', per_page: '100', order: 'market_cap_desc' },
        headers: {
            'x-rapidapi-host': 'coingecko.p.rapidapi.com',
            'x-rapidapi-key': API_KEY
        }
    };

    const response = await axios.request(options)
    return response.data
}

const fetchCoinHistory = async (days = 1, id = "bitcoin") => {

    var options = {
        method: 'GET',
        url: `https://coingecko.p.rapidapi.com/coins/${id || "bitcoin"}/market_chart`,
        params: { vs_currency: 'usd', days: `${days}` },
        headers: {
            'x-rapidapi-host': 'coingecko.p.rapidapi.com',
            'x-rapidapi-key': API_KEY
        }
    };

    const response = await axios.request(options);
    return response.data
}

const fetchSingleCoin = async (id) => {
    var options = {
        method: 'GET',
        url: `https://coingecko.p.rapidapi.com/coins/${id || 'bitcoin'}`,
        params: {
            localization: 'true',
            tickers: 'true',
            market_data: 'true',
            community_data: 'true',
            developer_data: 'true',
            sparkline: 'false'
        },
        headers: {
            'x-rapidapi-host': 'coingecko.p.rapidapi.com',
            'x-rapidapi-key': API_KEY
        }
    };

    const response = await axios.request(options);
    return response.data;
}

const fetchNews = async (article) => {
    var options = {
        method: 'GET',
        url: 'https://bing-news-search1.p.rapidapi.com/news/search',
        params: { q: article, freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off' },
        headers: {
            'x-bingapis-sdk': 'true',
            'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
            'x-rapidapi-key': API_KEY
        }
    };

    const response = await axios.request(options)
    return response.data
}

export { fetchGlobal, fetchCoins, fetchNews, fetchSingleCoin, fetchCoinHistory }