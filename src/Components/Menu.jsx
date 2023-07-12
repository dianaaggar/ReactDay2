import React from 'react'

function Menu(props) {
return (
    <div className="receipt">
    <h1> Name: {props.receiptInfo.person}</h1>
    <h1> Order: {props.receiptInfo.order.main}</h1>

    <ul>
        {props.receiptInfo.order.side.map((abc)=>{
            return( <li> {abc} </li>)
    
        })}
        </ul>
    </div>
)
}

export default Menu
