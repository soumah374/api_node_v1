'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
    annee: String,
    projet: String,
    date_debut: String,
    date_fin: String,
    region: String,
    prefecture: String,
    sous_prefecture: String,
    village_quartier: String,
    longitude: String,
    latitude: String, 
    cout_projet: String,
    nombre_personne_beneficiaire:String,
    type_projet: String,
    point_depart_arrive: String,
    distance: String,
    surface: String

});

module.exports = mongoose.model('Geolocalisation', TaskSchema);


