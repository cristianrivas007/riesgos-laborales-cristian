import React from "react";
import "./App.css";

const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

function App() {
  return (
    <div className="page-bg">
      <div className="two-col">

        {/* ── Columna izquierda: tarjeta ── */}
        <div className="col-left">
          <div className="cert-card">

            <div className="top-row">
              <div className="badge-circle">
                <svg viewBox="0 0 36 36" fill="none" className="badge-svg">
                  <circle cx="18" cy="14" r="7" stroke="#c8a84b" strokeWidth="1.5"/>
                  <path d="M11 22 L7 32 L18 27 L29 32 L25 22" stroke="#c8a84b" strokeWidth="1.5"/>
                  <path d="M15 14 L17 16 L21 12" stroke="#c8a84b" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>

              <div className="info-block">
                <p className="completed-by">Certificado de</p>
                <h1 className="name">RIVAS BETANCOURT<br />CRISTIAN PAUL</h1>
                <p className="meta">Fecha: 19-01-2026</p>
                <p className="meta bold">Con una duración de 2 horas</p>
                <p className="desc">
                  Por la participación de Rivas Betancourt Cristian Paul
                  en el curso de <strong>Seguridad industrial: Prevención de riesgos laborales, rutas de evacuación y protocolos de emergencias</strong>, realizado
                  el miércoles 19 de enero de 2026.
                </p>
              </div>
            </div>

            <div className="ministry-row">
              <div className="flag-stripes">
                <div className="stripe-y"></div>
                <div className="stripe-b"></div>
                <div className="stripe-r"></div>
              </div>
              <span className="ministry-label">Ministerio del Trabajo — El Nuevo Ecuador</span>
            </div>

          </div>
        </div>

        {/* ── Columna derecha: PDF ── */}
        <div className="col-right">
          <h2 className="pdf-title">Certificado de Participación</h2>

          {isIOS ? (
            <div className="ios-fallback">
              <p>Tu navegador no soporta la previsualización del PDF.</p>
              <a href="/gestion-talento-humano.pdf" target="_blank" rel="noreferrer">
                Abrir PDF
              </a>
            </div>
          ) : (
            <iframe
              src="/seguridad-industrial-riesgos-laborales.pdf"
              title="Certificado de Participación"
              className="pdf-frame"
            />
          )}
        </div>

      </div>
    </div>
  );
}

export default App;