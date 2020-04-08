import React from 'react';

export function renderContactMessage(emailDst, animalName) {
    if (animalName !== "") {
        return (
            <a className="button " href={'mailto:' + emailDst + '?subject=Request adoption of ' + animalName}><i className="far fa-envelope"></i> Request adoption </a>
        )
    } else {
        return (
            <a className="button " href={'mailto:' + emailDst + '?subject=Contact from adoptdontbuy'}><i className="far fa-envelope"></i> Contact </a>
        )
    }
}
