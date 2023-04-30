const express = require('express');
const cors = require('cors');
const config = require('./config');
const routes = require('./routes');

const app = express();

app.use(cors({
  origin: '*',
}));

// ADD ROUTE REQUESTS HERE
app.get('/searchArtists', routes.search_artists); //Covered
app.get('/searchAlbums', routes.search_albums); //Covered
app.get('/searchSongs', routes.search_songs); //Covered
app.get('/numArtistsByCountry', routes.num_artists_by_country)//Covered
app.get('/searchSongsAdvanced', routes.search_songs_advanced)// Covered
app.get('/topArtistByCountry', routes.top_artist_by_country) //Covered
app.get('/ratingThresholdCount', routes.rating_threshold_count)
app.get('/averageRating/:artist', routes.average_rating_artist)
app.get('/averageAlbums', routes.average_albums)
app.get('/topAlbumsInRange', routes.top_albums_in_range)
app.get('/highestRatedAlbumsPerArtist', routes.highest_rated_albums_per_artist)
app.get('/averageCountryRating', routes.average_country_rating) //Covered


app.listen(config.server_port, () => {
  console.log(`Server running at http://${config.server_host}:${config.server_port}/`)
});

module.exports = app;

