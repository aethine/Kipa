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
    
}
const quality = {

}

const allDiacritics = {
    "^" : superscript,
    "\"": tone,
    "." : suprasegmental,
    "+": place,
    "~": quality
}

