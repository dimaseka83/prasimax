import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import id from 'vuetify/lib/locale/id';
import hu from 'vuetify/lib/locale/hu';

Vue.use(Vuetify);

export default new Vuetify({
    lang: {
        locales: { id, hu },
        current: 'id',
      },
});
