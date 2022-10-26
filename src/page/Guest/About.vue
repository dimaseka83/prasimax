<template>
    <v-app>
        <NavigationGuest />
        <!-- Page 1 -->
        <v-img gradient="to top right, rgba(0, 57, 94, 1), rgba(255, 255, 255, 0)" src="@/assets/images/static/tentangkamiheader.svg" :height="height">
        <v-container class="white--text">
            <v-row class="fill-height mt-16">
                <v-col cols="8">
                    <h1 class="display-3 text-uppercase font-weight-bold">tentang prasimax</h1>
                <p class="title mt-10">Desain, Pengembangan, Pabrikasi adalah lingkup kerja perusahaan kami. Kompetensi desain kami termasuk desain Industrial Design, Mechanical Design dan Desain PCB. Kompetensi Pengembangan kami mencakup pengembangan firmware, software dan uji validasi (validation test). Sedangkan kompetensi Pabrikasi atau manufaktur kami mencakup pabrikasi PCB, PCB Assembly (soldering PCB dengan mesin otomasi) dan Perakitan produk akhir. Pengalaman kami sudah melebihi satu dekade sejak 2010.</p>
                </v-col>
            </v-row>
        </v-container>
    </v-img>
        <!-- Page 2 -->
        <v-container>
            <v-card color="light-blue lighten-1" elevation="10" class="my-16 pa-10" rounded="xl">
                <v-container class="white--text">
                    <v-row class="fill-height mt-10 ">
                        <v-col cols="8">
                            <h1 class="text-h3 font-weight-bold text-uppercase">informasi perusahaan</h1>
                            <p class="headline mt-5 font-weight-bold text-capitalize ">kami memimpin teknologi sistem
                                embedded</p>
                            <p class="title mt-10">PRASIMAX adalah sebuah entitas bisnis sekaligus lembaga riset dan
                                pengembangan teknologi elektronika di Indonesia yang memiliki lini dan lingkup mulai
                                dari konsultasi inovasi, desain, pengembangan hingga produksi atau manufakturing produk.
                            </p>
                        </v-col>
                        <v-col cols="4">
                            <v-img src="@/assets/images/static/informasiperusahaanaboutus.png"></v-img>
                        </v-col>
                    </v-row>
                    <p class="headline mt-5 font-weight-bold text-capitalize ">Visi, Misi dan Nilai Perusahaan</p>
                    <v-row class="mt-10">
                        <v-col cols="6" class="d-flex align-stretch">
                            <v-card color="white" elevation="10" rounded="xl" class="blue--text pb-10 ">
                                <v-card-title class="font-weight-bold">Visi</v-card-title>
                                <v-card-text class="blue--text">
                                    Visi kami menjadi Penyedia Solusi ODM, OEM dan Manufakturing produk teknologi
                                    Internet of Things, Embedded System, Kecerdasan Artifisial, Teknologi Nirkabel dan
                                    Kendaraan Listrik terkemuka di Indonesia dan kawasan regional untuk seluruh industri
                                    vertikal.
                                </v-card-text>
                            </v-card>
                        </v-col>
                        <v-col cols="6" class="d-flex align-stretch">
                            <v-card color="white" elevation="10" rounded="xl" class="blue--text pb-10">
                                <v-card-title class="font-weight-bold">Misi</v-card-title>
                                <v-card-text class="blue--text">
                                    Dalam menjalankan bisnis teknologi, kami memiliki misi mendorong perkembangan
                                    Industri 4.0 di Indonesia.
                                    <ul>
                                        <li>Menciptakan dan menginvensi produk inovatif untuk kebutuhan klien kami.</li>
                                        <li>Mempercepat kemandirian bangsa dalam penguasaan teknologi informasi dan
                                            elektronika.</li>
                                        <li>Mencerdaskan sumber daya manusia Indonesia agar mampu dan memiliki keahlian
                                            dan keterampilan di bidang teknologi elektronika, mulai dari desain,
                                            pengembangan hingga manufakturing.</li>
                                    </ul>
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>
                    <div class="mt-5 white--text">
                        <p class="title">Nilai inti perusahaan yang kami anut adalah:</p>
                        <ul class="subtitle-1">
                            <li>Inovasi</li>
                            <li>Fokus pada Pelanggan</li>
                            <li>Integritas</li>
                            <li>Berkualitas</li>
                        </ul>
                    </div>
                </v-container>
            </v-card>
        </v-container>
        <!-- Page 3 -->
        <v-container class="my-16 blue--text">
            <v-row>
                <v-col cols="5">
                    <v-card elevation="10" rounded="xl" :max-height="height-50">
                        <v-img  gradient="to top right, rgba(0, 57, 94, 1), rgba(255, 255, 255, 0)"
                        src="@/assets/images/static/sejakaboutus.svg" :height="height"></v-img>
                    </v-card>
                </v-col>
                <v-col cols="7">
                    <h2 class="display-1 font-weight-bold text-uppercase mb-5">Sejak Tahun 2010 Hingga Kini</h2>
                    <p>Bersama 5 pendiri, pada hari Jumat tanggal 12 Maret 2010, PT. Prasimax Inovasi Teknologi (PRASIMAX) sebagai entitas bisnis dengan orientasi profit berdiri secara resmi di Kota Depok. Dengan berbekal pengalaman sebelumnya sebagai penyedia kursus elektronika di Kota Depok, PRASIMAX memulai merancang model bisnis baru di sektor teknologi informasi dengan kompetensi khusus dalam pengembangan produk elektronika digital.</p>
                    <h2 class="display-1 font-weight-bold text-capitalize my-5">fase berdiri :</h2>
                    <p>Selama Tahun 2010 kami memformulasikan rencana bisnis, portfolio produk dan jasa yang akan
                        diimplementasikan pada paruh kedua 2010. Value jam di internal perusahaan dilakukan sehingga
                        berproses menghasilkan Visi perusahaan 1 dekade ke depan, setting misi dan definisi nilai inti
                        perusahaan.</p>
                    <h2 class="display-1 font-weight-bold text-capitalize mt-5">fase pertumbuhan :</h2>
                    <p>Pada periode 2012 hingga 2017 merupakan fase pertumbuhan PRASIMAXm karena pada periode ini Produk dan Solusi bertambah. Kami juga mendapat tantangan yang sangat sulit dihadapi, mulai dari plagiarisme paten oleh perusahaan teknologi dari Korea dan beberapa perusahaan lokal yang menjiplak invensi teknologi kami yakni sistem monitoring pajak daerah secara elektronik. Namun PRASIMAX tidak hanya bergantung pada satu solusi, di fase pertumbuhan ini kami lahirkan juga beberapa solusi dan produk pada sektor teknologi lainnya.</p>
                    <div class="mt-5 white--text">
                        <p class="title">Nilai inti perusahaan yang kami anut adalah:</p>
                        <ul class="subtitle-1">
                            <li><b>Telekomunikasi (satelit)</b> yakni solusi penjejak satelit bekas</li>
                            <li><b>Otomotif</b> yakni pengembangan Engine Control Unit untuk kendaraan roda dua</li>
                            <li><b>Internet of Things</b> yakni sistem monitor dan kendali rumah</li>
                            <li><b>Ritel</b> yakni Sistem monitoring revenue tenan pada shopping mall</li>
                            <li>Dan beberapa solusi lainnya</li>
                        </ul>
                        <p class="title">Hingga pada akhir 2017 kami melakukan perubahan arah bisnis yang mengikuti
                            perubahan dan
                            perkembangan teknologi di beberapa sektor dengan berkembangnya Industri 4.0 dan Teknologi
                            seluler.</p>
                    </div>
                </v-col>
            </v-row>
            <v-row class="mt-n16">
                <v-col cols="6" class="mt-n16">
                    <h2 class="display-1 font-weight-bold text-capitalize mt-n16 mb-5">fase transformasi :</h2>
                    <p>Proyek pertama yang didapatkan oleh PRASIMAX adalah implementasi sistem monitoring pajak
                        daerah secara elektronik di Pemprov DKI Jakarta sekitar triwulan kedua di tahun 2011. Bersamaan
                        dengan proyek tersebut kami mendaftarkan solusi yang kami invensikan sebagai Paten pertama
                        solusi dan mekanisasi capture data transaksi pada mesin POS, tepatnya menangkap data transaksi
                        pada printer POS. Saat itu implementasi sistem monitoring pajak daerah secara elektronik
                        merupakan rintisan pertama di Indonesia. PRASIMAX berkolaborasi dengan FINNET INDONESIA,
                        sebagai impelementasi pengolahan dan manajemen data.</p>
                </v-col>
                <v-col cols="6" class="my-n16">
                    <h2 class="display-1 font-weight-bold text-capitalize mt-n16 mb-5">Fase Perubahan:</h2>
                    <p>Fase perubahan ini dimulai sejak akhir 2017. Ditandai mulainya kami menjalin kerjasama dengan beberapa prinsipal teknologi dengan target peralihan teknologi. Adapun perubahan arah yang kami lakukan adalah perubahan model bisnis dan peran dalam ekosistem dan rantai nilai industri. PRASIMAX pada fase ini meredefinisi dari perusahaan berbasis Riset dan Pengembangan menjadi perusahaan yang fokus pada pengembangan produk dan solus berorientasi pasar. Dimulai dengan perjanjian lisensi dari Qualcomm, Perjanjian lisensi dengan Apple untuk asesoris made for iPhone, made for iPad & made for iPod, Perjanjian kerja sama dengan NXP, ST Micro, Xilinx, Texas Instruments dan juga dengan beberapa distributor komponen dan material, merubah budaya, nilai dan arah perusahaan. Sehingga kami dapat memberikan layanan dan produk kepada klien kami. </p>
                    <div class="mt-5 white--text">
                        <p class="title">Nilai inti perusahaan yang kami anut adalah:</p>
                        <ul class="subtitle-1">
                            <li><b>Telekomunikasi (satelit)</b> yakni solusi penjejak satelit bekas</li>
                            <li><b>Otomotif</b> yakni pengembangan Engine Control Unit untuk kendaraan roda dua</li>
                            <li><b>Internet of Things</b> yakni sistem monitor dan kendali rumah</li>
                            <li><b>Ritel</b> yakni Sistem monitoring revenue tenan pada shopping mall</li>
                            <li>Dan beberapa solusi lainnya</li>
                        </ul>
                        <p class="title">Hingga pada akhir 2017 kami melakukan perubahan arah bisnis yang mengikuti
                            perubahan dan
                            perkembangan teknologi di beberapa sektor dengan berkembangnya Industri 4.0 dan Teknologi
                            seluler.</p>
                    </div>
                </v-col>
            </v-row>
            <h2 class="display-1 font-weight-bold text-capitalize my-5">Dokumen Kelengkapan Perusahaan</h2>
            <p>Bagi pihak-pihak yang berinteraksi bisnis, proyek dan administrasi, dapat mendownload beberapa
                dokumen di bawah ini dengan syarat registrasi dan login terlebih dahulu.</p>
            <div class="d-flex justify-space-between" v-if="$store.state.isLogged">
                <div class="pa-2 font-weight-bold text-decoration-underline title"
                    v-for="(document, idx) in documents" :key="idx"><a :href="`${assets}${document.loc}`" rel="noopener noreferrer" download>{{ document.name }}</a></div>
            </div>
            <p v-else class="title">Silahkan Login atau Register dahulu jika ingin mengunduh dokumen perusahaan</p>
            <v-divider class="mt-10"></v-divider>
        </v-container>
        <v-container class="my-16 blue--text">
            <v-row align="center">
                <p class="display-3 text-capitalize blue--text font-weight-bold">Kami Mencari Talenta </p>
                <v-divider></v-divider>
            </v-row>
            <v-row class="my-10">
                <v-col cols="12">
                    <p>Seiring pertumbuhan bisnis, produk dan jasa, PRASIMAX memerlukan sumber daya manusia yang
                        akan duduk di berbagai posisi. Mulai dari posisi manajerial, profesional hingga staf.</p>
                </v-col>
                <v-col cols="12">
                    <p class="font-italic text-decoration-underline font-weight-medium">Lihat Program mencari
                        talenta</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, accusamus officia suscipit eaque
                        non eligendi quis exercitationem omnis, doloribus id delectus vel! Consectetur, quam neque.
                        Laboriosam suscipit delectus error? Sunt? Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Provident voluptas molestiae fugit qui aliquam optio quam esse tempore, ab aperiam
                        possimus odio facilis cum a illo natus adipisci autem fugiat?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, accusamus officia suscipit eaque
                        non eligendi quis exercitationem omnis, doloribus id delectus vel! Consectetur, quam neque.
                        Laboriosam suscipit delectus error? Sunt? Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Mollitia cum ab consequuntur temporibus voluptates ipsam autem, perspiciatis enim pariatur
                        quam sunt sequi nemo. Maxime tempora totam obcaecati, provident magnam quae!</p>

                    <a class="font-italic text-decoration-underline font-weight-medium">Lihat Program mencari
                        talenta</a>
                </v-col>
            </v-row>

            <v-row align="center">
                <p class="display-3 text-capitalize blue--text font-weight-bold">magang di perusahaan kami </p>
                <v-divider></v-divider>
            </v-row>
            <v-row>
                <v-col cols="6">
                    <h2 class="display-1 font-weight-bold text-capitalize mb-5">benefits</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, accusamus officia suscipit eaque
                        non eligendi quis exercitationem omnis, doloribus id delectus vel! Consectetur, quam neque.
                        Laboriosam suscipit delectus error? Sunt? Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Provident voluptas molestiae fugit qui aliquam optio quam esse tempore, ab aperiam
                        possimus odio facilis cum a illo natus adipisci autem fugiat?</p>
                    <p>Lorem ipsum dolor sit amet conbau=sectetur adipisicing elit. Veniam, accusamus officia suscipit eaque
                        non eligendi quis exercitationem omnis, doloribus id delectus vel! Consectetur, quam neque.
                        Laboriosam suscipit delectus error? Sunt? Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Mollitia cum ab consequuntur temporibus voluptates ipsam autem, perspiciatis enim pariatur
                        quam sunt sequi nemo. Maxime tempora totam obcaecati, provident magnam quae!</p>
                </v-col>
                <v-col cols="6">
                    <h2 class="display-1 font-weight-bold text-capitalize mb-5">learning & development</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, accusamus officia suscipit eaque
                        non eligendi quis exercitationem omnis, doloribus id delectus vel! Consectetur, quam neque.
                        Laboriosam suscipit delectus error? Sunt? Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Provident voluptas molestiae fugit qui aliquam optio quam esse tempore, ab aperiam
                        possimus odio facilis cum a illo natus adipisci autem fugiat?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, accusamus officia suscipit eaque
                        non eligendi quis exercitationem omnis, doloribus id delectus vel! Consectetur, quam neque.
                        Laboriosam suscipit delectus error? Sunt? Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Mollitia cum ab consequuntur temporibus voluptates ipsam autem, perspiciatis enim pariatur
                        quam sunt sequi nemo. Maxime tempora totam obcaecati, provident magnam quae!</p>

                    <a class="font-italic text-decoration-underline font-weight-medium">Lihat Program magang</a>
                </v-col>
            </v-row>
        </v-container>
        <v-container class="my-16 blue--text">
            <h2 class="display-1 font-weight-bold text-capitalize mb-5">pedoman perilaku :</h2>
            <p>Dalam menjaga keberlangsungan perusahaan, PRASIMAX sadar untuk menjaga nilai integritas di
                setiap sendi aktifitas bisnis. Kami sangat menjaga hubungan kerja dan bisnis yang baik dengan klien
                atau pelanggan dan hubungan kerja dan bisnis dengan vendor, suplier dan mitra. Untuk itu kami
                perlu menyampaikan pedoman perilaku pokok kepada klien dan pelanggan kami demikian juga
                berlaku untuk para vendor, suplier &amp; mitra kami. Beberapa poin pokok pedoman perilaku yang kami
                minta kepada semua stakeholder baik pelanggan dan suplier adalah sebagai berikut:</p>
            <ol>
                <li>Patuh pada Hukum</li>
                <p>Seluruh insan PRASIMAX wajib mematuhi hukum, peraturan dan undang-undang di tingkat Nasional
                    dan Internasional. Kepatuhan terhadap hukum ini bisa diwujudkan dengan mematuhi standar
                    hukum dan peraturan perundangan yang berlaku terkait dengan kegiatan bisnis teknologi di
                    berbagai sektor industri.</p>
                <li>Benturan Kepentingan (Conflict of Interest)</li>
                <p>Seluruh insan PRASIAMX bertanggungjawab menghindari situasi yang membenturkan kepentingan
                    pribadi (baik langsung maupun tidak langsung), aktivitas di luar, atau kepentingan keuangan, dengan
                    kepentingan Perusahaan, sehingga dapat bertentangan, tampak bertentangan, atau berpotensi
                    bertentangan.</p>
                <li>Suap dan Korupsi</li>
                <p>Suap (penyuapan) adalah sebuah tindakan melanggar hukum. Dalam prakteknya suap menjelma
                    dalam berbagai bentuk. Tidak hanya berbentuk uang, tetapi dapat berupa segala sesuatu yang
                    bernilai bagi si penerima. Menghindari suap bukanlah pekerjaan mudah. Dibutuhkan keteguhan dari
                    seluruh Insan PRASIMAX, karena suap di masyarakat sering dianggap hal yang wajar. Bahkan di
                    sebagian kalangan tertentu justru dianggap tidak wajar jika untuk menyelesaikan pekerjan tidak ada
                    “pelicin”. Suatu Perusahaan yang mempunyai reputasi dan dapat dipercaya tidak akan melakukan
                    suap. Tindakan suap dan korupsi oleh staf dan karyawan PRASIMAX tidak akan ditolerir sedikitpun,
                    sehingga penegakan pedoman perilaku ini dapat berupa sanksi keras hingga pemutusan hubungan
                    kerja.</p>
                <li>Kesetaraan gender, agama, ras dan golongan</li>
                <p>Dalam hal gender, agama, ras dan golongan, Insan PRASIMAX menjunjung tinggi sikap saling
                    menghargai dan toleransi dalam interaksi sosial dan bisnis baik di internal perusahaan maupun
                    dengan pelanggan, klien, vendor dan suplier. Pelanggaran atau perlawanan kode perilaku kesetaraan
                    ini dapat diberikan sanksi rendah hingga pemutusan hubungan kerja.</p>
                <li>Konservasi sosial dan lingkungan</li>
                <p>PRASIMAX sebagai bagian dari sistem sosial dan industri paham dan ikut serta menjaga ketertiban
                    lingkungan, menjaga dan memberdayakan kehidupan sosial di sekitar tempat kegiatan perusahaan
                    beroperasi.</p>
            </ol>
        </v-container>
        <FooterGuest />
    </v-app>
</template>
<script>
    import mix from '@/mixins/mix';
    import componentsmix from '@/mixins/componentsmix';
    import FooterGuest from '@/components/FooterGuest.vue';
    export default {
        mixins: [mix, componentsmix],
        data() {
            return {
                slides: [{
                        title: 'Perusahaan',
                        text: 'PRASIMAX [PT Prasimax Inovasi Teknologi] berdiri secara legal dan formal pada tanggal 12 Maret 2010 oleh 5 orang pendiri. Bidang bisnis PRASIMAX adalah design, pengembangan dan manufakturing produk elektronik seperti IoT, embedded system, kecerdasan artifisial, nirkabel, divais komputasi dan peralatan elektronika lainnya di berbagai sektor industri',
                        image: 'carousel.svg'
                    },
                    {
                        title: 'Kompetensi',
                        text: 'Dengan pengalaman kami yang sudah melewati satu dekade di bidang teknologi informasi dan komputasi, kompetensi kami yang dapat membantu Anda dalam merealisasikan produk inovatif adalah desain industrial dan mekanikal, desain dan pengembangan elektronika berikut perangkat lunaknya hingga kami memiliki kemampuan untuk memproduksi massal',
                        image: 'carousel.svg'
                    },
                    {
                        title: 'Industri 4.0',
                        text: 'Perkembangan Industri 4.0 yang sedang berlaku membuat kami juga beradaptasi untuk menciptakan invensi dan inovasi teknologi. Sudah banyak produk dan desain kami yang telah memberikan nilai tambah bagi klien dan pelanggan kami. Khususnya produk IoT dan nirkabel yang pernah kami hasilkan telah membuktikan bahwa PRASIMAX mampu mengikuti perkembangan Industri 4.0',
                        image: 'carousel.svg'
                    }
                ],
                documents: [
                    {
                        name: "Panduan Merek PRASIMAX",
                        loc: "/brand.pdf"
                    },
                    {
                        name: "File citra merek PRASIMAX",
                        loc: "/800px-Prasimax_Logo.png"
                    },
                    {
                        name: "Nomor Pokok Wajib Pajak",
                        loc: "/npwp.pdf"
                    },
                    {
                        name: "Nomor Induk Berusaha (OSS)",
                        loc: "/nib.pdf"
                    },
                ]
            };
        },
        components: {
            FooterGuest
        },
        methods: {
            download(url){
                new Blob([url], {type: 'application/pdf'});
            }
        }
    }
</script>