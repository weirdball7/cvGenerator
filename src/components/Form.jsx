import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Form({ handleSubmit }) {
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        handleSubmit(inputValue)
        setInputValue('')
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="input-container">
                <input 
                    type="text" 
                    value={inputValue} 
                    onChange={handleInputChange} 
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

Form.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
}

export default Form