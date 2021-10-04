<template>
  <transition
    name="g-message-fade"
    @before-leave="onClose"
    @after-leave="$emit('destroy')"
  >
    <div
      :id="id"
      class="g-message"
      v-show="visiable"
      :class="classs"
      :style="styles"
    >
      message
    </div>
  </transition>
</template>

<script lang='ts'>
import {
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  PropType,
  ref,
} from "vue";
import type { Itype } from "./message.type";
export default defineComponent({
  props: {
    id: { type: String, default: "" },
    message: { type: String, default: "" },
    type: { type: String as PropType<Itype>, default: "info" },
    duration: { type: Number, default: 2000 },
    center: { type: Boolean, default: true },
    onClose: { type: Function as PropType<() => void> },
    offset: { type: Number, default: 10 },
  },
  setup(props) {
    const classs = computed(() => [
      "g-message--" + props.type,
      props.center ? "is-center" : "",
    ]);

    const styles = computed(() => ({ top: `${props.offset}px` }));
    const id = computed(() => props.id);
    let timer: any = null;
    const startTimer = () => {
      timer = setTimeout(() => {
        visiable.value = false;
      }, props.duration);
    };

    const visiable = ref(false);
    onMounted(() => {
      startTimer();

      visiable.value = true;
    });
    onUnmounted(() => {
      clearTimeout(timer);
    });
    return { classs, styles, visiable, id };
  },
});
</script>

<style>
</style>