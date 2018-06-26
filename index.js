$(document).ready(function (){
});

function searchRep() {
  const searchTerms = $('#searchTerms').val();
  $.get(`https://api.github.com/search/repositories?q=${searchTerms}`),
  data => {
    $('#results').html(renderSearchResults(data));
  };
}

function showCommits() {
  
}

function displayError() {
  
}
