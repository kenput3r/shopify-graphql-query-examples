/**
 * @module shop
 * @description - API Version 2020-07
 * - use case: get seo/meta information
 * @see {@link https://shopify.dev/docs/storefront-api/reference/queryroot?api[version]=2020-07 QueryRoot}
 * @see {@link https://shopify.dev/docs/storefront-api/reference/object/shop?api[version]=2020-07 Shop }
 */

 export const shop = `
  {
    shop {
      description
      name
      moneyFormat
      primaryDomain
    }
  }
 `