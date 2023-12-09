const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  
console.log('req.params.id', req.params.id );

  const query = `
  SELECT "movies"."title", "genres"."name" as "movie_genre" FROM "movies_genres"
	inner join "movies"
	on "movies_genres"."movie_id" = "movies"."id"
	inner join "genres"
	on "movies_genres"."genre_id" = "genres"."id"
	WHERE "movies"."id" = ${req.params.id};
`;



  pool.query(query)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movie genre', err);
      res.sendStatus(500)
    })

});

module.exports = router;