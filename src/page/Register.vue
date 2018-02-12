<template>
  <div id="jm-register">
    <el-row>
      <el-col :xs="24" :sm="24" :md="24">
        <h1>欢迎加入豆瓣</h1>
        <el-form :inline="true" :model="formInline" class="jm-register-form">
          <el-form-item label="">
            <el-input v-model="formInline.email" placeholder="邮箱"></el-input>
          </el-form-item>
          <el-form-item label="">
            <el-input v-model="formInline.pwd" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item label="">
            <el-input v-model="formInline.name" placeholder="用户名"></el-input>
          </el-form-item>
        </el-form>
        <el-button class="jm-register__reg-btn" @click="onSubmit">立即注册</el-button>
        <div class="jm-register-footer">
          <div class="jm-register-footer__agreement">点击「注册」代表你已阅读并同意用户使用协议</div>
          <div class="jm-register__down-btns">
            <a href="#">下载豆瓣App</a>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'jmRegisterShow',
  data () {
    return {
      formInline: {
        email: '',
        name: '',
        pwd: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style lang="scss" scoped>
#jm-register {
  h1 {
    margin: 10% 0 9%;
    font-size: 4rem;
    font-weight: 300;
    color: #42bd56;
    text-align: center;
  }

  .jm-register-form {
    padding: 2rem 1.5rem;
  }

  .jm-register-footer {
    margin-top: 2rem;
    .jm-register-footer__agreement {
      font-size: 1.4rem;
      color: #aaa;
      text-align: center;
    }

    .jm-register__down-btns {
      margin-top: 4rem;
      text-align: center;
      font-size: 1.5rem;

      a {
        color: #42bd56;
        margin-right: 1.5rem;
      }
    }
  }
}
</style>

<style lang="scss">
#jm-register {
  .jm-register-form {
    .el-form-item {
      margin-bottom: 0;
      margin-left: 0;
      box-sizing: border-box;
      background: #fff;
      border-top-left-radius: .3rem;
      border-top-right-radius: .3rem;
      height: 4.4rem;
      .el-form-item__content {
        line-height: 0;
        .el-input {
          .el-input__inner {
            height: 4.4rem !important;
            width: 34.3rem;
          }
        }
      }
    }
  }
  .jm-register__reg-btn {
    padding: 1.2rem 2.6rem;
    margin-left: 1.6rem;
    width: 34.3rem;
    color: #fff;
    font-size: 1.7rem;
    text-align: center;
    background: #42bd56;
    border: .1rem solid #17aa52;
    border-radius: .3rem;
  }
}
</style>
