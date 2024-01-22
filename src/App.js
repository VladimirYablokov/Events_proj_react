import './App.css';
import StartPage from "./components/StartPage";
import {useState} from "react";
import {MyContext} from "./context";


function App() {
    const [deals, setDeals] = useState([
        {
            id: 1,
            startDate: '19.01.2023',
            finishDate: '29.01.2023',
            description: 'это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник '
        },
        {
            id: 2,
            startDate: '19.01.2024',
            finishDate: '29.01.2024',
            description: 'это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник '
        },
    ]);


    const addDeal = (deal) => {
        setDeals(prev => [...prev, deal])
    }

    return (

        <div className="App">
            <MyContext.Provider value={{deals, addDeal}}>
                <StartPage/>
            </MyContext.Provider>
        </div>
    );
}

export default App;
