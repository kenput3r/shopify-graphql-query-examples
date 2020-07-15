/**
 * @module shop
 * @description - API Version 2020-07
 * - use case: get seo/meta information
 * @see {@link https://shopify.dev/docs/storefront-api/reference/queryroot?api[version]=2020-07 QueryRoot}
 * @see {@link https://shopify.dev/docs/storefront-api/reference/object/shop?api[version]=2020-07 Shop }
 * @see {@link https://jsfiddle.net/kenput3r/gtpuczmb/ JSFiddle} or {@link https://codepen.io/kenput3r/pen/wvMEJZM Codepen} to view the query in action
 */

 export const shop = `
  {
    shop {
      description
      name
      moneyFormat
      primaryDomain {
        url
      }
    }
  }
 `