/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Article } from "./pages/Article";
import { Privacy } from "./pages/Privacy";
import { Terms } from "./pages/Terms";
import { Cadastro } from "./pages/Cadastro";
import { Sobre } from "./pages/Sobre";
import { Contato } from "./pages/Contato";
import { AdminViral } from "./pages/AdminViral";
import { Sorteios } from "./pages/Sorteios";
import { AdProvider } from "./contexts/AdContext";

export default function App() {
  return (
    <AdProvider>
      <BrowserRouter>
        <Routes>
          {/* Pages outside of Layout */}
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/sorteios" element={<Sorteios />} />
          <Route path="/admin-viral" element={<AdminViral />} />

          {/* Pages inside the Layout */}
          <Route path="/*" element={
            <Layout>
              <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/privacidade" element={<Privacy />} />
              <Route path="/termos" element={<Terms />} />
              <Route path="/:slug" element={<Article />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </BrowserRouter>
    </AdProvider>
  );
}
