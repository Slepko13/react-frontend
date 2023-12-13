import React from 'react';

import './Auth.css';

const auth = (props) => (
    <section data-testid="auth-component" className="auth-form">
        {props.children}
    </section>
);

export default auth;
