const permissionTo = (...roles)=>{
    return (req,res,next)=>{
        const userRole = req.user.role
        if(!roles.includes(userRole)){
            res.status(403).json({
                message:"You can not perform this action"
            })
        }
        else{
            next();
        }
    }
    }
    module.exports= permissionTo