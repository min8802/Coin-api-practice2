import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {

    const[coin, setCoin] = useState([]);

    const getCoin = async () => {
        const response = await axios.get(
            "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=10",
            {
                headers : {
                    accept : "application/json",
                    'x-cg-demo-api-key' : 'CG-hVJ7XjqbmpfZmQQduNBShj3X'
                }
            }
        );
        console.log(response.data);
        setCoin(response.data)
    };

    useEffect(() => {
        getCoin();
    },[])

    return(
        <div className="flex justify-center">
            coin : {coin.length > 0 && coin[0].name}
        </div>
    );
};

export default Home;