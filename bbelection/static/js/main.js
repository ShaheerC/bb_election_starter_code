// In the main.js file, build an AJAX request that makes a GET request to the root path, and expects a JSON response.
// Make sure you're making this request within your DOMContentLoaded block
// Add a <ul> to your index.html file, with an id. This is what we'll attach our data to.
// In the .done((responseData) => {}) callback function for the AJAX request, loop over the candidates in responseData, and append a <li> element for each candidate into the DOM at our <ul> from the last step. You'll want to show the name and votes count of each candidate.

document.addEventListener("DOMContentLoaded", function() {
    const ul = document.querySelector('.ul');

    const request = axios.get('https://bb-election-api.herokuapp.com/');
    request.then(function(response) {
        console.log("__REQUEST_MADE__");
        candidateLoop = response.data.candidates;
        candidateLoop.forEach(element => {
            const liElem = document.createElement('li');
            liElem.innerHTML = `Candidate: ${element.name} Votes: ${element.votes}`;
            ul.appendChild(liElem); 
        });
    })
    .catch(function(error) {
        console.error('__REQUEST_FAILED__');
        console.error(error.response.data);
    });

});
