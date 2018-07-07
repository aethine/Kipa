function crawl(text) {
    "use strict"
    let all = ""
    let current = ""
    let prev = ""
    let currentBase = {
        "base": "",
        "diacs": ""
    }
    let hasAdded = false

    function add(str){
        if (!hasAdded) all += (currentBase.base + currentBase.diacs)
        all += str
        hasAdded = true
    }

    for (const char of text) {
        prev = current
        current = char
        
        if (replace[current] !== undefined) {
            current = replace[current]
        }

        
        if (allDiacritics[prev] !== undefined) {
            let sampleDiacritic = allDiacritics[prev][current]
            
            if (sampleDiacritic !== undefined) {
                if (currentBase.base === "*") {
                    if (prev === "\"") {
                        all = all.replace("*", "")
                        sampleDiacritic = toneSeperate[current]
                    }
                }
                currentBase.diacs += sampleDiacritic
                all = all.replace(prev, "")
                all += sampleDiacritic
            }
            else add(current)
        }
        else if (prev === ";") {
            const repl = currentBase.base
            const baseRef = baseCharacters[currentBase.base]
            if ((baseRef !== undefined) && (baseRef[current] !== undefined)) {
                currentBase.base = baseRef[current]
                all = all.replace(";", "")
                all = all.replace(repl, currentBase.base)
            }
            else add(current)
        }
        else if (symbols.includes(current)) add(current)
        else if (baseCharacters[current] !== undefined) {
            if (!hasAdded) all += (currentBase.base + currentBase.diacs)
            currentBase = {
                "base": current,
                "diacs": ""
            }
            hasAdded = false
        }
        else add(current)
    }
    return all + (hasAdded ? "" : (currentBase.base + currentBase.diacs))
}