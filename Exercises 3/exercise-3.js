const sumArrrayElement = ([firstNumber, ...rest]) => {
    if (firstNumber === undefined) return 0;

    return firstNumber + sumArrrayElement(rest);

}

