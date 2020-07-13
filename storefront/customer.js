/**
 * @module customer
 * @description - API Version 2020-07
 * - use case: get a customers information
 * @see {@link https://shopify.dev/docs/storefront-api/reference/queryroot?api[version]=2020-07 QueryRoot}
 * @see {@link https://shopify.dev/docs/storefront-api/reference/object/shop?api[version]=2020-07 Shop }
 */
const customer = (token) => `
{
  customer(customerAccessToken: ${token}) {
    acceptsMarketing
    displayName
    defaultAddress {
      firstName
      lastName
      company
      address1
      address2
      city
      province
      provinceCode
      zip
    }
    email
    firstName
    id
    lastIncompleteCheckout {
      ready
    }
    lastName
    phone
    tags
  }
}
`