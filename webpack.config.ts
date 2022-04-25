import { join } from 'path'
import { Configuration } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

const SRC_DIR = join(__dirname, 'src')
const DIST_DIR = join(__dirname, 'dist')

// eslint-disable-next-line import/no-anonymous-default-export
export default function (): Configuration {
  return {
    mode: 'development',
    entry: join(SRC_DIR, 'index.tsx'),
    output: {
      path: DIST_DIR
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/i,
          use: [
            {
              loader: 'ts-loader'
            }
          ]
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader'
          ]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
			  template: join(__dirname, 'src', 'index.html'),
			  filename: 'index.html',
			  inject: 'body'
      }),
      new MiniCssExtractPlugin()
		  ]
  }
}
