import axios from 'axios'
import { useState, useEffect } from 'react'
import Drink from './Drink'

function Content(props) {
    const ingredientURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i='
    const drinksURL = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i='

    const [liquorData, setLiquorData] = useState({})
    const [imgSrc, setImgSrc] = useState('')
    const [drinksData, setDrinksData] = useState([])
    
    const fetchLiquor = async () => {
        let resLiquor = await axios.get(ingredientURL + props.liquor)
        setLiquorData(resLiquor.data.ingredients[0]) 
        
        let resDrinks = await axios.get(drinksURL + props.liquor)
        setDrinksData(resDrinks.data.drinks)
    }

    useEffect(() => {
        fetchLiquor()
    }, [props.liquor])
    
    useEffect(() => {
        setImgSrc(`https://www.thecocktaildb.com/images/ingredients/${liquorData.strIngredient}-Medium.png`)
    }, [liquorData])


    return (
        <div className='contentDiv'>
        {props.liquor.length > 1 &&
            (<div className='liquorDiv'>
                <h2>{liquorData.strIngredient}</h2>
                <img src={imgSrc} />
                <p className='abv'>Alcohol By Volume: {liquorData.strABV}%</p>
                <p className='description'>Description: {liquorData.strDescription}</p>
            </div>
            )}
            <div className='drinksDiv'>
            {drinksData &&
            drinksData.map((dr, index) => {
                return (<Drink
                    key={dr.index}
                    name={dr.strDrink}
                    id={dr.idDrink}
                    img={dr.strDrinkThumb}
                    setDrink={props.setDrink}
                    />)
            })
            }
            </div>
        </div>
    )
}
export default Content
