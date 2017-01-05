---
layout: post
title: "Pinterest Javascript SDK Auth Tutorial"
date:   2017-01-03
hasCode: true
regenerate: true
---

Recently I had the opportunity to use the Pinterest Javascript SDK at work. I ran into a few issues with it specifically with setting up an authorization session with an auth token that had been saved to a database.

Pinterest's documentation didn't explain things thoroughly enough for my needs so hopefully this blog post helps someone. I'm going to explain the authorization methods that take parameters and provide examples.

## PDK.login

This is the method used to authorize a user. The docs say there is only one string parameter required called scope. This method takes two parameters. The first parameter is an object that must have a key called `scope` that is a string. The second is a callback that will have the session as the first parameter.

### Example

<pre data-language="javascript"><code data-language="javascript">PDK.login({
    scope: "read_public, write_public, read_relationships, write_relationships"
}, function (session) {
    if ( ! session) {
        // The user didn't authorize or closed the popup window
    } else {
        // Success!
        console.log(session.auth_token); // Save this to the database along with other info
    }
});</code></pre>

## PDK.setSession

This method is used to set up the session again if you already have the auth token saved. Most likely the user has already authorized your application and you saved that data once in a database. Now the user is back again and you want to use the auth token you saved to authorize them instead of having them log in again (in case they're logged out on pinterest.com)

The docs say that the one required parameter is something called session that is a callback to PDK.getSession. Actually, this method just takes an object with two required keys. One is `accessToken` and it's a string and the other is `scope` and it's a string.

### Example

<pre data-language="javascript"><code data-language="javascript">if (existingAuthToken) {

    // This method doesn't make any kind of http request, it only sets an object.
    PDK.setSession({
        accessToken: existingAuthToken,
        scope: "read_public, write_public, read_relationships, write_relationships"
    });

    // Doing a request to test if we're still actually authorized
    PDK.me(function (response) {
        if (response.error) {
            // The user revoked their own accessToken through pinterest
            // ask them to reauthorize in the UI.
        }
    });
}</code></pre>

This method confused me the most because I thought it was making an http request for some reason to check the session, but it doesn't do anything but set the object you've specified internally. Also, if you don't set the object like that with both of the keys the SDK will throw an error when you make a request using one of the other convenience methods like `PDK.me`, `PDK.pin`, or `PDK.request` and say `A request was made on behalf of a user before they were authenticated.`

## Conclusion

That's it. I hope the examples help someone else looking up information about the Pinterest Javascript SDK. Thanks for reading!