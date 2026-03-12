import { type DashboardCardKey, DashboardCardKeys } from "@/types/DashboardCardKeys";

export const SCHOOL_TYPES_LABELS: Record<string, string> = {
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

export const SCHOOL_CATEGORIES_LABELS: Record<string, string> = {
  ES: "Elementary School",
  MS: "Middle School",
  HS: "High School",
};

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
  }
}
