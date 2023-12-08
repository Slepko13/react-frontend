import React from 'react';

import Image from './Image';
import './Avatar.css';

export const avatar = (props) => (
    <div
        data-testid="avatar"
        className="avatar"
        style={{ width: props.size + 'rem', height: props.size + 'rem' }}
    >
        <Image imageUrl={props.image} />
    </div>
);

export default avatar;
