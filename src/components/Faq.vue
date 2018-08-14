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
    data () {
      return {
        questions: [
          {
            question: "Care este procesul de uscare a prunelor?",
            answer: "Prunele se usuca la temperatura de 70 – 80 de grade pe lemne, fără fum, în cuptor."
          },
          {
            question: "Prunele pot fi utilizate în dieta copiilor mici?",
            answer: "Prunele tari sunt cele mai sănătoase şi indicate pentru copii, nu conţin substanţe chimice. Prunele moi şi cele fără sâmbure conţin surbat, în cantităţi nesemnificative, conform normelor alimentare. Pot fi consumate de copii."
          },
          {
            question: "Care este termenul de valabilitate a prunelor uscate?",
            answer: "Prunele uscate pot fi păstrate la loc uscat, la temperatura camerei, timp de şase luni."
          },
          {
            question: "Cum se efectuează plata?",
            answer: "Plata se efectuează în numerar sau cu cardul la livrarea produsului."
          },
          {
            question: "În cât timp se realizează livrarea produsului?",
            answer: "Prunele se livrează în maximum 24 de ore."
          },
          {
            question: "Se pot cumpăra en gros?",
            answer: "Da, pentru detalii, contactaţi-ne la numărul de telefon: 060362829, sau accesați secțiunea \"contactează-ne\""
          }
        ]
      };
    }
  };
</script>

<style scoped>

</style>
