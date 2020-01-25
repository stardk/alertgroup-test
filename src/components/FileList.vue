<template>
    <div class="files">
      <div class="files__tabs">
        <span class="tab" :class="{ activated: currentTab === tab.id }" v-for="tab in tabs" @click="getFiles(tab.id)" :key="tab.id">
          {{ tab.name }}
        </span>
      </div>
      <div class="files__content">
        <div class="file" v-for="file in currentFiles" :key="file.id">
          <div class="file__info">
            <span class="file__info__name">
              {{ file.name }}
            </span>
            <span class="file__info__size">
              {{ file.size + ' мб' }}
            </span>
            <span class="file__info__divider">
              |
            </span>
            <span class="file__info__date">
              {{ file.date }}
            </span>
          </div>
          <div class="file__download">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.3124 11.7224C22.9304 11.7224 22.6248 12.028 22.6248 12.41V18.6647C22.6248 20.3659 21.2394 21.7462 19.5433 21.7462H4.45671C2.75552 21.7462 1.37521 20.3608 1.37521 18.6647V12.3082C1.37521 11.9261 1.06961 11.6205 0.687606 11.6205C0.305603 11.6205 0 11.9261 0 12.3082V18.6647C0 21.1248 2.0017 23.1214 4.45671 23.1214H19.5433C22.0034 23.1214 24 21.1197 24 18.6647V12.41C24 12.0331 23.6944 11.7224 23.3124 11.7224Z" fill="#C78555"/>
              <path d="M11.5165 17.6613C11.6489 17.7937 11.8272 17.865 12.0004 17.865C12.1735 17.865 12.3518 17.7988 12.4842 17.6613L16.8543 13.2912C17.1243 13.0212 17.1243 12.5883 16.8543 12.3183C16.5844 12.0484 16.1515 12.0484 15.8815 12.3183L12.688 15.517V1.56621C12.688 1.1842 12.3824 0.878601 12.0004 0.878601C11.6184 0.878601 11.3128 1.1842 11.3128 1.56621V15.517L8.11411 12.3183C7.84416 12.0484 7.41122 12.0484 7.14127 12.3183C6.87132 12.5883 6.87132 13.0212 7.14127 13.2912L11.5165 17.6613Z" fill="#C78555"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'FileList',
  data() {
    return {
      tabs: [
        {
          name: 'Все',
          id: 10,
        },
        {
          name: 'TAB1',
          id: 1,
        },
        {
          name: 'TAB2',
          id: 2,
        },
        {
          name: 'TAB3',
          id: 3,
        },
      ],
      files: [
        {
          id: 1,
          name: 'Lorem ipsum Lorem ipsum',
          size: 0.42,
          date: '28.05.2019 15:53',
        },
        {
          id: 2,
          name: 'Lorem ipsum Lorem ipsum',
          size: 0.29,
          date: '12.03.2019 10:42',
        },
        {
          id: 3,
          name: 'Lorem ipsum Lorem ipsum',
          size: 1.54,
          date: '05.02.2019 13:08',
        },
      ],
      currentFiles: [],
      currentTab: null,
    }
  },
  methods: {
    getFiles(id) {
      this.currentFiles = id > 3 ? this.files : this.files.filter(item => item.id === id);
      this.currentTab = id;
    },
  },
  mounted () {
    this.getFiles(10);
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/filelist';

</style>
