//Dependencies
const express = require('express');
const router = express.Router();

// Models
const Pet = require('../models/pets');

// get
router.get('/pets', (req, res) => {
	Pet.getPets((err, pets) => {
		if(err){
			throw err;
		}
		res.json(pets);
	});
});

// get by id
router.get('/pet/:_id', (req, res) => {
	Pet.getPetById(req.params._id, (err, pet) => {
		if(err){
			throw err;
		}
		res.json(pet);
	});
});

// create pet
router.post('/pet', (req, res) => {
	const pet = req.body;
	Pet.addPet(pet, (err, pet) => {
		if(err){
			throw err;
		}
		res.json(pet);
	});
});

// update pet
router.put('/pet/:_id', (req, res) => {
	const id = req.params._id;
	const pet = req.body;
	Pet.updatePet(id, pet, {}, (err, pet) => {
		if(err){
			throw err;
		}
		res.json(pet);
	});
});

// upload image
router.post('/pet/:_id/uploadImage', (req, res) => {
	const id = req.params._id;
	const pet = req.body;
	Pet.updatePhotoPet(id, pet, {}, (err, pet) => {
		if(err){
			throw err;
		}
		res.json(pet);
	});
});

// delete by id
router.delete('/pet/:_id', (req, res) => {
	const id = req.params._id;
	Pet.removePet(id, (err, pet) => {
		if(err){
			throw err;
		}
		res.json(pet);
	});
});

// Return router
module.exports = router;