import socialLinks from './social_links'

export default [
  'General',
  [
    {
      to: '/',
      icon: 'desktop-mac',
      label: 'Dashboard'
    },
    {
      to: '/certificates',
      icon: 'certificate',
      label: 'Certificates'
    },
    {
      to: '/events',
      icon: 'calendar',
      label: 'Events'
    }
  ],
  //   'Examples',
  //   [
  //     {
  //       action: 'dark-mode-toggle',
  //       label: 'Dark / White',
  //       icon: 'weather-night'
  //     },
  //     {
  //       to: '/tables',
  //       label: 'Tables',
  //       icon: 'table',
  //       updateMark: true
  //     },
  //     {
  //       to: '/forms',
  //       label: 'Forms',
  //       icon: 'square-edit-outline'
  //     },
  //     {
  //       to: '/profile',
  //       label: 'Profile',
  //       icon: 'account-circle'
  //     },
  //     {
  //       label: 'Dropdown',
  //       icon: 'arrow-down-bold-circle',
  //       menu: [
  //         {
  //           href: '#void',
  //           label: 'Sub-item One'
  //         },
  //         {
  //           href: '#void',
  //           label: 'Sub-item Two'
  //         }
  //       ]
  //     },
  //     {
  //       label: 'Submenus',
  //       icon: 'view-list',
  //       menuSecondaryKey: 'submenu-1',
  //       menuSecondaryIcon: 'view-list',
  //       menuSecondaryLabel: 'Example',
  //       menuSecondary: [
  //         'Something',
  //         [
  //           {
  //             icon: 'view-list',
  //             href: '#void',
  //             label: 'Sub-item One'
  //           },
  //           {
  //             icon: 'view-list',
  //             href: '#void',
  //             label: 'Sub-item Two'
  //           }
  //         ],
  //         'Dropdown',
  //         [
  //           {
  //             label: 'Submenus',
  //             icon: 'view-list',
  //             menu: [
  //               {
  //                 href: '#void',
  //                 label: 'Sub-item One'
  //               },
  //               {
  //                 href: '#void',
  //                 label: 'Sub-item Two'
  //               }
  //             ]
  //           }
  //         ]
  //       ]
  //     }
  //   ],
  //   'Other',
  //   [
  //     {
  //       to: '/login',
  //       label: 'Login',
  //       icon: 'lock'
  //     },
  //     {
  //       to: '/error-in-card',
  //       label: 'Error v.1',
  //       icon: 'power-plug'
  //     },
  //     {
  //       to: '/error-simple',
  //       label: 'Error v.2',
  //       icon: 'alert-decagram'
  //     },
  //     {
  //       to: '/lock-screen',
  //       label: 'Lock Screen',
  //       icon: 'lock-reset'
  //     }
  //   ],
  'Social links',
  socialLinks,
  'Committee links',
  [
    {
      href:
        'https://drive.google.com/drive/u/0/folders/1_I5r8bEjjtLP-JUomPv2RpFyLLT5s5yo',
      label: 'Shared Drive',
      external: true,
      icon: 'google-drive'
    },
    {
      href:
        'https://docs.google.com/forms/d/1NPUSMUQm5l8FJHPw5AowO3h4mGzE2lnR34vcbGbct3A/edit',
      label: 'Events (Google Form)',
      external: true,
      icon: 'format-list-bulleted'
    },
    {
      href:
        'https://docs.google.com/spreadsheets/d/1MYYRaFOsy1-oljzJaoPAYk6k6kZLJQPw9d_fIl9e0AI/edit#gid=730085670',
      label: 'Activities (Spreadsheet)',
      external: true,
      icon: 'google-spreadsheet'
    },
    {
      href:
        'https://drive.google.com/file/d/1GAFKWsyFI81-DGsdlJxUsJ6ZsYApqLGs/view',
      label: 'Events Protocol',
      external: true,
      icon: 'file-word-box'
    }
  ],
  'Developer links',
  [
    {
      href: 'https://github.com/disoftw',
      label: 'Software Division',
      external: true,
      icon: 'github-circle'
    },
    {
      href: 'https://hpanel.hostinger.com/hosting/aaaimx.org/',
      label: 'Hostinger',
      external: true,
      icon: 'web-box'
    },
    {
      href: 'https://us-files.hostinger.mx/',
      label: 'AAAIMX FTP',
      external: true,
      icon: 'file-cloud'
    },
    {
      href: 'https://aaaimx-admin.herokuapp.com/',
      label: 'Django Admin',
      external: true,
      icon: 'application'
    },
    {
      href: 'https://aaaimx-admin.herokuapp.com/api/',
      label: 'API Docs',
      external: true,
      icon: 'file-document'
    }
  ]
]
