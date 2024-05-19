import { ApolloProvider } from "@apollo/client";
import React, { PropsWithChildren } from "react";
import  client  from "./client";

const ApolloGraphqlProvider = ({ children }:any) => {

  
  return (
    <ApolloProvider client={client()}>
      {children}
    </ApolloProvider>
  );
};

export default (ApolloGraphqlProvider);
