import React, { useState } from 'react';
import {createContext, useContext} from 'react';

export const data = ()=> {

    const [data, setdata] = useState("");

    const fetchData = async () =>{
        const apiKey = '0bc93103f0da6a5301ddcfaeb619a83d';
        let link = `api.openweathermap.org/data/2.5/weather?q=dhaka&appid=${apiKey}`;
        const data = await fetch(link);
        console.log("api is been called")

        setdata(data);
    }
    fetchData();

    return(data)

}
