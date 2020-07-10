/**
 * @module productByHandle
 * @param {string} handle - The handle of the product to query
 * @returns {string} query string
 * @description - API Version 2020-07
 * - use case: get all of the product's information to build a product page
 * @see {@link https://shopify.dev/docs/storefront-api/reference/queryroot?api[version]=2020-07 QueryRoot}
 * @see {@link https://shopify.dev/docs/storefront-api/reference/object/product?api[version]=2020-07 Product}
 */

export const productByHandle = (handle) => `
{
  productByHandle(handle: ${handle}) {
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
    description(truncateAt: 300)
    descriptionHtml
    handle
    id
    images(first: 5) {
      edges {
        cursor
        node {
          altText
          originalSrc
          transformedSrc(maxWidth: 500, maxHeight: 400, crop: CENTER, preferredContentType: JPG)
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
    media(first: 5) {
      edges {
        cursor
        node {
          alt
          mediaContentType
          previewImage {
            altText
            originalSrc
            transformedSrc(maxWidth: 500, maxHeight: 400, crop: CENTER, preferredContentType: JPG)
          }
        }
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
    onlineStoreUrl
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
          sku
          title
        }
      }
    }
    vendor
  }
}
`