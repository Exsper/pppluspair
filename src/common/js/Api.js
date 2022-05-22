const axios = require("axios");

class PPPlus {
  constructor(user_data) {
    this.username = user_data.UserName;
    this.accuracy = user_data.AccuracyTotal;
    // this.aim = user_data.AimTotal;
    this.aimFlow = user_data.FlowAimTotal;
    this.aimJump = user_data.JumpAimTotal;
    // this.ppp = user_data.PerformanceTotal;
    this.precision = user_data.PrecisionTotal;
    this.speed = user_data.SpeedTotal;
    this.stamina = user_data.StaminaTotal;
  }

  /**
   * 获取原始六维数据
   * @returns {Array<number>}
   */
  getValues() {
    return [
      this.aimJump,
      this.aimFlow,
      this.accuracy,
      this.stamina,
      this.speed,
      this.precision,
    ];
  }

  toStoreObj() {
    return {
      [this.username]: {
        accuracy: this.accuracy,
        aimFlow: this.aimFlow,
        aimJump: this.aimJump,
        precision: this.precision,
        speed: this.speed,
        stamina: this.stamina,
        date: new Date().toLocaleString(),
      },
    };
  }

  /**
   * 获取标准化六维长度
   * @param {number} rotate 顺时针旋转格数
   * @returns {Array<number>}
   */
  getStdValues(rotate = 0) {
    let _jump = 1.92 * this.aimJump ** 0.953;
    let _flow = 69.7 * this.aimFlow ** 0.596;
    let _pre = 19.8 * this.precision ** 0.8;
    let _spd = 0.588 * this.speed ** 1.175;
    let _sta = 3.06 * this.stamina ** 0.993;
    let _acc = 14.1 * this.accuracy ** 0.769;
    switch (rotate) {
      case 1:
        return [_pre, _jump, _flow, _acc, _sta, _spd];
      case 2:
        return [_spd, _pre, _jump, _flow, _acc, _sta];
      case 3:
        return [_sta, _spd, _pre, _jump, _flow, _acc];
      case 4:
        return [_acc, _sta, _spd, _pre, _jump, _flow];
      case 5:
        return [_flow, _acc, _sta, _spd, _pre, _jump];
      default:
        return [_jump, _flow, _acc, _sta, _spd, _pre];
    }
  }

  /**
   * 获取作图数据
   * @param {number} rotate 顺时针旋转格数
   * @returns {Object} draw data
   */
  getDrawData(rotate = 0) {
    rotate = rotate % 6;
    let r = this.getStdValues(rotate);
    r = [r[2], r[1], r[0], r[5], r[4], r[3], r[2]];
    r.push(r[0]);
    return {
      type: "scatterpolar",
      r,
      theta: [
        "Accuracy",
        "Flow",
        "Jump",
        "Precision",
        "Speed",
        "Stamina",
        "Accuracy",
      ],
      fill: "toself",
      name:
        rotate === 0
          ? this.username
          : this.username + " (顺时针旋转" + rotate + "格)",
    };
  }

  /**
   * 获取归一化六维长度
   * @param {number} rotate 顺时针旋转格数
   * @returns {Array<number>}
   */
  getNorValues(rotate) {
    let values = this.getStdValues(rotate);
    let d =
      values.reduce((sum, value) => {
        return sum + value ** 2;
      }, 0) ** 0.5;
    return values.map((value) => value / d);
  }

  /**
   * 比较两个六维数据的相似程度
   * 为了更加明显地区分，将 (1 - θ / 2π) * 100 的结果/10再^2
   * @param {PPPlus} ppp 比较目标
   * @param {number} rotateLeft 左边顺时针旋转格数
   * @param {number} rotateRight 右边顺时针旋转格数
   * @returns {number} 相似程度，0-100
   */
  compareTo(ppp, rotateLeft = 0, rotateRight = 0) {
    let _norvalues = ppp.getNorValues(rotateRight);
    let dp =
      this.getNorValues(rotateLeft).reduce((sum, value, index) => {
        return sum + value * _norvalues[index];
      }, 0) ** 0.5;
    return ((1 - (Math.acos(dp) * 2) / Math.PI) * 10) ** 2;
  }
}

class Api {
  /**
   * @param {object} options 设置
   * @param {string} options.base api网址，默认为"https://syrin.me/pp+/api"
   */
  constructor(options) {
    this.base = options?.base ?? "https://syrin.me/pp+/api";
  }

  /**
   * 获取玩家pp+信息
   * @param {string} user
   * @returns
   */
  async getUser(user) {
    let response;
    try {
      response = await axios.get(`${this.base}/user/${user}/`);
    } catch (ex) {
      throw "连接pp+网站失败，请过段时间重试或手动输入数据";
    }
    if (!response || !response?.data)
      throw "获取数据失败，请过段时间重试或手动输入数据";
    if (!response?.data?.user_data) throw "查不到玩家 " + user + " 的信息";
    return new PPPlus(response?.data?.user_data);
  }
}

module.exports.PPPlus = PPPlus;
module.exports.Api = Api;
