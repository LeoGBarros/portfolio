"use client";

import { useEffect, useState } from "react";

// Efeito de digitação: apaga a palavra atual e escreve a próxima
export function Rotator({ words }: { words: string[] }) {
  const [text, setText] = useState(words[0]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(words[0]);
      return;
    }

    let w = 0;
    let c = words[0].length;
    let deleting = true;
    let timer: ReturnType<typeof setTimeout>;

    const type = () => {
      const word = words[w];
      c += deleting ? -1 : 1;
      setText(word.slice(0, c));

      let delay = deleting ? 35 : 70;
      if (!deleting && c === word.length) {
        deleting = true;
        delay = 1800;
      } else if (deleting && c === 0) {
        deleting = false;
        w = (w + 1) % words.length;
        delay = 300;
      }
      timer = setTimeout(type, delay);
    };

    setText(words[0]);
    timer = setTimeout(type, 2000);
    return () => clearTimeout(timer);
  }, [words]);

  return (
    <>
      <span className="rotator" aria-live="polite">
        {text}
      </span>
      <span className="caret" aria-hidden="true" />
    </>
  );
}
