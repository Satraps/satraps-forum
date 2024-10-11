<template>
  <div class="card border scroll-500 margin-bottom">
    <div class="card-body">
      <p class="fs-3" @click="$router.back()">
        <i class="bi bi-arrow-left-circle cursor-pointer"></i>
      </p>

      <div class="container">
        <div class="row">
          <div class="col">
            <h3 class="mb-3 mt-3 text-center">Demo: Mini Satraps Court</h3>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <p class="text-break mt-3">
              Welcome to the mini Satraps Court interface. This interface is designed
              for use in the Satraps forum for ease of access alongside discussions
              at the web3 forum. Currently, the court has no active sessions and the
              below interface is a placeholder. The Court's smart contracts were
              tested during a closed beta from Jan 2024 until March 2024.
            </p>
          </div>
          <div class="col-md-6">
            <p class="text-break mt-3">
              You can find the results of past sessions on the Satraps beta page - links
              to past sessions can be found at the bottom of this page.
              <hr />
              Before you can vote, you must have staked your Senator NFTs for at least 2 weeks at the main Satraps Court page. Please make yourself familiar with the main <a href="https://beta.satraps.io/" target="_blank">Satraps Court Beta</a> in the meantime.
            </p>
          </div>
        </div>
      </div>

      <hr class="my-4" />

      <!-- Voting interface starts here -->
      <div class="voting-section">
        <!-- session title - will be loaded from Smart Contract in the future -->
        <h5 class="text-center mb-4">Current Session:</h5>
        <h4 class="text-center">What areas of DAOs do we need to improve?</h4>

        <!-- session description - will be loaded from Smart Contract in the future -->
        <p class="text-center text-muted mb-4">This voting session aims to identify the most pressing challenges DAOs face, such as governance scalability, participation incentives, and transparency.
        </p>

        <!-- placeholder vote options -->
        <h6 class="text-center mb-4">Vote Options:</h6>
        <div class="d-flex justify-content-center">
            
          <div class="btn-group" role="group" aria-label="Poll options">
            
            <button type="button" class="btn-custom m-1" @click="vote('Implement Quadratic Voting')">
              Scale DAO Actions
            </button>

            <button type="button" class="btn-custom m-1" @click="vote('Enhance Proposal Vetting Process')">
              Incentivize Participation
            </button>

            <button type="button" class="btn-custom m-1" @click="vote('Introduce Delegation Mechanisms')">
              More Transparent DAO Operations
            </button>
          </div>
        </div>

        <!-- disclaimer or information on future updates -->
        <p class="text-center text-muted mt-4">
          Your vote will be recorded on-chain once the official Satraps Court launches. Stay informed about upcoming updates by checking the forum feed, our X profile, or our Discord.
        </p>
      </div>

      <hr class="my-4" />

      <!-- archive previous sessions -->
      <div class="previous-sessions">
        <h4 class="text-center mb-4">Previous Court Sessions</h4>
        <ul class="list-unstyled">
          <li v-for="session in previousSessions" :key="session.id" class="mb-3">
            <div class="d-flex justify-content-between align-items-center">
              <a :href="session.link" class="text-decoration-none">
                <h5 class="mb-0">{{ session.title }}</h5>
              </a>
              <span class="badge bg-secondary">{{ session.date }}</span>
            </div>
            <p class="text-muted mb-1">{{ session.description }}</p>
            <p class="mb-0"><strong>Result:</strong> {{ session.result }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SatrapsCourt',
  data() {
    return {
      previousSessions: [
        {
          id: 1,
          title: 'Your vote on Flare STP.06 and SIP.02 Proposals.',
          description: 'Measuring the sentiment of the Satraps community on Flare STP.06 and SIP.02.',
          date: '2024-01-29',
          result: 'Approved: 528 votes cast in favor of Flare STP.06 and SIP.02.',
          link: 'https://beta.satraps.io/'
        },
        {
          id: 2,
          title: 'Which data feed category should be prioritized as FTSO scales?',
          description: 'Seasion aimed at determining which data feed category should be prioritized as FTSO scales.',
          date: '2024-02-08',
          result: 'More Crypto with 300 votes cast.',
          link: 'https://beta.satraps.io/'
        },
        {
          id: 3,
          title: 'Where should the next Flare meetup take place?',
          description: 'Seasion aimed at determining where should the next Flare meetup take place.',
          date: '2024-02-24',
          result: 'New York with 86 votes cast.',
          link: 'https://beta.satraps.io/'
        }
      ]
    }
  },
  methods: {
    vote(option) {
      alert(`You have cast your vote for: ${option}. Thank you for participating in the Satraps Court.`);
    }
  }
}
</script>

<style scoped>
h3, h4 {
  font-size: 1.75rem;
  font-weight: 600;
}

h5 {
  font-size: 1.1rem;
  font-weight: 600;
  color: #c72f2f;
}

h6 {
  font-size: 1rem;
  font-weight: 600;
  color: #c72f2f;
}

hr {
  border: 0;
  border-top: 1px solid #e0e0e0;
  margin: 30px 0;
}

.voting-section, .previous-sessions {
  margin-top: 30px;
}

.btn-custom {
  background-color: #c72f2f; 
  color: white;
  border: none; 
  border-radius: 10px; 
  padding: 8px 20px;
  font-size: 0.95rem; 
  font-weight: 500;
  transition: background-color 0.3s ease, transform 0.2s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn-custom:hover {
  background-color: #a31c1c; 
  transform: translateY(-2px); 
}
.btn-custom:active {
  background-color: #521616; 
  transform: translateY(0); 
}

.text-muted {
  font-size: 0.9rem;
  color: #6c757d;
}

.badge {
  font-size: 0.8rem;
  font-weight: 500;
}

.margin-bottom {
    margin-bottom: 100px;
  }
</style>