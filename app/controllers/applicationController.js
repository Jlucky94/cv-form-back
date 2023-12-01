const {connect} = require("../../server/db/mongo");

exports.createApplication = async (req, res) => {
    let collection = (await connect()).collection('cv-form')
    try {
        const newApplicationData = req.body;
        const result = await collection.insertOne(newApplicationData);
        console.log(result)
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

exports.getApplication = async (req, res) => {
    let collection = await db.collection('cv-form')
    try {
        const application = await collection.findOne({_id: client.ObjectId(req.params.id)});
        if (!application) {
            return res.status(404).json({message: 'Application not found'});
        }
        res.status(200).json(application);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};
