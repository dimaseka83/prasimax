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
          submenu: [
            {
              name: 'Profil Perusahaan',
              link: '/about/profile',
            },
            {
              name: 'Karir',
              link: '/about/career',
            },
            {
              name: 'Pedoman Perilaku dan Kode Etik',
              link: '/about/code-of-ethics',
            },
            {
              name: 'Brand Guideline',
              link: '/about/brand-guideline',
            },
          ],
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
          submenu: [
            {
              name: 'Tim Sales',
              link: '/contact/sales',
            },
            {
              name: 'Tim Field Application Engineer',
              link: '/contact/field-application-engineer',
            },
            {
              name: 'Tim Marketing dan Komunikasi',
              link: '/contact/marketing-and-communication',
            },
          ],
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
