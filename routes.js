var router = module.exports = require('express').Router();

 //= router;

router.get('/', function(req, res) {
  res.render('bootstrap3-templates/starter-template', {
	  pathToAssets:'bootstrap', 
	  pathToSelectedTemplateWithinBootstrap : '/bootstrap/examples/starter-template'});
});

router.get('/callback', function(req, res) {
  res.render('bootstrap3-templates/starter-template', {
	  pathToAssets:'bootstrap', 
	  pathToSelectedTemplateWithinBootstrap : '/bootstrap/examples/starter-template'});
});

router.get('/admin', function(req, res) {
  res.render('bootstrap3-templates/dashboard', {
	  pathToAssets:'bootstrap', 
	  pathToSelectedTemplateWithinBootstrap : '/bootstrap/examples/dashboard'});
});