(function (){
  var app = angular.module('Distritoapp',['ngRoute'])
  app.config(function($routeProvider) {
    $routeProvider
    .when('/main', {
      templateUrl: 'tpl/main.html',
      controller: 'distritoController'
    }).
    when('/mapa', {
      templateUrl: 'tpl/mapa.html',
      controller: 'mapController'
    }).
    when('/article/:idNode', {
      templateUrl: 'tpl/article.html',
      controller: 'articleController',
      resolve:{}
    }).
    otherwise({
      redirectTo: '/main'
    });
  });

  app.run();

  app.controller('distritoController',function($scope,Graph,$rootScope,NodeType,$http){
    var nodoOlinguito={"id": "1763628","type": 1,"name": "Distrito","image": "../assets/logo_def.png","relations": [],"article": false};
    //var misnodos = new Array(nodoOlinguito)
    var misnodos;
    $http.get('js/data/nodes.json').
    success(function (data) {
      misnodos = data.data;
      var tmdb;
      (function (tmdb) {
        $rootScope.misnodos=misnodos;
      })(tmdb || (tmdb = {}));


      $scope.click = function() {
        $scope.boolChangeClass = !$scope.boolChangeClass;
      }

      var width = $(window).width(), height = $(window).height(), imageScale = 0.1;
      var dark = "rgb(61, 61, 61)";
      //var dark = "white";
      var d3cola = cola.d3adaptor()
      .linkDistance(function (v) { return sizes.edgeLenght(v.source.info.type); })
      .size([width, height]);

      var outer = d3.select(".graph").append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("pointer-events", "all");

      var zoom = d3.behavior.zoom();

      outer.append("image")
      .attr("xlink:href",function () {
        var url = "../assets/background.jpg";

        var simg = this;
        var img = new Image();
        img.onload = function () {
          simg.setAttribute("preserveAspectRatio","none");
          simg.setAttribute("width", "100%"); //  Ancho Imagen de Fondo
          simg.setAttribute("height","100%"); //  Alto Imagen de Fondo
        }
        return img.src = url;
      })
      .call(zoom.on("zoom", redraw))
      .on("dblclick.zoom", zoomToFit)
      .on("wheel.zoom", null);  //deshabilitar zoom del mouse
      var defs = outer.append("svg:defs");

      function addGradient(id, colour1, opacity1, colour2, opacity2) {
        var gradient = defs.append("svg:linearGradient")
        .attr("id", id)
        .attr("x1", "0%")
        .attr("y1", "0%")
        .attr("x2", "100%")
        .attr("y2", "0%")
        .attr("spreadMethod", "pad");

        gradient.append("svg:stop")
        .attr("offset", "0%")
        .attr("stop-color", colour1)
        .attr("stop-opacity", opacity1);

        gradient.append("svg:stop")
        .attr("offset", "100%")
        .attr("stop-color", colour2)
        .attr("stop-opacity", opacity2);
      }

      addGradient("SpikeGradient", "green", 1, "red", 0);
      addGradient("EdgeGradient", dark, 1, "darkgray", 1);
      addGradient("ReverseEdgeGradient", "darkgray", 1, dark, 1);

      var vis = outer.append('g');

      var edgesLayer = vis.append("g");
      var nodesLayer = vis.append("g");
      var nodeMouseDown = false;

      function redraw(transition) {
        // if mouse down then we are dragging not panning
        if (nodeMouseDown) return;
        (transition ? vis.transition() : vis)
        .attr("transform", "translate(" + zoom.translate() + ") scale(" + zoom.scale() + ")");
      }

      var modelgraph = new Graph();
      var sizes = new NodeType();
      var viewgraph = { nodes: [], links: [] };
      var nodeWidth = 30, nodeHeight = 30;

      var d = modelgraph.getNode( "1763628","Main Node", addViewNode);

      $.when(d).then(function (startNode) {
        addViewNode(startNode);
        refocus(startNode);
        //Correcion de inicio de centro del grafo
        zoom.translate([0,0-100]).scale(1);
        redraw();
      });

      $scope.fit= function(){
        zoomToFit();
      };

      $scope.zoomLess = function(){
        if(zoom.scale()>=0.5)zoomCustom(-0.25);
      };

      $scope.zoomMore = function(){
        if(zoom.scale()<=2)zoomCustom(0.25);

      };

      function zoomCustom(factor){
        var b = graphBounds();
        var w = b.X - b.x, h = b.Y - b.y;
        var cw = outer.attr("width"), ch = outer.attr("height");
        var s = zoom.scale()+factor;
        var tx = (-b.x * s + (cw / s - w) * s / 2), ty = (-b.y * s + (ch / s - h) * s / 2);
        zoom.translate([tx, ty]).scale(s);
        //zoom.scale(zoom.scale()+0.5);
        redraw();
      };

      function refocus(focus) {
        var neighboursExpanded = modelgraph.expandNeighbours(focus, function (v) {
          if (!inView(v)) addViewNode(v, focus);
        });
        refreshViewGraph();
        $.when(neighboursExpanded).then(function f() {
          refreshViewGraph();
          //zoomToFit();
        });
      }

      function refreshViewGraph() {
        viewgraph.links = [];
        viewgraph.nodes.forEach(function (v) {
          var fullyExpanded = modelgraph.fullyExpanded(v);
          v.colour = fullyExpanded ? "darkgrey" : dark
          if (!v.cast) return;
        });
        Object.keys(modelgraph.edges).forEach(function (e) {
          var l = modelgraph.edges[e];
          var u = modelgraph.nodes[l.source], v = modelgraph.nodes[l.target];
          if (inView(u) && inView(v)) viewgraph.links.push({ source: u, target: v });
          if (inView(u) && !inView(v)) u.colour = dark;
          if (!inView(u) && inView(v)) v.colour = dark;
        });
        update();
      }

      function hintNeighbours(v) {
        if (!v.cast) return;
        var hiddenEdges = v.cast.length + 1 - v.degree;
        var r = 2 * Math.PI / hiddenEdges;
        for (var i = 0; i < hiddenEdges; ++i) {
          var w = sizes.width(v.info.type) - 6;
          var  h = sizes.width(v.info.type) - 6;
          var  x = w / 2 + 25 * Math.cos(r * i);
          var  y = h / 2 + 30 * Math.sin(r * i);
          //var  rect = new cola.vpsc.Rectangle(0, w, 0, h);
          var  rect = new cola.vpsc.Rectangle(0, 40, 0, 40);
          var  vi = rect.rayIntersection(x, y);

          var dview = d3.select("#"+v.name()+"_spikes");

          dview.append("circle")
          .attr("class", "spike")
          .attr("rx", 1).attr("ry", 1)
          .attr("x", 0).attr("y", 0)

          .attr("width", sizes.width(v.info.type)).attr("height", sizes.width(v.info.type))

          .attr("stroke", "white")
          .attr("transform", "translate("+vi.x+","+vi.y+") rotate("+(360*i/hiddenEdges)+")")
          .on("click", function () { click(v) });
        }
      }
      function articleClick(v){

        if(v.info.article){
          //window.open("#/article/"+v.id ,'_blank');
          console.log("Url de articulo: #/article/"+v.id );
        }
        else console.log("No hay articulo disponible");
        //console.log(v);
      }

      function unhintNeighbours(v) {
        var dview = d3.select("#" + v.name() + "_spikes");
        dview.selectAll(".spike").remove();
      }

      function inView(v) { return typeof v.viewgraphid !== 'undefined'; }

      function addViewNode(v, startpos) {
        v.viewgraphid = viewgraph.nodes.length;
        var d = v.getImage();
        $.when(d).then(function (node) {

          d3.select("#" + node.name()).append("image")
          .attr("transform", "translate(2,2)")
          .attr("xlink:href", function (v) {
            var url = v.imgurl;
            var simg = this;
            var img = new Image();
            img.onload = function () {
              simg.setAttribute("width", nodeWidth - 4); //  Ancho Imagen de Fondo
              simg.setAttribute("height", nodeHeight - 4); //  Alto Imagen de Fondo
            }
            return img.src = url;

          }).on("click", function() { click(node) })
        });
        if (typeof startpos !== 'undefined') {
          v.x = startpos.x;
          v.y = startpos.y;
        }
        viewgraph.nodes.push(v);
      }

      function click(node) {
        if (node.colour !== dark) return;
        var focus = modelgraph.getNode(node.id,'mu',addViewNode);
        refocus(focus);
      }

      function update() {
        d3cola.nodes(viewgraph.nodes)
        .links(viewgraph.links)
        .start();

        var link = edgesLayer.selectAll(".link")
        .data(viewgraph.links);

        link.enter().append("rect")
        .attr("x", 0).attr("y", 0)
        .attr("height", 2)
        .attr("class", "link");

        link.exit().remove();

        link
        .attr("fill", function (d) {
          if (d.source.colour === dark && d.target.colour === dark) return dark;
          if (d.source.colour !== dark && d.target.colour !== dark) return "darkgray";
          return d.source.colour === dark ? "url(#ReverseEdgeGradient)" : "url(#EdgeGradient)";
        });

        var node = nodesLayer.selectAll(".node")
        .data(viewgraph.nodes, function (d) { return d.viewgraphid; })

        var nodeEnter = node.enter().append("g")
        .attr("id", function (d) { return d.name() })
        .attr("class", "node" )
        .on("mousedown", function () { nodeMouseDown = true; }) // recording the mousedown state allows us to differentiate dragging from panning
        .on("mouseup", function () { nodeMouseDown = false; })
        .on("touchmove", function () { d3.event.preventDefault() })
        .on("mouseenter", function (d) { hintNeighbours(d) }) // on mouse over nodes we show "spikes" indicating there are hidden neighbours
        .on("mouseleave", function (d) { unhintNeighbours(d) })
        .call(d3cola.drag);

        nodeEnter.append("g").attr("id", function (d) { return d.name() + "_spikes" })
        .attr("transform", "translate(3,3)");

        nodeEnter.append("rect")
        .attr("rx", function (d) { sizes.width(d.info.type)/2; }).attr("ry", function (d) { sizes.width(d.info.type)/2; })  // Radio en X y Y
        .style("stroke-width","1")
        .attr("width", function (d) { sizes.width(d.info.type); }  ).attr("height", function (d) { sizes.width(d.info.type); } ) // Asignando atributos de ancho y alto del nodo
        .on("click", function (d) { click(d) });

        //.on("touchend", function (d) { click(d) });

        nodeEnter.append("title")
        .text(function (d) { return d.label; });

        //Label con el nombre
        /*nodeEnter.append("rect")
        .attr("x", -25)
        .attr("y", -30)
        .attr('height', "20px")
        .style('fill', 'black')
        .attr('width', function(d){
          if(d.info.type>=3){
            var n=d.label.length;
            if(n<=13)n=n*10;
            else n=n*9;
            return n+"px";
          }
        });*/

        /*nodeEnter.append("text")
        .attr("x", -20)
        .attr("y", -15).text(function (d) {

          if(d.info.type>=3)
          return d.label;
          else return "";

        }).
        attr("class","customlabel")
        .style("color","white");*/


        //Fin label
        nodeEnter.append("image")
        .attr("xlink:href", function (v) {
          var url = v.imgurl;
          var simg = this;
          var img = new Image();
          img.onload = function () {
            simg.setAttribute("x", 2);
            simg.setAttribute("y", 2);
            simg.setAttribute("width", sizes.width(v.info.type) - 4); //  Ancho Imagen de Fondo
            simg.setAttribute("height", sizes.width(v.info.type) - 4); //  Alto Imagen de Fondo
          }
          return img.src = url;
        })
        .on("click", function(node) { click(node) })
        .on("dblclick", function(d){ articleClick(d) });

        node.style("fill", function (d) { return d.colour; });

        d3cola.on("tick", function () {
          link.attr("transform", function (d) {
            var dx = d.source.x - d.target.x, dy = d.source.y - d.target.y;
            var r = 180 * Math.atan2(dy, dx) / Math.PI;
            return "translate(" + d.target.x + "," + d.target.y + ") rotate(" + r + ") ";
          }).attr("width", function (d) {
            var dx = d.source.x - d.target.x, dy = d.source.y - d.target.y;
            return Math.sqrt(dx * dx + dy * dy);
          });

          node.attr("transform", function (d) { return "translate(" + (d.x - sizes.width(d.info.type)/2) + "," + (d.y-sizes.width(d.info.type)/2) + ")"; });
        });
      }
      function graphBounds() {
        var x = Number.POSITIVE_INFINITY, X=Number.NEGATIVE_INFINITY, y=Number.POSITIVE_INFINITY, Y=Number.NEGATIVE_INFINITY;
        nodesLayer.selectAll(".node").each(function (v) {
          x = Math.min(x, v.x - sizes.width(v.info.type) / 2);
          X = Math.max(X, v.x + sizes.width(v.info.type) / 2);
          y = Math.min(y, v.y - sizes.width(v.info.type) / 2);
          Y = Math.max(Y, v.y + sizes.width(v.info.type) / 2);
        });
        return { x: x, X: X, y: y, Y: Y };
      }
      function fullScreenCancel() {
        outer.attr("width", width).attr("height", height);
        zoomToFit();
      }
      function zoomToFit() {
        var b = graphBounds();
        var w = b.X - b.x, h = b.Y - b.y;
        var cw = outer.attr("width"), ch = outer.attr("height");
        var s = Math.min(cw / w, ch / h);
        var tx = (-b.x * s + (cw / s - w) * s / 2), ty = (-b.y * s + (ch / s - h) * s / 2);
        zoom.translate([tx, ty]).scale(s);
        redraw(true);
      }

    }).
    error(function (data, status) {
      // Error handler with API connection
      console.log(data);
    });


  })
  .factory('Graph',function(APIRequest,Node,$rootScope){
    function Graph() {
      this.nodes = {};
      this.edges = {};
    }
    Graph.prototype.expandNeighbours = function (node, f) {

      var _this = this;

  var dn = $.map( node.cast, function(c) {
    // Do something
    return _this.getNode(c.id,'hola', function (v) {
      v.label = 'tag'+v.id;
      _this.addEdge(node, v);
      f(v);
    });
  });

  //No ententi hay que revizar
  var d = $.Deferred();
  $.when.apply($, dn).then(function () {
    var neighbours = Array.prototype.slice.call(arguments);
    d.resolve(neighbours);
  });
  return d.promise();
};
Graph.prototype.fullyExpanded = function (node) {
  var _this = this;
  return node.cast && node.cast.every(function (v) {
    return ( v.id) in _this.nodes;
  });
};
Graph.prototype.addNode = function (id, type) {
  var node = new Node(id, type);
  return this.nodes[node.name()] = node;
};
Graph.prototype.getNode = function (id, type, f) {//aqui vamos
  var _this = this;
  var d = $.Deferred();
  var name = 'tag'+ id.toString();
  if (name in this.nodes) {

    return this.nodes[name];
  }
  var node = this.addNode(id, type);
  f(node);
  api = new APIRequest;
  var cast = api.requestSons(node.info.relations,$rootScope.misnodos);

  $.when(cast).then(function (c) {
    node.label = node.info.name;
    (node.cast = cast).forEach(function (v) {
      var neighbourname = 'tag' + v.id.toString();
      if (neighbourname in _this.nodes) {
        _this.addEdge(node, _this.nodes[neighbourname]);
      }
    });
    d.resolve(node);
});
return d.promise();
};
Graph.prototype.addEdge = function (u, v) {
  var edge = u.makeEdge(u.name(), v.name());
  var ename = edge.toString();
  if (!(ename in this.edges)) {
    this.edges[ename] = edge;
  }
  ++u.degree, ++v.degree;
};

return Graph;

})

.factory('Node',function(APIRequest,Edge,$rootScope){

  function Node(id, type) {
    var api= new APIRequest();
    this.info = api.request2(id,$rootScope.misnodos)[0];
    this.type = type;
    this.id = id;
    this.degree = 0;

  }

  Node.prototype.name = function () {
    return 'tag'+this.id; // Este es el nombre del nodo
  };
  Node.prototype.getImage = function () {
    var _this = this;
    var d = $.Deferred();
    _this.imgurl = this.info.image;
    d.resolve(_this);
    return d.promise();
  };
  Node.prototype.makeEdge = function (thisName, otherName) {
    return new Edge(thisName, otherName) ;
  };
  return Node;
})
.factory('APIRequest',function(){
  function APIRequest(){};
  APIRequest.prototype.requestSons= function(sons,nodos) {
    var misnodos=nodos;
    var nodesons =[];
    for (var i = misnodos.length - 1; i >= 0; i--) {
      for (var j= sons.length - 1; j >= 0; j--) {
        if (misnodos[i].id==sons[j].id){
          nodesons.push(misnodos[i]);
        };
      };
    };
    return nodesons;
  };
  APIRequest.prototype.request2=function(id,nodos) {

    var misnodos=nodos;
    var mynode =[];
    for (var i = misnodos.length - 1; i >= 0; i--) {
      if (misnodos[i].id==id){
        mynode.push(misnodos[i]);
        break;
      };
    };
    return mynode;
  };

  return APIRequest;
})
.factory('Edge',function(){
  function Edge(source, target) {
    this.source = source;
    this.target = target;
  }
  Edge.prototype.toString = function () {
    return this.source + '-' + this.target;
  };
  return Edge;
})
.factory('NodeType',function(){
  function NodeType() {}
  NodeType.prototype.width = function (type) {
    //Node Size
    var width=0;
    if (type =="1") width =250;
    else if (type =="2") width =120;
    else if(type =="3") width =80;
    else if(type =="4") width =80;
    else  width =20;
    return width;
  };
  NodeType.prototype.edgeLenght = function (type) {
    var lenght=0;
    if (type =="1") lenght =175;
    else if (type =="2") lenght =120;
    else if(type =="3") lenght =75;
    else if(type =="4") lenght =200;
    else  lenght =20;
    return lenght;
  };
  return NodeType;
})
.factory('taou2',function(){})
})();
