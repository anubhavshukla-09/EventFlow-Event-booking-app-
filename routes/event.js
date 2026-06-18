const express = require("express");
const router = express.Router();
const {
  getEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
} = require("../controllers/eventController");
const { protect, admin } = require("../middleware/auth");

router.get("/", getEvents); // get all event
router.get("/:id", getEventById); //get event by id
router.post("/", protect, admin, createEvent); //create event
router.put("/:id", protect, admin, updateEvent); //update event
router.delete("/:id", protect, admin, deleteEvent); //delete event

module.exports = router;
