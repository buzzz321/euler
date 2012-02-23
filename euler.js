"use strict";
//var funk = require('underscore');
Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};
Number.method('integer', function () {
    return Math[this < 0 ? 'ceil' : 'floor'](this);
});
var euler = (function () {
    var that = this;
    return {
        problem1: function () {
            var MAXITER, index, sum;
            MAXITER = 100;
            sum = 0;

            for (index = 0; index < MAXITER; index = index + 1) {
                if (index % 3 === 0 || index % 5 === 0) {
                    sum += index;
                    console.log('3,5: ' + index);
                }
            }
            console.log(sum);
        },
        problem2: function () {
            var MAXFIB, p2Fib, p1Fib, curFib, sum;

            MAXFIB = 4000;
            sum = 0;
            p2Fib = 0;
            p1Fib = 1;

            while (p1Fib < MAXFIB) {
                curFib = p1Fib + p2Fib;
                // console.log(curFib);
                if (curFib % 2 === 0) {
                    sum += curFib;
                }
                p2Fib = p1Fib;
                p1Fib = curFib;
            }
            console.log(sum);
        },
        problem3: function () {
            var index, number, product;
            number = 60851475143;
            product = 1;
            index = 3;

            while (product < number && index < number) {
                if (number % index === 0) {
                    console.log(index);
                    product *= index;
                }
                index += 1;
            }
        },
        problem4: function () {
            var number, tempstring, index, factor1, factor2, oldnum;
            number = 999 * 999;
            oldnum = 0;
            factor1 = 999;
            factor2 = 999;

            var checkpalindrom = function (palindrom) {
                    var start, end;
                    start = 0;
                    end = palindrom.length - 1;

                    while (start < (palindrom.length - 1) / 2) {

                        if (palindrom.charAt(start) !== palindrom.charAt(end)) {
                            return false;
                        }

                        start += 1;
                        end -= 1;
                    }
                    console.log(palindrom);
                    return true;
                };
            do {
                number = factor1 * factor2;
                tempstring = number.toString(10);

                factor2 = factor2 - 1;

                if (factor2 < 10) {
                    factor2 = 999;
                    factor1 = factor1 - 1;
                }

                if (checkpalindrom(tempstring) === true) {
                    if (number > oldnum) {
                        oldnum = number;
                    }
                }
            } while (true && factor1 >= 10);
            console.log(factor1);
            console.log(factor2);

            console.log(oldnum);
        },
        problem5: function () {
            var sys = require('sys');
            var myindex, number, step, lista, breaker;
            myindex = 0;
            breaker = 0;
            lista = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
            step = lista[lista.length - 1];
            number = step;

            myindex = lista.length - 1;
            while ((myindex >= 0) && (breaker < 100000)) {
                breaker += 1;
                number += step;

                while (number % lista[myindex] === 0 && myindex >= 0) {
                    //console.log(lista[myindex] +' ' ,myindex + ' ' + number);
                    myindex -= 1;
                }
                //if (number % 1234567 === 0) {
                //	sys.puts(number);
                //}
                if (myindex > 0) {
                    myindex = lista.length - 1;
                }
            }
            sys.puts(number + ' ' + breaker);
            //console.log(number + ' ' + breaker);
            return "";
        },
        problem6: function () {
            var lista, index, sumindex, result;
            lista = [];
            result = 0;

            for (index = 1; index <= 10; index++) {
                lista.push(index);
            }
            console.log(lista);
            for (index = 0; index < lista.length; index++) {
                for (sumindex = index + 1; sumindex < lista.length; sumindex++) {
                    result += lista[index] * lista[sumindex];
                    //console.log(lista[index] + ' ' + lista[sumindex]);
                }
            }
            console.log(result * 2);
        },
        problem7: function () {
            var is_prime = function (number) {
                    var d = 0;

                    if (number < 2) {
                        return false;
                    }
                    for (d = 2; d * d <= number; d += 1) {
                        if (number % d === 0) return false;
                    }
                    return true;
                };
            var index, antal, prim;

            antal = 1001;
            prim = 1;

            while (antal > 0) {
                if (is_prime(prim)) {
                    //console.log(prim);
                    antal -= 1;
                }
                prim += 1;
            }
            console.log(prim - 1);
        },
        problem8: function () {
            var data, index, prod, step, stepIndex, result;
            data = "73167176531330624919225119674426574742355349194934969835203127745063262395783180169848018694788518438586156078911294949545950173795833195285320880551112540698747158523863050715693290963295227443043557668966489504452445231617318564030987111217223831136222989342338030813533627661428280644448664523874930358907296290491560440772390713810515859307960866701724271218839987979087922749219016997208880937766572733301053367881220235421809751254540594752243525849077116705560136048395864467063244157221553975369781797784617406495514929086256932197846862248283972241375657056057490261407972968652414535104748216637048440319989008895243450658541227588666881164271714799244429282308634656748139191231628245861786645835912456652947654568284891288314260769042242190226710556263211111093705442175069416589604080719840385096245544436298123098787992724428490918884580156166097919133875499205240636899125607176060588611646710940507754102256983155200559357297257163626956188267042825248360823257530420752963450";

            prod = 1;
            step = 5;
            stepIndex = 0;
            result = 0;

            for (index = 0; index < data.length; index += 1) {
                while (stepIndex < step && stepIndex + index < data.length) {
                    //console.log('#' + data.charAt(index * step + stepIndex));
                    prod *= data.charAt(index + stepIndex);
                    stepIndex += 1;
                }
                stepIndex = 0;
                if (prod > result) {
                    result = prod;
                    console.log(data.slice(index * step, step));
                }
                prod = 1;
            }
            console.log(result);
        },
        problem9: function () {
            var lista = [],
                max, maxpos, a, b, c, index;

            b = 0;
            a = 0;
            while (a < 100) {
                if (a !== 100) {
                    b = 100 * (a - 50) / (a - 100); //från wolfram alpha
                    if ((a < b) && (Math.abs(b - b.integer()) === 0)) {
                        lista[a] = b;
                        c = 100 - a - b;
                        console.log(a + ':' + b + ':' + c);
                    }
                }
                a += 1;
            }
        },
        problem10: function () {
            var is_prime = function (number) {
                    var d = 0;

                    if (number < 2) {
                        return false;
                    }
                    for (d = 2; d * d <= number; d += 1) {
                        if (number % d === 0) return false;
                    }
                    return true;
                };
            var index, summa, STOP = 2000;

            summa = 0;
            for (index = 1; index < STOP; index += 1) {
                summa += is_prime(index) ? index : 0;
            }
            console.log('summan blev: ' + summa);
        },
        problem11: function () {
            var data = [
                [8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8],
                [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
                [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
                [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
                [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
                [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
                [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
                [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
                [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
                [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
                [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
                [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
                [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
                [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
                [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
                [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
                [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
                [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
                [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
                [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48]
            ],
                visited = [
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
                ];
            var RMAX = 20,
                CMAX = 20;

            var directions = [
                [ 1,  0],
                [ 1,  1],
                [ 0,  1],
                [ 1, -1]
            ];
            var row = 0,
                column = 0,
                max = 0,
                temp = 0;


            var calc_prod = function (arr, row, column, radd, cadd, depth) {
                    //console.log("Row:", row, " Column:", column, " cadd:", cadd);
                    if (row >= RMAX || column >= CMAX || row < 0 || column < 0 || depth === 0) {
                        return 1;
                    }
                    //console.log(arr[row][column]);                    
                    return arr[row][column] * calc_prod(arr, row + radd, column + cadd, radd, cadd, depth - 1);
                };
            var print_line = function (arr, row, column, radd, cadd, depth) {
                if (row >= RMAX || column >= CMAX || row < 0 || column < 0 || depth === 0) {
                        return;
                    }
                console.log(arr[row][column]);
                print_line(arr, row + radd, column + cadd, radd, cadd, depth - 1);
            };
            
            for (var index = 0; index < directions.length; index += 1) {
                console.log("Row:", directions[index][0], " Column:", directions[index][1]);
                for (row = 0; row < RMAX; row += 1) {
                    for (column = 0; column < CMAX; column += 1) {
                        var radd = directions[index][0],
                            cadd = directions[index][1];

                        visited[row][column] = visited[row][column] + (1 << index);

                        temp = calc_prod(data, row, column, radd, cadd, 4);
                        if (max < temp) {
                            max = temp;
                            console.log('Max = ', max, ' row: ', row + 1, ' column: ', column + 1);
                            print_line(data, row, column, radd, cadd, 4);
                        }
                        

                        if (temp === 1788696) {
                            console.log('found!!!!! row: ' , row + 1, ' column: ', column + 1);
                            print_line(data, row, column, radd, cadd, 4);
                        }
                    }
                    //console.log('Max = ', max);
                }
            }
            //console.log(visited);
        },
        problem14: function () {
            var TOTAL, max, maxpos, t1, t2, index, cache = [0, 1],
                count = [0, 1];
            TOTAL = 1000;

            var chain = function (n) {
                    if (cache[n] === undefined) {
                        if (n % 2) {
                            cache[n] = chain(3 * n + 1) + 1;
                        }
                        else {
                            cache[n] = chain(n / 2) + 1;
                        }
                    }
                    return cache[n];
                };
            max = 0;
            maxpos = 0;
            t1 = (new Date).getTime();

            for (index = 1; index < TOTAL; index += 1) {
                count[index] = chain(index);
                if (count[index] > max) {
                    max = count[index];
                    maxpos = index;
                }
                //console.log(index + ':' + count[index]);
            }

            t2 = ((new Date).getTime() - t1) / 100;
            console.log('tal ' + maxpos + ' hade längst serie med ' + count[maxpos] + ' steg. Vilket tog ' + t2 + ' sekunder');
        }
    };
}());
euler.problem11();