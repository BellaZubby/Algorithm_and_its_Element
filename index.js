// javascript implementation
let char_count = 0;
let word_count = 0;
let vowel_count = 0;
let sentence = "Bella is a Software Developer."
let vowels = "AEIOUaeiou"

function sentenceAnalysis() {
    for (character of sentence) {
        if (character === " ") {
            char_count = char_count
            word_count += 1
        } else if (character === ".") {
            word_count += 1
            char_count += 1
        } else {
            char_count += 1
        }

        // for vowel count
        if (vowels.includes(character)) {
            vowel_count += 1
        } else{
            vowel_count = vowel_count
        }
    }
    console.log(char_count)
    console.log(word_count)
    console.log(vowel_count)
}
sentenceAnalysis()
