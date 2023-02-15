const mongoose = require('mongoose')

// mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false
// })


// mongoose.connect('mongodb+srv://pankaj:Password12@cluster0.uiy8blp.mongodb.net/?retryWrites=true&w=majority/task-manager-api', {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false
// })

// mongoose.connect('mongodb+srv://pankajp:Password12@cluster0.kayzu5x.mongodb.net/task-manager-api', {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false
// })

mongoose.connect('mongodb://pankaj:Password12@docdb-demoapp.csbowdhwhfx2.us-east-1.docdb.amazonaws.com:27017/?retryWrites=false', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then(()=>console.log('Connection to db Successful'))
.catch((err)=> console.error(err))

//mongodb://pankaj:Password12@docdb-demoapp.cluster-csbowdhwhfx2.us-east-1.docdb.amazonaws.com:27017/?replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false