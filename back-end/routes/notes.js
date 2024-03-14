const express = require('express');
const Notes = require('../models/Notes');
const fetchUser = require('../middleware/fetchUser');
const { body, validationResult } = require('express-validator');
const router = express.Router();

// Route1: Fetch all notes by user
router.post('/fetchallnotes',
// authorization of token and fetching user id
    fetchUser,
    async (req, res)=>{
// fetch all notes by user id
        const notes = await Notes.find({user: req.user.id});
        res.json(notes)
    }
)

// Route2: Add notes by user
router.post('/addnote',
// field validations
    body('title', 'Title must be atleast 3 character long').isLength({min: 3}),
    body('description', 'Description must be atleast 5 character.').exists(),

// authorization of token and fetching user id
    fetchUser,
    async (req, res)=>{
// check if there are any field errors, if any return bad request
        const errors = validationResult(req);
        if(!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
        
// create new note
        const {title, description, tag} = req.body;
        try {
            const note = await Notes.create({
                "user": req.user.id,
                "title": title,
                "description": description,
                "tag": tag
            });
            res.status(200).send(note);
        } catch (error) {
            res.status(500).send({error:"Internal server error"})
        }
    }
)

// Route3: Delete note by user
router.put('/updatenote/:id',
// authorization of token and fetching user id
    fetchUser,
    async (req, res)=>{
        try {
// check whether the present user own this note or, not
            let note = await Notes.findById(req.params.id);
            if(!note) return res.status(404).send("Not found!");
            if(note.user.toString() !== req.user.id) return res.status(401).send("Not allowed!");

// create new note
            const {title, description, tag} = req.body;

            let updateNote = {};
            if(title) updateNote.title = title;
            if(description) updateNote.description = description;
            if(tag) updateNote.tag = tag;

            note = await Notes.findByIdAndUpdate(req.params.id, {$set:updateNote}, {new:true});
            res.status(200).send(note);
        } catch (error) {
            res.status(500).send({error:"Internal server error"});
        }
    }
)

// Route4: Update note by user
router.delete('/deletenote/:id',
// authorization of token and fetching user id
    fetchUser,
    async (req, res)=>{
        try {
// check whether the present user own this note or, not
            let note = await Notes.findById(req.params.id);
            if(!note) return res.status(404).send("Not found!");
            if(note.user.toString() !== req.user.id) return res.status(401).send("Not allowed!");

// create new note
            note = await Notes.findByIdAndDelete(req.params.id);
            res.status(200).send(note);
        } catch (error) {
            res.status(500).send({error:"Internal server error"});
        }
    }
)

module.exports = router;