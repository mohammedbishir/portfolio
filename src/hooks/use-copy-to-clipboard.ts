"use client";

import { useCallback, useState } from "react";

async function writeToClipboard(value: string) {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    const input = document.createElement("input");
    input.value = value;
    document.body.appendChild(input);
    input.select();
    document.execCommand("copy");
    document.body.removeChild(input);
    return true;
  }
}

export function useCopyToClipboard(duration = 1800) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const copy = useCallback(
    async (key: string, value: string) => {
      await writeToClipboard(value);
      setCopiedKey(key);
      window.setTimeout(() => setCopiedKey(null), duration);
    },
    [duration],
  );

  const isCopied = useCallback((key: string) => copiedKey === key, [copiedKey]);

  return { copiedKey, copy, isCopied };
}
