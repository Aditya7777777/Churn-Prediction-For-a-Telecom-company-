import React from 'react';
import { Menubar } from 'primereact/menubar';
import  './sidebar.css';

const FixedNavbar = () => {
    // 1. Define the menu items (optional for this requirement, but included for completeness)
    const items = [
        { label: 'Home', icon: 'pi pi-home' },
        { label: 'Dashboard', icon: 'pi pi-chart-line' },
        { label: 'Model', icon: 'pi pi-server' }
    ];

    // 2. Define the custom 'TelcoPredict' content for the left side (Start)
    const startContent = (
        <div className="app-title-container">
            <h1 style={{ fontSize: '1.8rem', margin: 0, fontWeight: 'bold' }}>
                TELCO
            </h1>
            <h4 style={{ fontSize: '1.2rem', margin: 0, marginLeft: '5px', fontWeight: 'normal' }}>
                PREDICT
            </h4>
        </div>
    );

    return (
        <div className="custom-navbar">
            <Menubar
                // model={items}
                start={startContent} // Inject the custom H1/H4 content
            />
        </div>
    );
}

export default FixedNavbar;