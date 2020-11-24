const express = require('express');
const router = express.Router();

const asyncHandler = require('express-async-handler');
const db = require('../../db/models');

router.get('/', asyncHandler(async(req, res) => {
  const sources = await db.Source.findAll();
  res.json(sources)
}))



module.exports = router;