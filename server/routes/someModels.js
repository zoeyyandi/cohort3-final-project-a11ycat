import express from 'express';

import { Place, Ratings } from '../models/placesModel';

const router = express.Router();

/* GET Places listing. */

router.get('/', function(req, res, next) {
  Place
    // we are providing the empty object to mean we are not giving any constraints -- we want them all!
    .find({})
    .then(places =>
      res
        .status(200) // explicitly set the status code to 200 to indicate the request was successful
        .send(places)
    )
    .catch(err => next(err));
  // if we get an error, propagate the error to the next middleware
});

/* POST a Places. (This will create one in the database, if successful) */
router.post('/:name', function(req, res, next) {
  Place.findOne(
    { name: req.body.name, lat: req.body.lat, lon: req.body.lon },
    function(err, foundPlace) {
      if (err) {
        console.log(err);
        res.status(500).send();
      } else {
        if (!foundPlace) {
          const newPlace = new Place({
            name: req.params.name,
            lat: req.body.lat,
            lon: req.body.lon,
            ratings: [
              new Ratings({
                accessible_parking: req.body.rating.accessible_parking,
                automatic_front_door: req.body.rating.automatic_front_door,
                front_door_ramp: req.body.rating.front_door_ramp,
                legible_signage: req.body.rating.legible_signage,
                service_animal_welcome: req.body.rating.service_animal_welcome
              })
            ]
          });
          newPlace.save(function(err, newPlace) {
            if (err) {
              console.log(err);
              res.status(500).send();
            } else {
              res
                .status(201)
                .send(
                  `Successfully created the model with name ${req.params.name}!`
                );
            }
          });
        } else {
          foundPlace.ratings.push(
            new Ratings({
              accessible_parking: req.body.rating.accessible_parking,
              automatic_front_door: req.body.rating.automatic_front_door,
              front_door_ramp: req.body.rating.front_door_ramp,
              legible_signage: req.body.rating.legible_signage,
              service_animal_welcome: req.body.rating.service_animal_welcome
            })
          );
          foundPlace.save(function(err, updatedFoundPlace) {
            if (err) {
              console.log(err);
              res.status(500).send();
            } else {
              res
                .status(201)
                .send(`Successfully added new rating to ${req.params.name}`);
            }
          });
        }
      }
    }
  );
});

/* DELETE a Places. (This will remove one in the database, if successful) */
router.delete('/:name', function(req, res, next) {
  Place.remove({ name: req.params.name })
    .then(() =>
      res
        .status(200) // explicitly set the status code to 201 to indicate the request was successful
        .send(
          `Successfully removed the model with name '${
            req.params.name
          }'! Try and view all the models now!`
        )
    )
    .catch(err => next(err)); // if we get an error, propagate the error to the next middleware
});

export default router;
