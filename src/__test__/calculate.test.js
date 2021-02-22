import Calculate from '../logic/calculate';
let object = { total: '12', next: '6', operation: '+' }
test('AC  should reset all values', () => {
  const obj = Calculate(object, 'AC');
  const { total, next, operation } = obj;
  expect(total).toBe(null);
  expect(next).toBe(null);
  expect(operation).toBe(null);
});

test('+/-  should make all number negative', () => {
  const obj = Calculate(object, '+/-');
  const { total, next, operation } = obj;
  expect(total).toBe(-12);
  expect(next).toBe(-6);
  expect(operation).toBe('+');
});

test('+/-  should make all number negative', () => {
  const obj = Calculate(object, '%');
  const { total, next, operation } = obj;
  expect(total).toBe(0.12);
});

test('Calculate should calculate adition', () => {
  const obj = Calculate(object, '=');
  const { total } = obj;
  expect(total).toBe('18');
});
