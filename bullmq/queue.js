import { Queue } from "bullmq";
const notificationQueue=new Queue('email-queue');
async function init(sn){
   const res= notificationQueue.add('email',{email:'surshd',subjeb:"kd",sn:sn});
   console.log("added to queueu",);
}
init(122)