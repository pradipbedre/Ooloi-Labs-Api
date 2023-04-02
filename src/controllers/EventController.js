import Event from "../models/Event.js";

// create event controller
export const createEvent = async (req, res) => {
  try {
    const newEvent = new Event({
      event_title: req.body.event_title,
      registration_link: req.body.registration_link,
      event_date: req.body.event_date,
      event_start_time: req.body.event_start_time,
      event_end_time: req.body.event_end_time,
      about_event: req.body.about_event,
      speakers: req.body.speakers,
      moderators: req.body.moderators,
      other_event_info: req.body.other_event_info,
    });
    const savedEvent = await newEvent.save();
    res.json(savedEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// get event controller
export const getEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    res.json(event);
  } catch (err) {
    res.status(404).json({ message: "Event not found" });
  }
};

// update event controller
export const updateEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(event);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// delete event controller
export const deleteEvent = async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    res.json({ message: "Event deleted" });
  } catch (err) {
    res.status(404).json({ message: "Event not found" });
  }
};
