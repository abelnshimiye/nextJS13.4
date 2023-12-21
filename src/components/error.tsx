'use client'
import React from 'react'

const Error = () => {

    const reloadPage = () => {
        // Reload the current page
        window.location.reload();
      };

    const goBack = () => {
        window.history.go(-1);
      };

  return (
    <div>

<div>
        <h1>Page Not Found</h1>
        <p>Sorry the page you are looking for is not visible</p>

        <button  onClick={goBack}>Back</button>
    </div>
      
    </div>
  )
}

export default Error
