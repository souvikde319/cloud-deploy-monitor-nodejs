const router = require("express").Router();

const auth = require("../middleware/auth.middleware");

router.get("/",auth,(req,res)=>{
    res.json({message:"deployments"});
});

module.exports = router;