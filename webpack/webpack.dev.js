const path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
    entry: {
        index: [
            'babel-polyfill', './src/index.tsx'
        ],
        vendor: [
            'object-assign',
            'react',
            'react-dom'
        ]
    },

    devtool: "source-map",

    devServer: {
        contentBase: path.join(__dirname, 'public'), // boolean | string | array, static file location
        compress: true, // enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
        hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
        https: false, // true for self-signed, object for cert authority
        noInfo: false, // only errors & warns on hot reload
        port: 8888,
        host: 'localhost',
        disableHostCheck: true,
        open: false, //the dev server will open the browser.
        //  useLocalIp: true,//This option lets the browser open with your local IP.
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000,
            ignored: "/node_modules/"
        }
    },

    output: {
        path: path.resolve(__dirname, "./../dist"),
        publicPath: 'http://localhost:8888/',
        filename: 'js/[name].[hash:6].js',
        sourceMapFilename: 'js/[name].[hash:6].js.map',
        chunkFilename: 'js/[id].chunk.js'
    },
    resolve: {
        // list of extensions that has to be resolved automatically. With this options there is no need of adding file extension while importing
        extensions: [
            '.webpack.js',
            '.web.js',
            '.tsx',
            '.ts',
            '.js',
            '.json',
            '.scss',
            '.css'
        ]
    },
    mode: 'development',
    module: {
        // define loaders here
        rules: [{
            // Typescript loader
            test: /\.(ts|tsx|js|jsx)$/,
            loader: 'ts-loader',
            exclude: /node_modules/,
        },
        {
            //SCSS loader
            test: /\.scss$/,
            use: [
                {
                  loader: 'style-loader'
                },
                {
                  loader: 'css-loader'
                },
                {
                  loader: 'sass-loader'
                }
              ]
        },
        {
            // CSS loader
            test: /\.css$/,
            use: [
                'style-loader?./css/[name].[hash:6].[ext]',
                'css-loader?name=./css/[name].[hash:6].[ext]'
            ]
        },
        {
            // Images loader
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader?name=./images/[name].[hash:6].[ext]'
            ]
        },
        {
            // Fonts laoder
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            use: [
                'file-loader?name=./fonts/[name].[hash:6].[ext]'
            ]
        },
        {
            // CSV and TSV  loader
            test: /\.(csv|tsv)$/,
            use: [
                'csv-loader?name=./app_data/[name].[hash:6].[ext]'
            ]
        },
        {
            //  XML Loader
            test: /\.xml$/,
            use: [
                'xml-loader?name=./app_data/[name].[hash:6].[ext]'
            ]
        },
        {
            //  JSON Loader
            test: /\.json$/,
            use: [
                'file-loader?name=./app_data/[name].[hash:6].[ext]'
            ]
        },
        {
            // MP3 Audio Loader
            test: /\.mp3$/,
            use: ['file-loader?name=./audios/[name].[hash:8].[ext]']
        },
        {
            // MP4 Video Loader
            test: /\.mp4$/,
            use: ['url-loader?limit=10000&mimetype=video/mp4']
        }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            template: './assets/html/index.html',
            chunkhash: true
        }),
        new webpack.DefinePlugin({
            __DEV__: true,
            'process.env': {
                'NODE_ENV': JSON.stringify('development'),
                'DOMAIN': JSON.stringify('http://35.168.20.231:7000/')
            }
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerHost: '127.0.0.1',
            analyzerPort: 3006,
            reportFilename: 'report.html',
            defaultSizes: 'parsed',
            openAnalyzer: false,
            generateStatsFile: false,
            statsFilename: 'stats.json',
            statsOptions: null,
            logLevel: 'info'
        })
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        },
        minimizer: [new UglifyJsPlugin({
            uglifyOptions: {
                mangle: true,
                compress: {
                    booleans: false,
                    collapse_vars: false,
                    comparisons: false,
                    hoist_funs: false,
                    hoist_props: false,
                    hoist_vars: false,
                    if_return: false,
                    inline: false,
                    join_vars: false,
                    keep_infinity: true,
                    loops: false,
                    negate_iife: false,
                    properties: false,
                    reduce_funcs: false,
                    reduce_vars: false,
                    sequences: false,
                    side_effects: false,
                    switches: false,
                    top_retain: false,
                    toplevel: false,
                    typeofs: false,
                    unused: false,

                    // Switch off all types of compression except those needed to convince
                    // react-devtools that we're using a production build
                    conditionals: true,
                    dead_code: true,
                    evaluate: true,
                    drop_console: true
                },
                warnings: false,
                ie8: false,
                keep_fnames: false,
                nameCache: null,
            }
        })]
    }
}