import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import fs from "fs";

// Simple persistent store using a local JSON file (in production it will reset on container restart unless a real DB is used, but sufficient here)
const DB_FILE = path.join(process.cwd(), "config.json");

let globalConfig = { showAds: true };
if (fs.existsSync(DB_FILE)) {
  try {
    globalConfig = JSON.parse(fs.readFileSync(DB_FILE, "utf-8"));
  } catch (e) {
    console.error("Failed to parse config.json", e);
  }
}

function saveConfig() {
  fs.writeFileSync(DB_FILE, JSON.stringify(globalConfig));
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.get("/api/config", (req, res) => {
    res.json(globalConfig);
  });

  app.post("/api/config/ads", (req, res) => {
    const { showAds } = req.body;
    if (typeof showAds === 'boolean') {
      globalConfig.showAds = showAds;
      saveConfig();
      res.json(globalConfig);
    } else {
      res.status(400).json({ error: "Invalid boolean for showAds" });
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
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
