import React, { useEffect } from 'react';
import UserContextProvider from  "./UserContextProvider"

const Bridge = (props) => {
    return (
        <UserContextProvider {...props} />
    )
}

export default Bridge
