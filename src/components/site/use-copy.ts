"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/** Copies text to the clipboard and reports `copied` for a short moment. */
export function useCopy(timeout = 2000) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        clearTimeout(timer.current);
        timer.current = setTimeout(() => setCopied(false), timeout);
      } catch {
        window.location.href = `mailto:${text}`;
      }
    },
    [timeout],
  );

  return { copied, copy };
}
