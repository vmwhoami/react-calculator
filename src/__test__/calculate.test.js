import Calculate from '../logic/calculate';

const object = { total: '12', next: '6', operation: '+' };
const mult = { total: '12', next: '6', operation: 'X' };
const subs = { total: '12', next: '6', operation: '-' };
const division = { total: '12', next: '6', operation: '÷' };
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
  const { total } = obj;
  expect(total).toBe(0.12);
});

test(' should calculate adition', () => {
  const obj = Calculate(object, '=');
  const { total } = obj;
  expect(total).toBe('18');
});

test('Calculate should calculate subsctracion', () => {
  const obj = Calculate(subs, '=');
  const { total } = obj;
  expect(total).toBe('6');
});

test('Calculate should calculate subsctracion', () => {
  const obj = Calculate(mult, '=');
  const { total } = obj;
  expect(total).toBe('72');
});

test(' should calculate division', () => {
  const obj = Calculate(division, '=');
  const { total } = obj;
  expect(total).toBe('2');
});
