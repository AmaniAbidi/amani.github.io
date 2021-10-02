function max(a, b) {
    return a > b ? a : b;
}

function maxOfThree(a, b, c) {
    return max(max(a, b), c);
}

function isVowel(charac) {
    if(charac.length != 1)
        return "false";

    return "true";
}

function sum(tab) {
    return tab.reduce((a, b) => a + b, 0);
}

function multiplies(tab) {
    if(tab.length == 0)
        return 0;

    return tab.reduce((a, b) => a * b);
}

function reverse(word) {
    if (word === "")
        return "";
    return reverse(word.substr(1)) + word.charAt(0);
}

function findLongestWord(wordtab) {
    return wordtab.sort((w1, w2) => w2.length - w1.length).shift()
}

function  filterLongWords(wordtab, length)  {
    return wordtab.filter((w) => w.length > length).toString();
}