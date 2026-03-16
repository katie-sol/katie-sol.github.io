import {useState, useEffect} from 'react';

const ToggleComponent = () => {
    return (
        <label class = "mode-toggle">
            <input 
                type = "checkbox" 
                id ="dark-mode-toggle"
            />
            <span className = "slider"></span>
        </label>
    )
}

export default  ToggleComponent;