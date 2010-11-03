var Actor = Class.create(Renderable, {
  initialize: function($super, attributes) {
    var self = this;
    self.id = attributes.id;
    self.name = attributes.name;
    self.scale = attributes.scale || 1;
    
    MD2.load(attributes.model.name, function(obj) {
      self.model = obj;
      self.model.setScale(self.scale);
      
      for (var i = 0; i < attributes.model.textures.length; i++)
        self.model.mesh.addTexture(attributes.model.textures[i].path);
    });
            
    $super(attributes);
  },
  
  // No need for an update thread for Actor.
  update: null,
  
  render: function($super, options) {
    if (this.model) this.model.render(options);
  },
  
  lowest: function() { return this.model && this.model.mesh.lowest(); },
  
  draw: function($super, options) {
    if (this.model) this.model.draw(options);
  }
});

Actor.instance = function(attributes) { return instanceFor(Actor, attributes); };
