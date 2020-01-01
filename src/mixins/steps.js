export const tableSteps = [
  {
    element: '.filter-container',
    popover: {
      title: 'Table filters',
      description:
        'Filter by name, title, status or some important field. Also navigate to <b>Create page</b> to register new item.',
      position: 'bottom'
    }
  },
  {
    element: '.el-table',
    popover: {
      title: 'Table',
      description: 'Resources, items, list, result of filters applied.',
      position: 'top'
    }
  },
  {
    element: '.el-select--mini',
    popover: {
      title: 'Quick actions',
      description:
        'Actions to alter selected rows. Such us delete multiple items or change some field. First select rows, then choose an option & click <b>Go</b> button.',
      position: 'top'
    }
  },
  {
    element: '.pagination-container',
    popover: {
      title: 'Pagination',
      description: 'Choose items quantity or page will be listed.',
      position: 'top'
    }
  }
]

export const formSteps = [
  {
    element: '.postInfo-container',
    popover: {
      title: 'Create/Update Form',
      description: `Edit or enter each field and click <b>Save/Save changes</b>. <br>
        <span style="color: red;">*</span> Indicates required field and can not be empty.
        `,
      position: 'top'
    }
  },
  {
    element: '.el-button--success',
    popover: {
      title: 'Save button',
      description: `Click this button when all required fields or changes are ready and wait to save into database. <br>
      Input errors will be displayed in <span style="color: red;">red</span>.
      
      `,
      position: 'left'
    }
  }
]
