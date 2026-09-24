# Blub Blub Studios · StoryGlider

A static, dependency-free website for StoryGlider and Blub Blub Studios.

## Preview

Run `python3 -m http.server 4173` from this directory and visit
`http://localhost:4173`. All six pages share `styles.css` and `navigation.js`.
Navigation remains available without JavaScript.

## Build

Run `sh scripts/build.sh`. The `dist/` directory contains only the public
site files. Hosting configuration is in `.openai/hosting.json`.

## Launch content

StoryGlider is marked **Coming soon** on the home and About pages. When the
App Store listing is live, update that status and the homepage action with
the confirmed listing URL. The homepage uses real iPhone 17 Pro Max captures from the
September 20, 2026 App Store package, plus September 22 captures of the real
home screen and comprehension question after reading The Pug and the Ball. Original pixels
are preserved; image links open each full-size capture. Source paths, capture
timestamps, dimensions, and checksums are in
`assets/screenshots/source-record.json`.
