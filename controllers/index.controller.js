const indexCtrl = {}

const Movie  = require('../models/Movie');

indexCtrl.renderIndex = async(req,res)=>{
    
    const peli = await Movie.find({}).sort({updatedAt:-1}).limit(2);
    res.json(peli);
}

module.exports = indexCtrl;