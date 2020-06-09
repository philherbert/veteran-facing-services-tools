import { graphql } from "gatsby";

export const headerQuery = graphql`
  query SearchIndexQuery {
    siteSearchIndex {
      index
    }
  }
`;
