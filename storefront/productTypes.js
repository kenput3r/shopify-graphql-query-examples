/**
 * @module productTypes
 * @description - API Version 2020-07
 * - use case: get all of the product types in the entire store
 * @see {@link https://shopify.dev/docs/storefront-api/reference/queryroot?api[version]=2020-07 QueryRoot}
 */

export const productTypes = `
{
  productTypes(first: 100) {
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