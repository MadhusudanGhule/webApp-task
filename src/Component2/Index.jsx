import React from 'react';
import { UserContex } from './config';
import User from './User';

const Index = () => {
    const user = "madan"
    const data = [{
        id: 1,
        name: "sham",
        age: 23,
        edu: "bca"
    }, {
        id: 2,
        name: "ram",
        age: 23,
        edu: "bca"
    }, {
        id: 3,
        name: "hary",
        age: 23,
        edu: "bca"
    }]
    return (
        <div>
            <UserContex.Provider value={user}>
                <User />
            </UserContex.Provider>

        </div>
    );
}

export default Index;
