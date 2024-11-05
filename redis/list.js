import client from './client.js'
async function init(){
    const set=await client.lpush('msg','hello sir');
    const result=await client.rpop('msg');
    console.log(result);
}
init();