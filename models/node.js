var mongoose = require('mongoose')
  , Schema = mongoose.Schema;
  
var TxSchema = new Schema({
  node_state: { type: String, lowercase: true, unique: true, index: true},
  node_predate: { type: Number, default: 0 },
  node_timelong: { type: Number, default: 0 },
  node_curdate: { type: Number, default: 0 },
  node_pubkey: { type: String },
  node_addr: { type: String },
  node_protocal: {type: Number, default: 0}
}, {id: false});

module.exports = mongoose.model('Node', TxSchema);
