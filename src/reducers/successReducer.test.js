import { successReducer } from './successReducer';

describe('test reducer',()=>{
    it('should return false state if no state and no action is passed',()=>{
        const newState = successReducer(undefined , {});
        expect(newState).toBe(false);
    })

    it('should return true state if reeives action as CORRECT_GUESS',()=>{
        const newState = successReducer(undefined , {type : 'CORRECT_GUESS'});
        expect(newState).toBe(true);
    })
})