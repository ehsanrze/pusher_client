"use strict"

const AutoLoad = require( '@fastify/autoload' )           /** to Autoload a folder along with its all sub-folders and files. */
const FastifyEnv = require( '@fastify/env' )
const path = require('path')                              /** nodeJs path module. */

module.exports = async function ( fastify, opts )
{
    //register .env
    fastify.register( FastifyEnv, { schema: {             /** https://github.com/fastify/fastify-env */
            type: 'object',
            required: [ 'APP_ENV' ],
        }, dotenv: true } );

    //register plugins
    fastify.register( AutoLoad, {
      dir: path.join( __dirname, 'plugins'),          /** in JavaScript everything is an object, in Fastify everything is a plugin. */
    } );

    //register routes
    fastify.register( AutoLoad, {                         /** Autoload and Register all routes */
        dir: path.join( __dirname, 'routes'),
        options: Object.assign( {}, opts)
    } );

}