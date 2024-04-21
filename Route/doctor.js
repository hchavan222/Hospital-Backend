
const ex = require('express');
const rout = ex.Router();
const Doctor = require('../Model/doc');

rout.route('/').get((req, res) => {
	Doctor.find()
		.then(doctors =>
			res.json(doctors))
		.catch(err =>
			res.status(400)
				.json('Error: ' + err));
});

rout.route('/add')
	.post((req, res) => {
		const { dName, specs } = req.body;

		const newDoctor =
			new Doctor({ dName, specs });

		newDoctor.save()
			.then(savedDoctor =>
				res.json(savedDoctor))
			.catch(
				err =>
					res.status(400)
						.json('Error: ' + err));
	});



rout.route('/update/:id')
	.post((req, res) => {
		Doctor.findById(req.params.id)
			.then(doctor => {
				if (!doctor) {
					return res.status(404)
						.json('Doctor not found');
				}

				doctor.dName = req.body.dName;
				doctor.specs = req.body.specs;

				doctor.save()
					.then(() => res.json('Doctor updated!'))
					.catch(err => res.status(400)
						.json('Error: ' + err));
			})
			.catch(err => res.status(400)
				.json('Error: ' + err));
	});


rout.route('/delete/:id').delete((req, res) => {
	Doctor.findByIdAndDelete(req.params.id)
		.then(doctor => {
			if (!doctor) {
				return res.status(404)
					.json('Doctor not found');
			}
			res.json('Doctor deleted!');
		})
		.catch(err => res.status(400)
			.json('Error: ' + err));
});

module.exports = rout;
