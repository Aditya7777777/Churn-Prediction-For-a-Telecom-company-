import TempSidebar from './TempSidebar';
import './sidebar.css'
import Display from './Display';
import NavbarComponent from './FixedNavbar';
import { useState } from 'react';

export default function PredictionApp(){
    const modelMetrics = {
    overall_accuracy_precise: 0.7654,
    classification_report: {
        accuracy: 0.77,
        macro_avg: {
            precision: 0.70,
            recall: 0.68,
            f1_score: 0.69
        },
        weighted_avg: {
            precision: 0.76,
            recall: 0.77,
            f1_score: 0.76
        },
        class_0: {
            precision: 0.82,
            recall: 0.87,
            f1_score: 0.84,
            support: 1549
        },
        class_1: {
            precision: 0.57,
            recall: 0.49,
            f1_score: 0.53,
            support: 561
        }
    }
};
    //1. LIFT STATE UP : Define the state in the parent
      const [predictionData,setpredictionData] = useState({prediction:null,probability:null});
      const [metricsVisible, setMetricsVisible] = useState(false);

    //2.Define the callback function to update the state
    //This is the function the child will use to send data up.
    const handlePredictionData = (data) =>{
        console.log("Prediction data recieved by Parent App:",data);
        setpredictionData(data);
        setMetricsVisible(true);
    }
 return(
    <>

    <NavbarComponent></NavbarComponent>
    <div className='container'>
      
    <div className='containter-fixed'>
    <TempSidebar onPredictionComplete={handlePredictionData}></TempSidebar> 
    </div>
     <div className='container-dynamic'>
     <Display data={predictionData} metricsVisible={metricsVisible} modelMetrics={modelMetrics}></Display>
     </div>   
    </div>
    
    </>
 ) ;  
}