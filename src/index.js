function getPolindrom(originalNum) {
    let steps = 0;

    const reverseNumber = num => {
        const firstChar = 0;
        const sub = 1;
        return Number(String(num) ? reverseNumber(String(num).substring(sub)) + String(num)[firstChar] : null);
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
getPolindrom(+prompt('Enter number'));