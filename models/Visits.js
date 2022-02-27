const { model, Schema } = require('mongoose');

const NewVisitSchema = Schema({
    visit_number: {
        type: Number,
        default: 0,
        min: 0,
    }
}, {
    versionKey: false,
    timestamps: true
});

module.exports = model('Visits', NewVisitSchema )