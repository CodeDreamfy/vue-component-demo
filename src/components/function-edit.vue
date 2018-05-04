<template>
  <div class="function-edit">
    <ul class="content-list">
      <template v-for="(item, index) in resData.template.properties">
        <li :key="item.function_id" >
          <span class="drag-handle">☰</span>
          <div class="outerbox">
            <span class="model-tit">{{ filterFunction(item.function_id) }}</span>
            <div class="model-content">
              <el-select class="selectItem"
                @change="increment(...arguments, index)"
                size="small" v-model="arr[index]"
                placeholder="请选择">
                <el-option
                  v-for="m in modelSize"
                  :key=m.value
                  :label="m.label"
                  :value="m.value">
                </el-option>
              </el-select>
              <el-button size="small">选择背景</el-button>
            </div>
          </div>
        </li>
      </template>
    </ul>
    <el-button type="primary" round @click="emmit">预览</el-button>
  </div>
</template>

<script>
import Sortable from 'sortablejs';
import rData from '../utils/prop';

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
      arr: [],
      resData: null,
      modelSize: [
        {
          value: 'BIG',
          label: '大模块',
        },
        {
          value: 'MIDDLE',
          label: '中模块',
        },
        {
          value: 'SMALL',
          label: '小模块',
        },
        {
          value: 'NONE',
          label: '不显示',
        },
      ],
    };
  },
  computed: {},
  methods: {
    filterFunction(val) {
      var c =  this.resData.functions.find(elem => elem._id === val);  // eslint-disable-line
      return c.name;
    },
    increment(value, index) {
      this.resData.template.properties[index].type = value;
    },
    emmit() {
      this.$emit('increment', this.resData);
    },
  },
  created() {
    this.resData = rData.data;
    this.$emit('increment', this.resData);
  },
};
</script>

<style>

</style>
