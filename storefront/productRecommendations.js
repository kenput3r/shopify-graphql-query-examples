/**
 * @module productRecommendations
 * @param {ID!} id - The {@link https://shopify.dev/docs/storefront-api/reference/scalar?api[version]=2020-07 ID!} of the product
 * @returns {string} query string
 * @description - API Version 2020-07
 * - use case: products recommended to purchase with a certain product
 * @see {@link https://shopify.dev/docs/storefront-api/reference/queryroot?api[version]=2020-07 QueryRoot}
 * @see {@link https://shopify.dev/docs/storefront-api/reference/object/product?api[version]=2020-07 Product}
 */

export const productRecommendations = (id) => `
{
  productRecommendations(productId: ${id}) {
    title
    handle
    images(first: 1) {
      edges {
        node {
          originalSrc
          transformedSrc(maxWidth: 500, maxHeight: 400, crop: CENTER)
        }
      }
    }
    priceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
      minVariantPrice {
        amount
        currencyCode
      }
    }
    compareAtPriceRange {
      maxVariantPrice {
        amount
        currencyCode
      }
      minVariantPrice {
        amount
        currencyCode
      }
    }
    options(first: 3) {
      name
      values
    }
    variants(first: 100) {
      edges {
        node {
          title
          availableForSale
          priceV2 {
            amount
            currencyCode
          }
          compareAtPriceV2 {
            amount
            currencyCode
          }
          selectedOptions {
            name
            value
          }
        }
      }
    }
  }
}
`