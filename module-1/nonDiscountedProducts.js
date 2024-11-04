const allProducts = [
    {
      "id": 0,
      "name": "Product name 0",
      "quantity": 36,
      "price": "$53.29"
    },
    {
      "id": 1,
      "name": "Product name 1",
      "quantity": 32,
      "price": "$99.33"
    },
    {
      "id": 2,
      "name": "Product name 2",
      "quantity": 34,
      "price": "$86.83"
    },
    {
      "id": 3,
      "name": "Product name 3",
      "quantity": 25,
      "price": "$68.07"
    },
    {
      "id": 4,
      "name": "Product name 4",
      "quantity": 25,
      "price": "$74.79"
    }
];

const discountedProducts = [
    {
      "id": 2,
      "name": "Product name 2",
      "quantity": 34,
      "price": "$86.83"
    },
    {
      "id": 3,
      "name": "Product name 3",
      "quantity": 25,
      "price": "$68.07"
    }
];

const notDiscounted = allProducts.filter(product => {
      const discountedIds = discountedProducts.map(product => product.id);
      return !discountedIds.includes(product.id);
    }
)

console.log(notDiscounted);