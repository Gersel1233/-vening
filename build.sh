#!/bin/sh
# Pakker artifact-fragmenterne i concepts/*/index.html til komplette HTML-dokumenter
# under dist/, klar til at lægge på et almindeligt webhotel.
set -eu

root=$(cd "$(dirname "$0")" && pwd)
out="$root/dist"
rm -rf "$out"

for src in "$root"/concepts/*/index.html; do
  name=$(basename "$(dirname "$src")")
  dir="$out/$name"
  mkdir -p "$dir"

  # <title> hentes ud af fragmentet, så dokumentet får samme navn.
  title=$(sed -n 's/.*<title>\(.*\)<\/title>.*/\1/p' "$src" | head -1)
  [ -n "$title" ] || title="$name"

  {
    printf '<!doctype html>\n<html lang="da">\n<head>\n'
    printf '<meta charset="utf-8">\n'
    printf '<meta name="viewport" content="width=device-width, initial-scale=1">\n'
    printf '<style>*{margin:0}img{max-width:100%%}[hidden]{display:none!important}</style>\n'
    printf '</head>\n<body>\n'
    cat "$src"
    printf '\n</body>\n</html>\n'
  } > "$dir/index.html"

  printf '%s  ->  dist/%s/index.html\n' "$title" "$name"
done
