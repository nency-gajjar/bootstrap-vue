<template>
   <div id="app" class="container jumbotron">
      <b-form id="form" @submit.prevent="onSubmit" @reset="onReset" v-if="show">
         <b-form-group label="Email address :" label-for="email" description="We'll never share your email with anyone.">
            <b-form-input ref="email" id="email" v-model="email" type="email" placeholder="Enter your email" reuired/>
         </b-form-group>

         <b-form-group label-for="name" label="Name : ">
            <b-form-input id="name" v-model="name" type="text" placeholder="Enter your name" required/>
         </b-form-group>

         <b-form-group label="Food : "  label-for="food">
            <b-form-select id="food" v-model="food" :options="foods" required></b-form-select>
         </b-form-group>

         <b-form-group>
            <b-form-checkbox-group v-model="checked">
               <b-form-checkbox value="me">Check me out</b-form-checkbox>
               <b-form-checkbox value="that">Check that out</b-form-checkbox>
            </b-form-checkbox-group>
         </b-form-group>

         <b-button class="btn" type="submit" variant="primary">Submit</b-button>
         <b-button class="btn" type="reset" variant="danger">Reset</b-button>
      </b-form>

      <b-card header="Form Data Result" v-if="isSubmitted && show">
         <pre>
            <p>{{data.email}}</p>
            <p>{{data.name}}</p>
            <p>{{data.food}}</p>
            <p>{{data.checked}}</p>
         </pre>
      </b-card>

  </div>
</template>

<script>
export default {
  data() {
      return {
         value: '',
         isSubmitted : false,
         email: null,
         name: null,
         food: null,
         checked: [],

         data: {
            'email': null,
            'name': null,
            'food': null,
            'checked': []
         },
         foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
         show: true,
      };
   },

   mounted(){
      this.$refs.email.focus()
   },
   methods: {
      onSubmit(){
         this.isSubmitted = true
         this.data = {
            'email': this.email,
            'name' :  this.name,
            'food' : this.food,
            'checked' : this.checked,
         }
      },

      onReset(){
         this.data = {
            'email': null,
            'name' :  null,
            'food' : null,
            'checked':null,
         }
         document.getElementsByTagName('Form').value = "";
         this.show = true
         this.isSubmitted = false
         
      }
  }
};
</script>

<style scoped>
#app{
   margin-top: 15px; 
}


.btn{
   margin-right: 20px;
}
</style>