"use client"

import React from "react";

export default function CatalogoDrinks() {
  const categorias = ["Com Álcool", "Sem Álcool", "Drinks Cremosos"];

  const [mostrarCatalogo, setMostrarCatalogo] = React.useState(false);
  const [categoriaSelecionada, setCategoriaSelecionada] = React.useState<string | null>(null);
  const [drinkSelecionado, setDrinkSelecionado] = React.useState<number | null>(null);
  const [sacola, setSacola] = React.useState<any[]>([]);
  const [tamanhoSelecionado, setTamanhoSelecionado] = React.useState<Record<number, string>>({});
  const [quantidadeSelecionada, setQuantidadeSelecionada] = React.useState<Record<number, number>>({});
  const [bebidaSelecionada, setBebidaSelecionada] = React.useState<Record<number, string>>({});
  const [animando, setAnimando] = React.useState<Record<number, boolean>>({});

  const drinks = [
    {
      nome: "Caipirinha de Limão",
      categoria: "Com Álcool",
      descricao: "Caipirinha clássica refrescante",
      ingredientes: "Vodka, Velho Barreiro ou soda, limão, gelo e açúcar refinado",
      precos: {
        comAlcool: { "300ml": 15, "500ml": 20, "700ml": 25 },
        semAlcool: { "300ml": 12, "500ml": 16, "700ml": 20 },
      },
    },
    {
      nome: "Caipirinha de Morango",
      categoria: "Com Álcool",
      descricao: "Sabor doce e refrescante",
      ingredientes: "Vodka, Velho Barreiro ou soda, morango, gelo e açúcar refinado",
      precos: {
        comAlcool: { "300ml": 15, "500ml": 20, "700ml": 25 },
        semAlcool: { "300ml": 12, "500ml": 16, "700ml": 20 },
      },
    },
    {
      nome: "Caipirinha de Maracujá",
      categoria: "Com Álcool",
      descricao: "Toque tropical marcante",
      ingredientes: "Vodka, Velho Barreiro ou soda, maracujá, gelo e açúcar refinado",
      precos: {
        comAlcool: { "300ml": 15, "500ml": 20, "700ml": 25 },
        semAlcool: { "300ml": 12, "500ml": 16, "700ml": 20 },
      },
    },
    {
      nome: "Caipirinha de Kiwi",
      categoria: "Com Álcool",
      descricao: "Drink cítrico e elegante",
      ingredientes: "Vodka, Velho Barreiro ou soda, kiwi, gelo e açúcar refinado",
      precos: {
        comAlcool: { "300ml": 15, "500ml": 20, "700ml": 25 },
        semAlcool: { "300ml": 12, "500ml": 16, "700ml": 20 },
      },
    },
    {
      nome: "Azedinho",
      categoria: "Drinks Cremosos",
      descricao: "🔥 Mais pedido - Drink cremoso e delicioso",
      ingredientes: "Limão, limão siciliano, leite condensado, gelo e opção com vodka ou soda",
      precos: {
        comAlcool: { "300ml": 20, "500ml": 25, "700ml": 30 },
        semAlcool: { "300ml": 18, "500ml": 22, "700ml": 26 },
      },
    },
  ];

  const drinksFiltrados =
    categoriaSelecionada === "Drinks Cremosos"
      ? drinks.filter((d) => d.categoria === "Drinks Cremosos")
      : drinks;

  const totalGeral = sacola.reduce((total, item) => total + item.total, 0);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <header className="text-center mb-10">
        <h1 className="text-5xl font-serif">RR Drink's</h1>
        <p className="text-zinc-400 mt-2">Os melhores drinks para momentos especiais</p>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <p className="uppercase tracking-[0.3em] text-sm text-green-400">Bem-vindo ao</p>
          <h2 className="text-6xl md:text-7xl font-serif leading-tight">RR DRINK'S</h2>
          <p className="text-lg text-zinc-300 max-w-lg leading-relaxed">
            Os melhores drinks para momentos especiais.
          </p>

          <button
            onClick={() => {
              setMostrarCatalogo(true);
              setCategoriaSelecionada(null);
            }}
            className="border border-green-500 px-8 py-4 rounded-2xl hover:bg-zinc-900 transition"
          >
            Explorar Drinks
          </button>
        </div>

        <div className="rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b"
            alt="Drink premium"
            className="w-full h-[500px] object-cover"
          />
        </div>
      </section>

      {mostrarCatalogo && (
        <div className="flex justify-center gap-4 mb-10">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaSelecionada(cat)}
              className={`px-6 py-3 rounded-xl border ${
                categoriaSelecionada === cat ? "bg-green-500 text-black" : "border-zinc-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {categoriaSelecionada && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {drinksFiltrados.map((drink, index) => {
            const tamanho = tamanhoSelecionado[index] || "300ml";
            const quantidade = quantidadeSelecionada[index] || 1;
            const bebida = bebidaSelecionada[index] || "Vodka";

            const preco =
              categoriaSelecionada === "Sem Álcool"
                ? drink.precos.semAlcool[tamanho]
                : drink.precos.comAlcool[tamanho];

            return (
              <div key={index} className="border border-zinc-800 rounded-3xl p-6">
                <h3 className="text-xl">{drink.nome}</h3>
                <p className="text-zinc-400">{drink.descricao}</p>

                <button
                  onClick={() => setDrinkSelecionado(drinkSelecionado === index ? null : index)}
                  className="border border-green-500 px-3 py-1 rounded mt-2"
                >
                  Ver Receita
                </button>

                {drinkSelecionado === index && (
                  <p className="text-sm mt-2">{drink.ingredientes}</p>
                )}

                <select
                  value={bebida}
                  onChange={(e) =>
                    setBebidaSelecionada({ ...bebidaSelecionada, [index]: e.target.value })
                  }
                  className="w-full mt-2 bg-zinc-900"
                >
                  {drink.nome === "Azedinho" ? (
                    <>
                      <option value="Vodka">Vodka</option>
                      <option value="Soda">Soda</option>
                    </>
                  ) : categoriaSelecionada === "Sem Álcool" ? (
                    <option value="Soda">Soda</option>
                  ) : (
                    <>
                      <option value="Vodka">Vodka</option>
                      <option value="Velho Barreiro">Velho Barreiro</option>
                    </>
                  )}
                </select>

                <select
                  value={tamanho}
                  onChange={(e) =>
                    setTamanhoSelecionado({ ...tamanhoSelecionado, [index]: e.target.value })
                  }
                  className="w-full mt-2 bg-zinc-900"
                >
                  <option value="300ml">300ml</option>
                  <option value="500ml">500ml</option>
                  <option value="700ml">700ml</option>
                </select>

                <select
                  value={quantidade}
                  onChange={(e) =>
                    setQuantidadeSelecionada({
                      ...quantidadeSelecionada,
                      [index]: Number(e.target.value),
                    })
                  }
                  className="w-full mt-2 bg-zinc-900"
                >
                  {[1, 2, 3, 4, 5].map((q) => (
                    <option key={q} value={q}>
                      {q}x
                    </option>
                  ))}
                </select>

                <p className="text-green-400 mt-2">R$ {preco * quantidade}</p>

                <button
                  onClick={() => {
                    setSacola((prev) => [
                      ...prev,
                      {
                        nome: drink.nome,
                        tamanho,
                        quantidade,
                        bebida,
                        total: preco * quantidade,
                      },
                    ]);

                    setAnimando({ ...animando, [index]: true });
                    setTimeout(() => {
                      setAnimando((prev) => ({ ...prev, [index]: false }));
                    }, 120);
                  }}
                  className={`mt-3 border px-4 py-2 w-full transition duration-150 active:scale-95 ${
                    animando[index] ? "bg-green-500 text-black" : ""
                  }`}
                >
                  Adicionar
                </button>
              </div>
            );
          })}
        </div>
      )}

      {sacola.length > 0 && (
        <div className="mt-10 border p-6 rounded-2xl text-center">
          <h2 className="text-xl mb-4">Sacola</h2>

          {sacola.map((item, i) => (
            <p key={i}>
              {item.quantidade}x {item.nome} ({item.tamanho}) - {item.bebida} - R$ {item.total}
            </p>
          ))}

          <p className="text-green-400 mt-4 text-xl">Total: R$ {totalGeral}</p>

          <a
            href={`https://wa.me/5544998112581?text=${encodeURIComponent(
              `Olá, gostaria de fazer um pedido:\n\n${sacola
                .map(
                  (item) =>
                    `${item.quantidade}x ${item.nome} (${item.tamanho}) - ${item.bebida} - R$ ${item.total}`
                )
                .join("\n")}\n\nTotal: R$ ${totalGeral}`
            )}`}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block bg-green-500 text-black px-6 py-3 rounded-xl"
          >
            Finalizar no WhatsApp
          </a>
        </div>
      )}
    </div>
  );
}