async function fetchProgressiveJackpot() {
  try {
      const response = await fetch('https://ambassadoribetge-api-prod-bgsp.egt-ong.com/api/jackpot/stats');
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json();
      
      if (!data.jackpotInstancesStats?.instanceStats) {
          console.warn("No instance stats found");
          return;
      }

      // Game mapping - name to data-id
      const games = {
          "Versailles Gold": "versailles-gold-jp-egt",
          "Burning Hot": "burning-hot-jp-egt",
          "Rise of Ra": "rise-of-ra-jp-egt",
          "40 Super Hot": "40-super-hot-jp-egt",
          "20 Super Hot": "20-super-hot-jp-egt"
      };
      
      // Create common CSS for all games
      let baseStyles = `
          x-casino-game-thumb[data-id$="-jp-egt"]::before {
              position: absolute;
              bottom: 10px;
              right: 10px;
              font-size: var(--font-size-body);
              background: rgb(7 20 104 / 92%) url("https://images.takeshape.io/5da2b4d5-59f6-412a-82c3-f6a272b532be/dev/54d869aa-cdfa-4227-a3e7-f52b48a5dc96/Progressive.svg") no-repeat 5px center;
              padding: 5px 5px 5px 25px;
              border-radius: 7px;
              z-index: 2;
              pointer-events: none;
              border: solid 2px #167fcf;
          }
      `;
      
      // Generate individual game styles
      let gameStyles = '';
      for (const instance of data.jackpotInstancesStats.instanceStats) {
          const gameId = games[instance.instanceName];
          if (!gameId) continue;
          
          const level1 = instance.levelStats?.find(level => level.levelId === 1);
          if (!level1) continue;
          
          const gelValue = level1.currentValue?.find(val => val.key === 'GEL');
          if (!gelValue) continue;
          
          const formattedValue = new Intl.NumberFormat('en-US').format(Math.round(gelValue.value / 100));
          gameStyles += `
              x-casino-game-thumb[data-id="${gameId}"]::before {
                  content: "${formattedValue}₾";
              }
          `;
      }
      
      // Apply styles
      const styleElement = document.getElementById("progressive-jackpot-style") || document.createElement("style");
      styleElement.id = "progressive-jackpot-style";
      styleElement.textContent = baseStyles + gameStyles;
      
      if (!styleElement.parentNode) {
          document.head.appendChild(styleElement);
      }
      
  } catch (error) {
      console.error('Error fetching jackpot stats:', error);
  }
}

setTimeout(fetchProgressiveJackpot, 5000);
