<template>
  <div class="about-page-wrapper">
    <el-card class="about-card">
      <div class="about-content">
        <h2 class="title">关于本项目</h2>
        <p class="section-text">
          本项目为“大学生创新训练计划”之成果，旨在服务本校学生的学习资源流通，建立一个互助互享的社区。
        </p>
        <p class="section-text">
          本人深感一份恰到好处的复习资料对于期末亦或其他学习目标的促进作用之大，以及种种主客观因素导致的资源闭塞之痛。因此，认为此项目在参与比赛之外颇具实用价值，故决定自费将项目上线，希望能真正帮助到更多同学。
        </p>
        <p class="section-text highlight">
          然而，资源生态的丰富绝非一人之力可为，希望大家能积极贡献，人人为我，我为人人！
        </p>
        <p class="section-text">
          最后，团队成员皆为“干中学”，页面粗糙，功能简陋，还请大家多多包涵。
        </p>
        
        <el-divider class="custom-divider" />
        
        <div class="team-section">
          <h3 class="subtitle">特别鸣谢</h3>
          <ul class="acknowledgements-list">
            <li><strong>指导老师：</strong>栾翠菊老师，为我们提供了宝贵的想法和指导。</li>
            <li><strong>团队成员：</strong>程怡宁、杨江伟、阮自信，贡献了宝贵的时间和精力。</li>
          </ul>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
// AboutPage.vue 仅展示关于页面内容，不包含布局
</script>

<style scoped>
.about-page-wrapper {
  padding: 40px;
  background-color: #f0f2f5;
  min-height: calc(100vh - 80px); /* 保持页面美观，避免内容过少时塌陷 */
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-card {
  max-width: 800px;
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
}

.about-content {
  padding: 20px 40px;
  text-align: center;
}

.title {
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  border-bottom: 2px solid #409eff;
  display: inline-block;
  padding-bottom: 5px;
}

.section-text {
  font-size: 16px;
  line-height: 1.8;
  color: #555;
  margin-bottom: 20px;
  text-align: left;
}

.section-text.highlight {
  font-weight: 600;
  color: #409eff;
  background-color: #ecf5ff;
  border-left: 4px solid #409eff;
  padding: 10px 15px;
  border-radius: 4px;
}

.custom-divider {
  margin: 40px 0;
}

.team-section {
  text-align: left;
}

.subtitle {
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 15px;
}

.acknowledgements-list {
  list-style-type: none;
  padding-left: 0;
}

.acknowledgements-list li {
  font-size: 16px;
  line-height: 2;
  color: #666;
}
</style>
