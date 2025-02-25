import React, { useState } from 'react'
import Form from './Form'
import '../styles/Education.css'

function EducationalExp() {
    const [notShowing, setShowForm] = useState(true)
    return (
        <>
            <div className="edu-exp-container">
                <div className="edu-header-container">
                    <h1>Education</h1>
                </div>
                <div className="edu-content-container">
                    {!notShowing && Form()}
                </div>
                <button onClick={() => setShowForm(!notShowing)}>Edit</button>
            </div>
        </>
    )
}

export default EducationalExp
