// your code here!
function totalWords(text) {

	let words = text.split(" ");

	return words.length;

}

function avgWordLength(text) {

	let sum = 0;

	let words = text.split(" ");

	for(let x = 0; x < words.length; x++) {

		sum += words[x].length;

	}

	return sum / words.length;

}

function uniqueWordCount(text) {

	text = text.toLowerCase();
	text = text.replace(/[^a-zA-z ]/g,' ');
	let words = text.split(' ');
	words = words.filter(word => word.length > 0);

	let uniqueWords = [];
	for(let x = 0; x < words.length; x++) {

		if(!uniqueWords.includes(words[x])) {
			uniqueWords.push(words[x]);
		}

	}

	let counts = {};
	for(let x  = 0; x < uniqueWords.length; x++) {
		counts[uniqueWords[x]] = 0;
	}

	for(let x = 0; x < words.length; x++) {

		counts[words[x]]++;

	}

	let values = Object.values(counts);
	let max = values[0];
	for(let x = 0; x < values.length; x++) {

		if(values[x] > max) {

			max = values[x]

		}

	}

	return max;

	// console.log(counts);

}

function handleFormSubmit() {

	$('#word-counter').submit(function(event) {

		event.preventDefault();
		$('.text-report').removeClass('hidden');
		let text = $('#user-text').val();
		$('#total').text(totalWords(text));
		$('#unique').text(uniqueWordCount(text));
		$('#avg').text(avgWordLength(text));

	});

}

$(function() {

	handleFormSubmit();

})














