const router = require("express").Router();
let Client = require("../models/client.model");
const axios = require("axios")
router.route('/map').get(async (req, res)=>{
  let response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${req.query.address}&key=AIzaSyBOqJFEL9f1qDYOZv9PPcEHOXGR0-V5vCU`)
  map =   `https://www.google.com/maps/embed/v1/view?key=${process.env.API_KEY}&center=${response.data.results[0].geometry.location.lat},${response.data.results[0].geometry.location.lng}&zoom=18`
  let html = '<iframe src='+map+' height="450" width="600" style="border:0" loading="lazy" allowfullscreen></iframe>'
  res.json({
    location: response.data.results[0].geometry.location
  });

})

//get All clients
router.route('/').get(async (req, res) => {
    try{
      let clients = await Client.find();
      res.json(clients)
    }
    catch (e){
      res.json({
        status: "error",
        message: e.message
      })
    }
  })
  //get a client by id
  
  router.route('/:id').get(async (req, res) => {
    try{
      let client = await Client.findById(req.params.id);
      res.json(client)
    }
    catch (e){
      res.json({
        status: "error",
        message: e.message
      })
    }
  })
  
  //modify a client by id
  router.route('/:id').put(async (req, res) => {
    try{
      await Client.findByIdAndUpdate(req.params.id, req.body);
  
      res.json("client updated successfully!!")
    }
    catch (e){
      res.json({
        status: "error",
        message: e.message
      })
    }
  })
  
  //create a client if doesn't exist
  router.route('/auth/facebook').post(async (req, res) => {
    try{
      let client = await Client.findOne({userID: req.body.userID});
      if(!client){
        client = new Client({userID: req.body.userID, email: req.body.email, addresses: [{address: "", lat: 0, lng: 0}]})
        await client.save();
      }
        res.json(client)
    }
    catch (e){
      res.json({
        status: "error",
        message: e.message
      })
    }
  })

  
module.exports = router;
