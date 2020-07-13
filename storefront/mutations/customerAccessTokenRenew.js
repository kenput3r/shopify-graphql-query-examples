/**
 * @module customerAccessTokenRenew
 * @description - API Version 2020-07
 * - use case: prolong the life of the access token
 * - $customerAccessToken = { customerAccessToken }
 * @see {@link https://shopify.dev/docs/storefront-api/reference/mutation/customeraccesstokenrenew?api[version]=2020-07 customerAccessTokenRenew}
 */

const customerAccessTokenRenew = `
mutation customerAccessTokenRenew($customerAccessToken: String!) {
  customerAccessTokenRenew(customerAccessToken: $customerAccessToken) {
    customerAccessToken {
      accessToken
      expiresAt
    }
    userErrors {
      field
      message
    }
  }
}
`