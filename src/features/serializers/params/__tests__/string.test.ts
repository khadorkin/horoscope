import createStringParam from '../string';

const stringParam = createStringParam();

test('should parse into string', () => {
  expect(stringParam.parse('42')).toBe('42');
});

test('should serialize into string', () => {
  expect(stringParam.serialize('42')).toBe('42');
});
