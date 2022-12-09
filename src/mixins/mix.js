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
          {
            name: 'Berita',
            link: '/news',
          }
        ],
        socials: [
          {
            name: 'Facebook',
            link: 'https://www.facebook.com/prasimax',
            icon: 'mdi-facebook',
          },
          {
            name: 'Twitter',
            link: 'https://www.twitter.com/prasimax',
            icon: 'mdi-twitter',
          },
          {
            name: 'Instagram',
            link: 'https://www.instagram.com/prasimax',
            icon: 'mdi-instagram',
          },
          {
            name: 'Youtube',
            link: 'https://www.youtube.com/prasimax',
            icon: 'mdi-youtube',
          },
          {
            name: 'Linkedin',
            link: 'https://www.linkedin.com/company/prasimax',
            icon: 'mdi-linkedin',
          }
        ],
        apiauth: 'https://prasimax.com/company-be/auth/',
        apibe: 'https://prasimax.com/company-be/api/',
        assets: 'https://prasimax.com/company-be',
      };
    },
    mounted() {
      this.checktoken();
    },
    methods: {
      route(link){
        this.$router.push(link);
      },
      changeLocale () {
        console.log(this.$vuetify.lang.current = 'hu');
      },
      logout() {
        this.$store.commit('logout');
        this.$swal({
            title: 'Berhasil',
            text: 'Anda berhasil logout',
            icon: 'success',
            timer: 2000,
            timerProgressBar: true,
            showConfirmButton: false,
        }).then(() => {
            this.$router.push('/');
        });
    },
    checktoken() {
      if(localStorage.getItem('token') != undefined){
        this.$store.commit('setToken', localStorage.getItem('token'));
        this.$store.commit('setUser', JSON.parse(localStorage.getItem('user')));
      }
    },
    mailto(email, subject) {
      window.location.href = `mailto:${email}?Subject=${subject}`;
  },
  limitText(text, limit) {
    return text.substring(0, limit) + '...'
}
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