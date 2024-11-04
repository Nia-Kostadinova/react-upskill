# Product Discount Filter
This project filters out products that are already discounted from an initial list of all products.

## Solution Approach
The solution identifies non-discounted products by comparing two arrays:

- `allProducts`: Contains all available products, each with an id, name, quantity, and price.
- `discountedProducts`: Contains only the discounted products, each also identified by an id.

The main filtering process is as follows:

1. **Mapping Discounted IDs**: The discountedProducts array is mapped to extract just the id values of discounted products.
2. **Filtering Non-Discounted Products**: The allProducts array is filtered to include only products whose id is not present in the discounted list.

# Assumptions
- Product ids are unique across both allProducts and discountedProducts.
- All prices are formatted as strings with a dollar sign, e.g., "$53.29".

# Running the Code
To execute the code:

1. Ensure a JavaScript runtime, such as Node.js, is installed.
2. Run the file with:  node nonDiscountedProducts.js
3. The output will display an array of non-discounted products in the console.