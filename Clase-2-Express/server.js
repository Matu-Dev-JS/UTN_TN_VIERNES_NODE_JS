import express from 'express';

//Crear una aplicacion de express
const app = express()

/* Habilita que nuestro servidor pueda recibir JSON */
app.use(express.json())

const products = [
    {
        title: 'Tv samsung 50"',
        price: 400000,
        id: 1
    },
    {
        title: 'Tv samsung 32"',
        price: 200000,
        id: 2
    },
    {
        title: 'Tv samsung 42"',
        price: 300000,
        id: 3
    }
]

const getAllProducts = () => {
    return products
}

const getProductById = (product_id) => {
    /* Logica para buscar el product por id */
    return products.find((product) => {
        return Number(product.id) === Number(product_id)
    })
}

app.get('/products', (request, response) => {
    const products = getAllProducts()
    const response_to_send = {
        message: "productos obtenidos exitosamente!",
        data: {
            products: products
        }
    }
    return response.json(response_to_send)
})

/* Product_id es un parametro de busqueda, sirve para que el cliente nos indique en este caso que product quiere obtener */
app.get('/products/:product_id', (request, response) => {
    const product_id = request.params.product_id

    //Buscar el producto por id
    const product_found = getProductById(product_id)

    if(!product_found){
        return response.json({
            message: 'Producto no encontrado!'
        })
    }
    return response.json({
        message: 'Producto encontrado',
        data: {
            product: product_found
        }
    })
})

app.post('/products', (request, response) => {
    const product_title = request.body.title
    const product_price = request.body.price

    const new_product = {
        title: product_title,
        price: product_price,
        id: products.length + 1
    }

    products.push(new_product)

    response.json({
        message:'Producto creado exitosamente',
        data: {
            product: getAllProducts()
        }
    })
})


//Dedicamos un puerto de ejecucion a nuestra aplicacion
app.listen(8080, () => {
    console.log('Servidor escuchandose en el puerto ' + 8080)
})
//http://localhost:8080
