<template>
  <div class="loading">
    <div class="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
const CENTER_X = 50
const CENTER_Y = 50
const RADIUS = 20

function positionOnCircle(radius, angle, center) {
  return {
    x: center.x + radius * Math.cos(toRadians(angle)),
    y: center.y + radius * Math.sin(toRadians(angle))
  }
}

function toRadians(angle) {
  return (angle * Math.PI) / 180
}

function calculatePositions(component) {
  let angleIncrement = 360 / component.circles.length
  let positions = {}
  component.circles.forEach((circle, index) => {
    positions[index] = positionOnCircle(RADIUS, angleIncrement * index, {
      x: CENTER_X,
      y: CENTER_Y
    })
  })
  return positions
}

export default {
  name: 'loading',
  data() {
    return {
      circles: [
        { color: '#E0F2F1', radius: 0 },
        { color: '#B2DFDB', radius: 0 },
        { color: '#80CBC4', radius: 0 },
        { color: '#4DB6AC', radius: 0 },
        { color: '#26A69A', radius: 0 },
        { color: '#00897B', radius: 0 },
        { color: '#00796B', radius: 0 },
        { color: '#00695C', radius: 0 },
        { color: '#004D40', radius: 0 }
      ],
      counter: 0,
      interval: null
    }
  },
  computed: {
    circlePositions: calculatePositions
  },
  created() {
    this.interval = setInterval(() => {
      this.counter++
      this.circles = this.circles.map((item, index) => ({
        ...item,
        radius: (this.counter + index) % 8
      }))
    }, 70)
  },
  destroyed() {
    clearInterval(this.interval)
  }
}
</script>

<style scoped>
.loading {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  z-index: 30;
}
.loading .lds-roller {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.loading .lds-roller div {
  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  transform-origin: 40px 40px;
}
.loading .lds-roller div:after {
  content: ' ';
  display: block;
  position: absolute;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #2a9200;
  margin: -4px 0 0 -4px;
}
.loading .lds-roller div:nth-child(1) {
  animation-delay: -0.036s;
}
.loading .lds-roller div:nth-child(1):after {
  top: 63px;
  left: 63px;
}
.loading .lds-roller div:nth-child(2) {
  animation-delay: -0.072s;
}
.loading .lds-roller div:nth-child(2):after {
  top: 68px;
  left: 56px;
}
.loading .lds-roller div:nth-child(3) {
  animation-delay: -0.108s;
}
.loading .lds-roller div:nth-child(3):after {
  top: 71px;
  left: 48px;
}
.loading .lds-roller div:nth-child(4) {
  animation-delay: -0.144s;
}
.loading .lds-roller div:nth-child(4):after {
  top: 72px;
  left: 40px;
}
.loading .lds-roller div:nth-child(5) {
  animation-delay: -0.18s;
}
.loading .lds-roller div:nth-child(5):after {
  top: 71px;
  left: 32px;
}
.loading .lds-roller div:nth-child(6) {
  animation-delay: -0.216s;
}
.loading .lds-roller div:nth-child(6):after {
  top: 68px;
  left: 24px;
}
.loading .lds-roller div:nth-child(7) {
  animation-delay: -0.252s;
}
.loading .lds-roller div:nth-child(7):after {
  top: 63px;
  left: 17px;
}
.loading .lds-roller div:nth-child(8) {
  animation-delay: -0.288s;
}
.loading .lds-roller div:nth-child(8):after {
  top: 56px;
  left: 12px;
}
@keyframes lds-roller {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
