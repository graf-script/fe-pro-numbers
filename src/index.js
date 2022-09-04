/**
 * Принимает 4 аргумента, в первых двух мы должны найти минимальное число,
 * во третьем и четвертом максимальное и умножить эти два числа
 * @param {number} minFirst
 * @param {number} minSecond
 * @param {number} maxFirst
 * @param {number} maxSecond
 * @returns {number}
 */
export const minMaxMultiply = (minFirst, minSecond, maxFirst, maxSecond) => {
    return Math.min(minFirst, minSecond) * Math.max(maxFirst, maxSecond);
};   

const minMaxMultiplyResult = minMaxMultiply(2, 3, 4, 5);
console.log(minMaxMultiplyResult);




/**
 * Функция принимает один числовой аргумент, это радиус круга. Функция должна
 * вернуть площадь круга, формулу найдите в интернете, если не помните
 * и число пи используйте встроенное в js
 * @param {number} radius
 * @returns {number}
 */
export const getSquareOfCircle = (radius) => {
    return radius**2*Math.PI;
};

const square = getSquareOfCircle(5);

console.log(square);

/**
 * Функция принимает число и точность к которой нужно округлить
 * Примеры можно смотреть в checks.js
 * Нужно использовать Math.round
 * @param {number} number
 * @param {number} accuracy
 * @returns {number}
 */
export const getFixedValue = (number, accuracy) => {
    return Math.round(number*10**accuracy)/10**accuracy;
};

const fixedValue = getFixedValue(3.2345, 3);

console.log(fixedValue);

/**
 * Если целая часть числа четная, то срабатывает Math.floor для этого числа
 * если нечетное, то Math.ceil
 * @param {number} number
 * @returns {number}
 */
export const getFlooroCeil = (number) => {
    if(Math.round(number)%2 === 0){
        return Math.floor(number);
    } else {
        return Math.ceil(number);
    }
};

console.log(getFlooroCeil(3.235));
console.log(getFlooroCeil(4.235));

/**
 * Мы передаем два числа, от какого и до какого числа и функция должна
 * выдать ЦЕЛОЕ число в этом диапазоне. Постарайтесь подумать, не гуглите сразу
 * Сложное задание. Тест 30тыс раз попробует проверить ваш рандом
 * @param {number} from
 * @param {number} to
 * @returns {number}
 */
export const randomizer = (from, to) => {
    return Math.round(Math.random() * (to - from) + from);
};

console.log(randomizer(2, 5));
