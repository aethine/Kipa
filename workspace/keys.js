const acceptedCharacters = "abcdefghijklmnopqrstuvwxyzBEHILNORY01234567890 /\\[];^\".+~?!\',:=_*<>()"
const ignoredCharacters = " /\\[]012456789"


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
    "^": "᷈",

}
const toneSeperate = {

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
    "~": quality
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
