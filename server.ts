import express from "express";
import { createServer as createViteServer } from "vite";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API to save registrations in a text file
  app.post("/api/register", async (req, res) => {
    const { name, email, whatsapp } = req.body;

    if (!name || !email || !whatsapp) {
      return res.status(400).json({ error: "Dados incompletos" });
    }

    const timestamp = new Date().toISOString();
    const entry = `${timestamp} | Nome: ${name} | Email: ${email} | WhatsApp: ${whatsapp}\n`;

    try {
      const filePath = path.join(__dirname, "registrations.txt");
      await fs.appendFile(filePath, entry, "utf8");
      res.json({ success: true });
    } catch (error) {
      console.error("Erro ao salvar no arquivo:", error);
      res.status(500).json({ error: "Erro interno ao salvar dados" });
    }
  });

  // API for Ad Config Persistence
  const CONFIG_PATH = path.join(__dirname, "config.json");

  app.get("/api/config", async (req, res) => {
    try {
      const content = await fs.readFile(CONFIG_PATH, "utf8");
      res.json(JSON.parse(content));
    } catch (error) {
      // Return default if file doesn't exist
      res.json({ showAds: true });
    }
  });

  app.post("/api/config/ads", async (req, res) => {
    const { showAds } = req.body;
    try {
      await fs.writeFile(CONFIG_PATH, JSON.stringify({ showAds }), "utf8");
      res.json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Failed to save config" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
