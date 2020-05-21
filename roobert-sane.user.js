// ==UserScript==
// @name Sane Roobert
// @description Fixes the borked Roobert font on Twitch
// @match *://twitch.tv/*
// @match *://www.twitch.tv/*
// @grant GM_addStyle
// ==/UserScript==

GM_addStyle(`
@import "https://raw.githack.com/tbodt/twitch-roobert-sane/master/roobert-sane.css";
html body {
    font-family: "Roobert-Sane" !important;
}
`);
