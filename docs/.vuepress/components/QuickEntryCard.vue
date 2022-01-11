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
          title: '入职指南',
          desc: '欢迎来到 YUN HI - QA团队，这里帮助你快速融入团队',
          path: 'onBoarding/account'
        },
        {
          title: '分享指南',
          desc: '分享是让我们协作更高效，这里一看就知道',
          path: 'share/guide'
        },
        {
          title: '项目导航',
          desc: 'YUN HI 团队业务线所有仓库导航',
          path: 'repo/jobmd'
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
