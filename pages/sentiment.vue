<template>
    <Head>
      <Title>Sentiment | {{ $config.projectMetadataTitle }}</Title>
      <Meta property="og:title" :content="'Sentiment | ' + $config.projectMetadataTitle" />
    </Head>
  
    <ChatFeed class="mt-1" :chatContext="$config.chat.contexts.sentiment"
    :hideCommentBox="true"
    :showTopicModal="true"
     />
  </template>
  
  <script>
  import ChatFeed from '../components/chat/ChatFeed.vue'
  
  export default {
    name: 'sentiment',
  
    components: {
      ChatFeed,
    },
  }
  </script>
  