export const getFormattedImageUrl = (imageUrl) =>
  `http://q-xx.bstatic.com${imageUrl}`;

export const getFormattedPrice = (price) =>
`${price.currencyCode} ${price.amount}`;
