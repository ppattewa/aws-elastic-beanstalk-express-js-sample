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

mongoose.connect('mongodb+srv://pankajp:Password12@cluster0.kayzu5x.mongodb.net/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})