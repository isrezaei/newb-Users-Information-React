import React from "react";

export default function UserImage(props){
    return (
        <div className={'PersonImage'}>
            <img src={`../PersonImage/${props.Current - 1}.png`} />
        </div>
    )
}