 var BLOCKED_URL = ' ';
        var FORWARDING_URL = 'https://sopontatv.blogspot.com/';
        if (document.referrer == BLOCKED_URL) {
            location.href = FORWARDING_URL;
        }
        
        var b = 'https://shared-tv.blogspot.com/';
        if (document.referrer.indexOf(b) != -1) {
            location.href = 'https://www.google.com/';
        }
