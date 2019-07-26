// hook the ORM
const db = require("../models");

// export methods
module.exports = {
    /* ***** */
    // Users //
    /* ***** */
    createUser: function (req, res) {
        db.User.create(req.body).
            then((dbRes) => { res.json(dbRes); }).
            catch((err) => { res.status(422).json(err); });
    },
    findUsers: function (req, res) {
        // pass an empty object ({}) in req.query to find all users.
        // pass {username: the_username} or {email: the_email} to search by username or email
        db.User.find(req.query).
            then((dbRes) => { res.json(dbRes); }).
            catch((err) => { res.status(422).json(err); });
    },
    findUserByID: function (req, res) {
        db.User.findById(req.params.id).populate().
            then((dbRes) => { res.json(dbRes); }).
            catch((err) => { res.status(422).json(err); });
    },
    updateUser: function (req, res) {
        db.User.findByIdAndUpdate(req.params.id, req.body).
            then((dbRes) => { res.json(dbRes); }).
            catch((err) => { res.status(422).json(err); });
    },
    removeUser: function (req, res) {
        db.User.findByIdAndDelete(req.params.id).
            then((dbRes) => { res.json(dbRes); }).
            catch((err) => { res.status(422).json(err); });
    },
    /* ***** */
    // Beers //
    /* ***** */
    createBeer: function (req, res) {
        db.Beer.create(req.body).
            then((dbRes) => { res.json(dbRes); }).
            catch((err) => { res.status(422).json(err); });
    },
    findBeer: function (req, res) {
        // pass an empty object ({}) in req.query to find all beers.
        db.Beer.find(req.query).
            then((dbRes) => { res.json(dbRes); }).
            catch((err) => { res.status(422).json(err); });
    },
    findBeerByID: function (req, res) {
        db.Beer.findById(req.params.id).
            populate().
            then((dbRes) => { res.json(dbRes); }).
            catch((err) => { res.status(422).json(err); });
    },
    updateBeer: function (req, res) {
        db.Beer.findByIdAndUpdate(req.params.id, req.body).
            then((dbRes) => { res.json(dbRes); }).
            catch((err) => { res.status(422).json(err); });
    },
    removeBeer: function (req, res) {
        db.Beer.findByIdAndDelete(req.params.id).
            then((dbRes) => { res.json(dbRes); }).
            catch((err) => { res.status(422).json(err); });
    },
    /* ******** */
    // Comments //
    /* ******** */
    createComment: function (req, res) {
        db.Comment.create(req.body).
            then((dbRes) => { res.json(dbRes); }).
            catch((err) => { res.status(422).json(err); });
    },
    findComments: function (req, res) {
        // pass an empty object ({}) in req.query to find all comments.
        db.Comment.find(req.query).
            then((dbRes) => { res.json(dbRes); }).
            catch((err) => { res.status(422).json(err); });
    },
    findCommentByID: function (req, res) {
        db.Comment.findById(req.params.id).
            populate().
            then((dbRes) => { res.json(dbRes); }).
            catch((err) => { res.status(422).json(err); });
    },
    updateComment: function (req, res) {
        db.Comment.findByIdAndUpdate(req.params.id, req.body).
            then((dbRes) => { res.json(dbRes); }).
            catch((err) => { res.status(422).json(err); });
    },
    removeComment: function (req, res) {
        db.Comment.findByIdAndDelete(req.params.id).
            then((dbRes) => { res.json(dbRes); }).
            catch((err) => { res.status(422).json(err); });
    }
};