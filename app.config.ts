import 'dotenv/config'

module.exports = ({ config }) => ({
    ...config,
    extra: {
        API_URL: process.env.API_URL,
        API_KEY: process.env.API_KEY,
    },
})