import React from "react";
import {GrInstagram} from 'react-icons/gr'
import {RiLinkedinFill} from 'react-icons/ri'
import {BiMessageSquareDots} from 'react-icons/bi'

export default function Social(){
    return (
        <section className={'SocialButton'}>

            <div className={'SocialButtonLeft'}>
               <a href={''}><button><GrInstagram size={'21px'} color={'#9e9e9e'}/></button></a>
               <a href={''}><button><RiLinkedinFill size={'21px'} color={'#9e9e9e'}/></button></a>
            </div>

            <div className={'SocialButtonRight'}>
              <a href={''}><button><BiMessageSquareDots size={'23px'} color={'#9e9e9e'}/></button></a>
            </div>

        </section>
    )
}