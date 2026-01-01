import React ,{useState} from 'react';
import './sidebar.css'
import { InputNumber } from 'primereact/inputnumber'; 
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';

export default function TempSidebar({onPredictionComplete}) {

    const [formData, setFormData] = useState({
    Contract: '',
    tenure: null,
    InternetService: '',
    MonthlyCharges: null,
    OnlineSecurity: '',
    TechSupport: ''
  });
   const [responseMessage, setResponseMessage] = useState('');
    const [statusColor, setStatusColor] = useState('');

    const contractOptions = [
        { label: 'Month-to-month', value: 'Month-to-month' },
        { label: 'One year', value: 'One year' },
        { label: 'Two year', value: 'Two year' }
    ];

    const InternetServiceOption = [
        { label: 'DSL', value: 'DSL' },
        { label: 'Fiber optic', value: 'Fiber optic' },
        { label: 'No', value: 'No' }
    ];

    const securityAndSupportOption = [
        { label: 'Yes', value: 'Yes' },
        { label: 'No', value: 'No' }
    ];

     
  
   const handleInputChange = (e, name) => { /* here the name is the key or the feature name of the formDataObject like Contract,tenure,etc. but not their value */
    /*functionality of this function : 
    1)This particular function takes input a custom event object from PrimeReact and the name of the 
    features which are the keys of formData Object to check which particular object is been changed. 
    2)It checks whether e is null or not , then it checks wheather e is a type of object or not.
    3)Then with the help of 'in' operator we check whether value property exists in the object and then assign that value to the
    value variable declared .
    4) If the if condition becomes false , then it is checked wheather e and e.target is present or not which means 
    synthetic event Object . If that condition is also false then we assign the value of e as it is to the value variable 
    5)After that we update the Object by passing previous keys and values and also the current key and it's corresponding value 
     */
        let value;

        // 1. Check if the event comes from PrimeReact InputNumber (it passes an object with 'value')
        //Here the PrimeReact has it's own custom event object 
        if (e && typeof e === 'object' && 'value' in e) {
            value = e.value;
        } 
        // 2. Assume it's a standard event object (from InputText or standard HTML input)
        else if (e && e.target) {
            value = e.target.value;
        } 
        // 3. If value is null/undefined (like clearing InputNumber), treat it as null
        else {
             value = e;
        }
        
        // Update the state using the field name dynamically
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

  

   const sendDataToFlask = async () => {
        const dataToSend = formData;

        try {
            const flaskApiUrl = 'http://127.0.0.1:5000/predict';
            
            const response = await fetch(flaskApiUrl, {
                method: 'POST', 
                headers: {
                    // Critical: Tells the server the body is JSON
                    'Content-Type': 'application/json', 
                },
                // Critical: Sends the data in the Request Body
                body: JSON.stringify(dataToSend), 
            });

            const result = await response.json();//response wheather the data has been reached to the backend or not 
            console.log("Backend Response Data:",result);

            if (response.ok) {
                //Check if the response contains the expected prediction fields
                if(result.prediction && result.probability !== undefined){
                    onPredictionComplete({
                        prediction: result.prediction,
                        probability: result.probability
                    });

                    setResponseMessage(`Prediction Successful: ${result.prediction}`);
                setStatusColor('green');
                }else{
                    //Handle success status but unexpected content structure
                    setResponseMessage(`Prediction Successful : ${result.prediction}`);
                    setStatusColor('green');
                }
                
            } else {
                setResponseMessage(`Error: ${result.message || 'Server error'}`);
                setStatusColor('red');
            }

        } catch (error) {
            console.error("Network or Fetch Error:", error);
            setResponseMessage('Failed to connect to backend API.');
            setStatusColor('red');
        }
    };


    return(
        <>
        <div className='container-tempbar'>
        <h2>Enter the details of the customer</h2>
        <div style={{marginBottom:"20px"}}>
       <h4 style={{marginBottom:0}}>Contract</h4>
       <Dropdown
            value={formData.Contract} 
            onChange={(e) => handleInputChange(e,'Contract')} // Use the existing handler
            options={contractOptions} // Pass the defined options array
            optionLabel="label" // Key to display to the user
            placeholder="Select a Contract Duration" 
            className="w-full" // Use a class for better styling/width control
        />
      </div>
       <div style={{marginBottom:"20px"}}>
       <h4 style={{marginBottom:0}}>Tenure</h4>
        <InputNumber  
        type="text"
        value={formData.tenure} // Binds the input value to the state
        onChange={(e) => handleInputChange(e,'tenure')} // Calls the handler on each change
        placeholder="Tenure details"      
       useGrouping={false} // Use boolean value {false}
    locale="en-US"
    inputProps={{ dir: 'ltr' }}   
    mode="decimal" 
    minFractionDigits={0} // Allows 10 or 10.
    maxFractionDigits={2} 
      /> 
      </div>      

       <div style={{marginBottom:"20px"}}>
       <h4 style={{marginBottom:0}}>Internet Service</h4>
      <Dropdown
            value={formData.InternetService} 
            onChange={(e) => handleInputChange(e,'InternetService')} // Use the existing handler
            options={InternetServiceOption} // Pass the defined options array
            optionLabel="label" // Key to display to the user
            placeholder="Select Internet Service" 
            className="w-full" // Use a class for better styling/width control
        />
      </div>

       <div style={{marginBottom:"20px"}}>
       <h4 style={{marginBottom:0}} >Monthly Charges</h4>
        <InputNumber  
        type="text" 
        value={formData.MonthlyCharges} // Binds the input value to the state
        onChange={(e) => handleInputChange(e,'MonthlyCharges')} // Calls the handler on each change
        placeholder="Monthly Charges details" 
        useGrouping={false} // Use boolean value {false}
        locale="en-US"
        inputProps={{ dir: 'ltr' }}  
        mode="decimal" 
    minFractionDigits={0} // Allows 10 or 10.
    maxFractionDigits={2}
      />
      </div>

       <div style={{marginBottom:"20px"}}>
       <h4 style={{marginBottom:0}}>Online Security</h4>
      <Dropdown
            value={formData.OnlineSecurity} 
            onChange={(e) => handleInputChange(e,'OnlineSecurity')} // Use the existing handler
            options={securityAndSupportOption} // Pass the defined options array
            optionLabel="label" // Key to display to the user
            placeholder="Online Security Details" 
            className="w-full" // Use a class for better styling/width control
        />
      </div>

       <div style={{marginBottom:"20px"}}>
       <h4 style={{marginBottom:0}}>Tech Support</h4>
      <Dropdown
            value={formData.TechSupport}
            onChange={(e) => handleInputChange(e,'TechSupport')} // Use the existing handler
            options={securityAndSupportOption} // Pass the defined options array
            optionLabel="label" // Key to display to the user
            placeholder="Online Security Details" 
            className="w-full" // Use a class for better styling/width control
        />
      </div>

       <Button 
                label="Predict" 
                icon="" 
                severity="success"
                onClick={sendDataToFlask} 
                className='btnSubmit'
            />
      </div>
       </>
    )
}

// import React, { useState } from 'react';

// function MyForm() {
  

//   const handleInputChange = (event) => {
//     const { name, value, type } = event.target;
//     const newValue = type === 'number' && value !== '' ? Number(value) : value;
    
//     setFormData(prevState => ({
//       ...prevState,
//       [name]: newValue
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(formData); // This will log your complete form data object
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h1>User Information Form</h1>
      
//       {/* String Inputs */}
//       <label>
//         String Input 1:
//         <input
//           type="text"
//           name="stringInput1"
//           value={formData.stringInput1}
//           onChange={handleInputChange}
//         />
//       </label>

//       <label>
//         String Input 2:
//         <input
//           type="text"
//           name="stringInput2"
//           value={formData.stringInput2}
//           onChange={handleInputChange}
//         />
//       </label>
      
//       {/* ... Add other string inputs in the same way ... */}

//       {/* Numeric Inputs */}
//       <label>
//         Numeric Input 1:
//         <input
//           type="number"
//           name="numericInput1"
//           value={formData.numericInput1 || ''} // Handle null values for number input
//           onChange={handleInputChange}
//         />
//       </label>

//       <label>
//         Numeric Input 2:
//         <input
//           type="number"
//           name="numericInput2"
//           value={formData.numericInput2 || ''}
//           onChange={handleInputChange}
//         />
//       </label>
      
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default MyForm;
