# Hey Twitch, your font is broken

Twitch semi-recently [updated their font][twitch blog] to a slightly customized version of Roobert. It's a nice font, except for a fun bug with the backtick (`\``). This screenshot of text has a tilde in it. Can you spot it?

![Twitch search box with New Font Test][new font test broken]

It's at the beginning, overlapping with the N. I can't see it either.

I dug into it using [`ttx`][ttx], and it turns out this is because the glyphs are classified wrong. The codepoint for backtick, `U+0060 GRAVE ACCENT`, is mapped to a glyph called `grave`, which is classified as a combining glyph. But that's not a combining codepoint! That honor belongs to `U+0300 COMBINING GRAVE ACCENT`, which interestingly is correctly mapped to a different glyph called `gravecomb` that is classified as combining. There are a total of [11 glyphs][glyph list] that are broken like this. What I find really interesting is that the class of combining glyphs is 3 and the class of normal glyphs is 1, so the difference is literally one bit flipped the wrong way.

This repository hosts patched versions of the fonts that have the bits flipped correctly. Finally you can experience backticks the way they were meant to be!

![Twitch search box with backtick + New Font Test][new font test fixed]

- [Userscript][userscript]

[twitch blog]: https://blog.twitch.tv/en/2019/09/26/nice-to-meet-you-again-for-the-first-time/
[new font test broken]: https://user-images.githubusercontent.com/5678977/75615767-40e1ff80-5afd-11ea-8c75-afcc049aa19c.png
[new font test fixed]: https://user-images.githubusercontent.com/5678977/75615802-9c13f200-5afd-11ea-85f2-af427253e88f.png
[ttx]: https://github.com/fonttools/fonttools#ttx--from-opentype-and-truetype-to-xml-and-back
[glyph list]: https://github.com/tbodt/twitch-roobert-sane/blob/master/patch.py#L7
[userscript]: https://github.com/tbodt/twitch-roobert-sane/blob/master/roobert-sane.user.js
