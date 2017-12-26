const mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	autoIncrement = require('mongoose-auto-increment');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/petstore');
mongoose.Promise = global.Promise;
const db = mongoose.connection;
autoIncrement.initialize(db);

// pet Schema
const petSchema = Schema({
	_id: {
		type: Schema.Types.ObjectId
	},
	name:{
		type: String,
		required: true
	},
	age:{
		type: Number,
		required: true
	},
	photo:{
		type: String,
		required: true
	}
}, { versionKey: false });

petSchema.plugin(autoIncrement.plugin, 'Pet');
const Pet = module.exports = mongoose.model('Pet', petSchema);

// Get pets
module.exports.getPets = (callback, limit) => {
	Pet.find(callback).limit(limit);
}

// Get pet
module.exports.getPetById = (id, callback) => {
	Pet.findById(id, callback);
}

// Add pet
module.exports.addPet = (pet, callback) => {
	Pet.create(pet, callback);
}

// Update pet
module.exports.updatePet= (id, pet, options, callback) => {
	const query = {_id: id};
	Pet.findOneAndUpdate(query, pet, options, callback);
}

// Update photo pet
module.exports.updatePhotoPet= (id, pet, options, callback) => {
	const query = {_id: id};
	const update = {
		photo: pet.photo,
	}
	Pet.findOneAndUpdate(query, update, options, callback);
}

// Delete pet
module.exports.removePet = (id, callback) => {
	const query = {_id: id};
	Pet.remove(query, callback);
}
