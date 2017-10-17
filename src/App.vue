<template>
  <div id="app">
    <header class="row flex">
      <div class="col-12">
        <img class="fr" style="width:5cm" src="./assets/avatar.svg" alt="">
        <h1 class="txt-base1">{{`${firstname} ${lastname}`}}</h1>
        <p class="txt-base2"><strong>{{title}}</strong></p>
        <p>{{birthdate}}</p>
        <p>{{infos}}</p>
      </div>
    </header>
    <main>
      <router-view/>
    </main>
    <footer>
      
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      firstname: 'Louis',
      lastname: 'PERRIN',
      title: 'Développeur Frontend / Intégrateur / Graphiste',
      birthdate: '4 nov. 1983',
      infos: 'PACSé, 2 enfants'
    }
  },
  methods: {
  },
  created () {
  },
  updated () {
  }
}
</script>

<style lang="less"> @import './styles/importer.less'; </style>
