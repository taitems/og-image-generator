module.exports = arr => {
    return arr.reduce((r, e) => {
        r[e.id] = e.value;
        return r;
    }, {})
}