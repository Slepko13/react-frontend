import { required, length, email } from '../validators';

describe('tests validators', () => {
    describe('test length', () => {
        const conf = {
            min: 3,
            max: 5,
        };
        it('test with correct value', () => {
            const result = length(conf)('Test');
            expect(result).toBeTruthy();
        });
        it('test with value less than min', () => {
            const result = length(conf)('Te');
            expect(result).toBeFalsy();
        });
        it('test with value greater than max', () => {
            const result = length(conf)('TestTest');
            expect(result).toBeFalsy();
        });
    });
    it('test required', () => {
        expect(required('Test')).toBeTruthy();
    });

    it('test email', () => {
        expect(email('false.mail')).toBeFalsy();
    });
});
