"use strict"

module.exports = async (fastify, opts) => {

    fastify.get('/listen-to-client', function (req, res){
        fastify.pusherClient.subscribe(`private-client-${req.query.client_id}`).bind('client-send-position', function (data) {
            console.log(`client-${req.query.client_id}`, data)
        })
        return "hi"
    })
    

    fastify.get('/check-pusher', function (req, res) {

        fastify.pusher.trigger("private-client-2", "test-event", {
            courier_id: 1,
            message: "hello world from fastify"
        }).then(console.log('hi'));

        return "Hello"
    })  

    fastify.get('/health', function (req, res) {
        return res.send({ health: "is OK from root", APP_ENV: process.env.APP_ENV })
    });

}