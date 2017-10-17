<template>
  <div class="cv row">
    <div class="page">
      
      <div class="col-12" v-for="cat in jobLifeLine">
        <h2>{{cat.name}}</h2>
        <div class="col-12 bg-base3" v-for="job in cat.items" v-if="job.type==='event'">
          <div class="col-2 txt-r default">
            {{job.date}}
          </div>
          <div class="col-10 default">
            <table class="col-12">
              <tbody>
                <tr>
                  <td class="col-1 txt-c" valign="top"><i class="txt-w fa fa-rocket fa-lg"></i></td>
                  <th>{{job.name}}</th>
                </tr>
                <tr>
                  <td class="col-1 txt-c" valign="top"><i class="txt-w fa fa-info fa-lg"></i></td>
                  <td>{{job.description}}</td>
                </tr>
                <tr>
                  <td class="col-1 txt-c" valign="top"><i class="txt-w fa fa-building-o fa-lg"></i></td>
                  <td class="txt-base2">{{job.organisation}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-12" v-for="job in cat.items" v-if="job.type!=='event'">
          <div class="col-2 txt-r default">
            {{job.date}}
          </div>
          <div class="col-10 default">
            <table class="col-12">
              <tbody>
                <tr>
                  <td class="col-1 txt-c" valign="top"><i class="txt-base1 fa fa-briefcase fa-lg"></i></td>
                  <th>{{job.position}}</th>
                </tr>
                <tr>
                  <td class="col-1 txt-c" valign="top"><i class="txt-base1 fa fa-building-o fa-lg"></i></td>
                  <td class="txt-base2">{{job.organisation}}</td>
                </tr>
                <tr>
                  <td class="col-1 txt-c" valign="top"><i class="txt-base1 fa fa-map-marker fa-lg"></i></td>
                  <td>{{job.location}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div class="page">
        
      <h2 class="col-12">Compétences</h2>
      <div class="col-12" v-for="cat in skills">
        <h3>{{cat.name}}</h3>
        <div class="col-12 flex-contener">
          <div class="tag fl" v-for="skill in cat.items">
            <div v-bind:class="`tag-content skill${skill.n}`">
              <span class="label">{{skill.name}}</span>
              <span class="score">{{skill.n}}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="col-12" v-for="cat in hobbies">
        <h2>{{cat.name}}</h2>
        <div class="col-12" v-for="job in cat.items">
          <div class="col-2 txt-r default">
            {{job.date}}
          </div>
          <div class="col-10 default">
            <table class="col-12">
              <tbody>
                <tr>
                  <td class="col-1 txt-c" valign="top"><i class="txt-base1 fa fa-briefcase fa-lg"></i></td>
                  <th>{{job.position}}</th>
                </tr>
                <tr>
                  <td class="col-1 txt-c" valign="top"><i class="txt-base1 fa fa-building-o fa-lg"></i></td>
                  <td class="txt-base2">{{job.organisation}}</td>
                </tr>
                <tr>
                  <td class="col-1 txt-c" valign="top"><i class="txt-base1 fa fa-map-marker fa-lg"></i></td>
                  <td>{{job.location}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      
    </div>
    
    
    
  </div>
</template>

<script src="./CV.script.js"></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
