<script  lang="ts" setup>
import { computed, defineComponent, ref, watch } from "vue";
import personalData from "./personal.data";
import { Message } from "../packages/message";
import { GAlert } from "../packages/alert";
import { GInput } from "../packages/input";
import { GPersonal } from "../packages/personal";
import { GTopbar } from "../packages/topbar";

let inputValue = ref("");
console.log(inputValue.value);
watch(inputValue, (n) => {
  console.log(n);
});

let searchValue = ref("");

function getSearchValue(e) {
  searchValue.value = e;
}
let arrdata = ref([]);

watch(searchValue, (n) => {
  if (searchValue.value) {
    arrdata.value = personalData.filter(
      (el) =>
        el.name.indexOf(searchValue.value) > -1 ||
        el.gender.indexOf(searchValue.value) > -1 ||
        el.nationality.indexOf(searchValue.value) > -1 ||
        el.adress.indexOf(searchValue.value) > -1 ||
        el.telphone.indexOf(searchValue.value) > -1 ||
        el.identity.indexOf(searchValue.value) > -1
    );
  } else {
    arrdata.value = personalData.slice(0, 20);
  }
});
</script>

<template>
  <g-topbar :links="['主页','关于','用户']" :logo="{title:'golove',src:'https://image.freepik.com/free-vector/letter-g-with-love-logo-design_100735-23.jpg'}" @getSearchValue="getSearchValue" />
  <g-input type="email" bgColor="primary" v-model="inputValue" />
  <g-alert title="success alert" type="success" />
  <button @click="Message({ center: true, type: 'warning' })">message</button>
  <div class="personalcon">
    <g-personal v-for="(e, i) in arrdata" :userInfo="e" :key="i" />
  </div>
</template>

<style>
.personalcon {
  display: flex;
  justify-content: baseline;
  flex-wrap: wrap;
}
</style>
