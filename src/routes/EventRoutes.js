import express from "express";
const router = express.Router();
import {
  createEvent,
  updateEvent,
  getEvent,
  deleteEvent,
} from "../controllers/EventController.js";

// Create a new Event
router.post("/event", createEvent);

// update an Event
router.put("/event/update/:id", updateEvent);

// Read one Event
router.get("/event/read/:id", getEvent);

// delete one Event
router.delete("/event/delete/:id", deleteEvent);

export default router;
