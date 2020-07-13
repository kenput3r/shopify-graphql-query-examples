/**
 * @module pageByHandle
 * @param {string} handle - The handle of the product to query
 * @returns {string} query string
 * @description - API Version 2020-07
 * - use case: get a Online Store page
 * @see {@link https://shopify.dev/docs/storefront-api/reference/queryroot?api[version]=2020-07 QueryRoot}
 * @see {@link https://shopify.dev/docs/storefront-api/reference/object/page?api[version]=2020-07 Page }
 */

 export const pageByHandle = (handle) => `
 {
  pageByHandle(handle: ${handle}) {
    title
    body
    bodySummary
  }
 }
 `