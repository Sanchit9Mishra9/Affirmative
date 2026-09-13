"use client";

import { useEffect, useState } from "react";
import { Modal } from "@/components/shared/Modal";

const STORAGE_KEY = "trugro-cookie-preferences";

function readAnalyticsPreference() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return false;
    const parsed = JSON.parse(saved) as { analytics?: boolean };
    return Boolean(parsed.analytics);
  } catch {
    return false;
  }
}

export function CookiePreferences({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  // Start with a fixed value so server and client render the same markup
  // on the first pass; the real preference is synced in after mount.
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    setAnalytics(readAnalyticsPreference());
  }, []);

  const save = (next: boolean) => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ essential: true, analytics: next })
    );
    onOpenChange(false);
  };

  return (
    <Modal
      open={open}
      onClose={() => onOpenChange(false)}
      title="Cookie preferences"
      description="Trugro uses essential cookies to operate this site. Optional analytics cookies help us understand how the site is used. No analytics cookies are set until you choose."
    >
      <div className="space-y-4 border-t border-line pt-6">
        <label className="flex items-start justify-between gap-6">
          <span>
            <span className="block text-sm text-graphite">Essential</span>
            <span className="mt-1 block text-sm text-stone">
              Required for navigation, security and remembering this choice.
            </span>
          </span>
          <span className="text-xs tracking-wide text-stone">Always on</span>
        </label>
        <label className="flex items-start justify-between gap-6">
          <span>
            <span className="block text-sm text-graphite">Analytics</span>
            <span className="mt-1 block text-sm text-stone">
              Optional measurement of page use. Off by default.
            </span>
          </span>
          <input
            type="checkbox"
            checked={analytics}
            onChange={(event) => setAnalytics(event.target.checked)}
            className="mt-1 size-4 accent-[#B9F227]"
          />
        </label>
      </div>
      <div className="mt-8 flex flex-wrap gap-3">
        <button
          type="button"
          className="bg-graphite px-5 py-3 text-sm tracking-wide text-paper hover:bg-graphite/90"
          onClick={() => save(analytics)}
        >
          Save preferences
        </button>
        <button
          type="button"
          className="border border-line px-5 py-3 text-sm tracking-wide text-graphite hover:bg-secondary"
          onClick={() => save(false)}
        >
          Essential only
        </button>
      </div>
    </Modal>
  );
}
