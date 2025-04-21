type Comparator<T> = (a: T, b: T) => number;

const quicksort = <T>(arr: T[], cmp: Comparator<T>): T[] =>
    arr.length <= 1 ? arr : (
        (([pivot, ...rest]) => [
            ...quicksort(rest.filter(x => cmp(x, pivot) <= 0), cmp),
            pivot,
            ...quicksort(rest.filter(x => cmp(x, pivot) > 0), cmp)
        ])(arr)
    );

const asc: Comparator<number> = (a, b) => a - b;
const desc: Comparator<number> = (a, b) => b - a;
const strLenAsc: Comparator<string> = (a, b) => a.length - b.length;
const strLenDesc: Comparator<string> = (a, b) => b.length - a.length;

console.log(quicksort([3,1,4,2,5], asc));
console.log(quicksort([3,1,4,2,5], desc));
console.log(quicksort(["aaaa", "aaaaaaa", "aa", "aaaaaa", "a", "aaaaa", "aaa"], strLenAsc));
console.log(quicksort(["aaaa", "aaaaaaa", "aa", "aaaaaa", "a", "aaaaa", "aaa"], strLenDesc));