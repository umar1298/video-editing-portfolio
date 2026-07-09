/* =====================================================================
   YOUR VIDEOS GO HERE  —  this is the only file you normally edit.
   ---------------------------------------------------------------------
   Add one { ... } block per video. Fields:

     title    : shown under the thumbnail
     role     : what you did (e.g. "Editor · Colorist")
     tools    : software used (e.g. "Premiere Pro, After Effects")
     category : used by the filter buttons (e.g. "Reels", "Long-form")
     host     : "youtube"  or  "vimeo"
     id       : the video ID only (NOT the whole URL) — see below
     thumb    : (optional) custom thumbnail image URL.
                Leave it out for YouTube and it auto-fetches the thumbnail.

   HOW TO GET THE ID:
     YouTube  https://www.youtube.com/watch?v=dQw4w9WgXcQ   ->  id: "dQw4w9WgXcQ"
     YouTube  https://youtu.be/dQw4w9WgXcQ                  ->  id: "dQw4w9WgXcQ"
     Vimeo    https://vimeo.com/123456789                   ->  id: "123456789"
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
];

/* ---- Your name & contact (edit these) ---- */
const PROFILE = {
  name: "Your Name",
  tagline: "Video Editor & Motion Designer",
  intro: "I craft cinematic edits, punchy social reels, and motion graphics that hold attention.",
  email: "you@example.com",
  socials: [
    { label: "YouTube",   url: "https://youtube.com/@yourhandle" },
    { label: "Instagram", url: "https://instagram.com/yourhandle" },
    { label: "LinkedIn",  url: "https://linkedin.com/in/yourhandle" },
  ],
};
