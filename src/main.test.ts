import {describe, expect, it, vi} from 'vitest';
import * as investo from "./main.ts";

describe('main entry', () => {
  it('should run without errors', () => {
    const spy = vi.spyOn(investo, 'calcSimpleInterest');
    investo.calcSimpleInterest(1000, 0.1, 2);
    expect(spy).toHaveBeenCalledWith(1000, 0.1, 2);
  });
});