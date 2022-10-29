import { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header'
import Content from './components/Content'
import Modal from './components/Modal'

function App() {
    const [liquor, setLiquor] = useState(null)
    const [drink, setDrink] = useState(null)
    
    if (liquor) {
        return (
            <div>
            <Header 
            setLiquor={setLiquor}
            />
            <Content 
            liquor={liquor}
            setDrink={setDrink}
            />
            <Modal
            drink={drink}
            />
            </div>
        );
    } else return (
        <div>
        <Header 
        setLiquor={setLiquor}
        />
        <h2>Select a liquor from the menu!</h2>
        </div>
    )
}

export default App;
