function createClientSide(execlib) {
  'use strict';
  var execSuite = execlib.execSuite,
  allex_dataserviceServicePack = execSuite.registry.get('allex_dataservice'),
  ParentServicePack = allex_dataserviceServicePack;

  return {
    SinkMap: require('./sinkmapcreator')(execlib, ParentServicePack)
  };
}

module.exports = createClientSide;
