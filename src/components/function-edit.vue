<template>
  <div class="function-edit">
    <ul class="content-list">
      <li>
        <span class="drag-handle">☰</span>
        <div class="outerbox">
          <span class="model-tit">开关</span>
          <div class="model-content">
            <el-select class="selectItem"
              @change="increment(...arguments,'kaiguan')"
              size="small" v-model="onOffButton"
              placeholder="请选择">
              <el-option
                v-for="item in modelSize"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-button size="small">选择背景</el-button>
          </div>
        </div>
      </li>
      <li>
        <span class="drag-handle">☰</span>
        <div class="outerbox">
          <span class="model-tit">工作模式</span>
          <div class="model-content">
            <el-select
              class="selectItem"
              @change="increment(...arguments,'worktime')"
              size="small" v-model="workButton"
              placeholder="请选择">
              <el-option
                v-for="item in modelSize"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-button size="small">选择背景</el-button>
          </div>
        </div>
      </li>
      <li>
        <span class="drag-handle">☰</span>
        <div class="outerbox">
          <span class="model-tit">制作时间</span>
          <div class="model-content">
            <el-select class="selectItem" size="small" v-model="maketimeButton" placeholder="请选择">
              <el-option
                v-for="item in modelSize"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-button size="small">选择背景</el-button>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Sortable from 'sortablejs';

export default {
  mounted() {
    const el = document.getElementsByClassName('content-list')[0];
    Sortable.create(el, {
      animation: 150,
      handle: '.drag-handle',
    });
  },
  data() {
    return {
      onOffButton: '',
      workButton: '',
      maketimeButton: '',
      modelSize: [{
        value: 3,
        label: '大模块',
      }, {
        value: 2,
        label: '中模块',
      }, {
        value: 1,
        label: '小模块',
      }, {
        value: 0,
        label: '不显示',
      }],
    };
  },
  methods: {
    increment($event, val) {
      console.log($event, val); // eslint-disable-line
      this.$emit('increment', val, $event);
    },
  },
};
</script>

<style>

</style>
