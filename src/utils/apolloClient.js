import React from 'react'
import ApolloClient from 'apollo-boost';

const createApolloClient = () => {
    return new ApolloClient({
        uri: 'https://eventos.galileo.edu/api/eventoslogin'
    })
}

export default createApolloClient