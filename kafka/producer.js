import client from './client.js';
async function init() {
    const producer=await client.producer();
    console.log('connecting producer');
    await producer.connect();
    console.log('producer connected suucessfully');
    await producer.send({
        topic:'rider-updates',
        messages:[{
            key:'location-update',
            value:JSON.stringify({name:"john",loc:"lakhimpur"})
        }]
    })
    console.log('message produced successfully');
    producer.disconnect(); 
}
init();