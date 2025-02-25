import React from 'react'
import { useState } from 'react'
import Form from './Form'
import '../styles/Practical.css'


function PracticalExp() {
    const [notShowing, setShowForm] = useState(true)
    return (
        <div className="prac-exp-container">
            <div className="prac-exp-header-container">
                <h1>Practical Experience</h1>
            </div>
            <div className="prac-exp-content-container">
                {!notShowing && Form()}
            </div>
            <button onClick={() => setShowForm(!notShowing)}>Edit</button>
        </div>
    )
}

export default PracticalExp
