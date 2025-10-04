function wordToNumber(text) {
    // Maps for numbers and multipliers
    const numbers = {
        'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4,
        'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9,
        'ten': 10, 'eleven': 11, 'twelve': 12, 'thirteen': 13,
        'fourteen': 14, 'fifteen': 15, 'sixteen': 16, 'seventeen': 17,
        'eighteen': 18, 'nineteen': 19, 'twenty': 20, 'thirty': 30,
        'forty': 40, 'fifty': 50, 'sixty': 60, 'seventy': 70,
        'eighty': 80, 'ninety': 90
    };

    const multipliers = {
        'hundred': 100,
        'thousand': 1000,
        'million': 1000000,
        'billion': 1000000000,
        'trillion': 1000000000000
    };

    // Split the input string into words and convert to lowercase
    const words = text.toLowerCase().split(/\s+/);

    let total = 0;  // Final result
    let current = 0;  // Tracks the current number being built

    for (let word of words) {
        if (numbers[word]) {
            // Add the number to the current value
            current += numbers[word];
        } else if (multipliers[word]) {
            // Apply the multiplier to the current value
            if (word === 'hundred') {
                current *= multipliers[word];
            } else {
                // For thousand, million, billion, trillion, add to total
                current *= multipliers[word];
                total += current;
                current = 0;  // Reset current for the next segment
            }
        }
    }

    // Add any remaining value in current to total
    total += current;

    return total.toLocaleString(); // Format with commas (e.g., 300,000,000)
}

function convertToNumber() {
    const inputText = document.getElementById('inputText').value;
    const resultDiv = document.getElementById('result');

    if (!inputText.trim()) {
        resultDiv.innerText = "Please enter a valid number in words.";
        return;
    }

    try {
        const result = wordToNumber(inputText);
        resultDiv.innerText = `Result: ${result}`;
    } catch (error) {
        resultDiv.innerText = "Error: Invalid input. Please use correct number words.";
    }
}
