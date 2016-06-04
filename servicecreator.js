function createVocabularyService(execlib, ParentServicePack) {
  'use strict';
  var ParentService = ParentServicePack.Service,
    dataSuite = execlib.dataSuite;

  function factoryCreator(parentFactory) {
    return {
      'service': require('./users/serviceusercreator')(execlib, parentFactory.get('service')),
      'user': require('./users/usercreator')(execlib, parentFactory.get('user')) 
    };
  }

  function VocabularyService(prophash) {
    ParentService.call(this, prophash);
  }
  
  ParentService.inherit(VocabularyService, factoryCreator, require('./storagedescriptor'));
  
  VocabularyService.prototype.__cleanUp = function() {
    ParentService.prototype.__cleanUp.call(this);
  };
  VocabularyService.prototype.createStorage = function(storagedescriptor) {
    return ParentService.prototype.createStorage.call(this, storagedescriptor);
  };
  return VocabularyService;
}

module.exports = createVocabularyService;
