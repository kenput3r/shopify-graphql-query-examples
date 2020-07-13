/**
 * @module customerAccessTokenCreate
 * @description - API Version 2020-07
 * - use case: create a customer access token for accessing customer information
 * - $input = { email, password }
 * @see {@link https://shopify.dev/docs/storefront-api/reference/mutation/customeraccesstokencreate?api[version]=2020-07 customerAccessTokenCreate}
 */

export const customerAccessTokenCreate = `
mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
  customerAccessTokenCreate(input: $input) {
    customerAccessToken {
      accessToken
      expiresAt
    }
    customerUserErrors {
      code
      field
      message
    }
  }
}
`