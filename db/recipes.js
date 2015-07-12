var mongoose = require('mongoose')
    , config = require('../config')
	;

var connect = mongoose.connect('mongodb://'+config.recipes.host+'/recipes');

var Recipe = new Schema({
    author    : ObjectId
  , title     : String
  , image     : String
  , text      : String
  , link      : String
  , date      : Date
});