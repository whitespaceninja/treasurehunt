/**
 * Takes in a string and a wrap width and splits the string into
 * an array of text substrings that are all guaranteed to be less than the wrap width.
 */
export function wrapText(text, wrapWidth) {
    let rows = [];
    let lastRowStart = 0;
    let i = 0;
    while (i <= text.length) {
        if (i == text.length) {
            // case: final letter
            rows.push(text.substring(lastRowStart));
            break;
        }
        const curChar = text[i];
        
        if (curChar == '\n') {
            // case: line break
            rows.push(text.substring(lastRowStart, i));
            i++;
            lastRowStart = i;
        } else if (curChar != ' ') {
            let wordLength = 1;
            // look ahead at length of this word
            let y = i;
            while (y < text.length) {
                y++;
                if (y == text.length || text[y] == '\n' || text[y] == ' ') {
                    wordLength = y - i;
                    break;
                }
            }
            if (i + wordLength - lastRowStart >= wrapWidth) {
                // case: this word won't fit
                rows.push(text.substring(lastRowStart, i));
                lastRowStart = i;
            } else {
                // all good, start finding the next word
                i += wordLength;
            }
        } else {
            i++;
            if (i - lastRowStart >= wrapWidth) {
                // case: we ran out of line width
                rows.push(text.substring(lastRowStart, i));
                lastRowStart = i;
            }
        }
    }
    return rows;
}