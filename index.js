var a, b

beforeEach(function() {
  a = Math.floor(Math.random() * 1000)
  b = Math.floor(Math.random() * 1000)
})

it('add(a, b) adds two numbers and returns the result', function() {
  expect(add(a, b)).toEqual(a + b)
})

it('subtract(a, b) subtracts b from a and returns the result', function() {
  expect(subtract(a, b)).toEqual(a - b)
})

it('multiply(a, b) multiplies two numbers and returns the result', function() {
  expect(multiply(a, b)).toEqual(a * b)
})

function add() {
  return