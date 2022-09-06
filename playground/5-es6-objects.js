// Object Property Shorthand 

const name = 'Maryana'
const userAge = 28

const user = {
    name,
    age: userAge,
    location: 'Philadelphia'
}

console.log(user)

// Object Destructuring

const product = {
    label: 'Red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const = product.label
// const = product.stock

// const {label: productLabel, stock, rating= 5} = product

// console.log(productLabel)
// console.log(stock)
// console.log(rating)


const transaction = (type, {label, stock = 0} = {}) => {
    console.log(type, label, stock)
}

transaction('order', product)