require("dotenv").config();
var fs = require('fs');
var keys = require("./keys.js");
var moment = require('moment');
var axios = require("axios");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
var inputString = process.argv;
var whatThis = inputString[2];
var title = inputString.slice(3).join(" ");
checkCondition(whatThis, title);

function checkCondition(whatThis, title) {
    switch (whatThis) {
        case "concert-this":
            concertThis(title)
            break;

        case "spotify-this-song":
            spotifyThis(title)
            break;

        case "movie-this":
            movieThis(title)
            break;

        case "do-what-it-says":
            doThis(title)
            break;

        default:
            console.log("Invalid Option. Please type any of the following options: \nconcert-this \nspotify-this-song \nmovie-this \ndo-what-it-says")
    }
};
function concertThis(title) {
    axios
        .get("https://rest.bandsintown.com/artists/" + title + "/events?app_id=codingbootcamp")
        .then(function (response) {
            var dateTime = (response.data[0].datetime);
            var dateFormated = moment(dateTime).format("MM/DD/YYYY");
            console.log("*********************")
            console.log("The artist is: " + response.data[0].artist.name);
            console.log("The name of the venue is: " + response.data[0].venue.name);
            console.log("The location of the venue is: " + response.data[0].venue.city);
            console.log("The date of the event is: " + dateFormated);
            console.log("*********************")
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

function movieThis(title) {
    if (title == "") {
        title = "Mr. Nobody"
    };
    axios
        .get("http://www.omdbapi.com/?t=" + title + "&y=&plot=short&apikey=trilogy")
        .then(function (response) {
            console.log("*********************")
            console.log("The title of the movie is: " + response.data.Title);
            console.log("The year the movie came out is: " + response.data.Year);
            console.log("The IMDB rating of the movie is: " + response.data.imdbRating);
            console.log("The Rotten Tomatoes rating of the movie is: " + response.data.Ratings[1].Value);
            console.log("The Country where the movie was produced is: " + response.data.Country);
            console.log("The language of the movie is: " + response.data.Language);
            console.log("The plot of the movie is: " + response.data.Plot);
            console.log("The actors in the movie are: " + response.data.Actors);
            console.log("*********************")
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
function spotifyThis(title) {
    if (title == "") {
        title = "The Sign"
    };

    spotify
        .search({ type: 'track', query: title })
        .then(function (response) {
            console.log("*********************")
            console.log("The Artist(s): " + response.tracks.items[0].artists[0].name);
            console.log("The Song Name: " + response.tracks.items[0].name);
            console.log("Link to the song: " + response.tracks.items[0].external_urls.spotify);
            console.log("The Album the song is from: " + response.tracks.items[0].album.name);
            console.log("*********************")
        })
        .catch(function (err) {
            console.log(err);
        });
};

function doThis() {
    fs.readFile('random.txt', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        var dataArr = data.split(',');
        whatThis = dataArr[0];
        title = dataArr[1];
        checkCondition(whatThis, title);
    });
};