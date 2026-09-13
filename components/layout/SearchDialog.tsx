"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { Modal } from "@/components/shared/Modal";
import { searchContent } from "@/lib/content";

export function SearchDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => searchContent(query), [query]);

  return (
    <Modal
      open={open}
      onClose={() => {
        onOpenChange(false);
        setQuery("");
      }}
      title="Search Trugro"
      description="Find capabilities, domains and engagements."
    >
      <div className="relative">
        <Search
          className="absolute left-0 top-1/2 size-4 -translate-y-1/2 text-stone"
          strokeWidth={1.5}
        />
        <input
          autoFocus
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Try procurement, UAV, quantum…"
          className="w-full border-0 border-b border-line bg-transparent py-2 pl-7 text-base outline-none"
        />
      </div>
      <div className="mt-4 min-h-24">
        {query && results.length === 0 ? (
          <p className="py-6 text-sm text-stone">
            No matches. Try a capability, domain or topic.
          </p>
        ) : (
          <ul>
            {results.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => {
                    onOpenChange(false);
                    setQuery("");
                  }}
                  className="block border-t border-line py-4"
                >
                  <p className="text-[0.65rem] tracking-[0.18em] uppercase text-stone">
                    {item.type}
                  </p>
                  <p className="mt-1 text-graphite">{item.title}</p>
                  <p className="mt-1 text-sm text-stone">{item.text}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Modal>
  );
}
