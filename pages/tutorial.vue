<template>
    <Head>
      <Title>Tutorial | {{ $config.projectMetadataTitle }}</Title>
      <Meta property="og:title" :content="'Tutorial | ' + $config.projectMetadataTitle" />
    </Head>
  
    <div class="card border scroll-500 margin-bottom">
      <div class="card-body">
        <p class="fs-3" @click="$router.back()">
          <i class="bi bi-arrow-left-circle cursor-pointer"></i>
        </p>
  
        <h3 class="mb-3 mt-3 text-center">How to Use TheSatraps Forum</h3>
  
        <p class="text-break mt-3">
          The Satraps Forum is a place where the community can come together to discuss web3 ethics, ground-up governance, and more. Below you'll find a guide on how to make the most of this platform.
        </p>
  
        <h5 class="mt-4 mb-3">Key Features</h5>
        <ul class="list-unstyled">
          <li><i class="bi bi-check-circle-fill text-success"></i> <strong>Topic Discussions:</strong> Dive into discussions on various topics related to Songbird/Flare protocols, decentralization, and web3 ethics.</li>
          <li><i class="bi bi-check-circle-fill text-success"></i> <strong>Mini Satraps Court:</strong> Participate in Court sessions to voice your opinion. Help guide and shape groud-up governance for our ecosystem.</li>
          <li><i class="bi bi-check-circle-fill text-success"></i> <strong>User Profiles:</strong> Create and customize your forum profile, making it easier to connect with others.</li>
          <li><i class="bi bi-check-circle-fill text-success"></i> <strong>Send Tokens:</strong> Send listed tokens to other users.</li>
          <li><i class="bi bi-check-circle-fill text-success"></i> <strong>Find Users:</strong> Search for and find other .satrap citizens.</li>
          <li><i class="bi bi-check-circle-fill text-success"></i> <strong>About:</strong> Learn about the teams and technologies that made the Satraps Forum possible.</li>
        </ul>
  
        <h5 class="mt-4 mb-3">How to Get Started</h5>
        <ol class="list-group list-group-numbered">
          <li class="list-group-item">
            <strong>Become a citizen:</strong> If you're new, head over to the <a href="https://id.satraps.io/" target="_blank">Satraps ID</a> page to buy your .satrap ID and create your profile. You can also buy a .satrap ID inside the forum on the right sidebar. 
          </li>
          <li class="list-group-item">
            <strong>Explore Topics:</strong> Once you have a .satrap domain, connect to the forum with your wallet that holds the .satrap domain. Then browse through categories and threads on the left sidebar to find discussions that interest you.
          </li>
          <li class="list-group-item">
            <strong>Join the Conversation:</strong> Don't hesitate to jump into conversations. You can create new posts, comment on others, and share insights.
          </li>
          <li class="list-group-item">
            <strong>Cast Your Vote:</strong> Make your voice heard by voting on Court proposals when they are available by using the Mini Satraps Court.
          </li>
          <li class="list-group-item">
            <strong>Give Feedback:</strong> If you have any questions, concerns, or feedback, reach out to the forum mods in the General Discussions category threads.
          </li>
        </ol>
  
        <hr class="my-4" />

        <h5 class="mt-4 mb-3 text-center">Helpful Resources</h5>
        <ul class="list-unstyled">
          <li><i class="bi bi-house"></i> <a href="https://satraps.io/" target="_blank">Satraps Main Page</a> - Learn more about the overall Satraps project.</li>
          <li><i class="bi bi-file-person"></i> <a href="https://id.satraps.io/" target="_blank">Satraps ID</a> - Buy a .satrap ID and manage your profile. (You can also do this here in the forum)</li>
          <li><i class="bi bi-collection"></i> <a href="https://info.satraps.io/" target="_blank">The Satraps Collection Docs</a> - Learn more about The Satraps Collection.</li>
          <li><i class="bi bi-box-arrow-up-right"></i> <a href="https://tally.so/r/n9BLjp/" target="_blank">General Ethics Complaint Form</a> - Report a complaint or blow the whisle about a potential bad actor in the ecosystem.</li>
          <li><i class="bi bi-box-arrow-up-right"></i> <a href="https://tally.so/r/3xdYgk/" target="_blank">Discord Server Invite Form</a> - Request to join the Discord server.</li>
          <li><i class="bi bi-box-arrow-up-right"></i> <a href="https://tally.so/r/nGzNpZ/" target="_blank">Satraps Audit Form</a> - Submit a request to have the Senators audit your project.</li>
          <li><i class="bi bi-box-arrow-up-right"></i> <a href="https://tally.so/r/nr6NxL/" target="_blank">Satraps Sentiment Request Form</a> - Submit a request to have the Sentiment Committee review your project for a community-wide sentiment poll.</li>
        </ul>

        <hr class="my-4" />
        
        <h5 class="mt-4 mb-3 text-center">Builders</h5>
        <p >This forum is the result of a long standing partnership between The Satraps Collection and Punk Domains. It leverages decentralized and open-source technologies developed by the Punk Domains, Iggy Social, and other widely known web3 projects. For more details visit the <a href="/about" target="_blank">about</a> page.</p>
        <!-- <ul>
          <li><a href="https://arweave.org/" target="_blank">Arweave</a> - Permanent data storage.</li>
          <li><a href="https://punk.domains/" target="_blank">Punk Domains</a> - Decentralized domain names.</li>
          <li><a href="https://iggy.social/" target="_blank">Iggy Social</a> - Decentralized social networking.</li>
          <li>... and others.</li>
        </ul> -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'tutorial',
  }
  </script>
  
  <style scoped>

  h3 {
    font-size: 1.75rem;
    font-weight: 600;
    color: #c0d1e2;
  }
  
  p {
    font-size: 1.1rem;
    color: #9bacbd;
  }
  
  ul, ol {
    margin-left: 10px;
  }
  
  li {
    font-size: 1.05rem;
    margin-bottom: 10px;
  }
  
  .list-group-item {
    background-color: #002244;
    border-radius: 5px;
    margin-bottom: 10px;
  }
  
  a:hover {
    text-decoration: underline;
  }
  
  .list-group-item:hover {
    background-color: #03334b;
  }

  .margin-bottom {
    margin-bottom: 100px;
  }
  </style>
  