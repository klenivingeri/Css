var express = require('express');
var router = express.Router();
const axios =  require('axios')

/* GET users listing. */
router.get('/', function(req, res, next) {

  async function getApi(){
    try{
      const { data } = await axios('https://digimon-api.vercel.app/api/digimon');
    if(data.erro){
      res.status(400).json(data.erro)
    }else{
      res.status(200).json(data)
    }
  }catch(error){
    res.status(404).json({message: 'Failed to return Api data' })
  }
  
  }

  getApi();

});


module.exports = router;
