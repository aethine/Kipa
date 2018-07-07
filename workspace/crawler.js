function crawl(text) {
    let all = currentBase = current = prevA = prevB = ""

    for (const char of text) {
        current = char
        if (replace[current] !== undefined) current = replace[current]
        if (prevB === ";")
    }
}