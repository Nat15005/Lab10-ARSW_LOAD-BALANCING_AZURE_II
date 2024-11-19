var bigInt = require("big-integer");

const fibonacciMemoized = (function () {
    const cache = {};

    return function fib(n) {
        if (n in cache) {
            return cache[n];
        }
        if (n === 0) return bigInt.zero;
        if (n === 1) return bigInt.one;

        const result = fib(n - 1).add(fib(n - 2));
        cache[n] = result;
        return result;
    };
})();

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    try {
        let nth = req.body.nth;

        if (nth < 0) {
            throw new Error('Input must be a non-negative integer');
        }

        const answer = fibonacciMemoized(nth);

        context.res = {
            body: answer.toString(),
        };
    } catch (error) {
        context.log(`Error: ${error.message}`);
        context.res = {
            status: 400,
            body: { error: error.message },
        };
    }
};