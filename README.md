# Sentence Reading and Analysis Algorithm

## Overview
This project involves writing an algorithm that reads a sentence character by character and determines:
- The length of the sentence (number of characters)
- The number of words (assuming words are separated by a single space)
- The number of vowels (A, E, I, O, U, and their lowercase equivalents)
The input sentence always ends with a period (.), and each character is processed individually.

## How it works
The algorithm follows a step-by-step approach:
- Iterate through the sentence character by character.
- Count the total number of characters (spaces and punctuation marks inclusive).
- Detect word boundaries using spaces and count the number of words.
- Check each character for vowels and maintain a vowel count.
- Store values for the number of characters, number of words, and the number of vowels using three separate counters (variables).

## Implementation approach
- Used a FOR loop to iterate through the sentence character by character and used the length(sentence), to obtain the length of the sentence to determine a stop for the loop. Although the body of the loop also specifies a stop to the loop when the . (period) is encountered.
- Stored the value of each processed character in a variable called current_char and used that to check if character is a "spaces" to determine word count or "vowels" to determine vowel count.
- Maintained three counter variables:
- character_Count → Tracks the total number of characters (spaces and punctuation marks included).
- word_count → Increments when a space is found (assumes a single space between words). This was initialized to 1 to allow count for the first word.
- vowel_count → Increments when a vowel is detected.
- Stop processing when the . (period) is encountered.
