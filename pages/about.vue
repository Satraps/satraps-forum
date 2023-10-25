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

      <h3 class="mb-3 mt-3">The Satraps Court</h3>

      <p class="text-break mt-3">
        The Satraps Court is a place where The Satraps web3 community can dicuss about the project, share ideas, and other things.
      </p>

      <h5>Useful links</h5>

      <ul>
        <li><a href="https:satraps.io" target="_blank">The Satraps Main Page</a></li>
        <li><a href="https://github.com/Satraps" target="_blank">The Satraps GitHub</a></li>
        <li><a href="https://discord.gg/4PBswWnCdW" target="_blank">Discord</a></li>
      </ul>

      <h5>Tech stack</h5>

      <p class="text-break mt-3">
        This chat is built on top of various decentralized and open source technologies, such as:
      </p>

      <ul>
        <li><a href="https://ipfs.tech/" target="_blank">IPFS</a></li>
        <li><a href="https://ceramic.network/" target="_blank">Ceramic Network</a></li>
        <li><a href="https://useorbis.com/" target="_blank">Orbis</a></li>
        <li><a href="https://songbird.domains/" target="_blank">Songbird Domains</a></li>
        <li><a href="https://iggy.social/" target="_blank">Iggy Social</a></li>
        <li>... and others.</li>
      </ul>

      <hr />

      <h5>Feedback</h5>

      <p class="text-break mt-3">
        Feel free to post ideas, features suggestions, rants directly on this forum. 
      </p>

    </div>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>