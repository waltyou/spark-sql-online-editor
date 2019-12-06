<template>
  <div class="md-subhead">
    <p>Spark Sql Online Editor</p>
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

import 'codemirror/addon/hint/sql-hint.js'
import 'codemirror/mode/sql/sql.js'
import '../sparkSql/sparksql-lint.js'

export default {
  name: 'SparksqlEditor',
  data () {
    const code =
`
selct a from b;
`
    return {
      code,
      cmOption: {
        tabSize: 4,
        styleActiveLine: true,
        lineNumbers: true,
        extraKeys: {'Ctrl': 'autocomplete'},
        line: true,
        mode: 'text/x-sparksql',
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
