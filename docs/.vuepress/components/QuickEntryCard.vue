<template>
  <div class="features">
    <div v-for="(item,i) in list" :key="i" class="feature" @click="$router.push({path: item.path})">
      <h2>{{item.title}}</h2>
      <p>{{item.desc}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'QuickEntryCard',
    data(){
      return {
        list: [
        {
          title: '测试技能',
          desc: '欢迎来到 Dimples文档站',
          path: 'onBoarding/apitest'
        },
        ]
      }
    }
  }
</script>

<style lang="less" scoped>

  .feature {
    box-sizing: border-box;
    padding: 2px 10px;
    border-radius: 6px;
    margin-bottom: 20px;
    cursor: pointer;
    transition: all .5s ease;
    &:hover{
      transition: all .5s ease;
      p,h2 {color: #3eaf7c;}
    }
  }
</style>
