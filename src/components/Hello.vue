<template>
  <div class="hello">
   <md-card md-with-hover>
     <md-card-header>
      <div class="md-title">Title goes here</div>
      <div class="md-subhead">Subtitle here</div>
     </md-card-header>

     <md-card-content>
       {{card_text}}
     </md-card-content>

    <md-card-actions>
       <md-button>Action</md-button>
       <md-button>Action</md-button>
    </md-card-actions>
 </md-card>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data(){
    return {
        card_text: `Lorem ipsum dolor sit amet, brute iriure accusata ne mea. 
        Eos suavitate referrentur ad, te duo agam libris qualisque,
         utroque quaestio accommodare no qui. Et percipit laboramus usu,
          no invidunt verterem nominati mel. Dolorem ancillae an mei,
           ut putant invenire splendide mel, ea nec propriae adipisci.
            Ignota salutandi accusamus in sed, et per malis fuisset, 
            qui id ludus appareat.`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
