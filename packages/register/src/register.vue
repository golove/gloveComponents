<template>
  <div class="g-register">
    <h2>register</h2>
    <div class="g-register-inputgroup">
      <div>
        <svg>
          <use xlink:href="#user" />
        </svg>
        <input placeholder="昵称" type="text" v-model="name" />
      </div>

      <div>
        <svg @click="showPassword">
          <use :xlink:href="showPassFlag ? '#eyeopen' : '#eyeoff'" />
        </svg>
        <input
          id="password"
          placeholder="密码"
          v-model="password"
          :type="showPassFlag ? 'text' : 'password'"
        />
        <label for="password"></label>
      </div>

      <div>
        <svg>
          <use xlink:href="#email" />
        </svg>
        <input
          id="emailInput"
          placeholder="请输入常用邮箱账号"
          type="email"
          v-model="email"
        />
        <label for="emailInput"></label>
      </div>

      <div>
        <svg>
          <use :xlink:href="vertifyFlag ? '#check' : '#close'" />
        </svg>
        <input placeholder="请输入邮箱验证码" type="text" v-model="vertify" />
        <button @click="submitEmailCode" :disabled="emailFlag">
          {{ emailBtnFlag ? "点击获取" : `${timeOut}秒后重新获取` }}
        </button>
      </div>
    </div>

    <div class="g-register-buttongroup">
      <button>注冊</button>
      <button :disabled="!disabledFlag" @click="submit">登錄</button>
    </div>

    <div class="g-register-checkbox">
      <input
        id="checkbox-1"
        v-model="checked"
        name="checkbox"
        type="checkbox"
      />
      <label for="checkbox-1" class="checkbox-label"
        >我已同意<a href="#">《golove网用户使用协议》</a>和<a href="#"
          >《golove隐私政策》</a
        ></label
      >
    </div>

    <div v-show="showfalg">
      {{ registerflag ? "登陆登陆成功!!!" : "登陆失败,用户名或密码错误!!" }}
    </div>
  </div>

  <svg
    style="display: none"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <symbol id="email" viewBox="0 0 24 24">
      <path
        d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"
      />
    </symbol>
    <symbol id="eyeopen" viewBox="0 0 24 24">
      <path
        d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"
      />
    </symbol>
    <symbol id="eyeoff" viewBox="0 0 24 24">
      <path
        d="M11.83,9L15,12.16C15,12.11 15,12.05 15,12A3,3 0 0,0 12,9C11.94,9 11.89,9 11.83,9M7.53,9.8L9.08,11.35C9.03,11.56 9,11.77 9,12A3,3 0 0,0 12,15C12.22,15 12.44,14.97 12.65,14.92L14.2,16.47C13.53,16.8 12.79,17 12,17A5,5 0 0,1 7,12C7,11.21 7.2,10.47 7.53,9.8M2,4.27L4.28,6.55L4.73,7C3.08,8.3 1.78,10 1,12C2.73,16.39 7,19.5 12,19.5C13.55,19.5 15.03,19.2 16.38,18.66L16.81,19.08L19.73,22L21,20.73L3.27,3M12,7A5,5 0 0,1 17,12C17,12.64 16.87,13.26 16.64,13.82L19.57,16.75C21.07,15.5 22.27,13.86 23,12C21.27,7.61 17,4.5 12,4.5C10.6,4.5 9.26,4.75 8,5.2L10.17,7.35C10.74,7.13 11.35,7 12,7Z"
      />
    </symbol>

    <symbol id="user" viewBox="0 0 24 24">
      <path
        d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"
      />
    </symbol>
    <symbol id="email" viewBox="0 0 24 24">
      <path
        d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"
      />
    </symbol>
    <symbol id="check" viewBox="0 0 24 24">
      <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
    </symbol>
    <symbol id="close" viewBox="0 0 24 24">
      <path
        d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
      />
    </symbol>
  </svg>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";

export default defineComponent({
  props: {
    showfalg: {
      type: Boolean,
      default: false,
    },
    registerflag: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    let name = ref("");
    let password = ref("");
    let email = ref("");
    let vertify = ref("");
    let emailCode = '';
    let emailBtnContext = ref("点击获取");
    let vertifyFlag = ref(false);
    let emailFlag = ref(true);
    let showPassFlag = ref(false);
    let disabledFlag = ref(true);
    let emailBtnFlag = ref(true);
    let timeOut = ref(0);
    let checked = ref(false);
    // 验证邮箱
    function checkEmail(str: string) {
      let re = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
      if (re.test(str)) {
        return false;
      } else {
        return true;
      }
    }
    watch(email, (n) => {
      // console.log(n);
      emailFlag.value = checkEmail(n);
    });

    watch(vertify,(n)=>{
      console.log(n==emailCode)
    })

    function showPassword() {
      showPassFlag.value = !showPassFlag.value;
    }

    function submitEmailCode() {
      setTimeOut(180);
      setTimeout(() => {
        emailBtnFlag.value = false;
        emailCode = "qwert";
      }, 1000);
    }
    function setTimeOut(time: number) {
      let set = setInterval(() => {
        timeOut.value = time--;
        if (time < 0) {
          clearInterval(set);
          emailBtnFlag.value = true;
        }
      }, 1000);
    }

    disabledFlag = computed(
      () =>
        checked.value &&
        vertify.value == emailCode&&
        !emailFlag.value&&
        name.value !== "" &&
        password.value !== ""
    );

    console.log(disabledFlag.value)

    function submit() {}

    return {
      name,
      password,
      email,
      vertify,
      emailFlag,
      checked,
      submit,
      timeOut,
      emailBtnFlag,
      showPassFlag,
      showPassword,
      vertifyFlag,
      submitEmailCode,
      disabledFlag,
      emailBtnContext,
    };
  },
});
</script>
