(function () {
    //takes param {timeTolive:<days>}
    var LocalStorageShim = function (param) {
        if (param && param.timeToLive) {
            this.timeToLive = new Date();
            this.timeToLive.setTime(this.timeToLive.getTime() + param.timeToLive * 24 * 60 * 60 * 1000); //adds given amount of days to cookie's time to live
            this.timeToLive = this.timeToLive.toUTCString();
        }
    };

    LocalStorageShim.prototype = {
        setItem: function (key, value) {
            var newCookie = key + '=' + value + ';'
            if (this.timeToLive) {
                newCookie += 'expires=' + this.timeToLive + ';path=/;';
            }
            document.cookie = newCookie;
        },
        getItem: function (key) {
            return this.readItemFromCookie(key);
        },
        readItemFromCookie: function (key) {
            var cookies = document.cookie.split(';');
            var i, j;
            for (i = 0; i < cookies.length; i++) {
                var nextCookie = cookies[i];
                for (j = 0; j < nextCookie.length; j++) {
                    if (nextCookie[j] !== ' ') {
                        break;
                    }
                }

                nextCookie = nextCookie.substr(j);

                if (nextCookie.substr(0, key.length) === key) {
                    return nextCookie;
                }
            }
        }
    }

    if (typeof localStorage === 'undefined') {
        localStorage = new LocalStorageShim({ timeToLive: 999 });
    }

    if (typeof sessionStorage === 'undefined') {
        sessionStorage = new LocalStorageShim(); //without param will make new cookies expires = Date().now;
    }

    //since all browsers from IE7 onwards do carry the localStorage and sessionStorage
    //for testing purposes:

    if (typeof LocalStorage === 'undefined') {
        LocalStorage = new LocalStorageShim({ 'timeToLive': 999 });
    }

    if (typeof SessionStorage === 'undefined') {
        SessionStorage = new LocalStorageShim();
    }
})()
