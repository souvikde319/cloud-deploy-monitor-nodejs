exports.createServer = async (req,res)=>{

    res.json({
        message:"Server created"
    });

};

exports.getServers = async (req,res)=>{

    res.json({
        message:"List servers"
    });

};