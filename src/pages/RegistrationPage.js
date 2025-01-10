import React from 'react';
import RegistrationFormContainer from '../containers/RegistrationFormContainer';

function RegistrationPage() {
    return (
        <>
            <h1>Registration Page!</h1>
            <p>Cool logo here</p>
            <p>More cool stuff here</p>
            <p>----- Form begins here!!! -----</p>
            <RegistrationFormContainer />
            <p>----- Form ends here!!! -----</p>
            <p>Other stuff & decorations wow!</p>
        </>
    );
}

export default RegistrationPage;