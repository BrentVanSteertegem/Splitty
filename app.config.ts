import 'dotenv/config'

module.exports = ({ config }) => ({
    ...config,
    extra: {
        LOCATION: process.env.LOCATION,
        PROJECT_ID: process.env.PROJECT_ID,
        PROCESSOR_ID: process.env.PROCESSOR_ID,
        PROCESSOR_AUTH_TOKEN: process.env.PROCESSOR_AUTH_TOKEN,
    },
})