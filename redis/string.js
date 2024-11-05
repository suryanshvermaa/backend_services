import client from './client.js'
async function init(){
    const set=await client.set('car:9','suryansh')
    const result=await client.get('car:9');
    // client.expire('car:9',10);
    console.log(result);
}
init();