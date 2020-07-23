<template>
  <svg
    id="icon-shopping-bag"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <path d="M16 10a4 4 0 0 1-8 0"></path>
  </svg>
</template>

<style scoped>
#icon-shopping-bag {
  color: var(--primary);
  text-align: center;
  margin: auto;
  width: 40px;
  height: 40px;
  -webkit-animation: shop-bag linear 2s;
  animation: shop-bag linear 2s;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
}

@-webkit-keyframes shop-bag {
  0%,
  100% {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
  }

  15% {
    -webkit-transform: translateX(-10px) rotate(10deg);
    transform: translateX(-10px) rotate(10deg);
  }

  30% {
    -webkit-transform: translateX(5px) rotate(-10deg);
    transform: translateX(5px) rotate(-10deg);
  }

  45% {
    -webkit-transform: translateX(-5px) rotate(5.6deg);
    transform: translateX(-5px) rotate(5.6deg);
  }

  60% {
    -webkit-transform: translateX(6px) rotate(-6.4deg);
    transform: translateX(6px) rotate(-6.4deg);
  }

  75% {
    -webkit-transform: translateX(-3px) rotate(3.2deg);
    transform: translateX(-3px) rotate(3.2deg);
  }
}

@keyframes shop-bag {
  0%,
  100% {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
  }

  15% {
    -webkit-transform: translateX(-10px) rotate(10deg);
    transform: translateX(-10px) rotate(10deg);
  }

  30% {
    -webkit-transform: translateX(5px) rotate(-10deg);
    transform: translateX(5px) rotate(-10deg);
  }

  45% {
    -webkit-transform: translateX(-5px) rotate(5.6deg);
    transform: translateX(-5px) rotate(5.6deg);
  }

  60% {
    -webkit-transform: translateX(6px) rotate(-6.4deg);
    transform: translateX(6px) rotate(-6.4deg);
  }

  75% {
    -webkit-transform: translateX(-3px) rotate(3.2deg);
    transform: translateX(-3px) rotate(3.2deg);
  }
}
</style>
