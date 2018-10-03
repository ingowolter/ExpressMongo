var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  global.db.findAll((e,docs)=>{
    if(e){return console.log(e);}
    res.render('index',{docs,title: 'Listagem de Clientes', message: 'Clientes já cadastrados no sistema',})
  })

});

router.get('/new', function(req, res, next){
  res.render('new',{title: "Cadastro de Cliente", action:"/new"})
})

router.post('/new', function(req, res, next){
  const nome = req.body.nome
  const idade = parseInt(req.body.idade);
  const uf = req.body.uf
  global.db.insert({nome, idade, uf},(err, result)=>{
    if(err){return console.log(err)}
    res.redirect('/?new=true')
  })
  
})

module.exports = router;
