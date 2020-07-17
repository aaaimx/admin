module.exports = {
  title: 'Productivity',
  logo: 'https://www.aaaimx.org/img/sprites/aaai-transpeps.png',

  /**
   * @type {boolean} true | false
   * @description Whether show the settings right-panel
   */
  showSettings: false,

  /**
   * @type {boolean} true | false
   * @description Whether need tagsView
   */
  tagsView: true,

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  fixedHeader: true,

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: true,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * The default is only used in the production env
   * If you want to also use it in dev, you can pass ['production', 'development']
   */
  errorLog: ['production', 'development'],
  HOST:
    process.env.NODE_ENV !== 'development'
      ? 'http://127.0.0.1:8000'
      : 'https://aaaimx-admin.herokuapp.com'
}
