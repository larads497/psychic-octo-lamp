import React from 'react';
import './FormPage.css'; 

const FormPage = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        
        alert("Form submitted!");
    };

    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="input1">Nom et Prénom:</label>
                    <input type="text" id="input1" required />
                </div>
                <div className="form-group">
                    <label htmlFor="input2">E-mail:</label>
                    <input type="text" id="input2" required />
                </div>
                <div className="form-group">
                    <label htmlFor="input3">city:</label>
                    <input type="number" id="input3" required />
                </div>
                <div className="form-group">
                    <label htmlFor="input4">L'adresse:</label>
                    <input type="text" id="input4" required />
                </div>
                <div className="form-group">
                    <label htmlFor="input5">ville du visa:</label>
                    <input type="text" id="input5" required />
                </div>
                <div className="form-group">
                    <label htmlFor="input6">Profession:</label>
                    <input type="text" id="input6" required />
                </div>
                
                <div className="form-group">
                    <label>Did u get visa before?</label>
                    <div>
                        <label>
                            <input type="radio" name="agreement" value="yes" required /> Oui
                        </label>
                        <label>
                            <input type="radio" name="agreement" value="no" required /> No
                        </label>
                    </div>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FormPage;
