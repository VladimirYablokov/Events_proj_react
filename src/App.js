import './App.css';
import StartPage from "./components/StartPage";
import {useState} from "react";
import {MyContext} from "./context";


function App() {
    const [deals, setDeals] = useState([
        {
            id: 1,
            date: '19.01.2023',
            description: 'Описание'
        },
        {
            id: 2,
            date: '19.01.2023',
            description: 'Описание'
        },
    ]);

    return (

        <div className="App">
            <MyContext.Provider value={deals}>
                <StartPage deals={deals}/>
            </MyContext.Provider>
        </div>
    );
}

export default App;
