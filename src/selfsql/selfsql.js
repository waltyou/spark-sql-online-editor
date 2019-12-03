import CodeMirror from 'codemirror'

// turn a space-separated list into an array
function set (str) {
  var obj = {}
  var words = str.split(' ')
  for (var i = 0; i < words.length; ++i) obj[words[i]] = true
  return obj
}

var defaultBuiltin = 'tinyint smallint int bigint boolean float double string binary timestamp decimal array map struct uniontype delimited serde sequencefile textfile rcfile inputformat outputformat'
var sparklSqlKeywords = 'add after all alter analyze and anti archive array as asc at between bucket buckets by cache cascade case cast change clear cluster clustered codegen collection column columns comment commit compact compactions compute concatenate cost create cross cube current current_date current_timestamp database databases datata dbproperties defined delete delimited deny desc describe dfs directories distinct distribute drop else end escaped except exchange exists explain export extended external false fields fileformat first following for format formatted from full function functions global grant group grouping having if ignore import in index indexes inner inpath inputformat insert intersect interval into is items join keys last lateral lazy left like limit lines list load local location lock locks logical macro map minus msck natural no not null nulls of on optimize option options or order out outer outputformat over overwrite partition partitioned partitions percent preceding principals purge range recordreader recordwriter recover reduce refresh regexp rename repair replace reset restrict revoke right rlike role roles rollback rollup row rows schema schemas select semi separated serde serdeproperties set sets show skewed sort sorted start statistics stored stratify struct table tables tablesample tblproperties temp temporary terminated then to touch transaction transactions transform true truncate unarchive unbounded uncache union unlock unset use using values view when where window with'
// ====================== self defined keywords ================================
var selfsqlLoadType = 'pig parquet csv json avro'
var selfsqlAllKeywords = defaultBuiltin + ' ' + sparklSqlKeywords + ' ' + selfsqlLoadType

CodeMirror.defineMIME('text/x-selfsql', {
  name: 'sql',
  keywords: set(selfsqlAllKeywords)
})
