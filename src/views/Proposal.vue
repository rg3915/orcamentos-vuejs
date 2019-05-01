<template>
  <div>
    <p>
      <b>Título:</b>
      {{ item.title }}
    </p>
    <p>
      <b>Valor:</b>
      {{ item.price }}
    </p>
  </div>
</template>

<script>
export default {
  mounted() {
    firebase
      .firestore()
      .collection("proposals")
      .doc(this.$route.params.id)
      .onSnapshot(doc => {
        const data = doc.data();

        this.item = {
          id: doc.id,
          ...data
        };
      });
  },
  data() {
    return {
      item: {}
    };
  }
};
</script>
