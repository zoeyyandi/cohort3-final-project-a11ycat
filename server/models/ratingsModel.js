import mongoose, { Schema } from 'mongoose';

export const ratingSchema = new Schema({
  name: String,
  lat: Number,
  lon: Number,
  accessible_parking: Boolean,
  automatic_front_door: Boolean,
  front_door_ramp: Boolean,
  legible_signage: Boolean,
  service_animal_welcome: Boolean
});

export const Ratings = mongoose.model('Ratings', ratingSchema);

export default Ratings;
