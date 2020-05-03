/// <reference path="jquery-2.0.2.js" />

var root;
$(document).ready(function () {
    root = $("#fb-root");
});

window.fbAsyncInit = function () {
    // init the FB JS SDK
    FB.init({
        appId: '534634659932519',                         // App ID from the app dashboard
        channelUrl: 'http://localhost:3317/channel.html', // Channel file for x-domain comms
        status: true,                                     // Check Facebook Login status
        xfbml: true                                       // Look for social plugins on the page
    });
   
    //on successful login loads the buttons and their functions
    FB.login(function () {
        //using this for clone base
        var button = $('<button></button>');
        
        var friends = button.clone().html('Show Friends').click(showFriends);
        var bDay = button.clone().html('Show Birthday').click(showBday);
        var sendMessage = button.clone().html('Post Message').click(postMessage);
        var logoutButton = button.clone().html('Log me out').click(function () {
            FB.logout();
        });

        root.append(logoutButton).append(friends).append(bDay).append(sendMessage);

    });

    root.on('click', 'img', function () {
       $(this).toggleClass('bigger-picture');        
    });
};
  
function showFriends() {
    var friends = $('<div><p>Friends</p></div>');
    var img = $('<img alt="User avatar"/>');

    FB.api('/me/friends', function (response) {
        for (var friend in response.data) {
            var nextFriendImg = img.clone();
            nextFriendImg.attr('src', 'https://graph.facebook.com/' + response.data[friend].id + '/picture?type=square');
            nextFriendImg.addClass('small-picture');
            friends.append(nextFriendImg);
        }
    });

    root.append(friends);
}

function showBday() {
    FB.api('/me?fields=birthday', function (response) {
        root.append($("<div><p>Birthday:</p><p>" + response.birthday + "</p></div>"));
    })
}

function postMessage() {
    FB.ui(
        {
            method: 'feed',
            name: 'The Facebook SDK for Javascript',
            caption: 'Bringing Facebook to the desktop and mobile web',
            description: (
                'A small JavaScript library that allows you to harness ' +
                'the power of Facebook, bringing the user\'s identity, ' +
                'social graph and distribution power to your site.'
            ),
            link: 'https://developers.facebook.com/docs/reference/javascript/',
            picture: 'http://www.fbrell.com/public/f8.jpg'
        },
        function (response) {
            if (response && response.post_id) {
                alert('Post was published.');
            } else {
                alert('Post was not published.');
            }
        }
    );
}
// Load the SDK asynchronously
(function (d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/bg_BG/all/debug.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));