
    function triggerWidget() {
  if (!window.altenarWSDK) {
    console.error("Altenar WSDK is not loaded.");
    return;
  }

  // Initialize Altenar WSDK
  window.altenarWSDK.init({
    integration: 'ambassadoribet',
    culture: 'ka-GE',
    oddformat: 0
  });

  // Enable Memory Router
  window.altenarWSDK.addSportsBook({
    props: {
      routerType: 'memory',
      onRouteChange: (data) => {
        const url = new URL(window.location.href);
        url.search = new URLSearchParams(data).toString();
        window.history.pushState(null, '', url);
      },
    },
    container: document.getElementById('root'),
  });

  // Add the WEventSearch widget
  window.altenarWSDK.addWidget({
    widget: 'WEventSearch',
    props: {
    clearOnSelect: true,
    onEventSelect: (event) => {
      console.log("Event Selected:", event);
      navigateToEvent(event);
    },
    onChampionshipSelect: (championship) => {
      console.log("Championship Selected:", championship);
      navigateToChampionship(championship);
    },
    showBookedLiveIndicator: true,
    showFavouriteEventsIndicator: false,
    showLiveIndicator: true,
    iconOverride: {
      iso: {},
      sport: {},
      category: {
        "495": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/ad6c1639-9585-47f4-9ff0-6c981b06f1ea/A_black_image.jpg",
        "511": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/71b5c0ad-bb9d-43e1-8979-563642b8cd1f/Flag_of_Northern_Ireland_1953%E2%80%931972.svg.png",
        "542": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/535e7846-e985-446b-acef-d645b0eb1fb7/Atp.svg",
        "547": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/8cc1403b-c9b2-4540-a730-4dcdaad38a19/111_Tennis%20Ball%20Set.svg",
        "553": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/ab05336a-cbef-4153-a593-bf9576055878/WTA.png",
        "592": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/5ba8411f-285f-45fa-9aa9-39af1b5be54e/ITF.png",
        "607": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/5ba8411f-285f-45fa-9aa9-39af1b5be54e/ITF.png",
        "610": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/ad6c1639-9585-47f4-9ff0-6c981b06f1ea/A_black_image.jpg",
        "635": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/ad6c1639-9585-47f4-9ff0-6c981b06f1ea/A_black_image.jpg",
        "656": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/ad6c1639-9585-47f4-9ff0-6c981b06f1ea/A_black_image.jpg",
        "674": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/29acd7d2-39bb-451c-a012-baa43b511fd3/UFC.png",
        "679": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/ad6c1639-9585-47f4-9ff0-6c981b06f1ea/A_black_image.jpg",
        "728": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/1f6bd86e-43c6-4666-b59f-16d70a3b245c/Belator%20MMA.png",
        "742": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/c846cea7-5c21-47c3-93ac-c53c8dc458f9/AAEAAQAAAAAAAAAmAAAAJDhiM2VjNWVkLTdhNzMtNGRjZC04NTg0LWY2ODQzY2JmYmE4YQ.svg",
        "749": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/9e28ed8a-9ce0-42a6-982c-d9555fcb8a00/Zanzibar%20Flag.png",
        "839": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/56d4462e-a6b2-4fa7-9fbe-ca15343d7e71/WTA%20Challenger.png",
        "909": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/402c3655-21a6-4b68-a3c0-a6205ab8eb2b/KSW.png",
        "1244": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/75d03211-ad4f-4b78-86d4-285192f39326/Rugby%20Union.png",
        "1245": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/544b4019-b7f1-4997-8847-297b3fd41031/Rugby%20League.png",
        "1248": "https://upload.wikimedia.org/wikipedia/commons/3/33/F1.svg",
        "1460": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/60cfc4c2-286e-44f3-9969-4bada8ae11ee/EFC%20MMA.png",
        "1545": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/6341dbc6-bce0-4311-9f66-4f276a2a6145/Untitled-2-04.svg",
        "1555": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/9d1ae406-226f-4dfb-8209-e7cf37b83684/Rizin.svg",
        "1571": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/a7755fbe-379a-4407-a7b8-294d21e381f5/valhalla_cup_logo.svg",
        "1595": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/6b4f7cc8-a692-4e2b-865f-51577b943831/gtsportleague.svg",
        "1728": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/ad1e794e-65c7-4c07-98b4-91402c203ff1/Untitled-2-02.svg",
        "1729": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/28d11cd6-82df-4009-8f94-e78d5446eea5/Untitled-2-03.svg",
        "1882": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/a5a16a38-0541-4f50-aaef-750911f7f395/UTR.png",
        "1883": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/a5a16a38-0541-4f50-aaef-750911f7f395/UTR.png",
        "1949": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/e66e964d-c9a5-47be-8b32-3a42bd4f0679/e-rivals%20logo.png",
        "2020": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/3adf6f62-ba47-4fe9-abdf-8f5d130c7e2e/EAL-Logo.png",
        "2086": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/c60bfb95-91fc-4e9d-9213-1da713c5f311/h2hggl-01%20-%201.svg",
        "2090": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/64bec639-9b86-4599-bb0c-eb69c9f3fe99/72be7e_6447b0f9981c42bea5799d528af9ca76~mv2.png",
        "2091": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/36647366-6ac8-4200-bde5-6cdc49e0078e/600px-CyberLive!Arena_full_lightmode-01.svg",
        "2096": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/36647366-6ac8-4200-bde5-6cdc49e0078e/600px-CyberLive!Arena_full_lightmode-01.svg",
        "2130": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/a7755fbe-379a-4407-a7b8-294d21e381f5/valhalla_cup_logo.svg",
        "52545": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/d09a95ec-58f5-4452-8cb5-aa8904e4788e/Cage%20Warriors.png"
      },
      championship: {
        "1594": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/36647366-6ac8-4200-bde5-6cdc49e0078e/600px-CyberLive!Arena_full_lightmode-01.svg",
        "1750": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/64bec639-9b86-4599-bb0c-eb69c9f3fe99/72be7e_6447b0f9981c42bea5799d528af9ca76~mv2.png",
        "2085": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/c60bfb95-91fc-4e9d-9213-1da713c5f311/h2hggl-01%20-%201.svg",
        "2935": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/7cda3f9d-9886-472c-abdf-490b68df7589/FA%20CUP.png",
        "2936": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/2a9b4214-5303-47ba-9c95-c185c40a477b/premier%20league-01.svg",
        "2941": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/be88efaa-5da8-45ea-b91f-413fd204cb02/%E1%83%9A%E1%83%90%E1%83%9A%E1%83%98%E1%83%92%E1%83%90.png",
        "2942": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/ea4d86fd-9070-48a6-8228-c0e8424be853/%E1%83%A1%E1%83%94%E1%83%A0%E1%83%98%E1%83%90%20%E1%83%90.svg",
        "2943": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/70b307e5-e8be-41ce-8936-8d48456fc93d/%E1%83%9A%E1%83%98%E1%83%92%E1%83%90%201%20%E1%83%A1%E1%83%90%E1%83%A4%E1%83%A0%E1%83%90%E1%83%9C%E1%83%92%E1%83%94%E1%83%97%E1%83%98.svg",
        "2950": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/abff205a-e663-4877-ab2a-8fac558497c3/%E1%83%91%E1%83%A3%E1%83%9C%E1%83%93%E1%83%94%E1%83%A1%E1%83%9A%E1%83%98%E1%83%92%E1%83%90.svg",
        "2973": "https://sb2wsdk-altenar2.biahosted.com/demo.html?integration=ambassadoribet#/overview",
        "2980": "https://images.takeshape.io/5da2b4d5-59f6-412a-82c3-f6a272b532be/dev/3b10dc64-0e3b-4844-bc37-2e3a2146fcb8/nba-logo.svg",
        "2995": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/86d1d108-dec0-4964-a305-377793b88353/Euroleague%20Basketball.svg",
        "3013": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/3e275412-40bd-4e18-bb2c-1fdd9affe575/AO.svg",
        "3031": "https://images.takeshape.io/5da2b4d5-59f6-412a-82c3-f6a272b532be/dev/0c4b32b2-a36f-4b84-85b6-2fd58562f3f4/UEFA%20Euro%202024%20Germany.svg",
        "3036": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/3e275412-40bd-4e18-bb2c-1fdd9affe575/AO.svg",
        "3065": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/4b07af2c-0c12-4875-8913-e2fa8875a06d/%E1%83%94%E1%83%A0%E1%83%94%E1%83%93%E1%83%98%E1%83%95%E1%83%98%E1%83%96%E1%83%98%E1%83%9D%E1%83%9C%E1%83%98.png",
        "3102": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/e32e472d-c6fd-4e25-892b-dd0a76d7a24c/coppa%20italia%20-%20Italy%20cup.png",
        "3111": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/9973dd0d-d2b4-4489-b15b-e3763ce776dd/2023-spain-laliga-2.png",
        "3112": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/3b2e400b-5823-495e-82a4-e88176f2c896/DFB%20POKAL%20-%20Germany%20football%20cup.png",
        "3152": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/cc9db10c-2496-46ed-acb6-d9b22c3fb6b8/Portugese%20%20championship-01.svg",
        "3232": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/b12f9484-8b4b-429d-ba4d-a9c9afc7bab3/05_NHL_Shield.svg.png",
        "3264": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/dc5a2aed-b5f1-4906-90a0-0c18d03b6093/Handball%20Champions%20League.jpg",
        "3287": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/c8e96f33-0058-4e7d-847a-31b59b4155d1/logo_challengerseries_white-4%20-%20Table%20tennis%20challenge%20series.png",
        "3364": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/aa25ff94-c466-4012-969d-4eb1e36a82d4/Spain%20Super%20Cup.png",
        "3868": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/eba74c0c-3cb8-43fe-bd4d-6011bf798d93/AFC_Champions_League_Elite_logo.svg.png",
        "4044": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/646679da-3abf-479c-b60c-790ad7fecb05/Euro%20Futsal.svg",
        "4053": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/88db42f8-ae2e-4611-985d-682a13de5d4d/erovnuli-01.svg",
        "4393": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/31f177c3-774c-4e81-af1c-079fccb88771/UEFA%20youth%20league.svg",
        "4979": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/5c8633d6-055d-4f72-b28d-c1a0f5cf304b/Women%20Euro.svg",
        "5087": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/449f1e93-c354-4484-9d3a-500b5130b2dc/Davis%20Cup.png",
        "5242": "https://images.takeshape.io/5da2b4d5-59f6-412a-82c3-f6a272b532be/dev/1e3d92a4-79c5-48e5-b201-dd84017ad1dc/Asset%201.svg",
        "5363": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/f4526e20-8442-4fa8-83ae-9719ce14008f/TTCup.png",
        "16808": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/bf6d87be-be30-492e-9056-538564750b61/Champions%20League.svg",
        "16809": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/d74f9581-cdca-439b-b8b9-41561b321807/%E1%83%94%E1%83%95%E1%83%A0%E1%83%9D%E1%83%9E%E1%83%90%20%E1%83%9A%E1%83%98%E1%83%92%E1%83%90.svg",
        "17254": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/ce15c52b-a03a-43ea-a31a-13fc14030e64/Logo%20Euro%20u19.svg",
        "17271": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/037d62fd-4a9d-4dc0-a415-47b16aadfaab/Women%20Champions%20League.svg",
        "17424": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/8792a75d-3419-44e8-ad49-1faf0c1ff296/Asian%20Championship.png",
        "18264": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/70311580-f4a2-4640-bf3b-15002f31700e/World%20Boxing%20Association.png",
        "18388": "https://images.takeshape.io/5da2b4d5-59f6-412a-82c3-f6a272b532be/dev/6479dab6-edde-42fa-a061-424b53c15200/afrika%20Shecvlili.svg",
        "19414": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/f9147ed9-c5d7-48a3-b704-5e5460153a25/World%20Championship%20Europe.png",
        "28427": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/a2063f51-8003-44d1-a86a-5ddab086740e/CONCACAF%20NATIONS%20LEAGUE.png",
        "31608": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/307609f0-4891-488d-a824-31c73a211757/Conference.svga%20League.svg",
        "33007": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/e575a820-bea8-4fbe-996e-8ee6c2a1f2f5/wu19.svg",
        "34266": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/a879fc46-34e5-430d-85db-912a4fd6fcee/2024_ASEAN_United_FC_logo.svg.png",
        "35507": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/b62100e3-652e-4821-a2ae-bffddbb8a16d/TT%20Elite%20Series.png",
        "38397": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/2d4592ab-5f85-460b-aef3-89338b71c10d/UEFA%20Regions%20Cup.svg",
        "39481": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/04c21bfa-879e-4523-ae62-f7752facb9ea/Tennis%20United%20Cup%20Logo.png",
        "39667": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/202ce52f-d156-4b83-b068-55105bd997c2/Gulf%20Cup.png",
        "43503": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/c8782d54-c042-401a-b5d3-ca1c1168acb2/Women%20Nations%20League.svg",
        "49055": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/190c6fb8-9ba1-4ddd-b2be-53ac8deca619/Intercontinental%20Cup.png",
        "49402": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/36647366-6ac8-4200-bde5-6cdc49e0078e/600px-CyberLive!Arena_full_lightmode-01.svg",
        "49403": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/36647366-6ac8-4200-bde5-6cdc49e0078e/600px-CyberLive!Arena_full_lightmode-01.svg",
        "49404": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/36647366-6ac8-4200-bde5-6cdc49e0078e/600px-CyberLive!Arena_full_lightmode-01.svg",
        "50905": "https://images.takeshape.io/f2b70d9b-56f9-4d2d-be98-874fcbc02a46/dev/1ebc4727-2a1d-4b5f-bad2-06ce8fd8fcf8/PFL%20Logo.png"
      }
    }
  },
    container: document.getElementById('search-widget')
  });
}

function getCurrentSportsbookUrl() {
  const currentUrl = window.location.href;
  const match = currentUrl.match(/(https:\/\/www\.ambassadoribet\.com\/[^\/]+\/sportsbook)/);
  return match ? match[1] : currentUrl;
}

function navigateToEvent(event) {
  if (!window.altenarWSDK) {
    console.error("Altenar WSDK is not initialized.");
    return;
  }

  // Navigate within the sportsbook section
  window.altenarWSDK.set({
    page: 'event',
    eventId: event.id,
    sportId: event.sportId,
    categoryIds: [event.catId],
    championshipIds: [event.champId]
  });

  // Append event to current sportsbook URL
  const newUrl = `${getCurrentSportsbookUrl()}/event/${event.id}`;
  window.history.pushState(null, '', newUrl);

  // Close the modal after selecting an event
  document.querySelector('[data-modal-sport-search]').close();
}

function navigateToChampionship(championship) {
  if (!championship || !championship.championshipIds) {
    console.error("Invalid championship data:", championship);
    return;
  }

  // Navigate within the sportsbook section
  window.altenarWSDK.set({
    page: 'championship',
    championshipIds: championship.championshipIds,
    sportTypeId: championship.sportTypeId,
    categories: championship.categories
  });

  // Append championship to current sportsbook URL
  const newUrl = `${getCurrentSportsbookUrl()}/championship/${championship.championshipIds}`;
  window.history.pushState(null, '', newUrl);

  // Close the modal after selecting a championship
  document.querySelector('[data-modal-sport-search]').close();
}
