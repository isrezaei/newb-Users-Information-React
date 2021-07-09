import React from "react";

export default function ExploreTeam (){

    const Arry = [0,1,2,3,4,5,6,7,8]
    const Random1 = Math.floor(Math.random()*Arry.length).toFixed()
    const Random2 = Math.floor(Math.random()*Arry.length).toFixed()
    const Random3 = Math.floor(Math.random()*Arry.length).toFixed()

    return (
        <div className={'ExploreTeam'} >
            <div className={'ExploreImage'}>
                <img src={`../PersonImage/${Random1}.png`}/>
                <img src={`../PersonImage/${Random2}.png`}/>
                <img src={`../PersonImage/${Random3}.png`}/>
            </div>

            <a href={''}>ExploreTeam</a>


        </div>
    )
}
