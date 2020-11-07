<template>
  <v-form ref="checkForm">
    <v-text-field
      v-model="memo.title"
      label="Title"
      :rules="[required('Title')]"
    ></v-text-field>
    <v-textarea
      v-model="memo.body"
      label="Body"
      :rules="[required('Body')]"
    ></v-textarea>
    <div>　　<!--追加-->
      <a class="btn cubic">
        <v-btn class="hovering" @click="onSubmit">Create</v-btn>
        <v-btn class="default">so BAAD!</v-btn></a
      >
    </div>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      memo: {},
      required(propertyType) {
        return (v) => (v && v.length > 0) || `You must input a ${propertyType}`;
      },
    };
  },
  methods: {
    async onSubmit() {
      await this.$store.dispatch("addMemo", this.memo);
      this.memo.title = ""; 
      this.memo.body = ""; 
    },
  },
};
</script>

<style lang="scss">  //追加
.btn {
  position: relative;
  display: inline-block;
  transform-style: preserve-3d;
  perspective: 300px;
  width: 150px;
  height: 50px;
  margin: 0 auto;
  cursor: pointer;
  &.cubic {
    & .v-btn {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 1px solid blue;
      line-height: 48px;
      text-align: center;
      transition: all 0.3s;
      border-radius: 10%;
      letter-spacing: 3px;
    }
    & .hovering {
      background-color: black;
      color: skyblue;
      transform: rotateX(90deg);
      transform-origin: center center -25px;
    }
    & .default {
      background-color: black;
      color: skyblue;
      transform: rotateX(0);
      transform-origin: center center -25px;
    }
    &:hover {
      & .hovering {
        transform: rotateX(0);
      }
      & .default {
        transform: rotateX(-90deg);
      }
    }
  }
}
</style>
