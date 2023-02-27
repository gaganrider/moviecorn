var express = require('express');
var router = express.Router();
const passport =require('passport')
const User = require("../models/model")
const Movie = require("../models/movie")

// ==========================================
passport.use(User.createStrategy());
// =====================================

function isLoggedin(req,res,next){
  if (req.isAuthenticated()){
    return next()
  }else{
    res.send('login error')
  }
  }

  router.get("/checkAuthentication",isLoggedin,(req, res) => {
res.json(req.user)
    
  });




/* GET home page. */
router.get('/',(req, res, next)=> {
  Movie.find({}, function (err, docs) {
    try{
      res.json(docs);
    }catch(err){
      console.log(err)
    }
});
});

// =======================================================================
router.get('/cat/:id',(req, res, next)=> {
  Movie.find({$or:[ 
    {cat1:req.params.id}, {cat2:req.params.id} ,{cat3:req.params.id} 
  ]}, function (err, docs) {
    try{
      res.json(docs);
    }catch(err){
      console.log(err)
    }
});
});


// ==============================================


router.get('/register',(req, res, next)=> {
  res.render('register', { title: 'Express' });
});

router.post('/register', function(req, res, next) {
  const { name,email,username, password } = req.body;
  User.register({ name, username,email,}, password)
  .then(()=>{
    res.json(req.body)
    console.log(req.body)
    console.log('registerd')})
  .catch((err)=>{console.log(err)
    res.json(req.body)
  })
});



// ==============================================================
router.get('/login',(req, res, next)=> {
  res.render('login', { title: 'Express' })
  .catch((err)=>console.log(err))
  ;
});

router.post('/login',
  passport.authenticate('local', { failureRedirect: '/login', failureMessage: true ,'session': true}),
  function(req, res) {
    res.json(req.user)
    console.log(req.user);
  });


// =======================================================
router.get('/err',(req, res, next)=> {
  res.send('oops everything went wrong');
});


// =======================================================


// =================================================

router.post('/suggestion',(req, res, next)=> {
  Movie.find({$or:[ 
    {cat1:req.body.cat1}, {cat1:req.body.cat2} ,{cat1:req.body.cat3},{cat2:req.body.cat1}, {cat2:req.body.cat2} ,{cat2:req.body.cat3},{cat3:req.body.cat1}, {cat3:req.body.cat2} ,{cat3:req.body.cat3},
  ]}, function (err, docs) {
    try{
      res.json(docs);
    }catch(err){
      console.log(err)
    }
});
});



// ================================================================


router.post('/list',(req, res, next)=> {
  console.log('click')
  User.findOneAndUpdate({name:'gagan' }, { 
    $push:{ list:req.body } },
                            function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
        console.log("Updated User : ", docs);
    }
});
});




router.get('/list',(req, res, next)=> {
  console.log('click')
  User.findOne({name:'gagan' }, function (err, docs) {
    try{
      res.json(docs.list);
    }catch(err){
      console.log(err)
    }
});
});

// ================================



router.post('/removelist',(req, res, next)=> {
  console.log('click')
  User.findOneAndUpdate({name:'gagan' }, { 
    $pull:{ list:req.body } },
                            function (err, docs) {
    if (err){
        console.log(err)
    }
    else{
        console.log("Updated User : ", docs);
    }
});
});

// ==============================================================
// router.post('/search',(req, res, next)=> {
//   console.log('click')
//   console.log(req.body.search)
//   User.findOneAndUpdate({name:'gagan' }, { search:req.body.search },
//                             function (err, docs) {
//     if (err){
//         console.log(err)
//     }
//     else{
//         console.log("Updated User : ", docs);
//     }
// });
// });


// router.get('/search',(req, res, next)=> {
//   User.findOne({name:'gagan' }, function (err, docs) {
//     try{
//       Movie.find({moviename:docs.search}, function (err, docs) {
//         try{
//           res.json(docs);
//         }catch(err){
//           console.log(err)
//         }
//     });
//     }catch(err){
//       console.log(err)
//     }
// }); 
// })




router.get('/search/:id',(req, res, next)=> {
  Movie.find({moviename:req.params.id}, function (err, docs) {
    try{
      res.json(docs);
    }catch(err){
      console.log(err)
    }
}); 
})
module.exports = router;
