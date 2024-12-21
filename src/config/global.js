export default {
  global: {
    componenteFormativo:
      'Componente Formativo con un nombre extremadamente largo y extenso',
    descripcionCurso:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean convallis vestibulum quam bibendum varius.<br/><br/>Quisque pretium at nulla sit amet placerat. Vestibulum consequat suscipit accumsan. Proin pharetra congue enim et tempus. Sed sodales dui volutpat, placerat tellus accumsan, semper est. Phasellus nec lorem elementum, mattis quam eget, vestibulum nibh. Sed.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/banner-principal-decorativo-2.svg'),
      },
    ],
    numeroUnidad: '2',
    tituloUnidad: 'Contextos sociales y su impacto en el aprendizaje',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Contextos sociales y su impacto en el aprendizaje',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Diversidad cultural en los entornos educativos',
        desarrolloContenidos: true,
        subMenu: [],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia: 'Adam Smith. (1776). La riqueza de las naciones. Titivillus.',
      link: '',
    },
    {
      referencia:
        'Álvaro, D. (2010). Los conceptos de "comunidad" y "sociedad" de Ferdinand Tönnies. Papeles del CEIC. International Journal on Collective Identity Research, (1), 1-24.',
      link: '',
    },
    {
      referencia:
        'Araya, R. (2016). Los diez pilares de la socioeconomía. Academia.edu.',
      link:
        'https://www.academia.edu/30665321/LOS_DIEZ_PILARES_DE_LA_SOCIOECONOM%C3%8DA',
    },
    {
      referencia:
        'Gamboa, S. (2022). Cifras de Kantar indicaron que la población estrato 1 en Colombia corresponde al 21%. La Republica.',
      link:
        'https://www.larepublica.co/empresas/kantar-da-a-conocer-cifras-relevantes-en-el-marco-del-dia-mundial-del-consumidor-3322740',
    },
    {
      referencia:
        'Garcia, M. (2023). Elementos esenciales de una socioeconomía del desarrollo. revistas unal, 42(379-402).',
      link: 'https://doi.org/10.15446/cuad.econ.v42n89.96493',
    },
    {
      referencia:
        'Hernández Pérez, A. y Hernández Pérez, A. (2014). Economía. México, D.F, Mexico: Editorial Digital UNID.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/41178?page=3',
    },
    {
      referencia:
        'Lancheros, S. & Mora, A. (2022). La financiación de la educación superior en Colombia: crisis y disputas en el marco de la pandemia. redalyc, 56(49-65).',
      link: 'https://doi.org/10.30578/nomadas.n56a3',
    },
    {
      referencia:
        'Ministerio de Educación Nacional. (2021). Escuela nueva. Mineducación.',
      link:
        'https://www.mineducacion.gov.co/portal/Preescolar-basica-y-media/Modelos-Educativos-Flexibles/340089:Escuela-Nueva',
    },
    {
      referencia:
        'Ministerio de las culturas. (2024). Plan Nacional Cultural. Ministerio de cultura.',
      link:
        'https://www.mincultura.gov.co/despacho/plan-nacional-de-cultura/Documents/PLAN%20NACIONAL%20CULTURA_26-07-2024.pdf',
    },
    {
      referencia:
        'Oficina de la UNESCO en San José. (2012). Cultura y nuestros derechos culturales. UNESDOC.',
      link: 'https://unesdoc.unesco.org/ark:/48223/pf0000228345',
    },
    {
      referencia:
        'Polanyi, K. (2003). La gran transformación. Los orígenes políticos y económicos de nuestro tiempo. Fondo de Cultura Económica.',
      link: '',
    },
    {
      referencia:
        'Rodríguez, J., Ferrera, G., González D., & Lorenzo, A. (2007). Principales corrientes y tendencias a inicios del siglo XXI de la Pedagogía y la Didáctica. Instituto Central de Ciencias Pedagógicas.',
      link: '',
    },
    {
      referencia:
        'TV UNAM. (2019, octubre 4). ¿Qué es cultura?. [Video]. YouTube.',
      link: 'https://youtu.be/U66tgsRtnj8?si=Pz2o2UBkPZbIqHqx',
    },
    {
      referencia: 'Valderrama. (s.f.). El panorama de la gestión cultural.',
      link: 'https://www.flickr.com/photos/eseatomo/42037676085',
    },
  ],
  glosario: [
    {
      termino: 'Comunidad',
      significado:
        'Es un grupo de personas que comparten un sentido de pertenencia, identidad y objetivos comunes. Estas personas interactúan entre sí de manera regular y establecen relaciones sociales basadas en la proximidad geográfica, intereses compartidos, valores comunes o un vínculo histórico.',
    },
    {
      termino: 'Contextos',
      significado:
        'Son las circunstancias, situaciones o entornos en los que ocurren los hechos. Es decir, el marco de referencia que rodea un evento o una persona.',
    },
    {
      termino: 'Cultura',
      significado:
        'Es el conjunto de conocimientos, creencias, arte, leyes, costumbres, hábitos y valores que caracterizan a un grupo social. Se transmite de generación en generación y define la forma de vida de un pueblo.',
    },
    {
      termino: 'Desigualdad',
      significado:
        'Es la diferencia en las oportunidades, condiciones de vida y acceso a recursos entre diferentes grupos sociales. Puede ser económica, social, política o de otro tipo.',
    },
    {
      termino: 'Diversidad',
      significado:
        'Hace referencia a la variedad de características que existen entre las personas, como la raza, el género, la edad, la orientación sexual, la religión, la discapacidad, entre otras.',
    },
    {
      termino: 'Economía',
      significado:
        'Es el estudio de la producción, distribución y consumo de bienes y servicios. Se refiere a la forma en que una sociedad organiza sus recursos para satisfacer las necesidades de sus miembros.',
    },
    {
      termino: 'Exclusión',
      significado:
        'Es la acción de dejar fuera o marginar a una persona o grupo de personas de una sociedad o de un determinado ámbito. Puede ser social, económica, política o cultural.',
    },
    {
      termino: 'Ruralidad',
      significado:
        'Hace referencia a las zonas rurales, es decir, las áreas geográficas poco densamente pobladas y con predominio de actividades agrícolas y ganaderas. Se caracteriza por un estilo de vida y una cultura diferentes a las de las zonas urbanas.',
    },
    {
      termino: 'Sociedad',
      significado:
        'Es un grupo de personas que comparten una cultura común y que interactúan entre sí. Se organizan en estructuras sociales y tienen un sistema de valores y normas que regulan su comportamiento.',
    },
    {
      termino: 'Socioeconómico',
      significado:
        'Se refiere a la interacción entre los factores sociales y económicos que influyen en la vida de las personas. Por ejemplo, el nivel educativo, el ingreso económico y la ocupación son factores socioeconómicos.',
    },
    {
      termino: 'Vulnerabilidad',
      significado:
        'Susceptibilidad a sufrir daños o perjuicios. En el contexto educativo, puede referirse a la vulnerabilidad de ciertos estudiantes a experimentar dificultades de aprendizaje o exclusión.',
    },
  ],
  complementario: [
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
    {
      tema: 'Estrategias para la segmentación de mercados',
      referencia:
        'Cámara de Comercio de Medellín. (2020). <em>Suftware</em> Tendencias de negocios - Mercadeo y ventas',
      tipo: 'Video',
      link: 'https://www.google.com/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Maria Camila Garcia Santamaria',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Responsable del equipo',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Leyson Fabian Castaño Perez',
          cargo: 'Soporte organizacional',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
        {
          nombre: ['Nombre 1', 'Nombre 2'],
          cargo: 'Diseño web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Desarrollo Front-End',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Nombre',
          cargo: 'Validación de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
