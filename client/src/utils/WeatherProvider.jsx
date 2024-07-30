import React, { createContext, useState, useContext, useEffect } from 'react';

const WeatherContext = createContext();
export function useWeather() {
    return useContext(WeatherContext)
}

export const WeatherProvider = ({ children }) => {

    return <WeatherContext.Provider value = {{
        
    }}>
        {children}
    </WeatherContext.Provider> 
}
