<template>
  <div id="app">
    <header class="row flex">
      <div class="col-12">
        <img class="fr" style="width:5cm" src="./assets/avatar.svg" alt="">
        <h1 class="txt-base1">{{`${firstname} ${lastname}`}}</h1>
        <p class="txt-base2"><strong>{{title}}</strong></p>
        <p>{{birthdate}}</p>
        <p>{{infos}}</p>
        <div class="social">
          <p v-for="n in social"><a :href="n.url" target="_blank"><i :class="`fa fa-lg fa-${n.network}`"></i>&nbsp;<span>{{n.tinyurl}}</span></a></p>
        </div>
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
      infos: 'Célibataire, 2 enfants',
      social: [
        {
          network: 'github',
          url: 'https://github.com/proximcreation',
          tinyurl: 'https://goo.gl/CT14DE'
        },
        {
          network: 'linkedin',
          url: 'https://www.linkedin.com/in/louis-perrin-03261b1/',
          tinyurl: 'https://goo.gl/tbdb9K'
        },
        {
          network: 'instagram',
          url: 'https://www.instagram.com/ripolineurs/?hl=fr',
          tinyurl: 'https://goo.gl/BN1cf3'
        }
      ]
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
