#!/bin/sh -ex

function patch_roobert() {
    curl -L "$1" -o "$2"
    python3 patch.py "$2"
}

patch_roobert https://static.twitchcdn.net/assets/Roobert-Regular-3fe213a3618624fd7b71.woff2 dist/roobert-regular.woff2
patch_roobert https://static.twitchcdn.net/assets/Roobert-SemiBold-df85158a0012c224b021.woff2 dist/roobert-semibold.woff2
patch_roobert https://static.twitchcdn.net/assets/Roobert-Bold-7fda562c82c09fbabec2.woff2 dist/roobert-bold.woff2
