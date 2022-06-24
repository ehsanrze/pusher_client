"use strict"

const Pusher = require('pusher')
const fp = require('fastify-plugin')

/**
 * use fastify plugin to handle encapsulation limits
 *
 * @type {FastifyPluginAsync}
 */
module.exports = fp(async function (fastify, opts) {
    fastify.decorate('pusher', new Pusher({
        appId: "app-id",
        key: "app-key",
        secret: "app-secret",
        host: '127.0.0.1',
        port: 6001,
        scheme: 'http'
    }))
})