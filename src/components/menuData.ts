export const MENU = [
  {
    label: "Comienza",
    columns: [
      {
        title: "Dominios",
        items: [
          { href: "/dominios/comprar", icon: "domain", label: "Comprar Dominio", desc: "Elige y registra tu dominio ideal." },
          { href: "/dominios/transferir", icon: "transfer", label: "Transferir Dominio", desc: "Rápido y sin complicaciones." }
        ]
      },
      {
        title: "Hosting",
        items: [
          { href: "/hosting/wordpress", icon: "wp", label: "Hosting Wordpress", desc: "Rápido, seguro y actualizado." },
          { href: "/hosting/web", icon: "server", label: "Hosting Web", desc: "Robusto para sitios dinámicos." }
        ]
      }
    ]
  },
  {
    label: "Crea",
    columns: [
      { title: "Desarrollo", items: [{ href: "/servicios/desarrollo", icon: "build", label: "Desarrollo Web", desc: "Webs que conectan y convierten." }] },
      { title: "Creador", items: [{ href: "/herramientas/creador", icon: "cms", label: "Creador de webs", desc: "Creatividad visual sin límites." }] }
    ]
  },
  {
    label: "Crece",
    columns: [
      { title: "Marketing", items: [{ href: "/growth/360", icon: "target", label: "Growth 360", desc: "Estrategias para crecer." }, { href: "/growth/redes", icon: "chat", label: "Redes Sociales", desc: "Conecta con tu audiencia." }] },
      { title: "Deportes", items: [{ href: "/growth/deportes", icon: "sport", label: "Marketing Deportivo", desc: "Especialización en deporte." }] }
    ]
  },
  {
    label: "Transforma",
    columns: [
      { title: "Cloud", items: [{ href: "/cloud/instancias", icon: "cloud", label: "Instancias Cloud", desc: "Escala sin límites." }] },
      { title: "Servidores", items: [{ href: "/vps/linux", icon: "linux", label: "VPS Linux", desc: "Control y escalabilidad." }, { href: "/vps/windows", icon: "windows", label: "VPS Windows", desc: "Entorno Microsoft con admin." }] },
      { title: "Administración", items: [{ href: "/admin/servidores", icon: "ops", label: "Administración de servidores", desc: "Gestión experta 24/7." }] },
      { title: "Paneles", items: [{ href: "/paneles", icon: "panel", label: "Paneles de Control", desc: "cPanel, Plesk, CyberPanel." }] }
    ]
  }
];
