import gql from "graphql-tag";
const PRODUCTS_QUERY = gql`
    query {
        itemses {
            id
            name
            description
            link
            image {
                id
                url
            }
        }
    }
`;
export default PRODUCTS_QUERY;