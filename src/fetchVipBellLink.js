async function fetchVipBellLink() {
  const apiUrl =
    "https://ambassadoribetge-api-prod-bgsp.egt-ong.com/api/jackpot/stats";
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    // Check if instanceStats exists
    if (
      data.jackpotInstancesStats &&
      data.jackpotInstancesStats.instanceStats
    ) {
      const instances = data.jackpotInstancesStats.instanceStats;

      // Find the "High Cash" instance
      const vipBellLinkInstance = instances.find(
        (instance) => instance.instanceName === "VIP Bell Link"
      );
      if (vipBellLinkInstance) {
        const level1Stats = vipBellLinkInstance.levelStats.find(
          (level) => level.levelId === 1
        );
        if (level1Stats) {
          const currentValueObj = level1Stats.currentValue.find(
            (val) => val.key === "GEL"
          );
          if (currentValueObj) {
            let currentValue = Math.round(currentValueObj.value / 100);
            currentValue = `"${new Intl.NumberFormat("en-US").format(
              currentValue
            )}₾"`; // Add commas

            // Inject dynamic CSS into the document
            const style = document.createElement("style");
            style.innerHTML = `
                          x-casino-game-thumb[data-id="vip-40-lucky-king-bell-link"],
                          x-casino-game-thumb[data-id="vip-40-super-fruits-bell-link"],
                          x-casino-game-thumb[data-id="vip-40-burning-hot-bell-link"],
                          x-casino-game-thumb[data-id="vip-40-zodiac-wheel-bell-link"],
                          x-casino-game-thumb[data-id="vip-flaming-hot-extreme-bell-link"],
                          x-casino-game-thumb[data-id="vip-40-lucky-king-extreme-bell-link"],
                          x-casino-game-thumb[data-id="vip-vampire-night-bell-link"],
                          x-casino-game-thumb[data-id="vip-shining-crown-bell-link"],
                          x-casino-game-thumb[data-id="vip-burning-hot-bell-link"],
                          x-casino-game-thumb[data-id="vip-20-super-hot-bell-link"],
                          x-casino-game-thumb[data-id="vip-zodiac-wheel-bell-link"],
                          x-casino-game-thumb[data-id="vip-flaming-hot-bell-link"],
                          x-casino-game-thumb[data-id="vip-20-super-fruits-bell-link"],
                          x-casino-game-thumb[data-id="vip-5-dazzling-hot-bell-link"],
                          x-casino-game-thumb[data-id="vip-40-super-hot-bell-link"],
                          x-casino-game-thumb[data-id="vip-40-shining-crown-bell-link"] {
                              &::before {
                                  content: ${currentValue};
                                      position: absolute;
                                      bottom: 10px;
                                      right: 10px;
                                      font-size: var(--font-size-body);
                                      background: rgb(70 7 104 / 92%) url("https://www.ambassadoribet.com/_internal/ts-images/5da2b4d5-59f6-412a-82c3-f6a272b532be/dev/8228a998-a96c-4939-bedc-51cad1b895d5/vip-bell-link.svg") no-repeat 5px center;
                                      padding: 5px 5px 5px 25px;
                                      border-radius: 7px;
                                      z-index: 2;
                                      pointer-events: none;
                                      border: solid 2px #cf167d;
                              }
                          }
                      `;

            // Remove old styles if they exist
            const existingStyle = document.getElementById(
              "vip-bell-link-style"
            );
            if (existingStyle) {
              existingStyle.remove();
            }

            // Add new styles
            style.id = "vip-bell-link-style";
            document.head.appendChild(style);
          } else {
            console.warn("currentValue for GEL not found.");
          }
        } else {
          console.warn("Level 1 stats not found.");
        }
      } else {
        console.warn("High Cash instance not found.");
      }
    } else {
      console.warn("instanceStats not found in response.");
    }
  } catch (error) {
    console.error("Error fetching jackpot stats:", error);
  }
}

// Call the function immediately and every 3.5 seconds
setTimeout(() => {
  fetchVipBellLink();
}, 5600);
