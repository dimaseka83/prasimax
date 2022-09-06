

export default {
  data() {
    return {
      menu: [
        {
          name: 'Beranda',
          link: '/',
        },
        {
          name: 'Tentang Kami',
          link: '/about',
        },
        {
          name: 'ODM/OEM',
          link: '/odm',
        },
        {
          name: 'Produk',
          link: '/product',
        },
        {
          name: 'Jasa',
          link: '/service',
        },
        {
          name: 'Kerja Sama',
          link: '/partnership',
        },
        {
          name: 'Hubungi Kami',
          link: '/contact',
        },
      ],
      socials: [
        {
          name: 'Facebook',
          link: 'https://www.facebook.com/',
          icon: 'mdi-facebook',
        },
        {
          name: 'Twitter',
          link: 'https://www.twitter.com/',
          icon: 'mdi-twitter',
        },
        {
          name: 'Instagram',
          link: 'https://www.instagram.com/',
          icon: 'mdi-instagram',
        },
        {
          name: 'Youtube',
          link: 'https://www.youtube.com/',
          icon: 'mdi-youtube',
        },
        {
          name: 'Whatsapp',
          link: 'https://www.whatsapp.com/',
          icon: 'mdi-whatsapp',
        },
        {
          name: 'Linkedin',
          link: 'https://www.linkedin.com/',
          icon: 'mdi-linkedin',
        }
      ]
    };
  },
  methods: {
    route(link){
      this.$router.push(link);
    },
    changeLocale () {
      console.log(this.$vuetify.lang.current = 'hu');
    },
  },
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
};
