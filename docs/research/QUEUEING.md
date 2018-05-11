# Message broker
A message broker is software that allows for queueing of tasks between software. It provides low-coupling between different kinds of applications.


## RabbitMQ
![RabbitMQ workflow](https://www.cloudamqp.com/img/blog/workflow-rabbitmq.png)

RabbitMQ is a program which defines **producers** and **consumers** of a message. A producer is an application that sends messages and a consumer is an application that receives messages.

In RabbitMQ there is an **exchange** which receives messages. This exchange decides in which queue a message belongs, this is called a **binding**. There are different kinds of exchanges each with their own rules that decide how to bind a message to a queue.

In RabbitMQ a message broker can receive messages from a producer application, queue these messages and then load-balance (if needed) the messages over one or more consumers.

### Direct exchange
Write more here
### Topic exchange
Write more here
### Fanout exchange
Write more here

## REST, websockets, STOMP
Rather than being a way to communicate data between applications. A message broker is just a seperate service which keeps track of the communication between multiple applications.

RabbitMQ is compatible with several messaging protocols, such as:
- AMQP (binary)
- STOMP (text based, simple and highly compatible)
- MQTT (publish/subscribe)
- HTTP
    - Web-STOMP plugin (WebSocket)
    - JSON-RPC (synchronous)

## Why and where should I use it in this project
At [de Ceuvel](http://deceuvel.nl/en/), for which this project will be built. Software communicates through RabbitMQ using the STOMP messaging protocol. For their applications to be compatible with my application, I will use RabbitMQ combined with the STOMP protocol.

## Architecture

