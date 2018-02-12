<template>
  <div id="login">
    <h1 class="login-title">
      <a class="login__cancle-btn" href="javascript:history.go(-1);">取消</a>登录豆瓣
    </h1>
    <el-form :inline="true"
      :model="formInline"
      class="login-form"
      :rules="rules"
      ref="formInline">
      <el-form-item label="" prop="email">
        <el-input v-model="formInline.email" placeholder="邮箱"></el-input>
      </el-form-item>
      <el-form-item label="" prop="pwd">
        <el-input v-model="formInline.pwd" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="login-form__submit" @click = "submitForm('formInline')" :disabled="!validate">登录</el-button>
      </el-form-item>
    </el-form>
    <div class="login-footer">
      <div class="login-footer__find-pwd">使用其他方式登录 &amp; 找回密码</div>
      <div class="login-footer__wrapper">
        <router-link :to="{name: 'Register'}">注册豆瓣帐号</router-link>
        <a href="#">下载豆瓣App</a>
      </div>
    </div>
  </div>
</template>

<script>
import AsyncVilator from 'async-validator'

export default {
  name: 'jmLoginShow',
  data () {
    return {
      formInline: {
        pwd: null,
        email: null
      },
      rules: {
        email: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '密码不能为空', trigger: 'blur' },
          { min: 6, message: '密码要求最少6位', trigger: 'change' }
        ]
      }
    }
  },
  mounted () {
    console.log('123')
  },
  methods: {
    submitForm (formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log('可以提交')
        }
      })
    }
  },
  computed: {
    validate () {
      let validator = new AsyncVilator(this.rules)
      let result = false
      validator.validate(this.formInline, (errors) => {
        if (!errors) {
          return true
        }
      })
      return result
    }
  }
}
</script>

<style lang="scss" scoped>
#login {
  .login-title {
    height: 4.5rem;
    margin: 0 0 1rem;
    padding: 0 1.8rem;
    line-height: 4.5rem;
    background: #fff;
    border-bottom: .1rem solid #eee;
    text-align: center;
    font-size: 1.8rem;
    font-weight: 700;
  }
  .login__cancle-btn {
    position: absolute;
    left: 1.8rem;
    top: 0;
    color: #42bd56;
    font-size: 1.5rem;
    font-weight: 400;
  }
  .login-form {
    padding: 2rem 1.5rem;
    .el-form-item {
      margin-bottom: 0;
    }
  }
  .login-form__submit {
    cursor: pointer;
    width: 28.3rem;
    padding: 1.2rem 2.6rem;
    margin-top: 1rem;
    font-size: 1.7rem;
    text-align: center;
    color: #fff;
    // background: #17aa52;
    // border: .1rem solid #17aa52;
    border-radius: .3rem;
  }
  .login-footer {
    .login-footer__find-pwd {
      font-size: 1.5rem;
      color: #aaa;
      text-align: center;
    }
    .login-footer__wrapper {
      margin-top: 4rem;
      text-align: center;
      font-size: 1.5rem;
      a {
        color: #42bd56;
      }
    }
  }
}
</style>

<style lang="scss">
#login {
  .login-form {
    .el-input__inner {
      width: 28.3rem;
      height: 4.4rem;
    }
  }
}
</style>
