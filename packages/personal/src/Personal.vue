<template>
  <div class="g-personal" :class="classs">
    <img
      :src="
        userInfo.avatar
          ? userInfo.avatar
          : 'https://i.loli.net/2021/07/11/QGjex8blPUmSB7z.jpg'
      "
      alt="avatar"
    />
    <div class="g-personal-content">
      <p>
        <span class="g-personal-captal">姓 名</span>
        <span>&nbsp;&nbsp;{{ userInfo.name }}</span>
      </p>
      <p>
        <span class="g-personal-captal">性 别</span>
        <span>&nbsp;&nbsp;{{ userInfo.gender }}&nbsp;&nbsp;</span
        >&nbsp;&nbsp;&nbsp;
        <span class="g-personal-captal">民 族</span>
        <span>&nbsp;&nbsp;{{ userInfo.nationality }}</span>
      </p>
      <p>
        <span class="g-personal-captal">出 生</span>
        <span>&nbsp;&nbsp;{{ userInfo.identity.slice(6, 10) }}</span>
        <span class="g-personal-captal">&nbsp;&nbsp;年</span>
        <span>&nbsp;&nbsp;{{ userInfo.identity.slice(10, 12) }}</span>
        <span class="g-personal-captal">&nbsp;月</span>
        <span>&nbsp;&nbsp;{{ userInfo.identity.slice(12, 14) }}</span>
        <span class="g-personal-captal">&nbsp;日</span>
      </p>
      <p>
        <span class="g-personal-captal">住 址</span>&nbsp;
        <span>{{ userInfo.adress }}</span>
      </p>
      <p>
        <span class="g-personal-captal">电 话</span>
        <span>&nbsp;&nbsp;{{ userInfo.telphone }}</span>
      </p>
      <p>
        <span class="g-personal-captal">身 份 证</span>
        <span class="g-personal-id">&nbsp;{{ userInfo.identity }}</span>
      </p>
      <!-- <button class="button">submit</button> -->
    </div>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, PropType } from "@vue/runtime-core";
import type { Itype } from "../../utils/types";
import type { IUserInfo } from "./personal.type";
export default defineComponent({
  props: {
    userInfo: {
      type: Object as PropType<IUserInfo>,
      default: () => {},
    },

    type: { type: String as PropType<Itype>, default:["primary" ,"info","error","warning","danger","success"][Math.floor(Math.random()*6)]},
  },
  setup(props) {
    const classs = computed(() => ["g-personal--" + props.type]);
    return {
      classs,
    };
  },
});
</script>
