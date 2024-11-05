import kafka from "./client.js";
async function init() {
    const admin=await kafka.admin();
    console.log('Admin connecting');
    await admin.connect;
    console.log('admin connected successfully');
    admin.createTopics({
        topics:[
            {
                topic:'rider-updates',
                numPartitions:2
            }
        ]
    })
    console.log('Topic created successfully');
    admin.disconnect();
}
init();