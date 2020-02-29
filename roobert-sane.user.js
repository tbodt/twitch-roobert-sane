// ==UserScript==
// @name Sane Roobert
// @description Fixes the borked Roobert font on Twitch
// @match *://twitch.tv/*
// @match *://www.twitch.tv/*
// @grant GM_addStyle
// ==/UserScript==

GM_addStyle(`
@import "https://cdn.jsdelivr.net/gh/tbodt/twitch-roobert-fixed@master/roobert-sane.css";
html body {
    font-family: "Roobert-Sane" !important;
}
`);
