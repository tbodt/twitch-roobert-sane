import sys
from fontTools import ttLib

def patch(font):
    glyph_classes = font['GDEF'].table.GlyphClassDef.classDefs
    # These glyphs have class 3, indicating they are combining accents, but they're mapped to non-combining codepoints
    BROKEN_GLYPHS = [
        'acute',
        'breve',
        'caron',
        'cedilla',
        'circumflex',
        'dieresis', # [sic]
        'dotaccent',
        'grave',
        'macron',
        'ring',
        'tilde',
    ]
    for glyph in BROKEN_GLYPHS:
        assert glyph_classes[glyph] == 3
        glyph_classes[glyph] = 1

if __name__ == '__main__':
    file = sys.argv[1]
    font = ttLib.TTFont(file)
    patch(font)
    font.save(file)
