//Задание 1
function solveEquation(a, b, c) {
  let discriminant = b ** 2 - 4 * a * c;
  let roots = [];

  if (discriminant > 0) {
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    roots.push(root1, root2);
  } else if (discriminant === 0) {
    let root = -b / (2 * a);
    roots.push(root);
  }

  return roots;
}


//Задание 2
describe('Задача №2. Функция должна:', () => {
  it('верно считать кредит: кейс #1', () => {
    expect(calculateTotalMortgage(10, 0, 50000, 12)).toEqual(52749.53);
  });

  it('верно считать кредит: кейс #2', () => {
    expect(calculateTotalMortgage(10, 1000, 50000, 12)).toEqual(51694.54);
  });

  it('верно считать кредит: кейс #3', () => {
    expect(calculateTotalMortgage(10, 20000, 20000, 48)).toEqual(0);
  });

  it('верно считать кредит: кейс #4', () => {
    expect(calculateTotalMortgage(10, 0, 10000, 36)).toEqual(11616.19);
  });

  it('верно считать кредит: кейс #5', () => {
    expect(calculateTotalMortgage(15, 0, 10000, 36)).toEqual(12479.52);
  }); 
});
