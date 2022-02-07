<template>
  <v-card>
    <!--    <v-card-title>-->
    <!--      Search-->
    <!--    </v-card-title>-->
    <v-card-title>
      <v-icon>mdi-tag</v-icon> Tag List
    </v-card-title>
    <v-card-text>
      {{ printTagList(tagList) }}
    </v-card-text>
    <!--    <v-card-title>-->
    <!--      Feeds-->
    <!--    </v-card-title>-->
  </v-card>
</template>
<script>
import { printTagList } from "@/utils/helpers.utils";

export default {
  components: { },
  props: {
    tagList: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  methods: {
    printTagList,
  },
};
</script>
