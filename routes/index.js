var express = require('express');
var router = express.Router();
const sql = require("../empControllers");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/testconnect', function(req, res, next) {
  sql.getdata();
  res.render('index', { title: 'Express' });
});
router.get("/getdata_withQuery", function (req, res, next) {
  sql.getdata_withQuery().then((result) => {
    res.json(result);
  });
});
router.post("/addEmp", function (req, res, next) {
  sql.adddata_withQuery(req.body).then((result) => {
    res.json(result);
  });
});
router.get("/getEmp/:id", function (req, res, next) {
  let id = req.params.id
  sql.getataById(id).then((result) => {
    res.json(result);
  });
});
router.delete("/deleteEmp/:id", function (req, res, next) {
  let id = req.params.id
  sql.deleteByEmpId(id).then((result) => {
    res.json(result);
  });
});
router.delete("/deleteAllEmp", function (req, res, next) {
  sql.deleteAllEmp().then((result) => {
    res.json(result);
  });
});
router.put("/editEmp", function (req, res, next) {
  sql.getataById(req.body).then((result) => {
    res.json(result);
  });
});
router.put("/updateEmp", function (req, res, next) {
  sql.updateByEmp(req.body).then((result) => {
    res.json(result);
  });
});



module.exports = router;
