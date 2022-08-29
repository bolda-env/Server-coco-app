const express = require('express'),
  app = express();
const cors = require('cors');

// Middlewares
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "DELETE", "PUT"],
  credentials: true,
}));
app.use(express.json());

/************************/
/*    LOCAL MODULE      */
/************************/
const {createAccount, getUser, getUserById } = require('./local_module/control');


// @desc    POST /create_account
app.post('/create_account', (req, res)=>{
  createAccount(req, res);
})

// @desc    POST /login
app.post('/login', (req, res)=>{
  getUser(req, res)
})

// @desc    GET /user/:id
app.get('/user/:id', (req, res)=>{
  // res.json({username: 'Doe'});
  getUserById(req, res);
})
const PORT = 5000 || process.env.PORT
app.listen(PORT, ()=> console.log(`Connected to http://localhost:${PORT}`));
