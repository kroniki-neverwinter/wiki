/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  infoSidebar: [
    'index',
    {
      type: 'category',
      label: 'Pomocnik do karty postaci',
      link: {
        type: 'doc',
        id: 'pomocnik-do-karty-postaci/index',
      },
      items: [
        'pomocnik-do-karty-postaci/charakter',
        'pomocnik-do-karty-postaci/znane-jezyki',
        'pomocnik-do-karty-postaci/cechy-i-odgrywanie',
      ],
    },
        {
      type: 'category',
      label: 'Organizacje i Ugrupowania',
      link: {
        type: 'doc',
        id: 'organizacje-i-ugrupowania/index',
      },
          items: [
         'organizacje-i-ugrupowania/szare-plaszcze',
      ],
    },
  ],
};

export default sidebars;
