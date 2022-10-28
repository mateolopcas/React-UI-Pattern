import Menu from './Menu'
import { useState, useEffect } from 'react'

function Header(props) {
    const [isActive, setActive] = useState(false)
    let handleClick = () => {
        setActive(!isActive)
    }

    return(
        <div>
            <h1>Cocktail Database</h1>
            <Menu 
            setLiquor={props.setLiquor}
            active={isActive}
            handleClick={handleClick}
            />
            <button className='hamburger'
            onClick={handleClick}>
                <i className='menuIcon material-icons'>menu</i>
                <i className='closeIcon material-icons' style={{display: 'none'}}>close</i>
            </button>
        </div>
    )
}

export default Header
