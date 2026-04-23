"use client";

import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-5xl font-serif">RR Drink's</h1>
        <p className="text-zinc-400 mt-2">
          Os melhores drinks para momentos especiais
        </p>
      </header>

      {/* Tela inicial */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div className="space-y-8">
          <p className="uppercase tracking-[0.3em] text-sm text-green-400">
            Bem-vindo ao
          </p>

          <h2 className="text-6xl md:text-7xl font-serif leading-tight">
            RR DRINK'S
          </h2>

          <p className="text-lg text-zinc-300 max-w-lg leading-relaxed">
            Os melhores drinks para momentos especiais.
          </p>

          <button className="border border-green-500 px-8 py-4 rounded-2xl hover:bg-zinc-900 transition">
            Explorar Drinks
          </button>
        </div>

        {/* Imagem */}
        <div className="rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b"
            alt="Drink premium"
            className="w-full h-[500px] object-cover"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-zinc-400 mt-16 border-t border-zinc-800 pt-8">
        <p>WhatsApp: 44 99811-2581</p>
        <p>Instagram: @rrdrinks.oficial</p>
        <p>Atendimento: Sexta 18h às 23:30 | Sábado e Domingo 17h às 23:30</p>
        <p>Delivery em Loanda e região</p>
      </footer>
    </div>
  );
}