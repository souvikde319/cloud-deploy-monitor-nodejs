const router = require("express").Router();

router.post("/",(req,res)=>{

    res.json({
        message:"metrics received"
    });

});

module.exports = router;