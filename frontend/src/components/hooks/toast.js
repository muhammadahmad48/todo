'use client'
// ToastContext.js
import React, { createContext, useRef, useContext } from 'react';
import { Toast } from 'primereact/toast';

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
    const toast = useRef(null);

    // Accept an object for dynamic data
    const showToast = ({ severity = 'info', summary = '', detail = '', life = 3000 }) => {
        toast.current.show({ severity, summary, detail, life });
    };

    return (
        <ToastContext.Provider value={showToast}>
            <Toast ref={toast} />
            {children}
        </ToastContext.Provider>
    );
};

// Custom hook to use toast
export const useToast = () => {
    return useContext(ToastContext);
};
