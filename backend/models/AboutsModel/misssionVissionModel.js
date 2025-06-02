const mongoose = require('mongoose');

const missionVisionSchema =mongoose.Schema({
    mission:{
        type :String,
        require:true,
    },
    vision:{
        type :String,
        require:true,
    },
    updatedAt:{
        type:Date,
        default:Date.now(),
    }
});

module.exports  = mongoose.model('MissionVision', missionVisionSchema);