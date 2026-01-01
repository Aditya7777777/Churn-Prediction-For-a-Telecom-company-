import React, { useState, useEffect } from 'react';

const CheckerComp = () => {
    const [connectionStatus, setConnectionStatus] = useState('Checking...');
    const [statusColor, setStatusColor] = useState('orange');

    // Step 2: Define the URL of your Flask endpoint
    const FLASK_API_URL = 'http://127.0.0.1:5000/api/ping'; 

    useEffect(() => {
        const checkConnection = async () => {
            try {
                //  Step 3: Make a GET request
                const response = await fetch(FLASK_API_URL);

                if (response.ok) {
                    const data = await response.json();
                    setConnectionStatus(`Connected! Message: ${data.message}`);
                    setStatusColor('green');
                } else {
                    setConnectionStatus(`Failed to connect. HTTP Status: ${response.status}`);
                    setStatusColor('red');
                }
            } catch (error) {
                // This catches network errors (e.g., Flask server is down or CORS issue)
                console.error("Connection Error:", error);
                setConnectionStatus('Connection failed. Is Flask server running? Check CORS.');
                setStatusColor('red');
            }
        };

        checkConnection();
    }, []); // Empty dependency array means this runs once on mount

    return (
        <div style={{ padding: '20px', border: `2px solid ${statusColor}`, borderRadius: '5px' }}>
            <h2>Backend Connectivity Test</h2>
            <p style={{ color: statusColor, fontWeight: 'bold' }}>
                Status: {connectionStatus}
            </p>
          
        </div>
    );
};

export default CheckerComp;