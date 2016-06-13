module.exports = {
    entry: './app/index.jsx',
    output: {
        filename: 'public/js/bundle.js'
    },
    module : {
        loaders: [{
            test : /\.jsx?$/,
            exclude : /node_modules/,
            loader : 'babel-loader',
            query : {
                presets: ['react']
            }
        }]
    },
    resolve : {
        // you can now require('file') instead of require('file.jsx')
        extensions : ['', '.js', '.jsx', '.json']
    }
};
