/**
 * @module productTags
 * @description - API Version 2020-07
 * - use case: get all of the product tags in the entire store
 * @see {@link https://shopify.dev/docs/storefront-api/reference/queryroot?api[version]=2020-07 QueryRoot}
  * @see {@link https://jsfiddle.net/kenput3r/gpohav3k/ JSFiddle} or {@link https://codepen.io/kenput3r/pen/JjGayZZ Codepen} to view the query in action
 */

export const productTags = `
{
  productTags(first: 100) {
    edges {
      cursor
      node
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
  }
}
`