import { ApolloProvider } from "@apollo/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

import { apolloClient } from "~/lib/apollo-client";
import { queryClient } from "~/lib/query-client";

type Props = {
  children: React.ReactNode;
};

export const AppProvider = (props: Props) => {
  return (
    <ApolloProvider client={apolloClient}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>{props.children}</BrowserRouter>
      </QueryClientProvider>
    </ApolloProvider>
  );
};
