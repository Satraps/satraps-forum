<template>
  <Head>
    <Title>Random | {{ $config.projectMetadataTitle }}</Title>
    <Meta property="og:title" :content="'Random | ' + $config.projectMetadataTitle" />
  </Head>

  <ChatFeed class="mt-1" :chatContext="$config.chat.contexts.random" />
</template>

<script>
import ChatFeed from '../components/chat/ChatFeed.vue'

export default {
  name: 'random',

  components: {
    ChatFeed,
  },
}
</script>
