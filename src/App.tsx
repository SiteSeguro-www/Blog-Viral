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

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pages outside of Layout */}
        <Route path="/cadastro" element={<Cadastro />} />

        {/* Pages inside the Layout */}
        <Route path="/*" element={
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/privacidade" element={<Privacy />} />
              <Route path="/termos" element={<Terms />} />
              <Route path="/:slug" element={<Article />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Layout>
        } />
      </Routes>
    </BrowserRouter>
  );
}
