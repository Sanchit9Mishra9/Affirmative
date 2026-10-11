import { offices } from "@/lib/content";

function project(lat: number, lon: number) {
  const x = ((lon - 68) / (97.5 - 68)) * 520 + 40;
  const y = ((37.2 - lat) / (37.2 - 6.5)) * 560 + 24;
  return { x, y };
}

export function IndiaMap() {
  return (
    <div className="relative overflow-hidden border border-line bg-[#eef1ea]">
      <svg
        viewBox="0 0 600 620"
        role="img"
        aria-label="Map of India showing Trugro offices in Gurugram, Bhopal, Pune, Mumbai and Hyderabad"
        className="h-auto w-full"
      >
        <path
          d="M312 30 L338 48 L368 44 L398 62 L428 58 L458 86 L502 92 L538 118 L548 148 L522 168 L498 178 L486 210 L492 258 L508 312 L518 368 L508 424 L488 478 L458 522 L422 558 L386 582 L354 560 L332 522 L308 548 L278 530 L252 492 L228 448 L208 400 L186 360 L148 328 L132 292 L158 258 L198 232 L228 188 L258 128 L286 78 L304 46 Z"
          fill="#d7ddd0"
          stroke="#012160"
          strokeWidth="1.5"
        />
        {offices.map((office) => {
          const { x, y } = project(office.lat, office.lon);
          const labelOnLeft = office.city === "Mumbai" || office.city === "Pune";
          return (
            <g key={office.city}>
              <circle cx={x} cy={y} r="7" fill="#b9f227" />
              <circle
                cx={x}
                cy={y}
                r="12"
                fill="none"
                stroke="#012160"
                strokeWidth="1.2"
              />
              <text
                x={labelOnLeft ? x - 16 : x + 16}
                y={y + 5}
                textAnchor={labelOnLeft ? "end" : "start"}
                fill="#012160"
                fontSize="14"
                fontFamily="var(--font-geist-sans), sans-serif"
              >
                {office.city}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
