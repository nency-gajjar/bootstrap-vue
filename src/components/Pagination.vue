<template>
  <div id="app" class="jumbotron container">
    <span v-html="title">{{title}}</span>
    <div class="row">
      <div class="col-md-12">
        <li v-for="post in posts" :key="post.id">
          {{ post.id }} : {{ post.title }}
        </li>   
      </div>
    </div>
    <br>
    <b-pagination size="md" :total-rows="100" v-model="currentPage" :per-page="10" @input="getPostData(currentPage)">
    </b-pagination>
    <hr>
    <div>currentPage: {{currentPage}}</div>
  </div>    
</template>
<script>
//Import axios for REST API calls
import axios from 'axios'
export default {
  name: 'app',
  data () {
    return {
      title: '<b>Pagination</b>',
      currentPage: 1,
      limit: 10,
      posts: []
    }
  },
  methods: {
    // Fetches posts when the component is created.
    getPostData (currentPage) {
      axios.get('http://jsonplaceholder.typicode.com/posts?_page='+this.currentPage+'&_limit='+this.limit)
      .then(response => {
        // JSON responses are automatically parsed.
        this.posts = response.data
        console.log(currentPage)
      })
    }
  },
  //Called when page rendered
  mounted(currentPage){
    this.getPostData(currentPage)
  }
}
</script>\

<style scoped>
#app{
    margin-top: 30px;
    font-size: 20px;;
}
</style>