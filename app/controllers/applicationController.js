const {connect} = require("../../server/db/mongo");
const {ObjectId} = require("mongodb");
const fs = require('fs');

exports.createApplication = async (req, res) => {
    let collection = (await connect()).collection('cv-form');
    try {
        let newApplicationData = req.body;

        if (req.file) {
            newApplicationData.resume = req.file.buffer;
        }
        const result = await collection.insertOne(newApplicationData);
        res.status(201).json({ id: result.insertedId });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getApplication = async (req, res) => {
    let collection = (await connect()).collection('cv-form')
    try {
        const applicationId = new ObjectId(req.params.id)
        const application = await collection.findOne({_id: applicationId});
        if (!application) {
            return res.status(404).json({message: 'Резюме не найдено'});
        }
        res.status(200).json(application);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};
