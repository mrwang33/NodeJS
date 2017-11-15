package com.wh;

import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;
import redis.clients.jedis.JedisPoolConfig;

public class TestConnect {
    public static void main(String[] args) {
        JedisPool pool;

        JedisPoolConfig config = new JedisPoolConfig();//创建redis连接池
        // 设置最大连接数，-1无限制
        config.setMaxTotal(300);
        // 设置最大空闲连接
        config.setMaxIdle(100);
        // 设置最大阻塞时间，记住是毫秒数milliseconds
        config.setMaxWaitMillis(100000);
        // 创建连接池
        pool = new JedisPool(config, "127.0.0.1", 6379,200000);
        new ThreadToMysql("wang", "wang33",pool).start();
    }
}
