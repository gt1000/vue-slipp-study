<template>
  <form @submit.prevent="submitForm">
    <div>
      <label for="userId">아이디</label>
      <input type="text" id="userId" v-model="userId" />
    </div>
    <div>
      <label for="password">비밀번호</label>
      <input type="text" id="password" v-model="password" />
    </div>
<!--    <button type="submit" disabled>로그인</button>-->
    <button :disabled="!isLoginValid" type="submit">로그인</button>

    <p>{{ logMessage }}</p>
  </form>
</template>

<script>
import { loginUser } from "../api";
import { isNotEmpty } from "../utils/validation";

export default {
  name: "LoginForm.vue",
  data() {
    return {
      userId: '',
      password: '',
      logMessage: '',
    };
  },
  computed: {
    // 매번 자동으로 연산
    isLoginValid() {
      if(isNotEmpty(this.userId) && isNotEmpty(this.password)) return true;
      else return false;
    }
    // isUserIdValid() {
    //   return isNotEmpty(this.userId);
    // },
    // isPasswordValid() {
    //   return isNotEmpty(this.password);
    // }
  },

  // 컴포넌트 내에서 사용할 메소드를 정의. 이곳에 작성된 메서드는 this를 통해서 접근해야 함
  methods: {
    async submitForm() {
      try {
        // 비지니스 로직
        const userData = {
          userId: this.userId,
          password: this.password
        };

        const { data } = await loginUser(userData);
        // const response = await loginUser(userData)

        console.log(data.user.userId);

        // store 의 mutation을 호출, 원래는 data.user.userId가 세팅 되어야 함
        this.$store.commit('setUserId', this.userId);

        // 메인 페이지로 이동
        this.$router.push('/main');
        // <router-link to="">를 자바 스크립트에서 사용하는 개념

        // this.logMessage = `${data.user.userId} 님 환영 합니다.`;
      } catch (error) {
        // 에러 처리
        console.log(error.response);
        this.logMessage = error.response.data;
      } finally {
        this.initForm();
      }
    },
    initForm() {
      this.userId = '';
      this.password = '';
    }
  }
}
</script>

<style scoped>

</style>