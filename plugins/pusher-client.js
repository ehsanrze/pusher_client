"use strict"

const PusherClient = require('pusher-js')
const fp = require('fastify-plugin')

/**
 * use fastify plugin to handle encapsulation limits
 *
 * @type {FastifyPluginAsync}
 */
module.exports = fp(async function (fastify, opts) {
    fastify.decorate('pusherClient', new PusherClient('app-key', {
        wsHost: '127.0.0.1',
        wsPort: 6001,
        forceTLS: false,
        disableStats: true,
        enabledTransports: ['ws'],
        channelAuthorization: {
            endpoint: "http://127.0.0.1:3001/soketi/auth-server/",
        }
    }))
})