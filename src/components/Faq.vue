<template>
  <v-expansion-panel>
    <v-expansion-panel-content
      v-for="(item,i) in questions"
      :key="i"
    >
      <div slot="header">{{item.question}}</div>
      <v-card>
        <v-card-text class="grey lighten-3">{{item.answer}}</v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
  export default {
    name: 'Faq',
    computed: {
      questions: function () {
        return [
            {
              question: this.$tc('homePage.faqSection.1.question'),
              answer: this.$tc('homePage.faqSection.1.answer')
            },
            {
              question: this.$tc('homePage.faqSection.2.question'),
              answer: this.$tc('homePage.faqSection.2.answer')
            },
            {
              question: this.$tc('homePage.faqSection.3.question'),
              answer: this.$tc('homePage.faqSection.3.answer')
            },
            {
              question: this.$tc('homePage.faqSection.4.question'),
              answer: this.$tc('homePage.faqSection.4.answer')
            },
            {
              question: this.$tc('homePage.faqSection.5.question'),
              answer: this.$tc('homePage.faqSection.5.answer')
            },
            {
              question: this.$tc('homePage.faqSection.6.question'),
              answer: this.$tc('homePage.faqSection.6.answer')
            }
          ];
      }
    }
  };
</script>

<style scoped>

</style>
