function getPolindrom(originalNum) {
    let steps = 0;

    const reverseNumber = num => {
        const numStr = String(num);
        const firstCharIndex = 0;
        const startIndex = 1;
        if (!numStr) {
            return '';
        }
        return Number(reverseNumber(numStr.substring(startIndex)) + numStr[firstCharIndex]);
    };

    function calcPolindrom(num = originalNum) {
        try {
            const result = num + reverseNumber(num);
            steps++;
            if (result === reverseNumber(result)) {
                return {
                    result,
                    steps,
                };
            }
            return calcPolindrom(result);

        } catch {
            throw new Error(`${num} is Lychrel number`);
        }
    }
    return calcPolindrom();

}
const someNumber = 192;
getPolindrom(someNumber);