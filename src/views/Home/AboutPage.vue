<template>
  <div class="page-content-wrapper">
    <h1 class="about-page-title">关于本项目</h1>
    <div class="about-page-text">
      <p class="section-title">前言</p>
      <p>
        来到一所大学，从第一次接触许多课，直到一门一门完成，这个过程中我们时常收集起许多资料和情报。
      </p>
      <p>
        有些是需要在网上搜索的电子书，每次见到一门新课程，Google
        一下教材名称，有的可以立即找到，有的却是要花费许多眼力；有些是历年试卷或者
        A4 纸，前人精心收集制作，抱着能对他人有用的想法公开，却需要在各个群或者
        CC98
        中摸索以至于从学长手中代代相传；有些是上完一门课才恍然领悟的技巧，原来这门课重点如此，当初本可以更轻松地完成得更好……
      </p>
      <p>
        我也曾很努力地收集各种课程资料，但到最后，某些重要信息的得到却往往依然是纯属偶然。这种状态时常令我感到后怕与不安。我也曾在课程结束后终于有了些许方法与总结，但这些想法无处诉说，最终只能把花费时间与精力才换来的经验耗散在了漫漫的遗忘之中。
      </p>
      <p>我为这一年一年，这么多人孤军奋战的重复劳动感到不平。</p>
      <p>
        我希望能够将这些隐晦的、不确定的、口口相传的资料和经验，变为公开的、易于获取的和大家能够共同完善、积累的共享资料。
      </p>
      <p>
        我希望只要是前人走过的弯路，后人就不必再走。这是我的信念，也是我建立这个项目的原因。
      </p>
      <p class="section-title">特性</p>
      <p>本项目至今为止收录了以下内容：</p>
      <ul>
        <li>选课攻略</li>
        <li>电子版教材</li>
        <li>平时作业答案</li>
        <li>历年试卷</li>
        <li>复习资料</li>
        <li>开卷考试 A4 纸</li>
      </ul>
      <p>等等。目前项目已覆盖大多数计科的专业课程。</p>

      <p>以上内容非原创</p>
    </div>
  </div>
</template>

<script setup>
// AboutPage.vue 仅展示关于页面内容，不包含布局
</script>

<style scoped>
.page-content-wrapper {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.about-page-title {
  font-family: "思源黑体", sans-serif;
  font-size: 3rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 40px 0;
  padding-bottom: 15px;
  border-bottom: 2px solid #409eff;
  text-align: left;
}

.about-page-text {
  font-family: "Alimama DaoLiTi", "思源黑体", sans-serif;
  font-size: 1.25rem;
  line-height: 1.8;
  color: #444;
  text-align: left;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

.about-page-text p {
  margin-bottom: 1.5rem;
  text-indent: 2em;
}

.section-title {
  font-size: 1.75rem;
  font-weight: 600;
  color: #2c3e50;
  margin: 2.5rem 0 1.5rem;
  text-indent: 0;
  padding-left: 10px;
  border-left: 4px solid #409eff;
}

/* 声明文本样式 */
</style>
