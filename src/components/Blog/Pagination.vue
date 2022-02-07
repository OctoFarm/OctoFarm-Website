<template>
  <v-row>
    <v-col class="text-center">
      <v-pagination
        v-model="pageNumber"
        :length="pages"
        :total-visible="6"
      />
    </v-col>
  </v-row>
</template>

<script>

export default {
  props: {
    pages: {
      type: Number,
      required: true,
      default: () => [],
    },
    pageNumber: {
      type: Number,
      required: true,
      default: 1,
    },
  },
};
</script>
