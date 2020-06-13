const getters = {
  sidebar: state => state.app.sidebar,
  size: state => state.app.size,
  device: state => state.app.device,
  visitedViews: state => state.tagsView.visitedViews,
  cachedViews: state => state.tagsView.cachedViews,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  introduction: state => state.user.introduction,
  roles: state => state.user.roles,
  permission_routes: state => state.permission.routes,
  errorLogs: state => state.errorLog.logs,
  steps: state => state.app.steps,
  events: state => state.certificates.events,
  lines: state => state.projects.lines,
  partners: state => state.members.partners.filter(p => p.type === 'Research Center' || p.type === 'Partner')
}
export default getters
