import React from 'react'
import { useContext } from 'react';
import { UserContex } from './config';

function User() {
    const Uname=useContext(UserContex)
    return (
        <>
            <div>User:{Uname}</div>
        </>
    )
}
export default User