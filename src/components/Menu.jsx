import MenuItem from './MenuItem'
import { useState, useEffect } from 'react'

function Menu(props) {
    const liquors = ['Vodka', 'Rum', 'Tequila', 'Gin', 'Amaretto']

    const [active, setActive] = useState('')

    useEffect(() => {
        setActive(props.active)
    })

    return(
        <ul className={`menu ${active ? `showMenu` : ''}`}>

            {liquors.map((liquor, index) => {
                return (
                    <MenuItem
                    name={liquor}
                    key={index}
                    setLiquor={props.setLiquor}
                    handleClick={props.handleClick}
                    />
                )
            })}
        </ul>
    )
}

export default Menu
