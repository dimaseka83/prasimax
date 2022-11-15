const mix = {
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
          case 'xs': return 220
          case 'sm': return 400
          case 'md': return 500
          case 'lg': return 600
          case 'xl': return 800
      }
  },
  nosm() {
      return this.$vuetify.breakpoint.sm || this.$vuetify.breakpoint.md || this.$vuetify.breakpoint.lg || this.$vuetify.breakpoint.xl;
  },
  sm(){
      return this.$vuetify.breakpoint.xs;
  },
  }
}
