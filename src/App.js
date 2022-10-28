import { useState, useEffect } from 'react'
import './App.css';
import Header from './components/Header'
import Content from './components/Content'
import Modal from './components/Modal'

function App() {
    const [liquor, setLiquor] = useState('')
    const [drink, setDrink] = useState('')

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
}

export default App;
