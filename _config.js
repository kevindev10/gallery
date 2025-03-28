var config = {}

// Update to have your correct username and password
// config.mongoURI = {
//     production: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom?retryWrites=true&w=majority',
//     development: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
//     test: 'mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-test?retryWrites=true&w=majority',
// }

config.mongoURI = {
    production: "mongodb+srv://kevin1345:kevin1345@cluster0.jowxgba.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    development: "mongodb+srv://kevin1345:kevin1345@cluster0.jowxgba.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    test: "mongodb+srv://kevin1345:kevin1345@cluster0.jowxgba.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
}



// "mongodb+srv://kevin1345:<db_password>@cluster0.jowxgba.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// "mongodb+srv://kevin1345:kevin1345@cluster0.jowxgba.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"


module.exports = config;
