/*
|--------------------------------------------------------------------------
| Configuration
|--------------------------------------------------------------------------
|
| To configure your streaming, define the name of your radio, url and 
| type of your streaming below.
|
*/

var settings = {
    'radio_name': 'SoundWorks',

    // URL of streaming without / on the final, eg: http://streaming.com:8080
    'url_streaming': 'https://soundworks.live:8000',
	'stream_path': '/128kbps.mp3',

    // When choosing icecast, make sure the file 'player.log' in the document root is writeable.
    // Choose between 'shoutcast' or 'icecast'
    'streaming_type': 'icecast',

    // Visit https://api.vagalume.com.br/docs/ to get your API key
    'api_key': 'c0445b0e90f7d4afcfa0215d215d35d9',

    // Set to true to get the last songs played
    'historic': true,

    // Only for SHOUTCast!
    // Set to true to show the next song to be played. 
    // Make sure your streaming show this information!
    'next_song': false,

    // Path to default cover art when none are found
    'default_cover_art': 'img/bg-capa.jpg',
};