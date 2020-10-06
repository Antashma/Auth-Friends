import React from 'react';

const LandingPage = () => {
    return (
        <section>
            <h2>Project Description</h2>
            <ul>
                <li>There is an API built that has authentication built into it. The API holds a list of friends and lets you add, edit, or remove friends from that list</li>
                <li>All of the API endpoints (except the login endpoint) are considered "protected", meaning you have to make the request with an authentication token in the header or the API will send back a `401` error</li> 
                <li>Take your examples from the guided project and use them to build a more sophisticated application. Have fun!</li> 
                <li>Once your server is up and running, the URL you'll be able to hit from within your app is `http://localhost:5000`. You will however need an authentication header on all the calls except the login call</li>
                <li>Take a look at the endpoints that our API has to offer in `server.js`</li>
            </ul>
        </section>
    );
}

export default LandingPage;