import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "Is Linger free?",
    answer:
      "Yes. The core app is free. Linger Plus is an optional subscription for power features.",
  },
  {
    question: "How private are my memories?",
    answer:
      "Memories are visible only to people you specifically invite. We do not sell your data or use your content to train AI models.",
  },
  {
    question: "Can I save photos to my phone?",
    answer:
      "Yes — saving photos and videos to your phone is a Linger Plus feature.",
  },
  {
    question: "What happens if I cancel Linger Plus?",
    answer:
      "You keep all your existing memories. The free plan limits you to 3 memories going forward, but nothing is deleted.",
  },
  {
    question: "Where is Linger available?",
    answer:
      "Currently available only in the United States and Canada via the Apple App Store.",
  },
  {
    question: "How do I report inappropriate content?",
    answer:
      "Tap the report button on any photo, video, or memory in the app. Reports are confidential.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 font-script text-2xl text-coral">questions, answered</p>
          <h2 className="font-serif text-4xl tracking-tight text-white sm:text-5xl md:text-6xl">
            Frequently asked
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.question}
                className={cn(
                  "overflow-hidden rounded-2xl border bg-card/40 transition-all duration-300",
                  isOpen
                    ? "border-coral/60 shadow-[0_10px_30px_-10px_rgba(200,108,80,0.3)]"
                    : "border-white/10 hover:border-white/20",
                )}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 p-5 text-left sm:p-6"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg text-white sm:text-xl">
                    {faq.question}
                  </span>
                  <span
                    className={cn(
                      "flex h-8 w-8 flex-none items-center justify-center rounded-full transition-all duration-300",
                      isOpen
                        ? "rotate-180 bg-coral text-white"
                        : "bg-coral/15 text-coral",
                    )}
                  >
                    {isOpen ? (
                      <Minus className="h-4 w-4" strokeWidth={2.5} />
                    ) : (
                      <Plus className="h-4 w-4" strokeWidth={2.5} />
                    )}
                  </span>
                </button>

                <div
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-6 pr-16 text-base leading-relaxed text-muted-foreground sm:px-6 sm:pr-20">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
