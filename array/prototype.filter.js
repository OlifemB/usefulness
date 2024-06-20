function filter(arr, filterCallback) {
    if (!Array.isArray(arr) || !arr.length || typeof filterCallback !== 'function') {
        return []
    } else {
        let result = []
        // ...
        for (let i = 0, len = arr.length; i < len; i++) {
            if (filterCallback(arr[i], i, arr)) {
                result.push(arr[i])
            }
        }
        return result
    }
}