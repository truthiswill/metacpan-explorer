define(["backbone"], function(Backbone) {
  var lskey = 'metacpan-explorer-settings';
  return Backbone.Model.extend({

    defaults: {
      // Fancy "IDE-like" behavior in editor.
      editorFeatures: true,
      // Validate request body as you type.
      instantValidation: true
    },

    fetch: function(){
      var attr = {};
      try {
        attr = JSON.parse(localStorage[lskey]);
      }catch(ignore){}
      this.set(attr);
    },
    sync: function(){
      localStorage[lskey] = JSON.stringify(this);
    }
  });
});
