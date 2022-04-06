import  AI from "../scripts/AI.js";

test('amount of rows', () => {
    const testName = AI();
    expect(testName).toBe(10);
})