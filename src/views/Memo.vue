<template>
  <div>
    <p>Title: {{ memo.title }}</p>  
    <p>Body: {{ memo.body }}</p>
    <router-link to="/memos">Back</router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex' 

export default {
  computed: {
    ...mapState(['memos']), 
    memo() { 
      return this.memos.find(memoId => memoId.id === this.$route.params.id) || {}  
    }
  }
}
</script>