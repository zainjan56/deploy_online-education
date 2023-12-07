const express = require("express");
const router = express.Router();
const {quizValidation} = require("./validation");
const Quiz = require("../models/Quiz");

router.post('/createquiz', async (req, res) => {
    try {
      const { question, options, correctAnswer } = req.body;
      const { error } = quizValidation(req.body);
  
      if (error) return res.status(400).send(error.details[0].message);
  
      const newQuiz = new Quiz({ question, options, correctAnswer });
      await newQuiz.save();
  
      res.json({ message: 'Quiz data added successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error adding quiz data' });
    }
  });

  router.get('/questions', async (req, res) => {
    try {
      // Use Mongoose to query the database for all questions
      const questions = await Quiz.find();
      res.json(questions);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error fetching questions' });
    }
  });

module.exports = router;