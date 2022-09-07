<template>
    <v-app>
    <NavigationGuest />
    <!-- Page 1 -->
    <v-container class="blue--text">
        <v-row class="my-16">
            <v-col cols="6">
                <h1 class="font-weight-bold display-2">Smart Speaker - SMAI-88</h1>
                <div class="mt-10">
                    <span>Qualcom QCS400 - ARM Cortex-A53 Quad Core</span><br>
                    <span>RAM : 4GB LPDDR2</span><br>
                    <span>Flash : 4GB NAND</span><br>
                    <span>2x Digital Mics</span><br>
                    <span>Google Voice Assistant and Alexa ready</span><br>
                    <span>Customizable for specific customer NLP</span>
                </div>
            </v-col>
            <v-col cols="6">
                <div class="d-flex justify-center">
                    <v-img src="@/assets/images/dummy/speaker.png" :max-width="height-300"></v-img>
                </div>
            </v-col>
        </v-row>
        <v-divider></v-divider>
    </v-container>
    <!-- Page 2 -->
    <v-container class="blue--text my-16">
        <v-row>
            <v-col cols="6">
                <h1 class="font-weight-bold display-4 mb-10">Apa itu OEM dan ODM</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, asperiores quaerat veritatis deserunt aperiam earum nostrum voluptas, placeat neque et facere illum illo accusantium animi? Odit deleniti quia provident modi.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, asperiores quaerat veritatis deserunt aperiam earum nostrum voluptas, placeat neque et facere illum illo accusantium animi? Odit deleniti quia provident modi.</p>
            </v-col>
            <v-col cols="6">
                <v-card elevation="10" rounded="xl" class="blue--text">
                    <v-container class="pa-10">
                        <p class="font-weight-medium text-capitalize headline">
                            pengertian perusahaan OEM <br>
                            <span class="font-italic">(original equipment manufacturer)</span>
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus optio necessitatibus ipsam reprehenderit eaque nostrum ipsa rem, reiciendis corrupti cupiditate fugit repellendus itaque unde corporis totam eos! Nostrum, animi expedita!</p>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
        <v-row class="my-16">
            <v-col cols="6">
                <h1 class="font-weight-medium  display-1 mb-10">Perbedaan OEM dan ODM</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, asperiores quaerat veritatis deserunt aperiam earum nostrum voluptas, placeat neque et facere illum illo accusantium animi? Odit deleniti quia provident modi.</p>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi, asperiores quaerat veritatis deserunt aperiam earum nostrum voluptas, placeat neque et facere illum illo accusantium animi? Odit deleniti quia provident modi.</p>
            </v-col>
            <v-col cols="6">
                <v-card elevation="10" rounded="xl" class="blue--text">
                    <v-container class="pa-10">
                        <p class="font-weight-medium text-capitalize headline">
                            pengertian perusahaan OEM <br>
                            <span class="font-italic">(original design manufacturer)</span>
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus optio necessitatibus ipsam reprehenderit eaque nostrum ipsa rem, reiciendis corrupti cupiditate fugit repellendus itaque unde corporis totam eos! Nostrum, animi expedita!</p>
                    </v-container>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    <!-- Page 3 -->
    <v-container class="my-16">
          <v-card flat>
            <v-list two-line>
              <v-list-item>
                <v-img src="@/assets/images/dummy/board.jpg" max-width="600" :height="height"></v-img>
                <v-list-item-content>
                  <v-card flat class="pa-16" color="blue" dark :height="height">
                    <p class="display-1 font-weight-bold">Riset dan Pengembangan</p>
                    <p class="subtitle mt-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum laborum, in ad
                      minus odit distinctio eligendi doloribus tempora, sed eum quas obcaecati animi saepe error itaque
                      maxime enim. Exercitationem, commodi? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus, iure modi odit ipsa est aliquam dolore dolorum, quidem omnis, totam odio sapiente nostrum sequi incidunt nulla. Impedit molestias maxime sed.</p>
                      <v-btn color="white" large rounded class="blue--text mt-10">Read More</v-btn>
                  </v-card>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
    </v-container>
    <!-- Page 4 -->
    <v-container class="mb-16 blue--text">
        <v-row>
            <v-col cols="6">
                <h1 class="display-1 font-weight-bold mb-16">Manufakturing</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos sit, voluptas quia quasi voluptatibus, nobis vitae accusantium harum doloremque rerum ad fugiat debitis, ex deserunt. Atque voluptates itaque doloremque?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos dignissimos sit, voluptas quia quasi voluptatibus, nobis vitae accusantium harum doloremque rerum ad fugiat debitis, ex deserunt. Atque voluptates itaque doloremque?</p>
                <v-btn color="blue" large rounded class="white--text mt-10">Read More</v-btn>
            </v-col>
            <v-col cols="6">
                <v-card elevation="10" rounded="xl">
                    <v-img gradient="to top right, rgba(0, 57, 94, 1), rgba(255, 255, 255, 0)" src="@/assets/images/dummy/board.jpg" :height="height - 100"></v-img>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    <FooterGuest />
    </v-app>
</template>
<script>
      import mix from '@/mixins/mix';
  import componentsmix from '@/mixins/componentsmix';
export default {
    mixins: [mix, componentsmix],
    
}
</script>