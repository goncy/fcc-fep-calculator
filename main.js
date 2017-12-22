const isNum = str => !isNaN(Number(str))

window.app = new Vue({
  el: '#app',
  data: {
    error: '',
    buffer: '',
    result: '0'
  },
  methods: {
    addToBuffer(char) {
      this.error = ''
 
      const lastBufferCharIsNum = isNum(this.lastBufferChar)
      const charIsNum = isNum(char)

      if (lastBufferCharIsNum || charIsNum) {
        this.buffer += char
      } else {
        this.buffer = this.previousBuffer + char
      }
    },
    processBuffer() {
      try {
        this.result = eval(this.result + this.buffer)
        this.buffer = ''
      } catch (e) {
        this.error = `Can't calculate this`
        this.buffer = ''
        this.result = 0
      }
    },
    clearBuffer() {
      this.buffer = ''
      this.result = '0'
      this.error = ''
    }
  },
  computed: {
    lastBufferChar() {
      return this.buffer.substr(this.buffer.length - 1)
    },
    previousBuffer() {
      return this.buffer.substring(0, this.buffer.length - 1)
    },
    formatedResult() {
      return Math.round(this.result * 100) / 100
    }
  }
})