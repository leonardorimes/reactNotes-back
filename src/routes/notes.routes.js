const { Router } = require("express");
const NotesController = require("../controllers/NotesController");
const ensureAuthenticated = require("../midlewares/ensureAuthenticated");

const notesroutes = Router();



const notesController = new NotesController();

notesroutes.use(ensureAuthenticated);

notesroutes.get("/",  notesController.index)
notesroutes.post("/",  notesController.create)
notesroutes.get("/:id",  notesController.show)
notesroutes.delete("/:id",  notesController.delete)


module.exports = notesroutes;