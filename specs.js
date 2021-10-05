describe("max", function () {
    it("takes 2 numbers, and returns the maximum",
        function () {
            assert.equal(20, max(10, 20));
        });
});

describe("maxOfThreeax", function () {
    it("takes 3 numbers, and returns the maximum",
        function () {
            assert.equal(50, maxOfThree(10, 20, 50));
        });
});

describe("isVowel", function () {
    describe("when input is a one character vowel", function () {
        it("returns true",
            function() {
                assert.equal(true, isVowel('a'));
        });
    });

    describe("when input is a one character not vowel", function () {
        it("returns false",
            function() {
                assert.equal(false, isVowel('g'));
        });
    });

    describe("when input is more than one character", function () {
        it("returns false",
            function() {
                assert.equal("Given invalid character input", isVowel('ab'));
        });
    });
});

describe("sum", function () {
    describe("when given array has more then on element in it", function() {
        it("takes array of numbers, and returns the sumation",
            function () {
                assert.equal(24, sum([2, 4, 6, 12]));
            });
    });

    describe("when given array is empty", function() {
        it("returns 0",
            function () {
                assert.equal(0, sum([]));
            });
    });

});

describe("multiplies", function () {
    describe("when given array has more than one element in it", function() {
        it("returns the multiplies",
            function () {
                assert.equal(48, multiplies([2, 4, 6]));
            });
        });

    describe("when given array is empty", function() {
        it("returns 0",
            function () {
                assert.equal(0, multiplies([]));
            });
        });
});

describe("reverse", function () {
    it("takes a string, and returns the reverse",
        function () {
            assert.equal("dejan", reverse("najed"));
        });
});

describe("findLongestWord", function () {
    it("takes array of string, and returns the longest word",
        function () {
            assert.equal("prof-micheal", findLongestWord(["najed", "hatamleh", "prof-micheal"]));
        });
});

describe("filterLongWords", function () {
    it("takes array of string, and a filter number, and returns words that length are greater than the input",
        function () {
            assert.equal("hatamleh,prof-micheal", filterLongWords(["najed", "hatamleh", "prof-micheal"], 5));
        });
});
