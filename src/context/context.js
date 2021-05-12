import React from 'react';

export const user = {
    loggedInUser: { username: null },
    UserDetails: {},
    indexNo: {}

}

export const Usercontext = React.createContext(user)
export const UserProvider = Usercontext.Provider
export const UserConsumer = Usercontext.Consumer