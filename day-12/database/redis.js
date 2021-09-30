const redis = require("redis");
const connectRedis = require("connect-redis");
const session = require("express-session");

const RedisStore = connectRedis(session);

const redisClinet = redis.createClient({
  host: "localhost",
  port: 6379,
});

redisClinet.on("error", function (err) {
  console.error("could not connect to redis", err);
});

redisClinet.on("connect", function () {
  console.log("connected to redis");
});

module.exports = {
  redisClinet,
  RedisStore,
  session,
};
