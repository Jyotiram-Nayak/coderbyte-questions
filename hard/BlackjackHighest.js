// Blackjack Highest
/**
 * Using the Java language, have the function BlackjackHighest(strArr) take the strArr parameter being passed which will
 * be an array of numbers and letters representing blackjack cards. Numbers in the array will be written out.
 * So for example strArr may be ["two","three","ace","king"]. The full list of possibilities for strArr is: two, three,
 * four, five, six, seven, eight, nine, ten, jack, queen, king, ace. Your program should output below, above,
 * or blackjack signifying if you have blackjack (numbers add up to 21) or not and the highest card in your hand in
 * relation to whether or not you have blackjack. If the array contains an ace but your hand will go above 21, you must
 * count the ace as a 1. You must always try and stay below the 21 mark. So using the array mentioned above, the output
 * should be below king. The ace is counted as a 1 in this example because if it wasn't you would be above the 21 mark.
 * Another example would be if strArr was ["four","ten","king"], the output here should be above king. If you have a
 * tie between a ten and a face card in your hand, return the face card as the "highest card". If you have multiple
 * face cards, the order of importance is jack, queen, then king.
 *
 */

function BlackjackHighest(strArr) {
    debugger
    const cardValue = {
        "two": 2, "three": 3, "four": 4, "five": 5,
        "six": 6, "seven": 7, "eight": 8, "nine": 9,
        "ten": 10, "jack": 10, "queen": 10, "king": 10, "ace": 1
    };

    let hand = strArr.map(card => card.toLowerCase());
    let sum = 0;
    let highest = "two";
    let result;

    hand.forEach(card => {
        sum += cardValue[card];
        if (cardValue[card] > cardValue[highest]) {
            highest = card;
        } else if (cardValue[card] === 10 && cardValue[highest] === 10) {
            // If there's a tie between face cards, prioritize jack, queen, then king
            highest = (card === 'king' || card === 'queen' || card === 'jack') ? card : highest;
        }
    });

    if (hand.includes("ace") && sum + 10 <= 21) {
        sum += 10;
        highest = "ace";
    }

    if (sum < 21) {
        result = "below";
    } else if (sum === 21) {
        result = "blackjack";
    } else {
        result = "above";
    }

    result += " " + highest;
    return result;
}

// Example usage:
console.log(BlackjackHighest(["two", "three", "ace", "king"]));
console.log(BlackjackHighest(["jack", "two", "queen", "three", "ace", "king"]));