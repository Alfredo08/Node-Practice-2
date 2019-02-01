
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const {ListaFrutas} = require('./../models/frutasModel');

let jsonParser = bodyParser.json();

router.get('/lista-frutas', jsonParser, (req, res) => {
	var promise = new Promise(function(resolve, reject) {
		ListaFrutas.obtener(resolve, reject)
	})
	.then(lista => {
		res.json(lista);
	});
});

router.post('/lista-frutas', jsonParser, (req, res) => {
	console.log(req.body);

	const camposRequeridos = ['nombre', 'id'];

	for (let i = 0; i < camposRequeridos.length; i ++){
		if (!(camposRequeridos[i] in req.body)){
			console.log(`Falta el campo ${camposRequeridos[i]}`);
			return res.status(400).send(`Falta el campo ${camposRequeridos[i]}`);
		}
	}

	var promise = new Promise(function(resolve, reject) {
		ListaFrutas.crear(resolve, reject, {
							id : req.body.id,
							nombre: req.body.nombre,
							date : req.body.date
						});
	})
	.then(lista => {
		res.json(lista);
	})
});

router.put('/lista-frutas/:id/:nombre', jsonParser, (req, res) => {
	let id = req.params.id;
	let nombre = req.params.nombre;

	for ( let i = 0; i < listaFrutas.length; i ++){
		if ( listaFrutas[i].id == id ){
			listaFrutas[i].nombre = nombre;
			res.status(204).end();
		}
	}

	return res.status(400).send("Id no se encontró en la lista");

});

router.delete('/lista-frutas/:id', jsonParser, (req, res) => {

	if( req.params.id == req.body.id ){
		for ( let i = 0; i < listaFrutas.length; i ++ ){
			if ( req.params.id == listaFrutas[i].id){
				listaFrutas.splice(i, 1);
				res.status(204).end();
			}
		}
		return res.status(400).send("Id no se encontró en la lista");
	}
	else{
		return res.status(400).send('El parametro no coincide con el body');
	}

});


module.exports = {
	router
};




