const router = require('express').Router()
const barang = require('./routes/barang')

router.use('/barang', barang)
module.exports = router
