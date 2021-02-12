<script>
export default {
  name: 'CustomButton',
  props: {
    border: { type: [String, Number], default: 1 },
    borderColor: { type: String, default: '#CCC' },
    disableBorderColor: { type: String, default: '#CCC' },
    disabled: { type: Boolean, default: false },
    disableColor: { type: String, default: '#eee' },
    color: { type: String, default: '#CCC' },
    disableBackground: { type: String, default: '#eee' },
    background: { type: String, default: '#eee' },
    mouseoverColor: { type: String, default: '#555' },
    mouseoverBackground: { type: String, default: '#ddd' },
    cursor: { type: String, default: 'pointer' },
    padding: { type: [String, Number], default: '5px 10px' },
    margin: { type: [String, Number], default: 1 },
    borderRadius: { type: [String, Number], default: 2 }
  },
  data() {
    return { isMouseOver: false }
  },
  computed: {
    styles() {
      return {
        borderWidth: this._border,
        borderColor: this._borderColor,
        borderRadius: this._borderRadius,
        background: this._background,
        color: this._color,
        cursor: this._cursor,
        padding: this._padding,
        margin: this._margin
      }
    },
    _border() {
      if (this.isNumeric(this.border)) {
        return this.border + ' px'
      }
      return this.color
    },
    _borderColor() {
      return this.disabled ? this.disableBorderColor : this.borderColor
    },
    _borderRadius() {
      if (this.isNumeric(this.borderRadius)) return this.margin + ' px'
      return this.borderRadius
    },
    _background() {
      if (this.disabled) return this.disableBackground
      return this.isMouseOver ? this.mouseoverBackground : this.background
    },
    _color() {
      if (this.disabled) return this.disableColor
      return this.isMouseOver ? this.mouseoverColor : this.color
    },
    _cursor() {
      return this.disabled ? 'default' : this.cursor
    },
    _padding() {
      if (this.isNumeric(this.padding)) return this.padding + ' px'
      return this.padding
    },
    _margin() {
      if (this.isNumeric(this.margin)) return this.margin + ' px'
      return this.margin
    }
  },
  methods: {
    isNumeric(value) {
      return /^\d+$/.test(value)
    },
    OnMouseOver() {
      this.isMouseOver = true
    },
    OnMouseOut() {
      return (this.isMouseOver = false)
    }
  }
}
</script>

<template>
  <button :style="styles" @mouseover="OnMouseOver" @mouseout="OnMouseOut">
    <slot />
  </button>
</template>

<style scoped>
button {
  outline: none;
  border-style: solid;
}
</style>
