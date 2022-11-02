import React, { createContext, useState } from 'react';

export const Utility = createContext();
const UtilityContext = ({ children }) => {

    const [mode, setMode] = useState(false);
    const [slide, setSlide] = useState(false);





    const utilityInfo = { mode, slide, setMode, setSlide }
    return (
        <Utility.Provider value={utilityInfo}>
            {children}
        </Utility.Provider>
    );
};

export default UtilityContext;