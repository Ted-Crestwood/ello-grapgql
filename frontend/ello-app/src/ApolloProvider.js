import React from "react";
import App from "./App";
import {ApolloClient} from '@apollo/client';
import { InMemoryCache } from "@apollo/client";

const client =new ApolloClient({
    uri:'http://localhost:4000/',
    cache: new InMemoryCache(),
})

export default client;
