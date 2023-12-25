import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';
import { NodeModulesPolyfillPlugin } from '@esbuild-plugins/node-modules-polyfill';

// https://nuxt.com/docs/api/configuration/nuxt-config 
export default defineNuxtConfig({
  app: {
    head: {
      meta: [
        {
          "name": "viewport",
          "content": "width=device-width, initial-scale=1"
        },
        {
          "charset": "utf-8"
        }
      ],
      link: [
        { // Bootstrap
          rel: "stylesheet",
          href: "	https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        },
        { // Bootstrap icons
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"
        },
        { // Custom
          rel: "stylesheet",
          href: "/css/custom.css"
        }
      ],
      script: [
        {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        }
      ]
    }
  },
  components: false,
  css: [
    'vue-toastification/dist/index.css' 
  ],
  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],
  router: {
    options: {
      hashMode: false
    }
  },
  runtimeConfig: {
    public: {
      activityPointsAddress: "",
      airdropApAddress: "", // chat token claim for APs
      airdropClaimDomainsAddress: "", // chat token claim for domain holders
      blockExplorerBaseUrl: "https://songbird-explorer.flare.network",
      chatTokenAddress: "", // chat token address
      chatTokenImage: "", // chat token image
      chatTokenSymbol: "", // chat token symbol or name
      domainRequiredToPost: true,
      expiryCollections: 1000 * 60 * 60 * 24 * 7, // must be in milliseconds (0 means no expiration)
      expiryUsernames: 1000 * 60 * 60 * 24 * 7, // must be in milliseconds (0 means no expiration)
      favicon: "/img/favicon.png",
      fileUploadEnabled: true, // enable/disable file uploads (enable only if external file storage is used, e.g. IPFS via Spheron)
      fileUploadSizeLimit: 1 * 1024 * 1024, // max file upload size in bytes (1 * 1024 * 1024 = 1 MB)
      fileUploadTokenService: process.env.FILE_UPLOAD_SERVICE || "netlify", // "netlify" or "vercel" (or leave empty for no file uploads)
      getPostsLimit: 30, // number of posts to fetch from Orbis in the getPosts() function
      governanceUrl: "", // governance url (snapshot, Tally, etc.)
      iggyPostAddress: "0xE33F27496A9cE75313f6d1FA2BA95657Fc904387",
      iggyPostMinterAddress: "0x9e9905FA405A5FC7Ee2DEB94CbAc089B4FE6f0Ef",
      iggyPostStatsAddress: "0xE2AfE33f16519e31c6FFE5eEb333A0887a44D2BC",
      ipfsGateway: "https://cloudflare-ipfs.com/ipfs/",
      keysAddress: "", // FriendKeys contract address 
      keysContext: "",
      keysFeatured: ["tempe", "tekr"],
      linkPreviews: process.env.LINK_PREVIEW_SERVICE || "netlify", // "netlify", "vercel", or "microlink" (or leave empty for no link previews)
      lpTokenAddress: "", // liquidity pool token (token to stake in the staking contract)
      lpTokenSymbol: "LP tokens", // LP token symbol
      marketplacePostNftUrl: "https://marketplace.flareocean.io/collection/19/0xe33f27496a9ce75313f6d1fa2ba95657fc904387",
      marketplacePostNftItemUrl: "https://marketplace.flareocean.io/asset/19/0xE33F27496A9cE75313f6d1FA2BA95657Fc904387/", // url (append nft id to it)
      marketplaceNftCollectionBaseUrl: "https://marketplace.flareocean.io/collection/19/", // url (append nft address to it)
      newsletterLink: "",
      nftDefaultRatio: 6000, // default ratio for the NFT price bonding curve
      nftLaunchpadBondingAddress: "", // NFT launchpad with bonding curve contract address
      nftLaunchpadLatestItems: 4, // number of latest NFTs to show in the NFT launchpad
      nftOrbisContext: "", // Orbis context for NFT collection pages
      orbisCategories: [ // use only alphanumeric ASCII characters for slugs! (no spaces, only dash is allowed)
        { "slug": "all", "title": "All posts", "hidden": true }, // not a real tag, just denotes the absence of a tag (always keep it here)
        { "slug": "satraps", "title": "Satraps Court", "hidden": false },
        { "slug": "general", "title": "General discussion", "hidden": false },
        { "slug": "shill", "title": "Shill & discuss projects", "hidden": true },
        { "slug": "nfts-satraps", "title": "NFTs", "hidden": true }, // keep this category for the purpose of the NFT launchpad
        { "slug": "governance", "title": "Governance", "hidden": true },
        { "slug": "food", "title": "Food & recipes", "hidden": true },
        { "slug": "movie", "title": "Movies & Music", "hidden": true },
        { "slug": "music", "title": "Music", "hidden": true },
        { "slug": "random", "title": "Random", "hidden": false },
      ],
      orbisContext: "kjzl6cwe1jw14a064memywn3fhuks5w3m2xfole8vrj202suz4xq8o9yfhso6hf", // production context
      orbisTest: false, // if true, test context will be used instead of the production one
      orbisTestContext: "kjzl6cwe1jw145tfqv2eqv8tiz6puo27meyz4smz40atppuc13tulqca87k35z2", // test context
      previewImage: "/img/cover.jpg",
      previewImageAirdrop: "/img/cover.jpg",
      previewImageNftCollection: "/img/cover.jpg",
      previewImageNftCreate: "/img/cover.jpg",
      previewImageNftLaunchpad: "/img/cover.jpg",
      previewImagePost: "/img/cover.jpg",
      previewImagePostNft: "/img/cover.jpg",
      previewImageProfile: "/img/cover.jpg",
      previewImageStake: "/img/cover.jpg",
      profileMintedPostIdsMax: 36, // max number of minted post ids to show in the profile page
      projectMetadataTitle: "The Satraps Court",
      projectName: "The Satraps Court | Historians of Web3",
      projectDescription: "Forum for The Satraps web3 community",
      projectTwitter: "https://twitter.com/TheSatraps",
      projectUrl: "https://court.satraps.io", // without trailing slash!
      punkMinterAddress: "0x7840735F2f66e9556aD74c6e34EB1035128cA263", // punk domain minter contract address
      punkNumberOfPrices: 5, // number of different prices (based on domain length), usually 1 (price()) or 5 (price1char() - price5char())
      punkTldAddress: "0xeFBE0b46649B7A0F1e1D49CCa98aD9CF6bcFB096", // punk domain TLD address
      randomPostsNumber: 1, // number of random post NFTs to show in the sidebar widget
      rpcCustom: process.env.RPC_CUSTOM || "https://songbird-explorer.flare.network", // Custom RPC URL
      showFeatures: { // show/hide features in sidebars (if you have too many "true", make the sidebar scrollable --> sidebarLeftSticky: false)
        "activityPoints": false, 
        "airdrop": false, 
        "friendKeys": false, 
        "governance": false,
        "newsletter": false, 
        "nftLaunchpad": false, 
        "randomMintedPosts": false, 
        "swap": false, 
        "stake": false, 
        "sendTokens": true, 
        "spotify": false
      }, 
      showRepliesOnHomepage: false, // show replies on the homepage  
      sidebarLeftSticky: true, // make the left sidebar sticky (always visible)
      spotifyPlaylistId: "5y7f2Wxfq49G5KuNQfMPbk", // enter just the ID of the playlist (not the full URL)  
      stakingContractAddress: "", // this is also the stake/gov token address
      stakeTokenSymbol: "", // stake token symbol (governance token symbol)
      supportedChainId: 19,
      swapPriceImpactMaxBps: 1000, // max price impact in bips (1 bps = 0.01%, 1000bps = 10%) for the swap function
      swapRouterAddress: "0x1fbcB9260Ba042DAB33972dF1262D5045890a9E2", // iggy swap router contract address
      tenorApiKey: process.env.TENOR_KEY || "",
      tldName: ".satrap",
      tokenAddress: null, // leave null if it's a native token of the chain
      tokenDecimals: 18,
      tokenSymbol: "SGB"
    }
  },
  vite: {
    build: {
      target: ['es2020'] // fix big integer literals error
    },
    optimizeDeps: {
      esbuildOptions: {
        define: {
          global: 'globalThis'  // fix nuxt3 global
        },
        plugins: [
          NodeGlobalsPolyfillPlugin({
            process: true,  // fix nuxt3 process
            buffer: true
          }),
          NodeModulesPolyfillPlugin()
        ],
        target: "es2020" // fix big integer literals error
      }
    }
  }
})
