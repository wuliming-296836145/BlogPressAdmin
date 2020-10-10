<template>
  <div class="login">
    <div class="login-container">
      <div class="login_box">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="50px"
          class="demo-ruleForm"
        >
          <el-form-item label="账号" prop="accout">
            <el-input
              type="text"
              v-model="ruleForm.accout"
              autocomplete="off"
              prefix-icon="el-icon-s-custom"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input
              type="password"
              v-model="ruleForm.pass"
              show-password
              prefix-icon="el-icon-lock"
            ></el-input>
          </el-form-item>
          <el-form-item class="login_buts">
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"))
      } else {
        callback()
      }
    }
    var validateAccout = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入账号"))
      } else if (value.length < 2) {
        callback(new Error("请输入正确账号!"))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        accout: "admin",
        pass: "123456",
      },
      rules: {
        accout: [{ validator: validateAccout, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
      },
    }
  },
  methods: {
    submitForm(formName) {
      console.log(formName)
      this.$refs[formName].validate(async (valid) => {
        if (!valid) {
          alert("登录失败，请输入正确的用户名和密码！")
          return false
        }
        //   登录接口请求
        // const { data: res } = await this.$http.post("login", {
        //   username: this.ruleForm.accout,
        //   password: this.ruleForm.pass,
        // })
        // if (res.meta.status !== 200) {
        //   this.$message.error("登陆失败!")
        //   return false
        // }
        // this.$message.success("恭喜您! 登陆成功!")
        console.log(res)
        // 1. 将登录成功之后的 token，保存到客户端的 sessionStorage 中
        //   1.1 项目中除了登录之外的其他API接口，必须在登录之后才能访问
        //   1.2 token 只应在当前网站打开期间生效，所以将 token 保存在 sessionStorage 中
        // window.sessionStorage.setItem("token", res.data.token)
        // 2. 通过编程式导航跳转到后台主页，路由地址是 /home
        this.$router.push("/home")
      })
    },
    // 点击重置,清空表单
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  },
}
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  background-color: #2b4b6b;
}
.login-container {
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 450px;
  height: 300px;
  background-color: #fff;
  border-radius: 5px;
}

.login_box {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding-right: 15px;
  box-sizing: border-box;
}

.login_buts {
  display: flex;
  justify-content: flex-end;
}
</style>