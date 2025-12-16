export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(200).send("API activa (usa POST para registrar logs).");
  }

  try {
    // OJO: req.body ya viene parseado como objeto JSON en Vercel
    console.log("📥 LOG DE INTERACCIÓN (usuario/profesor):");
    console.log(req.body);

    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error("❌ Error registrando log:", e);
    return res.status(500).json({ ok: false });
  }
}
