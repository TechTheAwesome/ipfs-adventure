import { join } from 'path'
import { Configuration } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'

const SRC = join(__dirname, 'src');
const DIST = join(__dirname, 'dist');

// eslint-disable-next-line import/no-anonymous-default-export
export default function (): Configuration {
  return {
    mode: 'development',
    entry: join(SRC, 'index.tsx'),
    output: {
      path: DIST,
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js']
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
			  favicon: join(SRC, 'favicon.jpeg'),
      }),
      new MiniCssExtractPlugin(),
      new CopyWebpackPlugin({
        patterns: [
          { from: 'src/assets', to: 'assets' }
        ]
      })
		  ]
  }
}
