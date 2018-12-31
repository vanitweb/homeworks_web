let elements = [1, 3, 5, 7, 8, 25, 58, 128];

function binary_Search(elements, value) {

    let firstIndex = 0,

        lastIndex = elements.length - 1,
        middleIndex = Math.floor((lastIndex + firstIndex) / 2);

    while (elements[middleIndex] != value && firstIndex < lastIndex) {
        if (value < elements[middleIndex]) {
            lastIndex = middleIndex - 1;
        } else if (value > elements[middleIndex]) {
            firstIndex = middleIndex + 1;
        }
        middleIndex = Math.floor((lastIndex + firstIndex) / 2);
    }

    return (elements[middleIndex] != value) ? -1 : middleIndex;
}
console.log(binary_Search(elements, 128));
console.log(binary_Search(elements, 58));