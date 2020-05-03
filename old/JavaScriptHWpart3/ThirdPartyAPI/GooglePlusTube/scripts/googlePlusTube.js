var player;

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'M7lc1UVf-VE',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}
function stopVideo() {
    player.stopVideo();
}

var helper = (function () {
    var BASE_API_PATH = 'plus/v1/';

    return {
        /**
         * Hides the sign in button and starts the post-authorization operations.
         *
         * @param {Object} authResult An Object which contains the access token and
         *   other authentication information.
         */
        onSignInCallback: function (authResult) {
            gapi.client.load('plus', 'v1', function () {
                
                if (authResult['access_token']) {
                    $('#authOps').show('slow');
                    $('#gConnect').hide();
                    helper.profile();
                    helper.loadYoutubePlayer();                    
                }
                else if (authResult['error']) {
                    // There was an error, which means the user is not signed in.
                    // As an example, you can handle by writing to the console:
                    console.log('There was an error: ' + authResult['error']);                    
                    $('#authOps').hide('slow');
                    $('#gConnect').show();
                }
                //console.log('authResult', authResult);
            });
        },

        /**
         * Calls the OAuth2 endpoint to disconnect the app for the user.
         */
        disconnect: function () {
            // Revoke the access token.
            $.ajax({
                type: 'GET',
                url: 'https://accounts.google.com/o/oauth2/revoke?token=' +
                    gapi.auth.getToken().access_token,
                async: false,
                contentType: 'application/json',
                dataType: 'jsonp',
                success: function (result) {
                    console.log('revoke response: ' + result);
                    $('#authOps').hide();
                    $('#profile').empty();
                    $('#visiblePeople').empty();
                    $('#authResult').empty();
                    $('#gConnect').show();
                },
                error: function (e) {
                    console.log(e);
                }
            });
        },

        /**
         * Gets and renders the list of people visible to this app.
         */
        people: function () {
            var request = gapi.client.plus.people.list({
                'userId': 'me',
                'collection': 'visible'
            });
            request.execute(function (people) {
                $('#visiblePeople').empty();
                $('#visiblePeople').append('Number of people visible to this app: ' +
                    people.totalItems + '<br/>');
                for (var personIndex in people.items) {
                    person = people.items[personIndex];
                    $('#visiblePeople').append('<img src="' + person.image.url + '">');
                }
            });
        },

        /**
         * Gets and renders the currently signed in user's profile data.
         */
        profile: function () {
            var request = gapi.client.plus.people.get({ 'userId': 'me' });
            request.execute(function (profile) {
                $('#profile').empty();
                if (profile.error) {
                    $('#profile').append(profile.error);
                    return;
                }
                $('#profile').append(
                    $('<p><img src=\"' + profile.image.url + '\"></p>'));
                //$('#profile').append(
                //    $('<p>Hello ' + profile.displayName + '!<br />Tagline: ' +
                //    profile.tagline + '<br />About: ' + profile.aboutMe + '</p>'));
                //if (profile.cover && profile.coverPhoto) {
                //    $('#profile').append(
                //        $('<p><img src=\"' + profile.cover.coverPhoto.url + '\"></p>'));
                //}
            });
        },

        loadYoutubePlayer: function(){
            var tag = document.createElement('script');

            tag.src = "https://www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

                     
        }

    };
})();

/**
 * jQuery initialization
 */
$(document).ready(function () {
    $('#disconnect').click(helper.disconnect);
    $('#loaderror').hide();
    if ($('[data-clientid="YOUR_CLIENT_ID"]').length > 0) {
        alert('This sample requires your OAuth credentials (client ID) ' +
            'from the Google APIs console:\n' +
            '    https://code.google.com/apis/console/#:access\n\n' +
            'Find and replace YOUR_CLIENT_ID with your client ID.'
        );
    }
});

/**
 * Calls the helper method that handles the authentication flow.
 *
 * @param {Object} authResult An Object which contains the access token and
 *   other authentication information.
 */
function onSignInCallback(authResult) {
    helper.onSignInCallback(authResult);
}