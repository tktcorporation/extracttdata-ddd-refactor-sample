import { SheetValue } from 'src/refactored/domain/type/SheetValue';

describe('SheetValue', () => {
    describe('init by "name"', () => {
        let sheetValue: SheetValue;
        const initValue = 'name';
        beforeAll(() => {
            sheetValue = new SheetValue(initValue);
        });
        it('toString()', () => {
            expect(sheetValue.toString()).toBe(initValue);
        });
        it('value', () => {
            expect(sheetValue.value).toBe(initValue);
        });
    });
});
