import { useState } from 'react'
import '../styles/Form.css'
// import PropTypes from 'prop-types';

function DisplayList({ items }) {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    );
}

function Form() {
    const [value, setValue] = useState('');
    return (
        <>
            <form action="post">
                <div className="input-container">
                    <label>Add Education</label>
                    <input type="text" 
                        value={value}
                    />
                    <button className='submit' onClick={DisplayList(e.target.value)}>Submit</button>
                </div>
            </form> 
        </>
    )

}
export default Form