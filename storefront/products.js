/**
 * @module products
 * @param {string} query - Tag, product_type, vendor, etc...
 * @returns {string} query string
 * @description - API Version 2020-07
 * - use case: get all products filtered by a tag, product_type, vendor etc...
 * @see {@link https://shopify.dev/docs/storefront-api/reference/queryroot?api[version]=2020-07 QueryRoot}
 * @see {@link https://shopify.dev/docs/storefront-api/reference/object/product?api[version]=2020-07 Product}
 */

export const products = (query) => `
{
  products(query: ${query}, first: 24) {
    pageInfo {
      hasNextPage
    }
    edges {
      cursor
      node {
        availableForSale
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
        handle
        id
        images(first: 1) {
          edges {
            node {
              altText
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
        productType
        tags
        title
        totalInventory
        vendor
        variants(first: 100) {
          edges {
            node {
              availableForSale
              compareAtPriceV2 {
                amount
                currencyCode
              }
              id
              image {
                transformedSrc(maxWidth: 500, maxHeight: 400, crop: CENTER)
              }
              priceV2 {
                amount
                currencyCode
              }
              quantityAvailable
              title
            }
          }
        }
      }
    }
  }
}
`