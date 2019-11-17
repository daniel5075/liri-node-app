# liri-node-app

## __Creator:__ Daniel Groveman
## __Created On:__ November 16, 2019

- - -

## ABOUT THE APP
LIRI is a _Language_ Interpretation and Recognition Interface. LIRI IS a command line node app that takes in parameters and gives you back data.  The user has the option of using four commands (listed below):
* 'concert-this'
* 'spotify-this-song'
* 'movie-this'
* 'do-what-it-says'

- - -

## HOW TO USE LIRI STEP BY STEP INSTUCTIONS:
1. Open your terminal such as Bash.
2. Navigate to the folder that contains the `liri.js` file. 
3. Depending on the command you run, the output will vary. 

- - -

    **Example 1**: Run the `concert-this` command
    
        node liri.js concert-this <name of artist or band>
    
    Output: The system will display the location where the artist or band will perform.  See screen-shot below:

    ![Results](/img/concert-this.PNG)

---

    **Example 2**: Run the `spotify-this-song` command
    
        node liri.js spotify-this-song <name of song>
    
    Output: The system will display a list of information associated with the song. See screen-shot below:

    ![Results](/img/spotify-this.png)

---

    **Example 3**: Run the `movie-this` command
    
        node liri.js movie-this <name of movie>
    
    Output: The system will display information associated with the movie. See screen-shot below:

    ![Results](/img/movie-this.png)
        
        If a search is run without the movie name it will default to Mr. Nobody and return results of that movie.  See screen-shot below:

    ![Results](/img/movie-this-wout.png)

---

    **Example 4**: Run the `do-what-it-says` command
        
        node liri.js do-what-it-says
        
    Output: The system will read the text in the random.txt file, and perform the comman listed in the random.txt file. 
    
    See screen-shot below:

    ![Results](/img/do-what-i-say.png)

- - -

## TECHNOLOGIES USED
* Javascript
* Nodejs
* Node packages:
    * Node-Spotify-API
    * Request
    * Moment
    * DotEnv
* APIs used:
    * Bands in Town
    * OMDB
* Git
* GitHub