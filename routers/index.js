const path = require('path')
const index = require(path.normalize('../controllers/index'))

module.exports = [
    {
        url: '/',
        method: 'get',
        controller: index
    },
    {
        url: '/index.html',
        method: 'get',
        controller: index
    }
]