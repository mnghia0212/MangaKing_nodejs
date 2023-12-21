const UserRoutes = require("../routes/UserRoutes")
const ProductRoutes = require("../routes/ProductRoutes")
const OrderRoutes = require("../routes/OrderRoutes")
const PaymentRoutes = require("../routes/PaymentRoutes")

const routes = (app) => {
  
    app.use('/api/user', UserRoutes)
    app.use('/api/product', ProductRoutes)
    app.use('/api/order', OrderRoutes)
    app.use('/api/payment', PaymentRoutes)
}


module.exports = routes;
