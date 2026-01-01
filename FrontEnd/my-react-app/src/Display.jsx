
import React, { useState, useEffect } from 'react';
import { ProgressBar } from 'primereact/progressbar';
import './sidebar.css'
import  CheckerComp from './CheckerComp';


export default function Display({data,metricsVisible,modelMetrics}){
    const churnPercentage = data.probability*100;

    return(
     <>
     <div className='container-display'>
     <div className='bar'>
      <ProgressBar value={churnPercentage}  className='proBar' />
       <h2 style={{ textAlign: 'center', marginTop: '10px' }}>
        Churning Percentage is {churnPercentage}% .<br></br><br></br>
        Result : {data.prediction}
      </h2>


      </div>
      
      <div className='heading' style={{marginTop:'5rem', marginLeft:'15rem'}}>
        {metricsVisible && modelMetrics &&<h2>Parameters of the Training Model (Random Forest Algorithm)</h2>}

        {/* -------------------- 
               B. Model Metrics Section (Conditional Rendering)
               -------------------- */}
            {metricsVisible && modelMetrics && (
                <div style={{ marginTop: '20px',marginBottom:'20px',marginRight:'100px', padding: '15px', border: '1px solid #17a2b8', borderRadius: '5px', backgroundColor: '#e9f7fe' }} >
    <h3>Model Evaluation Parameters</h3>
    <p>Overall Accuracy (6 features): <strong>0.7654</strong></p>
    
    <h4>Classification Report Summary</h4>
    <ul>
        <li>Overall Accuracy: <strong>0.77</strong></li>
        <li>Macro Avg F1-Score: <strong>0.69</strong></li>
        <li>Weighted Avg F1-Score: <strong>0.76</strong></li>
    </ul>

    <h4 style={{ marginTop: '15px' }}>Metrics for Class 0 (Majority)</h4>
    <ul>
        <li>Precision: <strong>0.82</strong></li>
        <li>Recall: <strong>0.87</strong></li>
        <li>F1-Score: <strong>0.84</strong></li>
        <li>Support: <strong>1549</strong></li>
    </ul>

    <h4 style={{ marginTop: '15px' }}>Metrics for Class 1 (Minority)</h4>
    <ul>
        <li>Precision: <strong>0.57</strong></li>
        <li>Recall: <strong>0.49</strong></li>
        <li>F1-Score: <strong>0.53</strong></li>
        <li>Support: <strong>561</strong></li>
    </ul>
</div>
            )}

      </div>

      <CheckerComp></CheckerComp>
      </div>


      
      
     </>
    )
}

