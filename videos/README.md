# Self-hosted videos

Drop your video files here (e.g. `brand-film.mp4`) and reference them from
`projects.js` with:

```js
{ title:"...", role:"...", tools:"...", category:"...",
  host:"local", src:"videos/brand-film.mp4", thumb:"assets/brand-film.jpg" }
```

## Keep files small so GitHub accepts them (hard limit: 100 MB/file)

A good compressed export for web:

```bash
# H.264 MP4, 1080p, ~2–4 Mbps — plays everywhere, small file
ffmpeg -i input.mov -c:v libx264 -crf 24 -preset slow -vf "scale=-2:1080" \
       -c:a aac -b:a 128k -movflags +faststart brand-film.mp4
```

`+faststart` lets the video start playing before it fully downloads.

## Poster/thumbnail (recommended)

Grab a frame for the card thumbnail:

```bash
ffmpeg -i brand-film.mp4 -ss 3 -frames:v 1 ../assets/brand-film.jpg
```
