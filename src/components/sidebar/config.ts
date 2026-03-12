import IconDashboard from "@/components/icons/IconDashboard.vue";
import IconTable from "@/components/icons/IconTable.vue";

const sidebarConfig = [
  {
    name: 'Dashboard',
    iconComponent: IconDashboard,
    route: '/',
  },
  {
    name: 'Escolas',
    iconComponent: IconTable,
    route: '/schools',
  },
];

export default sidebarConfig;
