<template>
  <div class="common-layout">
    <el-container>
      <el-main>
        <el-row justify="center" :gutter="24">
          <el-col :span="11" style="min-width: 340px; padding-bottom: 12px"
            ><LeftPlayerTable ref="leftplayer"
          /></el-col>
          <el-col :span="11" style="min-width: 340px; padding-bottom: 12px"
            ><RightPlayerTable ref="rightplayer"
          /></el-col>
        </el-row>
        <br />
        <el-row justify="center">
          <el-button type="primary" @click="draw">比一比</el-button>
        </el-row>
        <br />
        <el-row justify="center">
          <el-col><span :hidden="msg === ''">两人的相似程度为</span></el-col>
          <el-col
            ><span class="pairMsg">{{ msg }}</span></el-col
          >
        </el-row>
        <el-row justify="center">
          <div id="graph"></div>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import LeftPlayerTable from "@/components/PlayerData.vue";
import RightPlayerTable from "@/components/PlayerData.vue";

export default {
  name: "HomeView",
  components: {
    LeftPlayerTable,
    RightPlayerTable,
  },
  setup() {
    if (!window.Plotly) {
      let element = document.createElement("script");
      //element.setAttribute("src", "https://cdn.plot.ly/plotly-latest.min.js");
      element.setAttribute(
        "src",
        "https://cdn.staticfile.org/plotly.js/1.58.5/plotly.min.js"
      );
      document.getElementsByTagName("head")[0].appendChild(element);
    }
  },
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    draw() {
      let leftppp = this.$refs.leftplayer.toPPP();
      let rightppp = this.$refs.rightplayer.toPPP();
      let layout = {
        polar: {
          radialaxis: {
            visible: false,
            // range: [0, 10000],
          },
        },
      };
      window.Plotly.newPlot(
        "graph",
        [leftppp.getDrawData(), rightppp.getDrawData()],
        layout
      );
      this.msg = leftppp.compareTo(rightppp)?.toFixed(2) + "%";
    },
  },
};
</script>

<style scoped>
.pairMsg {
  font: 24px sans-serif;
}
</style>
