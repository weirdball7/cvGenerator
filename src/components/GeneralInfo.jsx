import React from 'react'
import { useState } from 'react'
import Form from './Form'
import '../styles/General.css'

function GeneralInfo() {
    const [notShowing, setShowForm] = useState(true)
    const [generalData, setGeneralData] = useState([])

    const handleGeneralSubmit = (FormData) => {
        setGeneralData([...generalData, FormData])
        setShowForm(true);
    }  

    return (
        <>

            <div className="general-info-container">
                <div className="general-info-header-container">
                    <h1>General Info</h1>
                </div>
                <div className="general-info-content-container">
                    {!notShowing && <Form handleSubmit={handleGeneralSubmit} />}
                    {generalData.map((Data, index) => (
                        <ul key={index}>
                            <li>{Data}</li>
                        </ul>
                    ))}
                </div>
                <button onClick={() => setShowForm(!notShowing)}>Edit</button>
            </div>
        </>
    )
}

export default GeneralInfo
