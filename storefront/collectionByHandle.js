/**
 * @module collectionByHandle
 * @param {string} handle - The handle of the collection to query
 * @returns {string} query string
 * @description - API Version 2020-07
 * - use case: get enough collection info for a collection page
 * with up to 24 products displayed
 * @see {@link https://shopify.dev/docs/storefront-api/reference/queryroot?api[version]=2020-07 QueryRoot}
 * @see {@link https://shopify.dev/docs/storefront-api/reference/object/collectionconnection?api[version]=2020-07 CollectionConnection}
 * @see {@link https://jsfiddle.net/kenput3r/hv54usg1/ JSFiddle} or {@link https://codepen.io/kenput3r/pen/jOWKOYb Codepen} to view the query in action
 */

export const collectionByHandle = (handle) => `
{
  collectionByHandle(handle: ${handle}) {
    description(truncateAt: 300)
    descriptionHtml
    image {
      altText
      originalSrc
      transformedSrc(maxHeight: 1000, maxWidth: 2048, crop: CENTER)
    }
    title
    products(first: 24) {
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
              node{
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
}
`