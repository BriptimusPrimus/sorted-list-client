const developmentConfig = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        proxy: {
            '*': 'http://127.0.0.1:' + (process.env.PORT || 3000)
        },
        host: '127.0.0.1'
    }
};
  
module.exports = developmentConfig;