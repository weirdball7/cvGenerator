import React from 'react'
import '../styles/Form.css'

function Form() {
    return (
        <>
            <form action="post">
                <div className="input-container">
                    <label>Add Education</label>
                    <input type="text" />
                </div>
            </form> 
        </>
    )
}

export default Form