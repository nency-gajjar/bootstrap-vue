<template>
    <div id="app" class="container">
        <b-table head-variant="dark" responsive striped borderless :items="posts" :fields="fields">
        </b-table>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return{
            posts: [],
            names: [],

            
            fields: [
              { key: "id" },
              { key: "title" },
              { key: "body" }
            ]
        }
    },

    created() {
        this.getPosts();
    },

    methods: {
      getPosts() {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(resp => {
          this.posts = resp.data;
        });
      },
  }
}
</script>

<style scoped>
#app{
    margin-top: 10px;
}
</style>