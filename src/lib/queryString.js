const AllowdFormat = (value) => value.find(v => (typeof v) === 'object' && !Array.isArray(v));

const convertNestedToFlat = (nestedArray) => {

    return ((nestedArray.join()).split('='))
        .map((a, i) => {
            if (i === 1) { return a.split(',') }
            return a;
        });
}

export const queryString = (obj) => {
    const value = Object.values(obj);
    if (!AllowdFormat(value)) return new URLSearchParams(obj).toString();
    throw new Error('Please Check yout parms');
}

module.exports.parse = (string) => {
    const arrayKeyValues = string.split('&');
    const regex = new RegExp(/%2C/gm);
    const resultArray = arrayKeyValues.map(v => {
        let nestedArray = [];
        if (regex.test(v)) {
            nestedArray = v.split(regex)
        }
        if (nestedArray.length) {
            return convertNestedToFlat(nestedArray);
        }
        return v.split('=');
    });

    return Object.fromEntries(resultArray);
}
