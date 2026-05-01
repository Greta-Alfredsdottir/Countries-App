/// <reference types="vite/client" />
import { GraphQLClient } from 'graphql-request'
const endpoint = import.meta.env.VITE_GRAPH_ENDPOINT as string;

if (!endpoint) {
    throw new Error('missing VITE_GRAPH_ENDPOINT in .env');
}
export const graphClient = new GraphQLClient(endpoint)