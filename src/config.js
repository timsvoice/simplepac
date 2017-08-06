module.exports = {
    baseUrl() {
        if (process.env.NODE_ENV != 'production') {
            return 'http://localhost:3000'
        }
    }
}