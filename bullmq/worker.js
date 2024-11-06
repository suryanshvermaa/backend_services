import { Worker } from "bullmq";
const worker=new Worker('email-queue',(job)=>{
    console.log(`got message(${job.id}):${job.data.sn}`);
},{connection:{
    host:"localhost",
    port:6379
}});
worker.on('completed', job => {
    console.log(`${job.id} has completed!`);
  });
  
  worker.on('failed', (job, err) => {
    console.log(`${job.id} has failed with ${err.message}`);
  });