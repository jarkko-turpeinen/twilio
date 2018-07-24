exports.cloudant = {        

    connect: (credentials) => {return console.log('Serving Cloudant from ', credentials.url)}
    ,
    merge: () => {return "merge success"}
    ,
    select: () => {return "select success"}
    ,
    insert: () => {return "insert success"}
    ,
    delete: () => {return "delete success"}
}