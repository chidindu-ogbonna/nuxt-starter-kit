<template>
  <div
    class="fixed top-0 left-0 flex-col items-center w-56 h-full py-4 bg-white border z-9 border-secondary md:flex"
    :class="[showSideNav ? '' : 'hidden']"
  >
    <div class="">
      <AppLogo></AppLogo>
    </div>
    <ul class="mt-8 nav-list">
      <li class="nav-item">
        <a href="" class="nav-link nav-link--active">
          <IconDashboard class="nav-link__icon"></IconDashboard>
          <span>
            Dashboard
          </span>
        </a>
      </li>
      <li class="nav-item">
        <a href="" class="nav-link">
          <IconChart class="nav-link__icon"></IconChart>
          <span>
            Analytics
          </span>
        </a>
      </li>
      <li class="nav-item">
        <a href="" class="nav-link">
          <IconUser class="nav-link__icon"></IconUser>
          <span>
            Profile
          </span>
        </a>
      </li>
      <li class="nav-item">
        <a href="" class="nav-link">
          <IconSettings class="nav-link__icon"></IconSettings>
          <span>
            Settings
          </span>
        </a>
      </li>
      <li class="nav-item">
        <a href="" class="nav-link">
          <IconContact class="nav-link__icon"></IconContact>
          <span>
            Contact us
          </span>
        </a>
      </li>
      <li class="nav-item">
        <a href="#" class="nav-link" @click="signOut">
          <IconSignout class="nav-link__icon"></IconSignout>
          <span>
            Log Out
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    showSideNav: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    async signOut() {
      await this.$store.dispatch('authentication/signOut')
      this.$router.push({ name: 'login' })
    },
  },
}
</script>

<style lang="scss">
.nav-item:last-child {
  margin-top: auto;
}
</style>
