async function fetchNewGameIds() {
    const query = `
        query LobbyGames {
            lobbyGames(
                brandId: "ab",
                gameFilters: {
                    orderBy: [
                        {
                            direction: DESCENDING,
                            field: releasedAt
                        }
                    ]
                },
                limit: 20
            ) {
                gameId
            }
        }
    `;

    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ query })
        });

        const data = await response.json();

        if (!data?.data?.lobbyGames) {
            console.error("Invalid response structure:", data);
            return;
        }

        const gameIds = data.data.lobbyGames.map(game => game.gameId);
        generateCSS(gameIds);
    } catch (error) {
        console.error("Error fetching game IDs:", error);
    }
}

function generateCSS(gameIds) {
    if (!gameIds.length) return;

    let cssContent = `x-casino-game-thumb {\n`;
    gameIds.forEach(id => {
        cssContent += `  &[data-id="${id}"],\n`;
    });

    // Remove last comma and close the CSS rule
    cssContent = cssContent.trim().replace(/,$/, "") + ` {\n`;
    cssContent += `    &:after {
          content: 'New';
          position: absolute;
          color: white;
          font-size: 130%;
          font-weight: bold;
          background: #1AAF92;
          top: 7px;
          right: 0;
          transform: translatex(6px);
          border-radius: 5px;
          padding: 2px 5px;
          z-index: 100000;
          font-family: 'Noto Sans Ambassadori' !important;
          pointer-events: none !important;
          background-size: 200% 200%;
  }\n  }\n}`;

    // Append CSS to the document
    const styleElement = document.createElement("style");
    styleElement.textContent = cssContent;
    document.head.appendChild(styleElement);
}

setTimeout(() => {
    fetchNewGameIds();
}, 3000);
