import './App.css';
import StartPage from "./components/StartPage";
import {useEffect, useState} from "react";
import {MyContext} from "./context";


function App() {
    const [deals, setDeals] = useState([
        // {
        //     id: 1,
        //     startDate: '19.01.2023',
        //     finishDate: '29.01.2023',
        //     description: 'это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник '
        // },
        // {
        //     id: 2,
        //     startDate: '19.01.2024',
        //     finishDate: '29.01.2024',
        //     description: 'это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник '
        // },
    ]);

    useEffect(() => {
        const deals = JSON.parse(localStorage.getItem('deals')) ?? [];
        setDeals(()=>deals)
    },[]);

    useEffect(()=>{
        localStorage.setItem('deals', JSON.stringify(deals))
    },[deals])

    const addDeal = (deal) => {
        setDeals(prev => [...prev, deal])
    }

    const closeDeal = (id) => {
        setDeals(prev => {
            return prev.filter(elem => elem.id !==id)
        })
    }

    const clearDeals = () => {
        console.log(`clear`)
        localStorage.removeItem('deals');
        setDeals([])
    }


    return (
        <div className="App">
            <MyContext.Provider value={{deals, addDeal, closeDeal, clearDeals}}>
                <StartPage/>
            </MyContext.Provider>
        </div>
    );
}

export default App;
