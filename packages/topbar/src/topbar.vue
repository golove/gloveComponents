<template>
  <div class="g-topbar" :class="classs">
    <div class="g-topbar-logo">
        <img :src="logo.src" alt="">
        <p>{{logo.title}}</p>
    </div>
    <div class="g-topbar-menu">
      <div v-for="(e, i) in links" :key="i">
        <a :href="'/' + e">{{ e }}</a>
      </div>
    </div>

    <div class="g-topbar-search">
      <svg>
        <use xlink:href="#magnify" />
      </svg>
      <!-- <input type="text" placeholder="search" /> -->
      <!-- <div class="h-36 mx-auto w-full md:w-1/4 p-4"> -->
      <input placeholder="search" type="text" v-model="inputValue" />
      <!-- </div> -->
    </div>

    <div class="g-topbar-login">
      <div class="avatar"></div>
      <a :href="'/signin'">{{ "sign in" }}</a>
    </div>
  </div>

  <svg style="display: none" xmlns="http://www.w3.org/2000/svg">
    <symbol id="magnify" viewBox="0 0 24 24">
      <path
        d="M9.5,3A6.5,6.5 0 0,1 16,9.5C16,11.11 15.41,12.59 14.44,13.73L14.71,14H15.5L20.5,19L19,20.5L14,15.5V14.71L13.73,14.44C12.59,15.41 11.11,16 9.5,16A6.5,6.5 0 0,1 3,9.5A6.5,6.5 0 0,1 9.5,3M9.5,5C7,5 5,7 5,9.5C5,12 7,14 9.5,14C12,14 14,12 14,9.5C14,7 12,5 9.5,5Z"
      />
    </symbol>
  </svg>
</template>

<script lang='ts'>
import {
  computed,
  defineComponent,
  PropType,
  ref,
  watch,
} from "@vue/runtime-core";
import type { Itype } from "../../utils/types";
export default defineComponent({
  props: {
    links: { type: Array, default: ["home", "about"] },
    logo:{type:Object,default:{title:'golove',src:'https://image.freepik.com/free-vector/letter-g-with-love-logo-design_100735-23.jpg'}},
    type: {
      type: String as PropType<Itype>,
      default: ["primary", "info", "error", "warning", "danger", "success"][
        Math.floor(Math.random() * 6)
      ],
    },
  },
  setup(props, { emit }) {
    const links = computed(() => props.links);
    const classs = computed(() => ["g-topbar--" + props.type]);
    const logo = computed(()=>props.logo)
    let inputValue = ref("");
    watch(inputValue, (n) => {
      emit("getSearchValue", n);
    });

    return {
      inputValue,
      links,
      classs,
      logo
    };
  },
});
</script>

