const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const dbFrutas = mongoose.Schema({
	nombre : {type : String, required : true},
	id : {type : Number, required : true}
});

const Frutas = mongoose.model("Frutas", dbFrutas);

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
	obtener : function(){
		return inventarioFrutas
	},
	crear : function(resolve, reject, nuevaFruta){
		Frutas.create(nuevaFruta)
			.then( resultado => {
				resolve(resultado);
			})
			.catch(err => {
				reject(err);
			})
	}
}


module.exports = {
	ListaFrutas : ListaFrutas
};