<template>
    <div class="flex gap-4">
        <span v-for="section in sections" 
        class="hover:text-white cursor-pointer" 
        :class="{'text-orange-400': section.title == selected?.title}"
        @click="() => selectSection(section)"
        >
            {{section.title}}
        </span>
    </div>
</template>

<script>
export default {
  name: 'Sections',
  data () {
    return {
      sections: [{title: 'Section 1'}, {title: 'Section 2'}],
      selected: null
    }
  },
  methods: {
    selectSection (section) {
      console.log('ici')
      this.selected = section
    }
  }
}
</script>

<style></style>