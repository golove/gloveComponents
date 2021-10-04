<template>
  <input :type="type" class="g-input" :class="classs" v-model="inputValue" />
</template>
    
<script lang='ts'>
import { computed, defineComponent, PropType, ref, watch } from "vue";
import type { InputType,Itype } from "./input.type";
export default defineComponent({
  props: {
    type: { type: String as PropType<InputType>, default: "text" },
    bgColor:{type:String as PropType<Itype>,default:'primary'}
  },

  setup(props) {
    let inputValue = ref('')

    watch(inputValue,(n)=>{
      console.log(n)
    })

    const type = computed(() => props.type);
    const classs = computed(()=>[
        'g-input--'+props.bgColor
    ])
        
    
    return {
      type,
      inputValue,
      classs
    }
  }
});
</script>

<style>
</style>