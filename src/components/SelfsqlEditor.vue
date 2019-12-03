<template>
  <div class="md-subhead">
    <p>Self Sql Online Editor</p>
    <div>
      <!-- codemirror -->
      <codemirror v-model="code" :options="cmOption">
      </codemirror>
    </div>
  </div>
</template>

<script>

// cm common
import 'codemirror/theme/cobalt.css'
import 'codemirror/addon/hint/show-hint.css'
import 'codemirror/addon/hint/show-hint.js'
import 'codemirror/addon/lint/lint.css'
import 'codemirror/addon/lint/lint.js'

import '../selfsql/selfsql.js'

export default {
  name: 'SelfsqlEditor',
  data () {
    const code =
`
select a from b with pig inputformat;
`
    return {
      code,
      cmOption: {
        tabSize: 4,
        styleActiveLine: true,
        lineNumbers: true,
        extraKeys: {'Ctrl': 'autocomplete'},
        line: true,
        mode: 'text/x-selfsql',
        theme: 'cobalt',
        viewportMargin: Infinity,
        gutters: ['CodeMirror-lint-markers'],
        lint: true
      }
    }
  }
}
</script>

<style>
.CodeMirror {
  height: 1100px;
  font-size: 16px;
}
</style>
