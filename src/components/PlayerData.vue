<template>
  <el-form label-position="left" label-width="100px" style="max-width: 460px">
    <el-row :gutter="24">
      <el-col :span="16"
        ><el-form-item label="玩家名或uid">
          <el-input v-model="username" /> </el-form-item
      ></el-col>
      <el-col :span="4"
        ><el-button type="primary" @click="getData" :disabled="buttonDisabled"
          >获取pp+数据</el-button
        ></el-col
      >
    </el-row>
    <span>{{ msg }}</span>
    <br />
    <el-form-item label="Jump">
      <el-input v-model="jump" />
    </el-form-item>
    <el-form-item label="Flow">
      <el-input v-model="flow" />
    </el-form-item>
    <el-form-item label="Precision">
      <el-input v-model="precision" />
    </el-form-item>
    <el-form-item label="Speed">
      <el-input v-model="speed" />
    </el-form-item>
    <el-form-item label="Stamina">
      <el-input v-model="stamina" />
    </el-form-item>
    <el-form-item label="Accuracy">
      <el-input v-model="accuracy" />
    </el-form-item>
  </el-form>
</template>

<script>
import { PPPlus, Api } from "@/common/js/Api.js";

export default {
  name: "PlayerData",
  data() {
    return {
      buttonDisabled: false,
      msg: " ",
      username: "",
      jump: 0,
      flow: 0,
      precision: 0,
      speed: 0,
      stamina: 0,
      accuracy: 0,
    };
  },
  methods: {
    async getData() {
      try {
        this.msg = " ";
        this.buttonDisabled = true;
        let api = new Api();
        let ppp = await api.getUser(this.username);
        this.username = ppp.username;
        [
          this.jump,
          this.flow,
          this.accuracy,
          this.stamina,
          this.speed,
          this.precision,
        ] = ppp.getValues();
        this.buttonDisabled = false;
      } catch (ex) {
        this.msg = ex;
        this.buttonDisabled = false;
      }
    },
    toPPP() {
      return new PPPlus({
        UserName: this.username,
        AccuracyTotal: this.accuracy,
        FlowAimTotal: this.flow,
        JumpAimTotal: this.jump,
        PrecisionTotal: this.precision,
        SpeedTotal: this.speed,
        StaminaTotal: this.stamina,
      });
    },
  },
};
</script>

<style></style>
