/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  infoSidebar: [
    {
      type: 'category',
      label: 'Wiedza o świecie',
      link: {
        type: 'doc',
        id: 'index',
      },
      items: [
        'bogowie-i-religia',
        'prawa-neverwinter',
      ],
    },
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
        'pomocnik-do-karty-postaci/wzrost-i-waga',
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
         'organizacje-i-ugrupowania/władza-w-neverwinter',
            'organizacje-i-ugrupowania/akademia-neverwinter',
            'organizacje-i-ugrupowania/władza-w-luskan',
            'organizacje-i-ugrupowania/harfiarze',
            'organizacje-i-ugrupowania/zhentarim',
      ],
    },
  ],
};

export default sidebars;
