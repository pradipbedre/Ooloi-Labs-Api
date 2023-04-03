import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  event_title: {
    type: String,
    required: true,
  },
  registration_link: {
    type: String,
    required: true,
  },
  event_date: {
    type: Date,
    required: true,
  },
  event_start_time: {
    type: String,
    required: true,
  },
  event_end_time: {
    type: String,
    required: true,
  },
  about_event: {
    type: String,
    required: true,
  },
  speakers: [
    {
      speaker_name: String,
      speaker_image: String,
      speaker_info: String,
    },
  ],
  moderators: [
    {
      moderator_name: String,
      moderator_image: String,
      moderator_info: String,
    },
  ],
  other_event_info: {
    title: [String],
    subtitle: [String],
    quote: [String],
    image: [String],
    pdf: [String],
    video: [String],
    bullet_list: [String],
    number_list: [String],
  },
  joining_info: {
    type: String,
    required: true,
  },
  organised_by: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
});

const Event = mongoose.model("Event", eventSchema);

export default Event;

