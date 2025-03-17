<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Contextos sociales y su impacto en el aprendizaje'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden


    .row.mb-4
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-2.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7(data-aos="fade-left")
        p.mb-4 El ser humano como especie se ha construido desde la base social. La necesidad de relacionarse con otros, construir y trabajar hacia metas comunes ha permitido su evolución, facilitando la creación de ciudades, culturas, idiomas, arte y avances tecnológicos. Sin embargo, la historia también está llena de conflictos, retrocesos, guerras y sufrimientos, ya que la vida en sociedad no siempre es armónica.
        span Por ello, es crucial entender cómo estas dinámicas impactan la vida humana y, especialmente, el aprendizaje. El formador debe ser capaz de identificar cómo las condiciones socioeconómicas influyen en el aprendizaje de los estudiantes y tomar medidas concretas.
    
    h2 Sociedad
    p.mb-4 El análisis de la palabra sociedad comienza con su etimología, derivada del latín societas, que denota compañía y colaboración. Representa la idea de una agrupación de individuos que, al interactuar, conforman una comunidad. Sin embargo, surge la pregunta: ¿son sociedad y comunidad lo mismo?
    p.mb-4 Alvarado (2010) afirma: <b>"La comunidad no solamente aparece primero que la sociedad, sino que ella es primera, no sólo más antigua que la sociedad, sino anterior a toda distinción entre formas de vida en común".</b> 

    .row.mb-5
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        p.mb-4  Esto destaca que la comunidad es un aspecto natural e innato que permite la adaptación y supervivencia. Por otro lado, la sociedad implica estructuras más complejas.
        .d-flex.align-items-start.bg-rojo.p-4.mb-4(data-aos="fade-right")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-3.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.text-bold.mb-2 Comunidad
            p.pe-xl-3.mb-0(data-aos="fade-up") Aspecto natural e innato, presente en la adaptación y supervivencia.
        .d-flex.align-items-start.bg-rojo.p-4(data-aos="fade-right")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-4.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.text-bold.mb-2 Sociedad
            p.pe-xl-3.mb-0(data-aos="fade-up") Estructura compleja influenciada por dinámicas, paradigmas y políticas.
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-5.png', alt='Texto que describa la imagen')  

    .row.mb-4
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-6.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7(data-aos="fade-left")
        p.mb-4 Autores como Karl Marx, Max Weber y Rousseau presentan perspectivas contrastantes. Marx aborda la lucha de clases y la explotación económica como ejes centrales, mientras Weber analiza las dinámicas humanas desde creencias y valores compartidos. Por su parte, Rousseau critica cómo las estructuras colectivas afectan negativamente la libertad individual, destacando la necesidad de recuperar la esencia humana frente a estas influencias.

        span En este contexto, es crucial que los docentes comprendan la influencia de las dinámicas sociales en la educación, desde la población estudiantil hasta los currículos diseñados.

    h2 Economía
    .row.mb-4
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        p.mb-4 La economía es un componente omnipresente en la vida diaria, determinando aspectos como la ropa, la alimentación y la vivienda. Según Adam Smith, en La riqueza de las naciones (1776), la economía es "la ciencia que estudia la riqueza y su acumulación, basada en el libre mercado y la búsqueda del interés personal". 
        .bg-rosa.p-4.mb-0(data-aos="fade-right")
          span Hernández Pérez y Hernández Pérez (2014) amplían: "La economía estudia la actividad humana como productora, consumidora y distribuidora de bienes, así como la escasez que limita la producción". Esto demuestra cómo la economía impacta no solo en la sociedad, sino también en los procesos educativos.
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-7.png', alt='Texto que describa la imagen')
    p.mb-4 Los factores económicos influyen directamente en la educación, afectando desde la disponibilidad de recursos hasta las oportunidades de acceso y las decisiones familiares relacionadas con la formación. A continuación, se destacan tres aspectos clave:

    .row.mb-4.justify-content-center 
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-8.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Producción
          p.px-1.text-small.mb-0.d-flex.text-center Determina los recursos disponibles para la educación. 
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-9.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Distribución
          p.px-1.text-small.mb-0.d-flex.text-center Influye en el acceso equitativo a materiales y oportunidades educativas. 
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-10.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Consumo
          p.px-1.text-small.mb-0.d-flex.text-center Condiciona las decisiones educativas de las familias según sus posibilidades económicas. 

    h2 Socioeconomía
    .row.mb-4
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        p.mb-4 La socioeconomía aborda la intersección entre la sociedad y la economía, analizando cómo se influyen mutuamente. Pérez (1997) plantea que la socioeconomía combina elementos como:
        ol.lista-ol--cuadro
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta
              span 1
            p.mb-0 Las personas no se entienden solo como seres racionales y calculadores.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta
              span 2
            p.mb-0 Se modifica el argumento de racionalidad.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta
              span 3
            p.mb-0 Se reconoce la influencia del poder político y las instituciones en el mercado.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta
              span 4
            p.mb-0 Se priorizan elementos empíricos en el estudio del comportamiento económico.
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-11.png', alt='Texto que describa la imagen')
    
    p.mb-4 La socioeconomía analiza cómo la economía interactúa con otros aspectos de la vida humana, integrando elementos como la racionalidad, el papel de las instituciones y el uso de datos empíricos. Estos componentes permiten comprender mejor las complejas relaciones entre la economía y la sociedad:

    .row.mb-4.justify-content-center 
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-12.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Racionalidad humana
          p.px-1.text-small.mb-0.d-flex.text-center Considera emociones y contextos en las decisiones económicas.
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-13.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Instituciones y poder
          p.px-1.text-small.mb-0.d-flex.text-center Analiza cómo la política y las instituciones moldean las dinámicas económicas.
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-14.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Factores empíricos
          p.px-1.text-small.mb-0.d-flex.text-center Utiliza datos reales para entender las interacciones entre economía y sociedad.

    .bg-rojo.p-4.mb-4(data-aos="fade-right")
      span En el ámbito educativo, la socioeconomía destaca cómo las desigualdades económicas afectan el acceso a la educación. En Colombia, la desigualdad genera barreras significativas, como la falta de recursos en las zonas rurales.
    
    h2 Contexto económico

    .row.mb-4
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-15.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column(data-aos="fade-left")
        p.mb-4 El contexto económico afecta directamente al sistema educativo. En Colombia, muchos niños abandonan sus estudios para trabajar, perpetuando un ciclo de pobreza. Modelos como Escuela Nueva buscan adaptarse a estas realidades, permitiendo cierta flexibilidad en la asistencia escolar. Sin embargo, las desigualdades económicas también se reflejan en la mala alimentación, la falta de infraestructura y la ausencia de materiales educativos adecuados.
        ol.lista-ol--cuadro
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta
              span 1
            p.mb-0 <b>Desigualdad.</b> Limita el acceso a recursos básicos y educativos.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta
              span 2
            p.mb-0 <b>Trabajo infantil.</b> Reduce la asistencia y el rendimiento escolar.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta
              span 3
            p.mb-0 <b>Inversión estatal.</b> Insuficiente para cubrir las necesidades educativas, especialmente en zonas rurales.
    
    h2 Contexto social
    p.mb-4 La sociedad, desde tiempos antiguos, ha sido objeto de análisis por parte de filósofos como Platón y Aristóteles. Platón proponía una estructura social ideal basada en roles específicos, mientras que Aristóteles veía al ser humano como un animal social que necesita de otros para crecer. En la actualidad, la sociedad se caracteriza por una estratificación que determina el acceso a servicios como la educación. Paulo Freire, en su enfoque de educación popular, plantea que la educación debe ser crítica, comunitaria y transformadora. Sus principios incluyen:
  

    .row.mb-4.justify-content-center 
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-16.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Desigualdad
          p.px-1.text-small.mb-0.d-flex.text-center Limita el acceso a recursos básicos y educativos. 
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-17.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Trabajo infantil
          p.px-1.text-small.mb-0.d-flex.text-center Reduce la asistencia y el rendimiento escolar.
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-18.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Inversión estatal
          p.px-1.text-small.mb-0.d-flex.text-center Insuficiente para cubrir las necesidades educativas, especialmente en zonas rurales.

    .bg-rosa.p-4.mb-4(data-aos="fade-right")
      span La educación, según Freire, es una herramienta para superar las desigualdades, especialmente en contextos desfavorecidos. El análisis de los contextos socioeconómicos permite comprender cómo las dinámicas de sociedad y economía influyen en el aprendizaje. Para promover una educación equitativa, los docentes deben ser conscientes de estas realidades y diseñar estrategias pedagógicas que mitiguen las brechas, especialmente en comunidades vulnerables.

    h2 Contexto cultural

    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        p.mb-4 La UNESCO (2012) define la cultura como: “Conjunto distintivo de una sociedad o grupo social en el plano espiritual, material, intelectual y emocional comprendiendo el arte y literatura, los estilos de vida, los modos de vida común, los sistemas de valores, las tradiciones y creencias… que nos caracterizan como sociedad o grupo social”. Esta definición resalta cómo la cultura refleja la esencia de los individuos y su visión del mundo, determinando sus acciones y reacciones ante diversas situaciones, según el entorno cultural en el que se desarrollan.
        span El contexto cultural trasciende las tradiciones y costumbres para influir en aspectos como la moda, el arte, la literatura, los derechos fundamentales y la educación. En el sistema educativo colombiano, que adopta un enfoque por competencias, la cultura influye tanto en los contenidos como en las metodologías de enseñanza, adaptándose a las necesidades específicas del entorno de los estudiantes.
      .d-none.d-xl-block.col-xl-5(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-19.png', alt='Texto que describa la imagen')

    p.mb-4 La influencia de la cultura en la educación es: 

    .row.mb-4.justify-content-center 
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-20.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Contexto rural
          p.px-1.text-small.mb-0.d-flex.text-center La formación se orienta a competencias útiles en el entorno rural, respetando las necesidades del estudiante.
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-21.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Contexto urbano
          p.px-1.text-small.mb-0.d-flex.text-center La educación está dirigida a competencias laborales y universitarias, en consonancia con dinámicas citadinas.
      .col-10.col-md-8.col-lg-6.col-xl-4.mb-4.mb-xl-0
        .custom-image-card.d-flex.flex-column.p-4.py-md-5.h-100
          img.mx-auto.mb-4(src='@/assets/curso/unidad/img-22.svg', style="width: 80px")
          p.text-bold.mb-4.text-center Sensibilización cultural
          p.px-1.text-small.mb-0.d-flex.text-center Fomenta prácticas sostenibles, éticas y solidarias para preservar el ambiente y la cohesión social.

    .row.mb-4
      .col-5.d-none.d-xl-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-23.png', alt='Texto que describa la imagen')
      .col-12.col-xl-7(data-aos="fade-left")
        p.mb-4 El contexto cultural en la socioeconomía busca vincular el desarrollo económico con principios éticos y sostenibles. Por ejemplo, en zonas rurales, se promueve una producción que respete el ambiente y genere estabilidad económica, mientras que en áreas urbanas se priorizan competencias alineadas con la dinámica de las ciudades.

        p.mb-4 La educación que propone la socioeconomía enfatiza la conservación y creación cultural, promoviendo:
        ol.lista-ol--cuadro
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta
              span 1
            p.mb-0 Sensibilización hacia la conservación de tradiciones y valores.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta
              span 2
            p.mb-0 Cambios culturales sostenibles y solidarios.
          li.d-flex(data-aos="fade-up")
            .lista-ol--cuadro__vineta
              span 3
            p.mb-0 Prácticas socioeconómicas responsables que beneficien a los individuos y la sociedad.

    p.mb-4 Este enfoque busca integrar las dimensiones culturales en la formación académica, permitiendo que los estudiantes comprendan y participen activamente en su contexto, promoviendo un desarrollo que respete tanto las raíces culturales como las necesidades globales.

    .row.mb-4
      .col-12.col-md-10.mx-auto(data-aos="fade-right")
        p.mb-3 <b>Figura 1.</b> Panorama de la gestión cultural
        figure
          img.mb-2(src='@/assets/curso/unidad/img-24.png', alt='Texto que describa la imagen')
          figcaption <b>Nota.</b> Tomada de Valderrama (s.f.). 

    h2 Contexto político
    .row.mb-4
      .col-12.col-xl-7(data-aos="fade-right")
        p.mb-4 La política es un factor clave en el contexto socioeconómico, ya que determina los modelos económicos, sociales y educativos de un país mediante leyes y políticas que afectan el desarrollo de las comunidades. Los gobiernos de turno juegan un papel decisivo al generar cambios que pueden beneficiar o perjudicar a la sociedad, dependiendo de sus decisiones y enfoques.
        p.mb-4 Según Marx y Engels (1975, como se citó en García, M. 2023), “el cambio social se funda en las contradicciones entre los intereses de diversas clases sociales a través del tiempo en el marco de relaciones de producción específicas”. Esta afirmación resalta cómo la política y la economía interactúan para moldear las dinámicas sociales.
      .d-none.d-xl-block.col-xl-5(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-25.png', alt='Texto que describa la imagen')

    .row.mb-4
      .col-12.col-lg-5.d-none.d-lg-block(data-aos="fade-right")
        img(src='@/assets/curso/unidad/img-26.png', alt='Texto que describa la imagen')
      .col-12.col-lg-7(data-aos="fade-left")
        p.mb-4 Para comprender cómo estas interacciones afectan el aprendizaje, es útil analizar los aspectos clave de la economía política y su impacto en el ámbito educativo.
        AcordionA(tipo="b")
          .div(titulo="Economía política")
            p Según Cesaratto y Bucchianico (2020, como se citó en García, M. 2023), analiza las condiciones formales de viabilidad económica de una formación social, considerando cómo se genera y distribuye el excedente económico (valor, precios, moneda).
          .div(titulo="Impacto de las políticas públicas")
            p Las políticas pueden mejorar la infraestructura escolar, garantizar programas de alimentación, capacitar docentes y facilitar el acceso a una educación gratuita y de calidad, especialmente en contextos desfavorecidos.

    p.mb-4 El contexto político influye de manera decisiva en el aprendizaje. Las decisiones gubernamentales pueden generar oportunidades significativas o limitaciones según las políticas adoptadas. Es importante analizar cómo la estratificación de la sociedad colombiana afecta las condiciones de acceso y calidad educativa, revelando las brechas que persisten en el sistema.
    .row.mb-4
      .col-12.col-md-10.col-lg-8.mx-auto(data-aos="fade-right")
        p.mb-3 <b>Figura 2.</b> Estratificación Colombia 
        figure 
          img(src='@/assets/curso/unidad/img-27.png', alt='Texto que describa la imagen')

    .bg-fondo-1.bg-full-width.mb-4
      .px-5.pb-md-3.py-4

        p.mb-4 En Colombia, las desigualdades socioeconómicas impactan directamente la calidad de la educación y el desarrollo integral de los estudiantes, evidenciando profundas diferencias entre los sectores más desfavorecidos y los más privilegiados.
        .row.mb-4
          .col-10.col-md-8.col-lg-6.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-28.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Alimentación escolar insuficiente
                p.text-small.px-4.text-center.pb-2 Las políticas de alimentación escolar, aunque necesarias, no logran suplir los requerimientos nutricionales mínimos, afectando el desarrollo cerebral, la energía y la capacidad cognitiva de los estudiantes de los estratos más bajos, ampliando la brecha con los estratos 4, 5 y 6.
          .col-10.col-md-8.col-lg-6.mb-4.mx-auto(data-aos="fade-right")
            div.custom-image-card.rounded-8px
              img.mb-4(src='@/assets/curso/unidad/img-29.png', alt='Texto que describa la imagen')
              div.mb-4
                p.text-bold.text-center Infraestructura deficiente
                p.text-small.px-4.text-center.pb-2 La desfinanciación estructural de las instituciones educativas públicas genera condiciones inadecuadas para el aprendizaje, reduciendo la disposición de los estudiantes y limitando el acceso a herramientas tecnológicas necesarias para el mundo actual.
      

    .row.mb-4
      .col-12.col-xl-7.col-xxl-8.d-flex.flex-column
        p.mb-4  Disparidades en cifras como: 
        .d-flex.align-items-start.bg-rojo.p-4.mb-4(data-aos="fade-right")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-30.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") 18 % de la población pertenece a los estratos 4, 5 y 6, quienes usualmente cuentan con acceso a una alimentación balanceada y entornos educativos óptimos.
        .d-flex.align-items-start.bg-rojo.p-4.mb-4(data-aos="fade-right")
          img.me-3(style="width: 90px" src='@/assets/curso/unidad/img-31.svg', alt='Texto que describa la imagen')
          .d-flex.flex-column
            p.pe-xl-3.mb-0(data-aos="fade-up") En contraste, la desfinanciación educativa de $ 18,8 billones refleja el abandono estructural en instituciones públicas, perpetuando las desigualdades en el acceso y calidad 
        span El resultado de estas desigualdades es una brecha educativa que no solo afecta el rendimiento académico, sino también las oportunidades futuras de los estudiantes para competir en un mercado laboral exigente y en constante transformación.
      .d-none.d-xl-block.col-xl-5.col-xxl-4.mx-auto.mt-4.mt-xl-0(data-aos="fade-left")
        img(src='@/assets/curso/unidad/img-32.png', alt='Texto que describa la imagen')  

    p.mb-4 Los contextos sociales desempeñan un papel crucial en el proceso de aprendizaje, influyendo en las oportunidades y barreras que enfrentan los estudiantes. Analizar estos contextos permite comprender mejor los desafíos y diseñar estrategias que promuevan una educación más equitativa e inclusiva: 

    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/unidad/img-33.png', alt='Texto que describa la imagen')

      .tarjeta.bg-rosa.p-4(x="21%" y="34%" numero="+")
        .h5.mb-2 Contexto económico
        p.mb-1 ●  Desigualdad económica
        p.mb-1 ●  Carencias de derechos básicos 
        p.mb-1 ●  Desfinanciación educativa
      .tarjeta.bg-rosa.p-4(x="79%" y="34%" numero="+")
        .h5.mb-2 Contexto político
        p.mb-1 ●  Falta de políticas que reduzcan la desigualdad
        p.mb-1 ●  Olvido del sistema educativo
      .tarjeta.bg-rosa.p-4(x="21%" y="70%" numero="+")
        .h5.mb-2 Contexto cultural
        p.mb-1 ●  Invisibilización de poblaciones minoritarias
        p.mb-1 ●  Fomentar la educación inclusiva.
      .tarjeta.bg-rosa.p-4(x="79%" y="70%" numero="+")
        .h5.mb-2 Contexto social
        p.mb-1 ●  Territorios empobrecidos focos de violencia

        p.mb-1 ●  Familias ausentes y disfuncionales

    .bg-full-width.border-top-9-azul
      .px-4.px-md-5.pt-5.pb-0
        h2 Material complementario
        .row
          .col-12.col-md-6.col-lg-8
            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/book.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://repositorio.uptc.edu.co/server/api/core/bitstreams/bfd176c8-eecc-41f2-a148-620d6c40680a/content") Cepeda Ar, Edisson R. et al. (2020). Universidad Pedagógica y Tecnológica de Colombia.

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://youtu.be/5_KnuuS7Rcw") Belén MG. (2019). Indicadores socioeconómicos básicos. [Vídeo]

            p.d-flex.my-4
              img.me-3.mb-auto.mt-1(src='@/assets/componentes/youtube-icon.svg' :style="{'max-width':'16px'}")
              a.text-small.text-primary(target="_blank", href="https://www.youtube.com/watch?v=DY6hUia_L8c") SNTE Nacional. (2018). Plática con el Prof. Emilio Tenti Fanfani con el tema Desigualdades sociales y escolares. [Vídeo]
          .col-12.col-md-6.col-lg-3
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen de material complementario')



</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.tabs-content
  background-color: $color-sistema-h
.img-infografica
  background-color: $color-adicional-1
</style>
