<template>
  <ChatFeed class="mt-1" :hideCommentBox="true" :chatContext="$config.chat.contexts.general" :showTopicModal="true" />
</template>

<script>
import { useEthers } from '~/store/ethers'
import ChatFeed from '../components/chat/ChatFeed.vue'

export default {
  name: 'index',

  components: {
    ChatFeed,
  },

  setup() {
    const { address, chainId } = useEthers()

    return { address, chainId }
  },
}
</script>
