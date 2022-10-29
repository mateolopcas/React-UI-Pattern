import { useState, useEffect } from 'react'
import axios from 'axios'

function Modal(props) {
    const drinkURL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='
    const [closed, setClosed] = useState(false)
    const [drinkInfo, setDrinkInfo] = useState(null)
    const [drinkIngreds, setDrinkIngreds] = useState(null)

    const handleClick = () => {
        setClosed(!closed)
    }
    
    const fetchDrinks = async () => {
        let res = await axios.get(drinkURL + props.drink)
        setDrinkInfo(res.data.drinks[0])
    }
    
    const parseIngredients = () =>  {
        let ingreds = []
        if (drinkInfo) {
            let entries = Object.entries(drinkInfo)
            let allIngreds = entries.filter((entry) => {
                if (entry[0].includes('strIngredient')) return true
                if (entry[0].includes('strMeasure')) return true
            })
            for (let i=0; i<14; i++) {
                if (allIngreds[i][1] && allIngreds[i+15][1]) {
                    ingreds.push([allIngreds[i][1], allIngreds[i+15][1]])
                } else if (allIngreds[i][1]) {
                    ingreds.push([allIngreds[i][1], ''])
                }
            }
            setDrinkIngreds(ingreds)
        }
    }
    
    useEffect(() => {
        handleClick()
        fetchDrinks()
    }, [props.drink])

    useEffect(() => {
        parseIngredients()
    }, [drinkInfo])

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
                <p>{drinkInfo.strInstructions}</p>
                <ul>
                {drinkIngreds &&
                drinkIngreds.map((ingr, index) => {
                    return (
                        <li key={index}>{ingr[1]} {ingr[0]}</li>
                    )
                })}
                </ul>
            </div>
            }
        </div>
    )
}

export default Modal
