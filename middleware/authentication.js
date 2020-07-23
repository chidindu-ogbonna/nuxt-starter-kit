export default ({ store, route, redirect }) => {
  const isLoggedIn = store.getters['authentication/isLoggedIn']

  if (isLoggedIn) {
    if (route.name === 'login' || route.name === 'signup') {
      return redirect('/')
    }
  } else if (isProtectedRoute(route)) {
    return redirect('/login')
  }
}

const isProtectedRoute = (route) => {
  if (route.meta.some((record) => record.requireAuth)) {
    return true
  }
}
