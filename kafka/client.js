import {Kafka} from "kafkajs"

const kafka= new Kafka({
    brokers:['192.168.243.99:9092'] // 192.168.243.99 -> replace with your desktop's ip
})
export default kafka;