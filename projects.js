/* =====================================================================
   YOUR VIDEOS GO HERE  —  this is the only file you normally edit.
   ---------------------------------------------------------------------
   Add one { ... } block per video. Fields:

     title    : shown under the thumbnail
     role     : what you did (e.g. "Editor · Colorist")
     tools    : software used (e.g. "Premiere Pro, After Effects")
     category : the type of edit, shown as a small tag on each card
     client   : the channel / project / folder this video belongs to.
                Videos with the same `client` are grouped into one section,
                and the filter buttons let you jump between clients.
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
    title: "From Ancient Kingdoms to Kim Jong-un",
    role: "Editor · Sound Design",
    tools: "Premiere Pro, After Effects",
    category: "Documentary",
    client: "Documentary & Educational",   // <-- groups videos into a section
    host: "gdrive",
    id: "17dF2DXCDTdd8Zsb7UhQNq-JDU-i716N_",
  },
  {
    title: "Facts About Space",
    role: "Editor",
    tools: "After Effects, Premiere Pro",
    category: "Educational",
    client: "Documentary & Educational",
    host: "gdrive",
    id: "1mJzro6BjsJIo4Ei_qCi37k8mJjclJ_Vc",
  },
  {
    title: "Best Revenge Against a Troller",
    role: "Editor",
    tools: "Premiere Pro",
    category: "Gaming",
    client: "Roblox Gaming Channel",
    host: "gdrive",
    id: "1jeOgGYdP20FuLmplekJZZr0EJOLCfnYl",
  },
  {
    title: "Twinkle Twinkle — Nursery Rhyme (4K)",
    role: "Editor · Animation",
    tools: "After Effects",
    category: "Kids & Animation",
    client: "Twinkle Twinkle Star — Kids Channel",
    host: "gdrive",
    id: "1txnv64pLF1L31iiQY6yLC82Z3uUK_MnX",
  },
  {
    title: "How to Use Yodeck",
    role: "Editor",
    tools: "Premiere Pro",
    category: "Tutorial",
    client: "Yodeck — Product Tutorials",
    host: "gdrive",
    id: "1pbBni1tj0qhfhqOrmLNygyFF7x9Wc705",
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
