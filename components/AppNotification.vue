<template>
  <client-only>
    <notifications :duration="7000" position="top right">
      <template slot="body" slot-scope="props">
        <div
          class="p-3 my-2 bg-white border-l-4 rounded-md g-shadow"
          :class="[
            props.item.type === 'success' ? 'border-g-green text-g-green' : '',
            props.item.type === 'warn' ? 'border-g-yellow text-g-yellow' : '',
            props.item.type === 'error' ? 'border-g-red text-g-red' : '',
            props.item.type === 'info' ? 'border-g-blue text-g-blue' : '',
          ]"
        >
          <div class="flex justify-between">
            <div class="flex items-start justify-start">
              <div class="mr-2 icon">
                <IconInfo
                  v-if="props.item.type === 'info'"
                  class="w-6 h-6"
                ></IconInfo>
                <IconBan
                  v-if="props.item.type === 'error'"
                  class="w-6 h-6"
                ></IconBan>
                <IconCheck
                  v-if="props.item.type === 'success'"
                  class="w-6 h-6"
                ></IconCheck>
              </div>
              <div class="message text-g-gray">
                <div v-if="props.item.title" class="text-sm font-bold title">
                  {{ props.item.title }}
                </div>
                <div v-if="props.item.text" class="text-xs">
                  {{ props.item.text }}
                </div>
              </div>
            </div>
            <a class="cursor-pointer close" @click="props.close">
              <IconCancel class="w-3 h-3 text-g-gray"></IconCancel>
            </a>
          </div>
        </div>
      </template>
    </notifications>
  </client-only>
</template>
