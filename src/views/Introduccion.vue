<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    p.mb-4 Esta unidad aborda la importancia de comprender cómo la sociedad y sus dinámicas influyen en el proceso de enseñanza-aprendizaje. Los logros académicos y personales de los estudiantes están condicionados por factores como su alimentación, acceso a recursos básicos y el contexto en el que residen. Estos elementos afectan significativamente el aprendizaje y el desarrollo personal, siendo necesario analizar cómo los entornos moldean las oportunidades educativas. 
    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        .bg-rosa.p-4.mb-4
          span El aprendizaje no ocurre en un vacío; está profundamente vinculado a las circunstancias socioeconómicas, culturales y familiares de los estudiantes. En contextos de pobreza, especialmente en zonas rurales o urbanas marginales, las carencias en infraestructura, tecnología y apoyo familiar dificultan el acceso y la calidad de la educación. Además, la cultura y las dinámicas sociales del entorno donde crece el estudiante desempeñan un papel crucial en su desarrollo personal, social y académico, planteando desafíos adicionales para el docente.
        span El objetivo de esta unidad es sensibilizar a los futuros docentes sobre las realidades del sistema educativo, especialmente en contextos con profundas desigualdades como Colombia. Se busca proporcionar herramientas pedagógicas y didácticas que permitan a los educadores afrontar los desafíos del contexto escolar, ayudando a sus estudiantes a superar las barreras impuestas por su entorno. Con un enfoque crítico y analítico, los docentes podrán intervenir de manera objetiva y sensible, promoviendo el aprendizaje como una vía para la emancipación y el desarrollo integral de sus estudiantes.
      .col-5.d-none.d-xl-block(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-1.png', alt='Texto que describa la imagen')



    
</template>

<script>
import BannerInterno from '../components/plantilla/BannerInterno'
import Muestras from '../components/muestras/Muestras.vue'

export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
    Muestras,
  },
  data: () => ({
    globalData: global,
  }),
}
</script>

<style lang="sass"></style>
