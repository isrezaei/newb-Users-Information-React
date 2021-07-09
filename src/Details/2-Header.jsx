import React from "react";

export default function Header(props){

    return(
        <div className={'Name'}>
            <h2>{props.Name}</h2>
            <p>UserName : {props.UserName}</p>
        </div>
    )

}
