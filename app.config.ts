import 'dotenv/config'

module.exports = ({ config }) => ({
    ...config,
    extra: {
        LOCATION: process.env.LOCATION,
        PROJECT_ID: process.env.PROJECT_ID,
        PROCESSOR_ID: process.env.PROCESSOR_ID,
        SUPABASE_URL: process.env.SUPABASE_URL,
        SUPABASE_KEY: process.env.SUPABASE_KEY,
        eas: {
            projectId: process.env.EAS_PROJECT_ID,
        },
    },
})