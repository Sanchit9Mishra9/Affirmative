import { clientTypes } from "@/lib/content";

export function ClientMarks() {
  return (
    <ul className="grid grid-cols-2 gap-px bg-line md:grid-cols-4">
      {clientTypes.map((client) => (
        <li
          key={client.title}
          className="flex min-h-32 items-center justify-center bg-paper px-6 py-8"
        >
          <p className="text-center font-display text-2xl leading-tight tracking-wide text-graphite md:text-[1.65rem]">
            {client.title}
          </p>
        </li>
      ))}
    </ul>
  );
}
