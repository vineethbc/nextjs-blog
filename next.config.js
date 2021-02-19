const isProd = process.env.NODE_ENV === 'production'
const path = isProd ? process.env.DEPLOY_PATH : ''

module.exports = {
    basePath: path,
    assetPrefix: path
}