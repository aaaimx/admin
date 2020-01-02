const steps = [
  {
    element: '.sidebar-container',
    popover: {
      title: 'Sidebar',
      description: 'Modules & Quick external links',
      position: 'right'
    }
  },
  {
    element: '#hamburger-container',
    popover: {
      title: 'Hamburger',
      description: 'Open && Close sidebar',
      position: 'bottom'
    }
  },
  {
    element: '#breadcrumb-container',
    popover: {
      title: 'Breadcrumb',
      description: 'Indicate the current page location',
      position: 'bottom'
    }
  },
  {
    element: '#avatar',
    popover: {
      title: 'User options',
      description: `Quick options available in all views: <br>
      - <b>Help Guide</b>: If you need help in any view, form or table select this option to launch 
      the step by step explained guide. <br>
      - <b>Log Out</b>: Close current session and re-login.
      `,
      position: 'left'
    },
    padding: 0
  },
  // {
  //   element: '#header-search',
  //   popover: {
  //     title: 'Page Search',
  //     description: 'Page search, quick navigation',
  //     position: 'left'
  //   }
  // },
  // {
  //   element: '#screenfull',
  //   popover: {
  //     title: 'Screenfull',
  //     description: 'Set the page into fullscreen',
  //     position: 'left'
  //   }
  // },
  // {
  //   element: '#size-select',
  //   popover: {
  //     title: 'Switch Size',
  //     description: 'Switch the system size',
  //     position: 'left'
  //   }
  // },
  {
    element: '#tags-view-container',
    popover: {
      title: 'Tags view',
      description: 'The history of the page you visited',
      position: 'bottom'
    },
    padding: 0
  }
]

export default steps
