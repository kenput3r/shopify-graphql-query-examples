/**
 * @module customerAccessTokenDelete
 * @description - API Version 2020-07
 * - use case: revoke access (log out)
 * - $customerAccessToken = { customerAccessToken }
 * @see {@link https://shopify.dev/docs/storefront-api/reference/mutation/customeraccesstokendelete?api[version]=2020-07 customerAccessTokenDelete}
 */

const customerAccessTokenDelete = `
mutation customerAccessTokenDelete($customerAccessToken: String!) {
  customerAccessTokenDelete(customerAccessToken: $customerAccessToken) {
    deletedAccessToken
    deletedCustomerAccessTokenId
    userErrors {
      field
      message
    }
  }
}
`