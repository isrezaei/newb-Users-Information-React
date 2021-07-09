import React from "react";
import Header from "../Details/2-Header";
import Social from "../Details/3-SociaButton";
import Footer from "../Details/4-Footer";
import UserImage from "../Details/1-UserImage";

export default function ShowData3(props){

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