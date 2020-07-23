<template>
  <div class="w-full text-left">
    <label class="text-t-secondary" :for="name"> {{ label }} </label>
    <ValidationProvider v-slot="{ errors }" :name="name" :rules="rules">
      <input
        v-bind="$attrs"
        :value="value"
        :autocomplete="autocomplete"
        :name="name"
        :type="type"
        class="w-full p-2 font-semibold border rounded-md appearance-none text-g-navy bg-background-1 border-primary focus:border-t-primary focus:outline-none"
        :placeholder="placeholder"
        @input="$emit('input', $event.target.value)"
      />
      <span class="text-xs text-g-red"> {{ errors[0] }} </span>
    </ValidationProvider>
  </div>
</template>

<script>
export default {
  name: 'AppTextInput',

  props: {
    value: {
      type: [String],
      default: '',
    },
    rules: {
      type: [String, Object],
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    autocomplete: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },
}
</script>
