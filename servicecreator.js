function createVocabularyDataService(execlib, ParentServicePack) {
  'use strict';
  var ParentService = ParentServicePack.Service,
    dataSuite = execlib.dataSuite;

  function factoryCreator(parentFactory) {
    return {
      'service': require('./users/serviceusercreator')(execlib, parentFactory.get('service')),
      'user': require('./users/usercreator')(execlib, parentFactory.get('user')) 
    };
  }

  function VocabularyDataService(prophash) {
    ParentService.call(this, prophash);
  }
  
  ParentService.inherit(VocabularyDataService, factoryCreator, require('./storagedescriptor'));
  
  VocabularyDataService.prototype.__cleanUp = function() {
    ParentService.prototype.__cleanUp.call(this);
  };
  VocabularyDataService.prototype.createStorage = function(storagedescriptor) {
    return ParentService.prototype.createStorage.call(this, storagedescriptor);
  };
  return VocabularyDataService;
}

module.exports = createVocabularyDataService;
