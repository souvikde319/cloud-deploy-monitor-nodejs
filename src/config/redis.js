const { createClient } = require("redis");
require("dotenv").config();

const client = createClient({
  url: `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`
});

client.connect();

module.exports = client;