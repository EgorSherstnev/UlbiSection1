import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import path from 'path';
import { BuildOptions } from './types/config';

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {

   return [
      new HTMLWebpackPlugin({
            template: paths.html,
      }),
      new webpack.ProgressPlugin(),
   ]
}