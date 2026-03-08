import IconDashboard from "@/components/icons/IconDashboard.vue";
import IconTable from "@/components/icons/IconTable.vue";

const sidebarConfig = [
  {
    name: 'Dashboard',
    iconComponent: IconDashboard,
    route: '/',
  },
  {
    name: 'Tables',
    iconComponent: IconTable,
    route: '/about',
  },
];

export default sidebarConfig;
