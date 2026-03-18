import { TICKER_ITEMS } from "../lib/data";

export default function Ticker() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div
      className="overflow-hidden py-4 border-t border-b"
      style={{
        borderColor: "rgba(255,255,255,0.05)",
        background: "rgba(6,4,2,0.6)",
      }}
    >
      <div
        className="flex gap-12 whitespace-nowrap w-max"
        style={{ animation: "ticker 26s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-5 flex-shrink-0 font-ui text-[0.62rem] tracking-[0.45em] uppercase text-fog"
          >
            {item}
            <span
              className="w-1 h-1 rounded-full flex-shrink-0 bg-[var(--color-gold)]"
            />
          </span>
        ))}
      </div>
    </div>
  );
}
