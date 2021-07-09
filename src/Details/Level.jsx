import React from "react";


export default function Level (props){

    let Curren = props.Current - 1

    setTimeout(()=>{
        document.querySelectorAll('.Level').forEach((Div)=>{
            return(
                Div.children[0].style.width = `${props.Width[Curren][0]}%` ,
                    Div.children[0].style.backgroundColor = props.Width[Curren][1]
            )
        })
    })

    // console.log(Curren)
    // console.log(props.Width[Curren][0])
    // console.log(props.Width[Curren][1])
    //

    return(
        <>
            <div style={{fontSize : '15px' , margin : '.25rem 0' , color:'black' , opacity:'.3'}}> Activity : {props.Width[Curren][0]}%</div>
            <div className='Level'>
                <div></div>
                <div></div>
            </div>
        </>
    )
}

