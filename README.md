# spark-sql-online-editor

## Base info

### feature

1. [x] syntax highlighting
2. [x] auto complete (Use 'Ctrl' key)
3. [ ] show syntax error

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

