import express from 'express';

import Ratings from '../models/ratingsModel';

const router = express.Router();

/* GET Ratingss listing. */
router.get('/', function(req, res, next) {
  return (
    Ratings
      // we are providing the empty object to mean we are not giving any constraints -- we want them all!
      .find({})
      .then(Ratings =>
        res
          .status(200) // explicitly set the status code to 200 to indicate the request was successful
          .send(Ratings)
      )
      .catch(err => next(err))
  ); // if we get an error, propagate the error to the next middleware
});

/* POST a Ratings. (This will create one in the database, if successful) */
router.post('/:name', function(req, res, next) {
  const Ratings = new Ratings({ name: req.params.name });

  Ratings.save()
    .then(() =>
      res
        .status(201) // explicitly set the status code to 201 to indicate an entry was successfully created
        .send(
          `Successfully created the model with name '${
            req.params.name
          }'! Try and view all the models now!`
        )
    )
    .catch(err => next(err));
});

/* DELETE a Ratings. (This will remove one in the database, if successful) */
router.delete('/:name', function(req, res, next) {
  Ratings.remove({ name: req.params.name })
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
