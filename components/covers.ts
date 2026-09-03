/**
 * Foto de portada de cada proyecto.
 *
 * - Si es una ruta local ("/projects/....png"), pon el archivo en
 *   /public/projects/ con EXACTAMENTE ese nombre (~800x450px).
 * - Si es una URL, se usa directo (ej: tarjeta auto-generada del repo).
 * - Si la imagen falla o no existe, la card muestra el gradiente + emoji.
 */
const OG = (repo: string) =>
  `https://opengraph.githubassets.com/1/JoahanMorales/${repo}`;

export const COVERS: Record<string, string> = {
  "Lumivia": "/projects/lumivia.png",
  "MercurIA": "/projects/mercuria.png",
  "Multimodal Emotion AI": OG("Multimodal-Emotion-Analysis-with-Transformers-Speech-Text"),
  "HandTrack RehabGame": OG("HandTrack-RehabGame"),
  "ipnprofes": "/projects/ipnprofes.png",
  "Time-tabling": OG("Time-tabling-web"),
};
