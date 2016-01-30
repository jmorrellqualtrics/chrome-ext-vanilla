$( document ).ready(function() {
	// Run search suggest function
	$(document).keyup(function(event){
	    if(event.keyCode == 13){
	    	searchSuggest();
	    }
	});

	$("button").click(function() {
	  	searchSuggest();
	});

	// Data
	var searchTerm = ["Darude - Sandstorm by Darude", "test"];
	var searchURL = ["/search?espv=2&biw=1280&bih=637&q=darude+sandstorm&spell=1&sa=X&ved=0ahUKEwjPtr7WnNLKAhUT4GMKHcBiBkEQvwUIGSgA", "test"];
	

	// Search Suggest Functions
	function searchSuggest() {
		// Choose a Random Number
		var happenstance = randomIntFromInterval(0,14)
		// If modulus of random number is 2 - Roughly 33% of the time
		if (happenstance % 3 == 2) {
			// Select a random topic
			var topicIndex = chooseTopicIndex();
			// If random topic has already been suggested
			if ( $(".searchSuggestBox").length ) {
				// Remove it
				$(".searchSuggestBox").remove();
			// If randome topic has not been suggested
			} else {
				// Suggest it
				$("#center_col").prepend('<div class="searchSuggestBox" style="padding:0 8px"><div class="med"><div><p class="ssp card-section"><span class="spell _uwb">Did you mean:</span> <a class="spell" href="' + searchURL[topicIndex] + '"><b><i>' + searchTerm[topicIndex] + '</i></b></a> </p></div><hr class="rgsep _l4"></div></div>');
			}				
		}
	}

	// Helper Functions
	function chooseTopicIndex() {
		var arrayLength = searchTerm.length - 1;
		var rand = randomIntFromInterval(0,arrayLength)
		return rand
	}

	function randomIntFromInterval(min,max)
	{
	    return Math.floor(Math.random()*(max-min+1)+min);
	}
});

