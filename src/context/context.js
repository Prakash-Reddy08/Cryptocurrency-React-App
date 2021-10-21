import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { fetchCoinHistory, fetchCoins, fetchGlobal, fetchNews, fetchSingleCoin } from '../api/api';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [global, setGlobal] = useState({
        total24hVolume: '',
        totalCoins: '',
        totalExchanges: "",
        totalMarketCap: "",
        totalMarkets: ""
    });
    const [loading, setLoading] = useState(false);
    const [coins, setCoins] = useState([]);
    const [news, setNews] = useState([]);
    const [homeNews, setHomeNews] = useState([])
    const [newsSearch, setNewsSearch] = useState('cryptocurrency');
    const [coinHistory, setCoinHistory] = useState({
        days: "7",
        id: ""
    })
    const [coinMarket, setCoinMarket] = useState([])
    const [singleCoinData, setSingleCoinData] = useState();

    useEffect(() => {
        setLoading(true);
        Promise.all([
            fetchGlobal(),
            fetchCoins(),
            fetchNews('cryptocurrency')
        ]).then(([stats, cryptoCoins, cryptoNews]) => {
            const { total24hVolume, totalCoins, totalExchanges, totalMarketCap, totalMarkets } = stats.data
            setGlobal({
                total24hVolume,
                totalCoins,
                totalExchanges,
                totalMarketCap,
                totalMarkets
            });
            setCoins(cryptoCoins);
            setHomeNews(cryptoNews.value);
        }).then(() => {
            setLoading(false);
        })
    }, [])

    useEffect(() => {
        setLoading(true);
        fetchNews(newsSearch).then(res => {
            setNews(res.value)
            setLoading(false)
        })
    }, [newsSearch])

    const newsQuery = (query) => {
        setNewsSearch(query);
    }

    const coinHistoryQuery = async (days, id) => {
        setLoading(true);
        setCoinHistory({
            days,
            id
        });
        setLoading(false);
    }


    useEffect(() => {
        const { id, days } = coinHistory;
        setLoading(true);
        Promise.all([
            fetchSingleCoin(id),
            fetchCoinHistory(days, id)
        ]).then(axios.spread((...res) => {
            setSingleCoinData(res[0]);
            setCoinMarket(res[1].prices);
            setLoading(false);
        }))
    }, [coinHistory])




    return <AppContext.Provider value={
        {
            global,
            coins,
            news,
            newsQuery,
            newsSearch,
            coinHistoryQuery,
            coinMarket,
            coinHistory,
            loading,
            homeNews,
            singleCoinData,
        }
    }>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { useGlobalContext, AppProvider };