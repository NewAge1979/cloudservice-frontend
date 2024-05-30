<script>
import {defineComponent, ref} from "vue";
import EButton from "@/components/elements/EButton.vue";

export default defineComponent({
  name: "EUpload",
  emits: ["update"],
  components: {
    EButton
  },
  setup(props, {emit}) {
    const inputRef = ref(null);

    const handleChange = (e) => {
      const files = [];

      if (e.target.files) {
        for (const file of e.target.files) {
          files.push(file);
        }
      }

      if(!files) return;

      const file = files[0];

      emit("update", file);
    };

    const addFile = () => {
      inputRef.value.value = null;
      inputRef.value.click();
    };

    return {inputRef, handleChange, addFile};
  }
});
</script>

<template>
  <div class="e-upload">
    <input ref="inputRef" class="e-upload__input" name="file" type="file" @change="handleChange">
    <EButton @click="addFile">Добавить</EButton>
  </div>
</template>

<style scoped lang="scss">
  .e-upload {
    &__input {
      display: none;
    }
  }
</style>