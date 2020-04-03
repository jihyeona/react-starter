import React, { useState } from 'react'
import "./card.css";

export const Card = ({
  buttonColor,
  buttonText,
  buttonTextColor,
  emoji,
  primary,
  secondary,
  subtitle,
  subtitleColor,
  title,
  titleColor
}) => {

  const [clicked, setClicked] = useState(false);

  if (clicked)
    return (
      <article className="card clicked-card">
        <section className="top" style={{ background: primary }}>
          <h1 style={{ color: titleColor }}>{title}</h1>
        </section>
        <section className="bottom" style={{ background: secondary }}>
          <span className="emoji" role="img" aria-label="emoji">
            {emoji}
          </span>
        </section>
      </article>
    );

  return (
    <article className="card">
      <section className="top" style={{ background: primary }}>
        <h1 style={{ color: titleColor }}>{title}</h1>
        <span className="emoji" role="img" aria-label="emoji">
          {emoji}
        </span>
      </section>
      <section className="bottom" style={{ background: secondary }}>
        <h2 style={{ color: subtitleColor }}>{subtitle}</h2>
        <button
          style={{ background: buttonColor, color: buttonTextColor }}
          onClick={() => setClicked(!clicked)}
        >
          {buttonText}
        </button>
      </section>
    </article>
  );
};
