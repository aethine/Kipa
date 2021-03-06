const superscript = {
    "h": "ʰ",
    "w": "ʷ",
    "j": "ʲ",
    "g": "ˠ",
    "?": "ˤ",
    "n": "ⁿ",
    "l": "ˡ",
    ".": "˺"
}
const tone = {
    "H": "̋",
    "h": "́",
    "-": "̄",
    "l": "̀",
    "L": "̏",
    "r": "̌",
    "f": "̂",
    "^": "᷈"
}
const toneSeperate = {
    "H": "˥",
    "h": "˦",
    "-": "˧",
    "l": "˨",
    "L": "˩",
    "r": "˩˥",
    "f": "˥˩",
    "^": "˧˦˧"
}
const suprasegmental = {
    "'": "ˈ",
    ",": "ˌ",
    ":": "ː",
    ".": "ˑ",
    "^": "̆",
    "g": "|",
    "G": "‖",
    "=": ".",
    "-": "͡",
    "_": "͜"
}
const place = {
    "+": "̟",
    "-": "̠",
    ":": "̈",
    "x": "̽",
    "*": "̝",
    ".": "̞",
    "<": "̘",
    ">": "̙",
    "d": "̪",
    "a": "̺",
    "l": "̻"
}
const quality = {
    ".": "̥",
    "v": "̬",
    ")": "̹",
    "(": "̜",
    ",": "̩",
    "_": "̯",
    "r": "˞",
    ":": "̤",
    "-": "̰",
    "~": "̃" 
}

const allDiacritics = {
    "^" : superscript,
    "\"": tone,
    "." : suprasegmental,
    "+": place,
    "~": quality,
    "*\"": toneSeperate
}

const replace = {
    "'": "ʼ",
    "B": "ʙ",
    "G": "ɢ",
    "H": "ʜ",
    "I": "ɪ",
    "L": "ʟ",
    "N": "ɴ",
    "R": "ʀ",
    "Y": "ʏ",
    "?": "ʔ",
    "O": "ʘ"
}



const baseCharacters = {
    "a": {
        "e": "æ",
        "o": "ɑ",
        "^": "ɐ"
    },
    "æ": {},
    "ɑ": {
        "^": "ɒ"
    },
    "ɐ": {
        "o": "ɒ"
    },
    "b": {
        "h": "β",
        "y": "ɓ"
    },
    "β": {},
    "ɓ": {},
    "ʙ": {},
    "c": {
        "h": "ç",
        "t": "ɕ",
        "^": "ɔ"
    },
    "ç": {},
    "ɕ": {},
    "ɔ": {},
    "d": {
        "h": "ð",
        ",": "ɖ",
        "y": "ɗ"
    },
    "ð": {},
    "ɖ": {},
    "ɗ": {},
    "e": {
        "^": "ə",
        "3": "ɛ" 
    },
    "ə": {
        "^": "ɘ",
        "3": "ɜ"
    },
    "ɘ": {},
    "ɛ": {
        "^": "ɜ"
    },
    "ɜ": {},
    "f": {},
    "g": {
        "h": "ɣ",
        "y": "ɠ",
        "~": "ɰ"
    },
    "ɣ": {},
    "ɠ": {},
    "ɰ": {},
    "ɢ": {
        "y": "ʛ"
    },
    "ʛ": {},
    "h": {
        "t": "ħ",
        "^": "ɥ",
        "y": "ɦ",
        "g": "ɧ"
    },
    "ħ": {},
    "ɥ": {},
    "ɦ": {},
    "ɧ": {},
    "ʜ": {},
    "i": {
        "-": "ɨ"
    },
    "ɨ": {},
    "ɪ": {},
    "j": {
        "-": "ɟ",
        "y": "ʄ",
        "h": "ʝ"
    },
    "ɟ": {},
    "ʄ": {},
    "ʝ": {},
    "k": {},
    "l": {
        "h": "ɬ",
        "z": "ɮ",
        ",": "ɭ",
        "~": "ɫ"
    },
    "ɬ": {},
    "ɮ": {},
    "ɭ": {},
    "ɫ": {},
    "ʟ": {},
    "m": {
        "g": "ɱ",
        "^": "ɯ"
    },
    "ɱ": {},
    "ɯ": {},
    "n": {
        "g": "ŋ",
        "j": "ɲ",
        ",": "ɳ"
    },
    "ŋ": {},
    "ɲ": {},
    "ɳ": {},
    "ɴ": {},
    "o": {
        "e": "œ",
        "-": "ø",
        "E": "Œ",
        "3": "ɞ"
    },
    "œ": {},
    "ø": {
        "-": "ɵ"
    },
    "ɵ": {},
    "Œ": {},
    "ɞ": {},
    "p": {
        "h": "ɸ"
    },
    "ɸ": {},
    "q": {
        "h": "χ"
    },
    "χ": {},
    "r": {
        "l": "ɾ",
        "^": "ɹ",
        ",": "ɽ"
    },
    "ɾ": {
        "^": "ɺ"
    },
    "ɹ": {
        ",": "ɻ",
        "l": "ɺ"
    },
    "ɽ": {
        "^": "ɻ"
    },
    "ɻ": {},
    "ɺ": {},
    "ʀ": {
        "^": "ʁ"
    },
    "ʁ": {},
    "s": {
        "h": "ʃ",
        ",": "ʂ"
    },
    "ʃ": {},
    "ʂ": {},
    "t": {
        "h": "θ",
        ",": "ʈ"
    },
    "θ": {},
    "ʈ": {},
    "u": {
        "-": "ʉ",
        "o": "ʊ"
    },
    "ʉ": {},
    "ʊ": {},
    "v": {
        "^": "ʌ",
        "~": "ʋ"
    },
    "ʌ": {},
    "ʋ": {},
    "w": {
        "^": "ʍ"
    },
    "ʍ": {},
    "x": {},
    "y": {
        "^": "ʎ",
        "x": "ɤ"
    },
    "ʎ": {},
    "ɤ": {},
    "ʏ": {},
    "z": {
        "h": "ʒ",
        ",": "ʐ",
        "t": "ʑ",

    },
    "ʔ": {
        "^": "ʕ",
        "-": "ʡ"
    },
    "ʕ": {
        "-": "ʢ"
    },
    "ʡ": {
        "^": "ʢ"
    },
    "!": {},
    "ʘ": {},
    "|": {
        "-": "ǂ",
        "|": "ǁ"
    },
    "ǂ": {},
    "ǁ": {},
    "*": {
        "*": "◌"
    },
    "◌": {}
}
