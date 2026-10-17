import { asyncHandler } from "../utils/asynchHandler.js";
const regitsterUser=asyncHandler(  async function(req,res){
    res.status(200).json({
        message:"ok"
    })
} );
export {regitsterUser};