"use client";

import React from "react";
import { Articles } from "./Articles";
import { IArticle } from "./IArticle";

export default function Article() {
  const [selectedArticle, setSelectedArticle] = React.useState<string | null>(
    null
  );

  const handleArticleClick = (link: string) => {
    setSelectedArticle(link);
  };

  const handleReturn = () => {
    setSelectedArticle(null);
  };
  return (
    <>
      {selectedArticle ? (
        <>
          <div
            style={{
              fontWeight: "bold",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
            onClick={handleReturn}
          >
            Vissza
          </div>
          <iframe
            src={selectedArticle as string}
            width="100%"
            height="500px"
            allowFullScreen
            tabIndex={0}
            loading="lazy"
          ></iframe>
        </>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h2>Hogyan játsszuk</h2>
          {Articles.map((article: IArticle) => (
            <div
              key={article.id}
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <a
                href={article.link}
                onClick={(e) => {
                  e.preventDefault();
                  handleArticleClick(article.link);
                }}
              >
                {article.title}
              </a>
              <span>{"-".repeat(article.title.length + 6)}</span>
            </div>
          ))}
          <span>Folytatás következik...</span>
        </div>
      )}
    </>
  );
}
