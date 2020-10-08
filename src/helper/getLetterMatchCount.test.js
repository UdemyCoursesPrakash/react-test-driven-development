    import getLetterMatchCount from './getLetterMatchCount';

    describe('get letter match count',()=>{
        const secretWord = 'party';
        it('should return correct count for no letter match',()=>{
            const letterMatchCount = getLetterMatchCount(secretWord , 'bones');
            expect(letterMatchCount).toBe(0);
        })

        it('should return correct count for 3 letter match',()=>{
            const letterMatchCount = getLetterMatchCount(secretWord , 'train');
            expect(letterMatchCount).toBe(3);
        })

        it('should return correct count for deplicate letter match',()=>{
            const letterMatchCount = getLetterMatchCount(secretWord , 'trainat');
            expect(letterMatchCount).toBe(3);
        })
    })