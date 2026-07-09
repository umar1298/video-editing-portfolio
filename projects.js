/* =====================================================================
   YOUR VIDEOS GO HERE  —  this is the only file you normally edit.
   ---------------------------------------------------------------------
   Add one { ... } block per video. Fields:

     title    : shown under the thumbnail
     role     : what you did (e.g. "Editor · Colorist")
     tools    : software used (e.g. "Premiere Pro, After Effects")
     category : used by the filter buttons (e.g. "Reels", "Long-form")
     host     : "youtube", "vimeo", "gdrive", or "local"
     id       : (youtube/vimeo/gdrive) the video/file ID only, NOT the full URL
     src      : (local only) path to the file, e.g. "videos/my-reel.mp4"
     thumb    : thumbnail image URL. Auto-fetched for YouTube; STRONGLY
                recommended for vimeo/local (export a poster frame to assets/).

   HOW TO GET THE ID (youtube / vimeo):
     YouTube  https://www.youtube.com/watch?v=dQw4w9WgXcQ   ->  id: "dQw4w9WgXcQ"
     YouTube  https://youtu.be/dQw4w9WgXcQ                  ->  id: "dQw4w9WgXcQ"
     Vimeo    https://vimeo.com/123456789                   ->  id: "123456789"

   GOOGLE DRIVE (quick start — plays your existing Drive files):
     1. In Drive, right-click the video -> Share -> General access ->
        "Anyone with the link" = Viewer.  (Required, or it won't play.)
     2. Copy the link: https://drive.google.com/file/d/1AbC...XyZ/view
                                                      ^^^^^^^^^^^  this is the id
     3. Use host:"gdrive", id:"1AbC...XyZ".
     Note: Drive caps quality (~720p) and can hit a "quota exceeded" wall on
     popular files — fine to start, but YouTube/Vimeo/local are more reliable.

   SELF-HOSTED (no YouTube):
     1. Drop the file in the videos/ folder  ->  videos/brand-film.mp4
     2. Keep it compressed & under ~50 MB (GitHub rejects files > 100 MB).
     3. Use host:"local", src:"videos/brand-film.mp4", and a thumb: image.
   ===================================================================== */

const PROJECTS = [
  {
    title: "Cinematic Brand Film",
    role: "Editor · Colorist",
    tools: "Premiere Pro, DaVinci Resolve",
    category: "Long-form",
    host: "youtube",
    id: "dQw4w9WgXcQ",          // <-- replace with your video ID
  },
  {
    title: "Instagram Reel — Product Launch",
    role: "Editor · Motion Graphics",
    tools: "After Effects, Premiere Pro",
    category: "Reels",
    host: "youtube",
    id: "dQw4w9WgXcQ",
  },
  {
    title: "Wedding Highlight",
    role: "Editor",
    tools: "Premiere Pro",
    category: "Long-form",
    host: "youtube",
    id: "dQw4w9WgXcQ",
  },
  {
    title: "YouTube Vlog Edit",
    role: "Editor",
    tools: "Premiere Pro",
    category: "Vlogs",
    host: "youtube",
    id: "dQw4w9WgXcQ",
  },
  {
    title: "Kinetic Typography Promo",
    role: "Motion Designer",
    tools: "After Effects",
    category: "Motion",
    host: "youtube",
    id: "dQw4w9WgXcQ",
  },
  {
    title: "Short-form Ad Spot",
    role: "Editor · Sound Design",
    tools: "Premiere Pro, Audition",
    category: "Reels",
    host: "youtube",
    id: "dQw4w9WgXcQ",
  },
  {
    // ---- EXAMPLE of a SELF-HOSTED clip (no YouTube). ----
    // Put the file at videos/sample-reel.mp4 and a poster at assets/sample-reel.jpg,
    // then this card plays the file directly in the browser.
    title: "Self-Hosted Sample",
    role: "Editor",
    tools: "DaVinci Resolve",
    category: "Reels",
    host: "local",
    src: "videos/sample-reel.mp4",
    thumb: "assets/placeholder.svg",
  },
];

/* ---- Your name & contact (edit these) ---- */
const PROFILE = {
  name: "Huzaifa Anwar",
  tagline: "Video Editor & Motion Designer",
  intro: "I craft cinematic edits, punchy social reels, and motion graphics that hold attention.",
  phone: "+92 340 8789785",      // shown as a click-to-call link
  email: "",                     // add an email here later if you want one shown too
  socials: [
    { label: "WhatsApp",  url: "https://wa.me/923408789785" },
    // Add your real profiles below (or delete the placeholders):
    { label: "YouTube",   url: "https://youtube.com/@yourhandle" },
    { label: "Instagram", url: "https://instagram.com/yourhandle" },
  ],
};
