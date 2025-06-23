let rewardTimeout;
let openedBoxIds = []; 

async function fetchActiveUserBoxes() {
  const authData = extractAuthDataFromCookie();
  if (!authData) {
    throw new Error("Unable to retrieve user data.");
  }

  const query = `
    query UserBoxConnection($userId: ID) {
      userBoxConnection(userId: $userId, status: ACTIVE, last: 5) {
        edges {
          node {
            userBoxId
            status
            box {
              name
              type
              description
            }
          }
        }
      }
    }
  `;
  const data = await fetchGraphQL(query, {
    userId: authData.userId,
  });
  return data.data.userBoxConnection.edges
    .map((edge) => edge.node)
    .filter((box) => box.status === "ACTIVE")
    .filter((box) => ["LOOT_BOX", "MYSTERY_BOX"].includes(box.box.type))
    .filter((box) => !openedBoxIds.includes(box.userBoxId)); 
}

async function openBox(userBoxId) {
  const mutation = `
    mutation OpenUserBox($input: OpenUserBoxInput!) {
      openUserBox(input: $input) {
        userBox {
          reward {
            action {
              ... on GiveBonusAction {
                bonus {
                  name
                  description
                  contentId
                }
              }
              ... on GiveAndActivateBonusAction {
                bonus {
                  name
                  description
                  contentId
                }
              }
              ... on GiveBoxAction {
                box {
                  name
                  description
                }
              }
              ... on ActivateDepositBonusAction {
                bonus {
                  name
                  description
                  contentId
                }
              }
              ... on GiveLoyaltyPointsAction {
                amount
              }
            }
          }
        }
      }
    }
  `;
  const data = await fetchGraphQL(mutation, { input: { userBoxId } });
  return data.data.openUserBox.userBox.reward.action.map((action) => {
    if (action.bonus) {
      return {
        type: "BONUS",
        name: action.bonus.name,
        description: action.bonus.description,
        contentId: action.bonus.contentId,
      };
    } else if (action.box) {
      return {
        type: "BOX",
        name: action.box.name,
        description: action.box.description,
      };
    } else if (action.amount) {
      return {
        type: "LOYALTY_POINTS",
        name: "Bat Coin",
        description: `${action.amount} <span class="loyalty-points">Bat Coin</span>`,
        amount: action.amount,
      };
    }
  });
}

async function initialize() {
  clearRewards();
  const activeBoxes = await fetchActiveUserBoxes();
  const boxesContainer = document.getElementById("boxes");
  boxesContainer.innerHTML = "";

  if (activeBoxes.length === 0) {
    const noBoxesMessage = document.createElement("div");
    noBoxesMessage.className = "no-active-boxes-message";
    noBoxesMessage.innerText = "";
    noBoxesMessage.style.color = "#fff";
    noBoxesMessage.style.fontSize = "1rem";
    noBoxesMessage.style.textAlign = "center";
    noBoxesMessage.style.marginTop = "20px";
    boxesContainer.appendChild(noBoxesMessage);
    return;
  }

  for (const box of activeBoxes) {
    const boxElement = document.createElement("div");
    boxElement.className = `box ${getBoxTypeClass(box.box.type)}`;
    boxElement.innerHTML = `
      <h3>${box.box.name}</h3>
      <p>${box.box.description}</p>
      <button class="button reward-button-title" onclick="handleOpenBox('${box.userBoxId}', this)"></button>
    `;
    boxesContainer.appendChild(boxElement);
  }
}

function getBoxTypeClass(type) {
  switch (type) {
    case "LOOT_BOX":
      return "loot-box";
    case "MYSTERY_BOX":
      return "mystery-box";
    case "WHEEL_OF_FORTUNE":
      return "wheel-of-fortune";
    default:
      return "";
  }
}

async function handleOpenBox(userBoxId, button) {
  button.disabled = true;
  button.innerText = "......";
  const rewards = await openBox(userBoxId);
  openedBoxIds.push(userBoxId); 
  displayRewards(rewards);
  button.closest(".box").remove();
}

function displayRewards(rewards) {
  clearRewards();
  const rewardsContainer = document.getElementById("rewards");
  for (const reward of rewards) {
    const rewardElement = document.createElement("div");
    rewardElement.className = "reward-item";
    if (reward.type === "LOYALTY_POINTS") {
      rewardElement.innerHTML = `
        <p class="reward-title">${reward.description}</p>
        <div style="background: var(--${reward.name.replace(/\s/g, '-').toLowerCase()})" class="reward-image-id"></div>
      `;
    } else {
      rewardElement.innerHTML = `
        <p class="reward-title">${reward.name}</p>
        <strong>${reward.description}</strong>
        <div style="background: var(--${reward.contentId})" class="reward-image-id"></div>
      `;
    }
    rewardsContainer.appendChild(rewardElement);
  }
  rewardTimeout = setTimeout(clearRewards, 7000);
}

function clearRewards() {
  clearTimeout(rewardTimeout);
  document.getElementById("rewards").innerHTML = "";
}

function clearBoxes() {
  const boxesElement = document.getElementById("boxes");
  if (boxesElement) {
    boxesElement.innerHTML = "";
  }
}
