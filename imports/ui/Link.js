import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import { Links } from '../api/links'; 

import LinksList from './LinksList';
import PrivateHeader from './PrivateHeader';
import AddLink from './AddLink';

export default () => {
    return (
        <div>
            <PrivateHeader title="Welcome to Link Shortener"/>
            <LinksList/>
            <AddLink/>
        </div>
    );
};
