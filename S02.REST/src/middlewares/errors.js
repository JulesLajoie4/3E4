<<<<<<< HEAD
//export default (req, res, next) => {
    //console.log('🍹 Bonjour d\'un middleware');
    //next();
//}

export default (err, req, res, next) =>{
=======
// export default (req, res, next) => {
//     console.log('🍹 Bonjour d\'un middleware');
//     next();
// }

export default (err, req, res, next) => {

>>>>>>> 43a9e524f6eac82110002ca0a1edb257c9af7330
    res.status(err.statusCode).json(err);
    next();
}