<script setup lang="ts">
import { ref } from 'vue'
defineProps<{
  msg: string
}>()

import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()


const message = ref('')

function say(message: string) {
  //alert(message);
  router.push('/language')
}
</script>

<template>
  <div class="greetings demo">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      {{$t('message.welcome_message')}}
    </h3>
    <p>{{$t('message.insert_code')}} : {{ message }}</p>
    <input v-model="message" :placeholder="$t('message.code')" />
  </div>

  <button style="color:black" class="button" @click="say(message)">{{$t('message.confirm_code')}}</button>

</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
