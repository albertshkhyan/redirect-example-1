import React from 'react';

import './style.scss';

const Register = () => {
    return (
        <div className="Register">
            <h2> Registration </h2>
            <form>
                <div>
                    <label>Username
                        <input type="text"/>
                    </label>
                </div>
                <div>
                <label>Passowrd
                    <input type="password"/>
                </label>
                </div>
                <input type="submit" value="SUBMIT"/>
            </form>
        </div>
    );
}
export default Register;