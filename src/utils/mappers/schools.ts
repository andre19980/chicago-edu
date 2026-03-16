import { DashboardCardKeys } from "@/types/DashboardCardKeys";
import type { CreativeSchoolCertificationKeys, CultureClimateRatingKeys, StudentAttainmentRatingKeys, SupportiveSchoolAwardKeys } from "@/types/Schools";

export const SchoolTypesLabels: Record<string, string> = {
  "Neighborhood": "Escola de Bairro",
  "Charter": "Charter",
  "Citywide-Option": "Opção Municipal",
  "Magnet": "Escola Magnet",
  "Regional gifted center": "Centro de Talentos Regional",
  "Small": "Escola Pequena",
  "Contract": "Escola de Contrato",
  "Career academy": "Academia de Carreira",
  "Special Education": "Educação Especial",
  "Military academy": "Academia Militar",
  "Classical": "Clássica",
  "Virtual": "Virtual",
  "Selective enrollment": "Inscrição Seletiva",
};

export const SchoolCategoriesLabels: Record<string, string> = {
  "ES": "Elementary School",
  "MS": "Middle School",
  "HS": "High School",
};

export const SchoolSurveysLabels = {
  involvedFamilies: 'Famílias envolvidas',
  supportiveEnvironment: 'Ambientes de apoio',
  ambitiousInstruction: 'Ensino ambicioso',
  effectiveLeaders: 'Liderança eficaz',
  collaborativeTeachers: 'Professores colaborativos',
  safety: 'Segurança',
}

export const SchoolSurveysScores: Record<string, number> = {
  'not enough data': 0,
  'very weak': 1,
  'weak': 2,
  'neutral': 3,
  'strong': 4,
  'very strong': 5,
};

export const SchoolAwardsLabels = {
  excelerateAwardGoldYear: "Excelarate Award",
  blueRibbonAwardYear: "Blue Ribbon Award",
  excellenceAwardYear: "Excellence Award",
  improvementAwardYear: "Improvement Award",
  spotLightAwardYear: "Spotlight Award",
};

export const StudentAttainmentRating: Record<StudentAttainmentRatingKeys, string> = {
  "NO DATA AVAILABLE": "Dados insuficientes",
  "FAR BELOW EXPECTATIONS": "Muito abaixo das expectativas",
  "BELOW EXPECTATIONS": "Abaixo das expectativas",
  "MET EXPECTATIONS": "Cumpre as expectativas",
};

export const CultureClimateRating: Record<CultureClimateRatingKeys, string> = {
  "Not Enough Data": "Dados insuficientes",
  "Not Yet Organized": "Ainda não organizado",
  "Partially Organized": "Parcialmente organizado",
  "Moderately Organized": "Moderadamente organizado",
  "Organized": "Organizado",
  "Well Organized": "Bem organizado",
};

export const HealthySchoolCertification = {
  "Not Achieved": "Não obtido",
  "Achieved": "Obtido",
}

export const CreativeSchoolCertification: Record<CreativeSchoolCertificationKeys, string> = {
  "INCOMPLETE DATA": "Dados incompletos",
  "DEVELOPING": "Em desenvolvimento",
  "EMERGING": "Emergente",
  "STRONG": "Forte",
  "EXCELLING": "Excepcional",
}

export const SupportiveSchoolAward: Record<SupportiveSchoolAwardKeys, string> = {
  "NOT RATED": "Não classificado",
  "EMERGING": "Emergente",
  "ESTABLISHED": "Estabelecido",
  "EXEMPLARY": "Exemplar",
}

export const DashboardInfoModalContents = {
  [DashboardCardKeys.schoolCategories]: {
    title: "Distribuição de Categorias Escolares",
    text: "Nos Estados Unidos, a educação básica costuma ser dividida em três etapas principais. <b>Elementary School</b> corresponde aos primeiros anos da educação básica, geralmente do Kindergarten ao 5º ano (aproximadamente de 5 a 11 anos). <b>Middle School</b> abrange a transição para a adolescência, normalmente do 6º ao 8º ano (aproximadamente de 11 a 14 anos). Já a <b>High School</b> corresponde ao ensino médio, do 9º ao 12º ano (aproximadamente de 14 a 18 anos), etapa final antes do ingresso no ensino superior ou no mercado de trabalho.",
  },
  [DashboardCardKeys.schoolTypes]: {
    title: "Distribuição de Tipos de Escolas",
    text: "As escolas do sistema das Chicago Public Schools são classificadas por <b>tipo de escola</b>, que indica seu modelo de funcionamento, critérios de admissão ou foco pedagógico. Algumas atendem principalmente estudantes do bairro (Neighborhood), enquanto outras possuem currículos especializados ou admissão seletiva, como Magnet, Classical ou Selective Enrollment. Também existem modelos com gestão diferenciada, como Charter ou Contract, além de escolas com programas específicos, como Career Academy, Military Academy, educação especial ou ensino virtual.",
  },
  [DashboardCardKeys.blueRibbonAward]: {
    title: "Escolas vencedoras do Blue Ribbon",
    text: "O <b>Blue Ribbon Award</b> é um reconhecimento nacional concedido a escolas que apresentam alto desempenho acadêmico ou progresso significativo na melhoria dos resultados educacionais. A premiação destaca instituições que se destacam pela qualidade do ensino, boas práticas pedagógicas e resultados consistentes no aprendizado dos estudantes."
  },
  [DashboardCardKeys.chronicTruancy]: {
    title: "Taxa de faltas crônicas",
    text: "A <b>média de faltas crônicas (chronic truancy)</b> representa o percentual médio de estudantes que faltaram a uma parcela significativa dos dias letivos. Esse indicador ajuda a identificar padrões de absenteísmo persistente, que podem estar associados a maiores riscos de baixo desempenho acadêmico e evasão escolar."
  },
  [DashboardCardKeys.mobilityRate]: {
    title: "Taxa de mobilidade",
    text: "A <b>média de mobilidade escolar (mobility rate)</b> representa o percentual médio de estudantes que entraram ou saíram de uma escola durante o ano letivo. Esse indicador ajuda a identificar o grau de estabilidade da população estudantil, já que altas taxas de mobilidade podem impactar a continuidade do aprendizado e o desempenho acadêmico."
  },
  [DashboardCardKeys.schoolSurveys]: {
    title: "Pesquisa 5Essentials + Segurança",
    text: "<section><p>O 5Essentials é um sistema baseado em evidências, desenvolvido para impulsionar a melhoria em escolas de todo o país. Ele mede mudanças na organização escolar por meio da Pesquisa 5Essentials e fornece relatórios individualizados para cada escola. O sistema é baseado em mais de 20 anos de pesquisa do Consórcio de Pesquisa Escolar da Universidade de Chicago sobre cinco componentes considerados essenciais para o sucesso escolar:</p><br><ul><li><b>- Liderança eficaz</b></li><li><b>- Professores Colaborativos</b></li><li><b>- Famílias Envolvidas</b></li><li><b>- Ambientes de apoio</b></li><li><b>- Ensino Ambicioso</b></li></ul><br><p>Neste resultado foi adicionado o critério <b>Segurança</b> também. As notas de 0 a 5 representam, respectivamente, as seguintes categorias:</p><br><ul><li><b>Nota 0:</b> Dados insuficientes</li><li><b>Nota 1:</b> Muito fraco</li><li><b>Nota 2:</b> Fraco</li><li><b>Nota 3:</b> Neutro</li><li><b>Nota 4:</b> Forte</li><li><b>Nota 5:</b> Muito forte</li></ul>"
  },
  [DashboardCardKeys.supportiveSchoolAward]: {
    title: "Prêmio de escola acolhedora",
    text: "",
  },
  [DashboardCardKeys.creativeSchoolCertification]: {
    title: "Avaliação de Desempenho do Estudantes",
    text: "",
  },
  [DashboardCardKeys.cultureClimateRating]: {
    title: "Avaliação de Cultura e Clima Escolar",
    text: "",
  },
  [DashboardCardKeys.studentAttainmentRating]: {
    title: "Avaliação de Desempenho do Estudantes",
    text: "",
  }
}
