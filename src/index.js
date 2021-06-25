const reverseNumber = num => {
    const numStr = String(num);
    const firstCharIndex = 0;
    const startIndex = 1;
    if (!numStr) {
        return '';
    }
    return Number(reverseNumber(numStr.substring(startIndex)) + numStr[firstCharIndex]);
};

function getPolindrom(originalNum) {
    let steps = 0;

    function calcPolindrom(num = originalNum) {
        try {
            if (num === reverseNumber(num)) {
                return {
                    result: num,
                    steps,
                };
            }
            steps++;
            return calcPolindrom(num + reverseNumber(num));

        } catch {
            throw new Error(`${num} is Lychrel number`);
        }
    }
    return calcPolindrom();

}
const someNumber = 192;
getPolindrom(someNumber);
