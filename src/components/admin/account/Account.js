import React from 'react';

import './Account.css';

import DeleteAccount from './DeleteAccount';
import Payment from './Payment';
import Profile from './Profile';
import Admin from '../layouts/Admin';

function Account(props) {

    return (

        <Admin>
            <Profile></Profile>
            <Payment></Payment>
            <DeleteAccount></DeleteAccount>
        </Admin>

    );

}

export default Account;