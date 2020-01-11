const getRoundOf = num => console.log(parseInt(num / 10) * 10);
// getRoundOf(43);
// getRoundOf(31);
// getRoundOf(59);
// getRoundOf(65);

const checkRange = num => {
    const range0 = parseInt(num / 10);
    const range1 = (range0 * 10) + 5;
    const range2 = (range0 * 10) + 10;

    if(num >= range0 && num < range1) {
        return console.log(`range is between ${range0 * 10} to ${range1}`);
    } else if(num >= range1 && num < range2) {
        return console.log(`range is between ${range1} to ${range2}`);
    } else {
        return console.log(`there is some issue with calculations.`);
    }
}

// checkRange(43);
// checkRange(99);
// checkRange(257);
// checkRange(650);
// checkRange(1);