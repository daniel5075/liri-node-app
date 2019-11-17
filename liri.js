require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

var inputString = process.argv;

var whatThis = inputString[2];
var title = inputString.slice(3).join(" ");

switch (whatThis) {
    case "concert-this":
        concertThis()
        break;

    case "spotify-this-song":
        spotifyThis()
        break;

    case "movie-this":
        movieThis()
        break;

    case "do-what-it-says":
        doThis()
        break;
}

function concertThis() {
    console.log("************* " + title);
    axios
        .get("https://rest.bandsintown.com/artists/" + title + "/events?app_id=codingbootcamp")
        .then(function (response) {
            console.log(response.data.venue);
        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
};

function movieThis() {
    if (title == "") {
        title = "Mr. Nobody"
    };
    axios
        .get("http://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy")
        .then(function (response) {
            console.log("The title of the movie is: " + response.data.Title);
            console.log("The year the movie came out is: " + response.data.Year);
            console.log("The IMDB rating of the movie is: " + response.data.imdbRating);
            console.log("The Rotten Tomatoes rating of the movie is: " + response.data.Ratings[1].Value);
            console.log("The Country where the movie was produced is: " + response.data.Country);
            console.log("The language of the movie is: " + response.data.Language);
            console.log("The plot of the movie is: " + response.data.Plot);
            console.log("The actors in the movie are: " + response.data.Actors);
        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
};
function spotifyThis() {

};