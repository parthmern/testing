import {describe, expect, test, it} from '@jest/globals';
import {sum, multiply} from '../index';

describe('Testing sum module', () => {

  it('should sum 1 and 2 correctly', () => {
    const finalAns = sum(1, 2);
    expect(finalAns).toBe(3);
  });


  it('should return the sum of negative numbers correctly', () => {
    const finalAns = sum(-1, -2);
    expect(finalAns).toBe(-3);
  });


  describe('Testing multiple functions', () => { 
    
    it('should return multiplication of 2*3 correctly', ()=>{
        const finalAns = multiply(2,3);
        expect(finalAns).toBe(6);
    })

   })


});