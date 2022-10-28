import { useState, useEffect } from 'react'
import axios from 'axios'

function Modal(props) {
    const drinkURL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
    const [closed, setClosed] = useState(false)
    const [drinkInfo, setDrinkInfo] = useState({})

    const handleClick = () => {
        setClosed(!closed)
    }
    
    const fetchDrinks = async () => {
        let res = await axios.get(drinkURL + props.drink)
        setDrinkInfo(res.data.drinks[0])
    }

    
    useEffect(() => {
        handleClick()
        fetchDrinks()
    }, [props.drink])

    return (
        <div className={`modal ${closed ? `closed` : ``}`} id={`modal`}>
            <button className='modal-close' type='button'
            onClick={handleClick}>
                <i className='material-icons'>close</i>
            </button>
            {drinkInfo &&
            <div className='modal-guts'>
                <img src = {drinkInfo.strDrinkThumb} height='400px' width='350px'/>
                <h2>{drinkInfo.strDrink}</h2>
            </div>
            }
        </div>
    )
}

export default Modal
