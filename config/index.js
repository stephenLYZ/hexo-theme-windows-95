import path from 'path'
import ip from 'ip'

const NODE_ENV = process.env.NODE_ENV || 'devlopment'


const config = {

  // Environment
  __CLIENT__: true,
  __SERVER__: false,
  __DEV__: NODE_ENV === 'development',
  __PROD__: NODE_ENV === 'production',

  // Server Configuration
  SERVER_HOST: process.env.HOST || ip.address(),
  SERVER_PORT: process.env.PORT || 3000,

  // Webpack Configuration
  WEBPACK_DEV_SERVER_PORT: 3001,
  VENDOR_DEPENDENCIES: [
    'react',
    'react-dom',
    'react-redux',
    'react-router',
    'react-router-redux',
    'redux',
  ],

  // Project Structure
  PATH_BASE: path.resolve(__dirname, '../'),
  ENTRY_APP: 'index',
  DIR_CLIENT: 'client',
  DIR_STATIC: 'static',
  DIR_ADMIN: 'admin',
  DIR_DIST: 'dist',
  DIR_BUILD: 'build',
  DIR_SERVER: 'server',
  DIR_NODE_MODULES: 'node_modules',
  DIR_PROJECT_CONFIG: 'config',
}

const paths = (dir = 'base') => {
  const resolve = path.resolve
  const base = (...args) => (
    resolve.apply(resolve, [config.PATH_BASE, ...args])
  )
  const _paths = {
    base: base(),
    entryApp: base(config.DIR_CLIENT, config.ENTRY_APP),
    entryAdmin: base(config.DIR_ADMIN, config.ENTRY_APP),
    entryServer: base(config.DIR_SERVER, config.ENTRY_APP),
    staticDir: base(config.DIR_STATIC),
    build: base(config.DIR_BUILD),
    server: base(config.DIR_SERVER),
    nodeModules: base(config.DIR_NODE_MODULES),
    projectConfig: base(config.DIR_PROJECT_CONFIG),
  }

  return _paths[dir]
}

export { config as default, paths }
