const express = require("express");
const router = express.Router();
const { auth, authMaster007 } = require("../middleware/auth");

const multer  = require('multer');
const path = require('path');
const crypto = require('crypto');

const uploadDir = '/img/';

const storage = multer.diskStorage({
    destination: "./public" + uploadDir,
    filename: function (req, file, cb) {
      crypto.pseudoRandomBytes(16, function (err, raw) {
        if (err) return cb(err)

        cb(null, raw.toString('hex') + path.extname(file.originalname))
      })
    }
})

const upload = multer({storage: storage, dest: uploadDir });

/////////////////////////////// REGISTER & LOGIN ////////////////////
const { register, login } = require("../controllers/auth");

//////////////////////////////// USER BRO ////////////////////////////
const {
  read: checkUsers,
  readOne: findUser,
  delete: deleteUser,
  updateOne: updateUser,
} = require("../controllers/user");
//////////////////////////////// MUSIC BRO ////////////////////////////
const {
  read: checkMusics,
  create: addMusic,
  update: updateMusic,
  delete: deleteMusic
} = require("../controllers/music");

//////////////////////////////// USER BRO ////////////////////////////
const {
  read: checkArtists,
  create: addArtist,
  readOne: findArtist,
  delete: deleteArtist,
  updateOne: updateArtist,
} = require("../controllers/artist");

//////////////////////////////// TRANSACTION BRO ////////////////////////////
const {
  read: checkTransaction,
  create: addTransaction,
  readOne: findTransaction,
  readMore: findTransactionMany,
  update: updateTransaction,
  delete: deleteTransaction,
  createToken: tokenTransaction
} = require("../controllers/transaction");

// Register and login
router.post("/register", register);
router.post("/login", login);

// Users
router.get("/users", checkUsers);
router.get("/users/:id_user", findUser);
router.patch("/users/edit/:id_user", authMaster007, updateUser);
router.delete("/users/delete/:id_user", authMaster007, deleteUser);

// Music
router.get("/musics", checkMusics);
//router.get("/musics/detail/:idMusic", detailMusic);
router.post("/musics/add", [upload.single('thumbnail')], addMusic);
router.delete("/musics/delete/:idMusic", authMaster007, deleteMusic);
router.patch("/musics/edit/:idMusic", [upload.single('thumbnail')], updateMusic);

// Artist
router.get("/artists",authMaster007, checkArtists);
router.post("/artists/find/:idArtist", findArtist);
router.post("/artists/add",authMaster007, addArtist);

// Transaction
router.get("/transactions", checkTransaction);
router.get("/transaction/:idTransaction", findTransaction);
router.get("/transaction/listedUserId/:userId", findTransactionMany);
router.get("/transaction/snaps/:price", tokenTransaction);
router.post("/transaction/add", auth, addTransaction);
router.patch("/transaction/edit/:idTransaction", [upload.single('attach')], updateTransaction);
router.delete("/transaction/delete/:idTransaction", deleteTransaction);


module.exports = router;
