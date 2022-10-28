function Drink (props) {
    return (
        <div className='drink'
        key={props.key}
        id={props.id}
        style={{backgroundImage: `url(${props.img})`}}
        onClick={() => {props.setDrink(`${props.id}`)}}
        >
            <h3>{props.name}</h3>
        </div>
    )
}

export default Drink
