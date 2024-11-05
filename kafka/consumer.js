import kafka from "./client.js";

async function init() {
    const consumer=await kafka.consumer({groupId:'user-1'});
    console.log('connecting consumer');
    await consumer.connect();
    console.log('consumer connected succesfully');
    await consumer.subscribe({
        topic:'rider-updates',
        fromBeginning:true
    })
    await consumer.run({
        eachMessage:async({topic,partition,message,heartbeat,pause})=>{
            console.log(`[${topic}]: Partition:${partition}: ${message.value.toString()}`);
        }
    })   
}
init();