<template>
    <div style="height: 4000px;"></div>
    <div class="flex gap-4">
        <span v-for="section in sections" 
        class="hover:text-white cursor-pointer" 
        :class="{'text-orange-400': section.title == selected?.title}"
        >
          <Section client:visible :title="section.title" @click="() => selectSection(section)"/>
        </span>
        <div>
          {{response}}
        </div>
    </div>
</template>

<script>
import Section from './Section.vue'

export default {
  name: 'Sections',
  components: {
    Section
  },
  data () {
    return {
      sections: [{title: 'Section 1'}, {title: 'Section 2'}],
      selected: null,
      response: null
    }
  },
  methods: {
    selectSection (section) {
      console.log('ici')
      this.selected = section
    }
  },
  async mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => {
      this.response = json.title
      console.log(json)
    })
  }
}
</script>

<style></style>