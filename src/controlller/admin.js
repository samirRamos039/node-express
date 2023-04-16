import { Router } from "express"

const router = Router()

router.get('/user', (req,res) => {
    res.json(products)
})

router.post('/info', (req,res) => {
    const newProduct = {...req.body,id: products.length + 1}
    products.push(newProduct)
    res.send(newProduct)
})

router.get('/user/:id', (req,res) => {
    res.send("obteniendo un producto")
   
})

router.patch('/product', (req,res) => {
    res.send("actualizando parcialmente los productos")
})

router.delete('/product', (req,res) => {
    res.send("eliminando producto")
})
console.log(`listening on port ${3000}`)
