/* eslint-disable no-unused-vars */
import React from 'react'

const fullPageStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh', 
  };
  
  const spinnerStyle = {
    border: '6px solid #f3f3f3', // Light grey
    borderTop: '6px solid #34db42', // Green color
    borderRadius: '50%',
    width: '100px',
    height: '100px',
    animation: 'spin 1s linear infinite',
  };
  
  const spinnerKeyframes = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  `;
  
const LoadingSpinner = () => {
  return (
        <div style={fullPageStyle}>
        <style>
        {spinnerKeyframes}
        </style>
        <div style={spinnerStyle} />
    </div>
    );
  }

export default LoadingSpinner