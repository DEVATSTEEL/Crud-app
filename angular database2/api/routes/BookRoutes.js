const express = require('express');
const books = require('../models/Book')
const mongoose = require('mongoose');
const Book = require('../models/Book');
const router = express.Router();
const app = express()

router.get('/', (req, res, next) =>
    books.find().then(result => {
        console.log(result)
        res.status(200).json({
            LiblaryData: result
        })

    }).catch(err => {
        console.log(err);
        res.status(500).json({ error: err })
    })

)


router.get('/:id', (req, res, next) =>
    books.findById(req.params.id).then(result => {

        res.status(200).json({
            BooksData: result
        })

    }).catch(err => {
        console.log(err);
        res.status(500).json({ error: err })
    })

)

app.use(express.json())
router.post('/', (req, res, next) => {
    const Book = new books({
        _id: new mongoose.Types.ObjectId,
        Name: req.body.name,
        Price: req.body.price,
        Description: req.body.description,

    })


    Book.save().then(result => {
        console.log(result)
        res.status(200).json({
            newBooks: result
        })
    })


}
)

router.delete('/:id', (req, res, next) => {
    const bookId = req.params.id; 
  
    books.deleteOne({ _id: bookId }).then(result => {
      res.status(200).json({
        BookData: "Book Deleted"
      });
      
    }).catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
  });
  

router.put('/:id', (req, res, next) => {
    const id = req.params.id;
    const updateData = {
        name: req.body.name,
        Price: req.body.price,
        Description: req.body.Description,
    };

    books.findOneAndUpdate({ _id: id }, { $set: updateData }, { new: true })
        .then(updatedBook => {
            if (!updatedBook) {
                return res.status(404).json({ error: 'Book not found' });
            }

            res.status(200).json({
                BookData: "Book Updated"
            });
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({ error: err });
        });
});


module.exports = router