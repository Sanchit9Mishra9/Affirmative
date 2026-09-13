"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setError("Please complete name, email and message.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border-t border-line py-10" role="status">
        <p className="editorial text-3xl text-graphite">Thank you.</p>
        <p className="mt-4 max-w-md text-stone">
          A member of the Trugro team will be in touch. This demonstration
          environment stores nothing; your message was not sent to a server.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8" noValidate>
      <label className="block border-b border-line pb-3">
        <span className="text-[0.6875rem] tracking-[0.18em] uppercase text-stone">
          Name
        </span>
        <Input
          name="name"
          className="mt-2 rounded-none border-0 bg-transparent px-0 text-base shadow-none focus-visible:ring-0"
          autoComplete="name"
        />
      </label>
      <label className="block border-b border-line pb-3">
        <span className="text-[0.6875rem] tracking-[0.18em] uppercase text-stone">
          Email
        </span>
        <Input
          name="email"
          type="email"
          className="mt-2 rounded-none border-0 bg-transparent px-0 text-base shadow-none focus-visible:ring-0"
          autoComplete="email"
        />
      </label>
      <label className="block border-b border-line pb-3">
        <span className="text-[0.6875rem] tracking-[0.18em] uppercase text-stone">
          Organization
        </span>
        <Input
          name="organization"
          className="mt-2 rounded-none border-0 bg-transparent px-0 text-base shadow-none focus-visible:ring-0"
          autoComplete="organization"
        />
      </label>
      <label className="block border-b border-line pb-3">
        <span className="text-[0.6875rem] tracking-[0.18em] uppercase text-stone">
          How can we help
        </span>
        <textarea
          name="message"
          rows={5}
          className="mt-2 w-full resize-none bg-transparent text-base outline-none"
        />
      </label>
      {error ? (
        <p className="text-sm text-red-800" role="alert">
          {error}
        </p>
      ) : null}
      <button
        type="submit"
        className="bg-graphite px-8 py-3 text-sm tracking-wide text-paper hover:bg-graphite/90"
      >
        Send message
      </button>
    </form>
  );
}
