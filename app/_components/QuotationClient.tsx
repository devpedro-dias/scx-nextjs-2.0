"use client";

import useSWR from "swr";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";


const getFormattedDate = () => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  return `${month}-${day}-${year}`;
};

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    if (!res.ok) throw new Error("Erro ao buscar dados");
    return res.json();
  });

export default function QuotationClient() {
  const currentDate = getFormattedDate();
  const API_URL = process.env.NEXT_PUBLIC_API_URL

  const usdUrl = `${API_URL}/CotacaoMoedaDia(moeda='USD',dataCotacao='${currentDate}')?$top=1&$orderby=dataHoraCotacao desc&$format=json`;
  const eurUrl = `${API_URL}/CotacaoMoedaDia(moeda='EUR',dataCotacao='${currentDate}')?$top=1&$orderby=dataHoraCotacao desc&$format=json`;

  const { data: usdData, error: usdError } = useSWR(usdUrl, fetcher);
  const { data: eurData, error: eurError } = useSWR(eurUrl, fetcher);

  if (usdError || eurError)
    return <div className="text-center"></div>;
  if (!usdData || !eurData)
    return <div className="text-center"></div>;

  // Estrutura de dados das moedas
  const currencies = [
    {
      id: "USDBRL",
      code: "USD",
      name: "Dólar Americano",
      bid: usdData.value[0]?.cotacaoCompra,
      ask: usdData.value[0]?.cotacaoVenda,
      image: "/USD-BRL.svg",
    },
    {
      id: "EURBRL",
      code: "EUR",
      name: "Euro",
      bid: eurData.value[0]?.cotacaoCompra,
      ask: eurData.value[0]?.cotacaoVenda,
      image: "/EUR-BRL.svg",
    },
  ];

  // Mapeamento dos dados para exibição
  const items = currencies.map((currency) => ({
    img: currency.image,
    codes: `${currency.code} / BRL`,
    ask: `R$ ${parseFloat(currency.ask).toFixed(2)}`,
    bid: `R$ ${parseFloat(currency.bid).toFixed(2)}`,
  }));

  return (
    <div className="flex w-full">
      <div className="h-auto rounded-md flex antialiased bg-transparent dark:bg-transparent dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards items={items} direction="right" speed="fast" />
      </div>
    </div>
  );
}
