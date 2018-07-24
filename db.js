exports.cloudant = {        

    connect: (credentials) => {return console.log('Serving Cloudant from ', credentials.url)}
    ,
    merge: () => {return "merge success"}

}