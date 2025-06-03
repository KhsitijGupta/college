const MissionVision = require('../../models/AboutsModel/misssionVissionModel.js');

module.exports.missionVision = async (req, res, next) => {
    try {
        const data = req.body;

        if (data.mission !== '' && data.vision !== '') {
            const result = await MissionVision.findOneAndUpdate(
                {}, 
                {
                    $set: {
                        mission: data.mission,
                        vision: data.vision,
                        updatedAt: new Date(),
                    }
                },
                {
                    new: true,
                    upsert: true
                }
            );

            return res.status(200).json({ message: 'Mission & Vision updated', data: result });
        } else {
            return res.status(400).json({ message: 'Mission and Vision are required' });
        }
    } catch (err) {
        next(err);
    }
};


module.exports.getmissionVision = async (req, res, next) => {
    try {
        const result = await MissionVision.findOne();
        if(result){
            return res.status(200).json({ message: 'successfully fetched', data: result });
        }else{
            return res.status(404).json({ message: 'not Found' });
        }
    } catch (err) {
        next(err);
    }
};
