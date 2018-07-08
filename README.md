# Kipa [kʰiːpə] 

US-Standard keyboard input for the IPA. Keep reading for more info.
Try it [here!](https://aethine.github.io/Kipa/)

# Guide

Kipa is an IPA converter designed to be used with the US-Standard keyboard layout. 
All diacritics (and special characters) are composed with a base letter and multiple pairs of modifier symbols. For example:

- [e.:] → [eː]. The ː is composed of two symbols: the category (".", suprasegmentals, and ":" which under the suprasegmentals category means "ː".

- [e;^] → [ə]. The ";" category is special; it converts base characters. In this case, [e] can be converted to [ə] using the modifier category with "^", the symbol generally used for rotation.


# All modifiers

To use a modifier use the category + the sub-symbol. For example, aspirated (◌ʰ) is the subsymbol "h" under the "^" (superscript) category. You would then type ^h, and those two characters will be replaced by "ʰ".

### ^ (Superscript):
- h → aspirated (eʰ)
- w → labialized (eʷ)
- j → palatalized (eʲ)
- g → velarized (eˠ)
- ? → pharyngealized (eˤ)
- n → nasal release (eⁿ)
- l → lateral release (eˡ)
- . → no audible release (e˺)

### " (Tone):
- H → extra high (e̋)
- h → high (é)
- \- → mid (ē)
- l → low (è)
- L → extra low (ȅ)
- r → rising (ě)
- f → falling (ê)
- ^ → rising-falling (e᷈)
- d → downstep (↓)
- u → upstep (↑)
- G → global rising (↗)
- g → global falling (↘)

### . (Suprasegmental):
- ' → primary stress (ˈ)
- , → secondary stress (ˌ)
- : → long (ː)
- . → half-long (ˑ)
- ^ → extra-short (ĕ)
- g → minor (foot) group (|)
- G → major (intonation) group (‖)
- = → syllable break (.)
- \- → tie bar above (place on first of pair) (a͡b)
- _ → tie bar below (place on first of pair) (a͜b)

### + (Place):
- \+ → advanced (e̟)
- \- → retracted (e̠)
- : → centralized (ë)
- x → mid-centralized (e̽)
- \* → raised (e̝)
- . → lowered (e̞)
- < → advanced tongue root (e̘)
- \> → retracted tongue root (e̙)
- d → dental (e̪)
- p → apical (e̺)
- l → laminal (e̻)

### ~ (Quality):
- . → voiceless (e̥)
- v → voiced (e̬)
- ) → more rounded (e̹)
- ( → less rounded (e̜)
- , → syllable (e̩)
- _ → non-syllable (e̯)
- r → rhoticity (e˞)
- : → breathy voiced (e̤)
- \- → creaky voiced (ḛ)
- ~ → nasalized (ẽ)



# Modifier/Usable letter guide

For example, to create [ɒ], you would first type [a], then type ;o and ;^ (order does not matter), and it will be converted to [ɒ]. Letters that have a conversion in parentheses mean they will automatically be converted without a modifier.

### a _Unrounded low front vowel_:
- ;e → æ _Lower mid front vowel_
- ;o → ɑ _Unrounded low back vowel_
- ;^ → ɐ _Rounded lower central vowel_
- ;o;^ → ɒ _Rounded low back vowel_

### b _Voiced bilabial plosive_:
- ;h → β _Voiced bilabial fricative_
- ;y → ɓ _Bilabial implosive_

### B (→ ʙ) _Bilabial trill_

### c _Voiceless palatal plosive_:
- ;h → ç _Voiceless palatal fricative_
- ;t → ɕ _Voiceless alvelo-palatal fricative_
- ;^ → ɔ _Rounded lower mid back vowel_

### d _Voiced alveolar plosive_:
- ;h → ð _Voiced dental fricative_
- ;, → ɖ _Voiced retroflex plosive_
- ;y → ɗ _Voiced alveolar implosive_

### e _Unrounded upper mid front vowel_:
- ;^ → ə _Mid central vowel_
- ;^;^ → ɘ _Unrounded upper mid central vowel_
- ;3 → ɛ _Unrounded lower mid front vowel_
- ;3;^ → ɜ _Unrounded lower mid central vowel_

### f _Voiceless labiodental fricative_

### g _Voiced velar plosive_:
- ;h → ɣ _Voiced velar fricative_
- ;y → ɠ _Velar implosive_
- ;~ → ɰ _Velar approximate_

### G (→ ɢ) _Voiced uvular plosive_: 
- ;y → ʛ _Voiced uvular implosive_

### h _Voiceless glottal fricative_:
- ;t → ħ _Voiceless pharyngeal fricative_
- ;^ → ɥ _Voiced labial-palatal approximant_
- ;y → ɦ _Voiced glottal fricative_
- ;g → ɧ _Simultaneous ʃ and x_

### H (→ ʜ) _Voiceless epiglottal fricative_

### i _Unrounded high front vowel_:
- ;- → ɨ _Unrounded high central vowel_

### I (→ ɪ) _Unrounded semi-high front vowel_

### j _Palatal approximate_:
- ;- → ɟ _Voiced palatal plosive_
- ;y → ʄ _Palatal implosive_
- ;h → ʝ _Voiced palatal fricative_

### k _Voiceless velar plosive_:

### l _Alveolar lateral approximate_:
- ;h → ɬ _Voiceless alveolar lateral fricative_
- ;z → ɮ _Voiced alveolar lateral fricative_
- ;, → ɭ _Retroflex lateral approximate_

### L (→ ʟ) _Velar lateral approximate_

### m _Bilabial nasal_:
- ;g → ɱ _Labiodental nasal_
- ;^ → ɯ _Unrounded high back vowel_

### n _Alveolar nasal_:
- ;g → ŋ _Velar nasal_
- ;j → ɲ _Palatal nasal_
- ;, → ɳ _Retroflex nasal_

### N (→ ɴ) _Uvular nasal_

### o _Rounded upper mid back vowel_:
- ;e → œ _Rounded lower mid front vowel_
- ;- → ø _Rounded upper mid front vowel_
- ;-;- → ɵ _Rounded mid central vowel_
- ;E → Œ _Rounded low front vowel_
- ;3 → ɞ _Rounded lower mid central vowel_

### p _Voiceless bilabial plosive_:
- ;h → ɸ _Voiceless bilabial fricative_

### q _Voiceless uvular plosive_:
- ;h → χ _Voiceless uvular fricative_

### r _Alveolar trill_:
- ;l → ɾ _Alveolar tap_
- ;^ → ɹ _Alveolar approximate_
- ;, → ɽ _Retroflex trill_
- ;^;, → ɻ _Retroflex approximate_
- ;^;l → ɺ _Aveolar lateral tap_

### R (→ ʀ) _Uvular trill_:
- ;^ → ʁ _Voiced uvular fricative_

### s _Voiceless alveolar fricative_:
- ;h → ʃ _Voiceless postalveolar fricative_
- ;, → ʂ _Voiceless retroflex fricative_

### t _Voiceless alveolar plosive_:
- ;h → θ _Voiceless dental plosive_
- ;, → ʈ _Voiceless retroflex plosive_

### u _Rounded high back vowel_:
- ;- → ʉ _Rounded high central vowel_
- ;o → ʊ _Rounded semi-high back vowel_

### v _Voiced bilabial fricative_:
- ;^ → ʌ _Unrounded lower mid back vowel_
- ;~ → ʋ _Bilabial approximate_

### w _Voiced labial-velar fricative_:
- ;^ → ʍ _Voiceless labial-velar fricative_

### x _Voiceless velar fricative_:

### y _Rounded high front vowel_:
- ;^ → ʎ _Palatal lateral approximate_
- ;x → ɤ _Unrounded upper mid back vowel_

### Y (→ ʏ) _Rounded semi-high front vowel_

### z _Voiced alveolar fricative_:
- ;h → ʒ _Voiced postalveolar fricative_
- ;, → ʐ _Voiced retroflex fricative_
- ;t → ʑ _Voiced alvelo-palatal fricative_

### ? (→ ʔ) _Glottal stop_:
- ;^ → ʕ _Voiced pharyngeal fricative_
- ;- → ʡ _Epiglottal plosive_
- ;^;- → ʢ _Voiced epiglottal fricative_

### ! _Alveolar click_

### O (→ ʘ) _Bilabial click_

#### | _Dental click_:
- ;- → ǂ _Palatalalveolar click_
- ;| → ǁ _Alveolar lateral click_
