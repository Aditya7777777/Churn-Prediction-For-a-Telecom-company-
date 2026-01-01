import { InputNumber } from 'primereact/inputnumber'; 
import { useState } from 'react';


//Make a project which as you write a input field on the web page within that moment it displays the string

export default function Input(){
 return(
    <>
     <InputNumber  
            type="text" 
            placeholder="Enter String" 
          /> 
    </>
 )
}