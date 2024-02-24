import './App.css';
import StartPage from "./components/StartPage";
import {useEffect, useState} from "react";
import {MyContext} from "./context";

function App() {
    const [deals, setDeals] = useState([]);
    console.log(deals)

    useEffect(() => {
        const deals = JSON.parse(localStorage.getItem('deals')) ?? [];
        setDeals(() => deals)
    }, []);

    useEffect(() => {
        localStorage.setItem('deals', JSON.stringify(deals))
    }, [deals])

    const addDeal = (deal) => {
        setDeals(prev => [...prev, deal])
    }

    const closeDeal = (id) => {
        setDeals(prev => {
            return prev.filter(elem => elem.id !== id)
        })
    }

    const clearDeals = () => {
        localStorage.removeItem('deals');
        setDeals([])
    }

    const convertDate = (inputDate) => {
        let date = new Date(inputDate)
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        month = month < 10 ? '0' + month : month
        day = day < 10 ? '0' + day : day
        return `${day}.${month}.${year}`
    }

    const getFinishDate = (inputDate) => {
        let startDate = convertDate(inputDate);
        startDate.setDate(startDate.getDate() + 7);
        return startDate
    }

    // const convertDate = (inputDate) => {
    //     return new Date(inputDate);
    // }

    // const getFinishDate = (inputDate) => {
    //     const startDate = convertDate(inputDate);
    //     startDate.setDate(startDate.getDate() + 7);
    //     return startDate;
    // }

    return (
        <MyContext.Provider value={{deals, addDeal, closeDeal, clearDeals, convertDate, getFinishDate}}>
            <StartPage/>
        </MyContext.Provider>
    );
}

export default App;
