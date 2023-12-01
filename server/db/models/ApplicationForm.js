const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
    lastName: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    patronymic: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    },
    birthPlace: {
        type: String,
        required: true
    },
    // resume: {
    //     type: Buffer,
    //     required: true
    // },
    about: {
        type: String,
        required: false
    },
    jobDirection: {
        type: String,
        required: true,
        enum: ['frontend', 'backend']
    },
    frameworksFrontend: {
        type: [String],
    },
    customFrontendFrameworks: {
        ssr: { type: String },
        uiKit: { type: String },
        stateManager: { type: String }
    },
    frameworksBackend: {
        type: [String],
    },
    databaseBackendFrameworks: [String]
});

module.exports = mongoose.model('Application', ApplicationSchema);