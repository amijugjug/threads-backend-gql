export const queries = `#graphql
    #healthcheck url
    healthCheck : String!

    #getUserToken
    getUserToken(email: String!, password: String!): String!
    getCurrentLoggedInUser: User
`;
