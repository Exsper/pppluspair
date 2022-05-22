<template>
  <el-form
    label-width="100px"
    style="max-width: 460px; min-width: 320px; margin: auto"
  >
    <el-row>
      <el-col :span="16"
        ><el-form-item label="玩家名或uid">
          <el-autocomplete
            v-model="username"
            value-key="username"
            :fetch-suggestions="querySearch"
            @select="handleSelect"
          /> </el-form-item
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
    <el-row>
      <el-col :span="4"></el-col>
      <el-col :span="10">
        <el-button type="primary" @click="saveData">保存该玩家数据</el-button>
      </el-col>
      <el-col :span="10">
        <el-button type="primary" @click="delData">删除该玩家数据</el-button>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
import { PPPlus, Api } from "@/common/js/Api.js";
import { ElMessage } from "element-plus";

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
        [
          this.jump,
          this.flow,
          this.accuracy,
          this.stamina,
          this.speed,
          this.precision,
        ] = [0, 0, 0, 0, 0, 0];
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
        ElMessage.success("获取玩家 " + this.username + " 数据成功");
        this.buttonDisabled = false;
      } catch (ex) {
        this.msg = ex;
        ElMessage.error(ex);
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
    saveData() {
      this.$store.commit("addPlayerInfo", this.toPPP().toStoreObj());
      ElMessage.success("添加成功");
    },
    delData() {
      this.$store.commit("delPlayerInfo", this.username);
      ElMessage.success("删除成功");
    },
    querySearch(queryString, cb) {
      let namelist = this.$store.getters.playerNameList;
      const results = queryString
        ? namelist.filter((value) => {
            return (
              value.username
                .toLowerCase()
                .indexOf(queryString.toLowerCase()) === 0
            );
          })
        : namelist;
      cb(results);
    },
    handleSelect(username) {
      let playerInfo = this.$store.getters.getplayerInfo(username);
      [
        this.jump,
        this.flow,
        this.accuracy,
        this.stamina,
        this.speed,
        this.precision,
        this.msg,
      ] = [
        playerInfo.aimJump,
        playerInfo.aimFlow,
        playerInfo.accuracy,
        playerInfo.stamina,
        playerInfo.speed,
        playerInfo.precision,
        "数据保存于： " + playerInfo.date,
      ];
    },
  },
};
</script>

<style></style>
