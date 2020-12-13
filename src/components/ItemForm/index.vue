<template>
  <a-form :form="form" @submit="handleSubmit">
    to do
  </a-form>
</template>

<script>
export default {
  name: "ItemForm",
  props: {
    record: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      form: this.$form.createForm(this)
    }
  },
  methods: {
    handleSubmit() {
      const { form: { validateFields } } = this
      this.visible = true
      validateFields((errors, values) => {
        if (!errors) {
          console.log('values', values)
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
