const getLetterMatchCount = (secreteWord,guessedWord) => {
    const secreteWordSet = new Set(secreteWord.split(''));
    const guessedWordSet = new Set(guessedWord.split(''));
    return [...secreteWordSet].filter((letter)=>guessedWordSet.has(letter)).length;
}

export default getLetterMatchCount;