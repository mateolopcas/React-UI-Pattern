import { useState, useEffect } from 'react'

function MenuItem(props) {
    const [highlight, setHighlight] = useState(false)

    const handleClick = e => {
        props.setLiquor(e.target.name)
        props.handleClick()
    }

    return (
        <li>
            <button
            className={`menuItem ${highlight ? `highlighted` : ``}`}
            type='button'
            name={props.name}
            onClick={handleClick}
            onMouseEnter={() => setHighlight(true)}
            onMouseLeave={() => setHighlight(false)}
            >
                {props.name}
            </button>
        </li>
    )
}

export default MenuItem
