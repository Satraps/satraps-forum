<template>
  <Head>
    <Title>Audits | {{ $config.projectMetadataTitle }}</Title>
    <Meta property="og:title" :content="'Audits | ' + $config.projectMetadataTitle" />
  </Head>

  <ChatFeed
    class="mt-1"
    :chatContext="$config.chat.contexts.audits"
    :hideCommentBox="true"
    :showTopicModal="true"
  />
</template>

<script>
import ChatFeed from '../components/chat/ChatFeed.vue'

export default {
  name: 'Audits',

  components: {
    ChatFeed,
  },
}
</script>
