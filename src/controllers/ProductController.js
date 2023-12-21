const ProductService = require ('../services/ProductService')

const createProductController = async (req, res) => {
    try {
        const { name, image, type, price, countInStock, rating, description,  discount} = req.body
        console.log('databody', req.body)
        if ( !name || !image || !type || !price || !countInStock || !rating || !description || !discount) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The input is required'
            })
        } 

        const response = await ProductService.createProductService(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const updateProductController = async (req, res) => {
    try {
        const productID = req.params.id
        const data = req.body
        if (!productID) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The productID is required'
            })
        }
        const response = await ProductService.updateProductService(productID, data)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const detailsProductController = async (req, res) => {
    try {
        const productID = req.params.id
        if (!productID) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The productID is required'
            })
        }
        const response = await ProductService.detailsProductService(productID)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteProductController = async (req, res) => {
    try {
        const productID = req.params.id
        if (!productID) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The productID is required'
            })
        }
        const response = await ProductService.deleteProductService(productID)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllProductController = async (req, res) => {
    try {
        const { limit, page, sort, filter } = req.query
        const response = await ProductService.getAllProductService(Number(limit) || null, Number(page) || 0, sort, filter)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const deleteMany = async (req, res) => {
    try {
        const ids = req.body.ids
        if (!ids) {
            return res.status(200).json({
                status: 'ERR',
                message: 'The ids is required'
            })
        }
        const response = await ProductService.deleteManyProduct(ids)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

const getAllType = async (req, res) => {
    try {
        const response = await ProductService.getAllType()
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}


module.exports =  { 
    createProductController,
    updateProductController,
    detailsProductController,
    deleteProductController,
    getAllProductController,
    deleteMany,
    getAllType
}