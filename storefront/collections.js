/**
 * @module collections
 * @description - API Version 2020-07
 * - use case: get all shop collections
 * @see {@link https://shopify.dev/docs/storefront-api/reference/queryroot?api[version]=2020-07 QueryRoot}
 * @see {@link https://shopify.dev/docs/storefront-api/reference/object/collection?api[version]=2020-07 Collection}
 **/

 export const collections = `
  {
    collections(first: 10) {
      edges {
        cursor
        node {
          title
          handle
          id
          image {
            altText
            originalSrc
            transformedSrc(maxWidth: 500, maxHeight: 400, crop: CENTER)
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
  }
 `