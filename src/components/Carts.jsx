import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { data as data2 } from '../api/data';

const Carts = ()=> {

    const [data, setdata] = useState(null);

    const grabData = async ()=>{
      
    }


    useEffect(() => {
      console.log("use Effext");
      const t =  data2();
      console.log(t);
  
        
  }, [])


    return(
       <div>
           <h1>Cartt</h1>
           <h1>hello</h1>
       </div>
    )
}

export default Carts;