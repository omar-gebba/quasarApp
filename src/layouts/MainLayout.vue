<template>
  <q-layout view="hHh lpR lFf">
    <q-header class="bg-blue-grey-5">
      <q-toolbar>
        <div class="status">
          <q-icon
            class="text-negative"
            size="25px"
            name="online_prediction"
          /><span class="q-status"> Status</span>
        </div>
        <!-- title -->
        <q-toolbar-title class="title absolute-center glossy shadow-24 text-negative">
          Camera App
        </q-toolbar-title>
        <!-- user menue -->
        <div class="absolute-bottom-right">
          
          <userMenue />
        </div>
      </q-toolbar>
    </q-header>
    <!-- footer -->
    <q-footer class="bg-blue-grey-4">
      <q-tabs>
        <cFooter v-for="nav in essentialLinks" :key="nav.title" v-bind="nav" />
      </q-tabs>
    </q-footer>

    <q-drawer
      :breakpoint="777"
      :width="250"
      show-if-above
      bordered
      content-class="bg-blue-grey-4"
      reveal-offset="100"
    >
      <q-list dark>
        <q-item-label dark header class="text-negative">
          Essential Links
        </q-item-label>
        <EssentialLink
          class="text-grey-10"
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
import cFooter from "src/components/cFooter.vue";
import userMenue from "src/components/modals/shared/userMenue.vue";

const linksData = [
  {
    title: "Dashboard",
    caption: "quasar.dev",
    icon: "school",
    link: "/"
  },
  {
    title: "Generic LPR",
    caption: "github.com/quasarframework",
    icon: "gavel",
    link: "/generic"
  },
  {
    title: "Matching",
    caption: "chat.quasar.dev",
    icon: "departure_board",
    link: "#"
  },
  {
    title: "Settings",
    caption: "@QuasarFramework",
    icon: "settings",
    link: "/settings"
  }
];

export default {
  name: "MainLayout",
  components: { EssentialLink, cFooter, userMenue },
  data() {
    return {
      essentialLinks: linksData
    };
  }
};
</script>
<style lang="scss" scoped>
//////////// media screen  ////////////

@media screen and (min-width: 763px) {
  .q-footer {
    display: none;
  }
}

.q-header {
  //////////// media screen for status span ////////////
  @media screen and (max-width: 763px) {
    .q-status {
      /// hide the word {status} from its span
      display: none !important;
    }
    //////////// media screen for footer ////////////
    @media screen and (min-width: 763px) {
      .q-footer {
        display: none;
      }
    }
  }
  .q-toolbar {
    // Toolbar

    .log-down-arrow {
      margin-left: -0.4rem;
      cursor: pointer;
    }
    .title {
      border: 1px solid $blue-grey-9;
      border-radius: 1rem;
    }
  }
}
////////////////// end header ///////

////////////////// Drawer //////////
.q-drawer {
  .q-router-link--active {
    background-color: #cbcdc9ed;
    color: $negative !important;
  }
}
/////////// End Drawer //////////
</style>
