import React, {useEffect, useState} from 'react';
import axios from 'axios'
const API_KEY = 'FWXQZMPYDDTIE7C0'

const url = (stock) => `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${stock}&apikey=${API_KEY}`
const url1 = `http://finance.google.com/finance/info?client=ig&q=NASDAQ:GOOG,NASDAQ:YHOO`

const Stocks = () => {
    const [stocks,setStocks] = useState(['TSLA','SQ'])
    const addStock = (stock) => setStocks([...stocks,stock])
    console.log('Stocks')
    return (
       <div>
           <StocksList stocks={stocks}/>
           <StocksInput addStockCallback={addStock}/>
       </div>
    );
}

const StocksInput = ({addStockCallback}) => {
    // useEffect(()=>{addStockCallback('liam3')},[])
    console.log('StocksInput')
    return (
       <div>
           <button onClick={()=>{addStockCallback('GME')}}>Add Stock</button>
       </div>
    );
}

const StocksList = ({stocks}) => {
    console.log('StocksList')
    const [stocksPrices,setStocksPrices] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const config = {
                headers: {'Access-Control-Allow-Origin': '*'}
            };
            const x = await axios(url1, config)
            console.log(x)
            await stocks.map(async stock => {
                await axios(url(stock)).then(res => {
                    setStocksPrices([...stocksPrices, res.data])
                })
            })
        };
        fetchData();
    }, []);

    return (
       <div>
           {stocksPrices.map(stocksPrice => {
               console.log(stocksPrice)
               return (
                       <div key={stocksPrice}> {stocksPrice}</div>
                   )
               }
           )}
       </div>
    );
}

export default Stocks;
