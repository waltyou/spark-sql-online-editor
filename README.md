# spark-sql-online-editor

中文介绍可以看[这里](https://waltyou.github.io/Spark-Sql-Online-Editor/)。

## Base info

### feature

1. [x] syntax highlighting
2. [x] auto complete (Use 'Ctrl' key)
3. [x] show syntax error
4. [ ] check sql line one by one
5. [ ] sql context involve

### tech stack

1. codemirror
2. vue
3. js

## Usage

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```

## Introduce

### 1. Demo from official webset

All feature's implement are base on [Codemirror](https://codemirror.net/).
There already have "spark-sql" mode in [Codemirror sql mode](https://github.com/codemirror/CodeMirror/blob/master/mode/sql/sql.js).

You can run this project and access 'http://localhost:8080' to find the Spark-Sql editor.

### 2. self defined word highlighting and autoComplete

Try to access 'http://localhost:8080/#/selfsql' to see what happened. The implement you can find in `SelfsqlEditor.vue` and `selfsql.js`.

### 3. show syntax error

Spark SQL uses module [Spark-Catalyst](https://github.com/apache/spark/tree/master/sql/catalyst) to do SQL parse.
And Spark-Catalyst use ANTLR4 to generate Gammer Parser in Java.

So if we want to use ANTLR4 for syntax check in webpage, we need generate code in JS. Refer to [here](https://github.com/antlr/antlr4/blob/master/doc/javascript-target.md).
There also have a npm implement in github which named [antlr4-tool](https://github.com/mcchatman8009/antlr4-tool).

The steps are as blow:

1. Get the [G4 file](https://github.com/apache/spark/blob/master/sql/catalyst/src/main/antlr4/org/apache/spark/sql/catalyst/parser/SqlBase.g4) from Spark-Catalyst.
2. Generate antlr4 related js by using antlr4-tool
3. According to [parsePlan#ParseDriver.scala](https://github.com/apache/spark/blob/master/sql/catalyst/src/main/scala/org/apache/spark/sql/catalyst/parser/ParseDriver.scala), create JS function.
4. Register lint to codemirror
