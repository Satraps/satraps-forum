<template>
  <Head>
    <Title>About | {{ $config.projectMetadataTitle }}</Title>
    <Meta property="og:title" :content="'About | ' + $config.projectMetadataTitle" />
  </Head>

  <div class="card border scroll-500">
    <div class="card-body">
      <p class="fs-3" @click="$router.back()">
        <i class="bi bi-arrow-left-circle cursor-pointer"></i>
      </p>

      <h3 class="mb-3 mt-3">Satraps forum</h3>

      <p class="text-break mt-3">
        A place where Satraps community can discuss anything about Satraps and web3 ethics.
      </p>

      <h5>Useful links</h5>

      <ul>
        <li><a href="https://satraps.io/" target="_blank">Satraps Main Page</a></li>
        <li><a href="https://id.satraps.io/" target="_blank">Satraps IDs</a></li>
      </ul>

      <h5>Tech stack</h5>

      <p class="text-break mt-3">
        This forum is built on top of various decentralized and open source technologies, such as:
      </p>

      <ul>
        <li><a href="https://arweave.org/" target="_blank">Arweave</a></li>
        <li><a href="https://punk.domains/" target="_blank">Punk Domains</a></li>
        <li><a href="https://iggy.social/" target="_blank">Iggy Social</a></li>
        <li>... and others.</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
}
</script>
