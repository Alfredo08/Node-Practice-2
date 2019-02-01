const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// this is our schema to represent a restaurant
const fruitSchema = mongoose.Schema({
  nombre: {type: String, required: true},
  id: {type: Number, required: true},
  date : {type: Date}
});

const Fruit = mongoose.model('Fruit', fruitSchema);

let inventarioFrutas = [
					{
						nombre : "manzana",
						id : 123
					},
					{
						nombre : "naranja",
						id : 456
					}
					];


const ListaFrutas = {
	obtener : function(resolve, reject){
		Fruit.find()
			.then(result => {
				resolve(result);
			})
			.catch(err => {
				reject(err);
			})
	},
	crear : function(resolve, reject, nuevaFruta){
		Fruit.create(nuevaFruta)
			.then(result => {
				resolve(result);
			})
			.catch(err => {
				reject(err);
			})
	}
}

module.exports = {
	ListaFrutas : ListaFrutas
};