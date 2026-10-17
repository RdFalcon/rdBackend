const asyncHandler=function(requestHandler){
   return  function(req,res,next){
    Promise.resolve(requestHandler(req,res,next)).catch(function(error){
        return next(error);
    })
   }
};

export {asyncHandler};

//try and catch code 

//  const asyncHandler=function(fn){
//    return async function(req,res,next){
// try{
//     await fn(req,res,next)
// }
// catch(error){
//     res.status(error.code||500).json({
//         success:false,
//         message:error.message
//     })
// }

// }
 
 