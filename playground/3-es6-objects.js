// Object property shorthand
const name = "PhantomCracker";
const userAge = 33;

const user = {
    name: name,
    age: userAge,
    location: "Romania"
};

console.log(user);

// Object destructuring
const product = {
    label: 'Red Notebook',
    price: 3,
    stock: 300,
    salePrice: undefined,
    rating: 3
};

// const label = product.label;
// const stock = product.stock;

// const {label: productLabel, stock, rating = 5} = product;
// console.log(productLabel);
// console.log(stock);
// console.log(rating);

const transaction = (type, { label, stock }) => {
    console.log(type);
    console.log(label);
    console.log(stock);
};

transaction("order", product);