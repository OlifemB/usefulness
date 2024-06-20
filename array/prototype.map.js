function map(arr, mapCallback) {
    if (!Array.isArray(arr) || !arr.length || typeof mapCallback !== 'function') {
        return []
    } else {
        let result = []
        for (let i = 0, len = arr.length; i < len; i++) {
            result.push(mapCallback(arr[i], i, arr))
        }
        return result
    }
}