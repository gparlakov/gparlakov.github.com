(function () {
    var LocalStorageShim = function (param) {
        this.timeToLive = new Date();
        if (param.timeToLive) {
            this.timeToLive.setTime(this.timeToLive.getTime() + param.timeToLive * 24 * 60 * 60 * 1000); //adds given amount of days to cookie's time to live
        }
        this.timeToLive = this.timeToLive.toUTCString();
    };

    LocalStorageShim.prototype = {
        setItem: function (key, value) {
            var newCookie = "'" + key + "=" + value + "; expires=" + this.timeToLive + ";path=/'";
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
                if (nextCookie.startsWith(key)) {
                    return nextCookie;
                }
            }
        }
    }

    //if (!localStorage1) {
    document.cookie = 'c1=cookie1; expires=Thu, 30 Apr 2014 21:44:00 UTC; path=/';

    localStorage1 = new LocalStorageShim({ timeToLive: 999 });
    //}
    localStorage1.setItem('huij', 'putka');
    localStorage1.getItem('huij');
})()