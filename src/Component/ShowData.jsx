import React from "react";
import Header from "../Details/Header";
import Social from "../Details/Social";
import Footer from "../Details/Footer";
import UserImage from "../Details/UserImage";

export default function ShowData(props){

    const {id,name,username,website,phone,address:{city}} = props.Data

    return (

        <>
            <div className={'Information'}>
                <UserImage Current={props.Current}/>
                <Header Id={id} Name={name} UserName={username}/>
                <Social/>
                <Footer WebSite={website} City={city} Phone={phone} Current={props.Current}/>
            </div>
        </>


    )
}