var initPolit = function(name) {
    
  var politician = {};

  politician.name = name;
  politician.result = null;
  politician.votes = 0;
	politician.partyColor = null;
  
  politician.tallyResults = function() {
    this.votes = 0;
    for (var i = 0; i < this.result.length; i++) {
      this.votes = this.votes + this.result[i];
    }
  };
	
  return politician;
}

p1 = initPolit("Kamala Harris");
p2 = initPolit("Justin Amash");

p1.result = [5,1,7,2,33,6,4,2,1,14,
             8,3,1,11,11,0,5,3,3,3,
             7,4,8,9,3,7,2,2,4,2,
             8,3,15,15,2,12,0,4,13,1,
             3,2,8,21,3,2,11,1,3,7,2];

p2.result = [4,2,4,4,22,3,3,1,2,15,
             8,1,3,9,0,6,1,5,5,1,
             3,7,8,1,3,3,1,3,2,2,
             6,2,14,0,1,6,7,3,7,3,
             6,1,3,17,3,1,2,11,2,3,1];

p1.partyColor = [132, 17, 11];
p2.partyColor = [245, 141, 136];

// p1.tallyResults();
// p2.tallyResults();
// console.log(p1.votes, p2.votes);

// Fix Florida
p1.result[9] = 1;
p2.result[9] = 28;

// Fix California
p1.result[4] = 17;
p2.result[4] = 38;

// Fix Texas
p1.result[43] = 11;
p2.result[43] = 27;

var setStateResults = function(state) {
	var stateWinner;
	if (p1.result[state] > p2.result[state]) {
		theStates[state].winner = p1;
		theStates[state].rgbColor = p1.partyColor;
		stateWinner = p1.name;
	} else if (p1.result[state] < p2.result[state]) {
		theStates[state].winner = p2;
		theStates[state].rgbColor = p2.partyColor;
		stateWinner = p2.name;
	} else {
		theStates[state].winner = null;
		theStates[state].rgbColor = [11, 32, 57];
		stateWinner = "TIE"
	}
  
  // Fill the dynamic table with this state's results

	var stateInfoTable = document.getElementById('stateResults');
	
	var stateInfoHeader = stateInfoTable.children[0].children[0];
	stateInfoHeader.children[0].innerText = theStates[state].nameFull;
	stateInfoHeader.children[1].innerText = theStates[state].nameAbbrev;
	
	var stateInfoP1 = stateInfoTable.children[1].children[0];
	stateInfoP1.children[0].innerText = p1.name;
	stateInfoP1.children[1].innerText = p1.result[state];
	
	var stateInfoP2 = stateInfoTable.children[1].children[1];
	stateInfoP2.children[0].innerText = p2.name;
	stateInfoP2.children[1].innerText = p2.result[state];

	var stateInfoWinner = stateInfoTable.children[1].children[2];
	stateInfoWinner.children[1].innerText = stateWinner;
}
		
p1.tallyResults();
p2.tallyResults();
// console.log(p1.votes, p2.votes);

// Fill the static table with the total results.

var countryTable = document.getElementById('countryResults');

countryTable.children[0].children[0].children[0].innerText = p1.name;
countryTable.children[0].children[0].children[1].innerText = p1.votes;
countryTable.children[0].children[0].children[2].innerText = p2.name;
countryTable.children[0].children[0].children[3].innerText = p2.votes;

var winner;
if (p1.votes > p2.votes) {
	winner = p1.name;
} else if (p1.votes < p2.votes) {
	winner = p2.name;
} else
	winner = "TIE";

countryTable.children[0].children[0].children[5].innerText = winner;

// console.log(winner);


		
		
		
		
		