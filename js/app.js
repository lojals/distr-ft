(function (){
    var app = angular.module('Distritoapp',[])
	    	  
    .controller('distritoController',function($scope,Graph,$rootScope,NodeType){







var tmdb;
(function (tmdb) {
    //Declaracion de el objeto NodeType y sus prototipos
    var nodoOlinguito=
        {
            "id": "1763628",
            "type": 1,
            "name": "Distrito",
            "image": "../assets/logo_def.png",
            "relations": [
                {
                    "id": "2341312"
                },
                {
                    "id": "3567564"
                },
                {
                    "id": "3422344"
                },
                {
                    "id": "5634464"
                }
            ],
            "article": false
        };
var nodoOvalle={
            "id": "2341312",
            "type": 2,
            "name": "bandas",
            "image": "../assets/circle.png",
            "relations": [
                {
                    "id": "8213623"
                },
                {
                    "id": "9645747"
                },
                {
                    "id":"4534366"
                }

            ],
            "article": false
        };
//alert(nodoOvalle.id);   https://avatars2.githubusercontent.com/u/7140772?v=3&s=100


var nodoRoberto={
            "id": "3567564",
            "type": 2,
            "name": "influencias",
            "image": "../assets/circle.png",
            "relations": [
                
               
                {
                    "id": "1034578"
                },
                {
                    "id": "1135673"
                },

            ],
            "article": false
        };

var nodoProtagonistas={
            "id": "5634464",
            "type": 2,
            "name": "protagonistas",
            "image": "../assets/circle.png",
            "relations": [
                {
                    "id":"4554334"
                },
                {
                    "id":"6574533"
                }
            ],
            "article": false
        };
    var nodoOcho={
            "id": "8213623",
            "type": 3,
            "name": "Bastardas Populares",
            "image": "../assets/circle.png",
            "relations": [
                
            ],
            "article": false
        };
    var nodoNueve={
            "id": "9645747",
            "type": 3,
            "name": "Puras Tradicionales",
            "image": "../assets/circle.png",
            "relations": [
                
            ],
            "article": false
        };
    var nodoDiez={
        "id": "1034578",
        "type": 3,
        "name": "De Allá",
        "image": "../assets/circle.png",
        "relations": [
            
        ],
        "article": false
    };
    var nodoOnce={
        "id": "1135673",
        "type": 3,
        "name": "De Aquí",
        "image": "../assets/circle.png",
        "relations": [
            
        ],
        "article": false
    };
    var nodoEnlajugada={
        "id": "4554334",
        "type": 3,
        "name": "En la Jugada",
        "image": "../assets/circle.png",
        "relations": [
            
        ],
        "article": false
    };
    var nodoComba={
        "id": "4534366",
        "type": 3,
        "name": "Comba Jazzera",
        "image": "../assets/circle.png",
        "relations": [
            
        ],
        "article": false
    };
    var nodoArtistas={
        "id": "6574533",
        "type": 3,
        "name": "artistas",
        "image": "../assets/circle.png",
        "relations": [
            {
                    "id":"7686788"
                },
                {
                    "id":"3512544"
                }
        ],
        "article": false
    };
    var nodoHombres={
        "id": "3512544",
        "type": 3,
        "name": "hombres",
        "image": "../assets/circle.png",
        "relations": [
            
        ],
        "article": false
    };
    var nodoMujeres={
        "id": "7686788",
        "type": 3,
        "name": "mujeres",
        "image": "../assets/circle.png",
        "relations": [
            
        ],
        "article": false
    };
    var nodoInstrumentos={
            "id": "3422344",
            "type": 2,
            "name": "instrumentos",
            "image": "../assets/circle.png",
            "relations": [
                {
                    "id": "3245355"
                },
                {
                    "id": "790005"
                },
                {
                    "id": "5544332"
                },
                {
                    "id": "0423902"
                }
            ],
            "article": false
        };
    var nodoCuerda={
        "id": "3245355",
        "type": 3,
        "name": "Cuerda",
        "image": "../assets/circle.png",
        "relations": [
            
        ],
        "article": false
    };
    var nodoViento={
        "id": "790005",
        "type": 3,
        "name": "Viento",
        "image": "../assets/circle.png",
        "relations": [
            
        ],
        "article": false
    };
    var nodoPercusion={
        "id": "5544332",
        "type": 3,
        "name": "Percusión",
        "image": "../assets/circle.png",
        "relations": [
            
        ],
        "article": false
    };
    var nodoElectricos={
        "id": "0423902",
        "type": 3,
        "name": "Eléctricos",
        "image": "../assets/circle.png",
        "relations": [
            
        ],
        "article": false
    };
    var misnodos =new Array(nodoOvalle, nodoCuerda,nodoViento,nodoPercusion,nodoElectricos, nodoEnlajugada, nodoHombres, nodoComba, nodoMujeres, nodoArtistas, nodoInstrumentos, nodoProtagonistas, nodoOlinguito,nodoRoberto,nodoOcho,nodoNueve,nodoDiez,nodoOnce, nodoInstrumentos);
   
    	//linea de codigo provisional para el factory Nodo
   $rootScope.misnodos=misnodos;
    
    ////console.log('entra a 2');
    //Creacion de dos tipos de nodo Movie and Person
    //tmdb.Movie = new NodeType2("movie", "credits", "title", "posters");
    //tmdb.Person = new NodeType2("person", "movie_credits", "name", "profiles");
    //tmdb.medium = new NodeType2("medium","");

   
    //Se declara la clase Graph donde se declara dos arreglos uno de nodes y uno de edges, ademas se definen unos prototipos
    

})(tmdb || (tmdb = {}));


    	var width = $(window).width(),
        height = $(window).height(),
        imageScale = 0.1;

    var dark = "rgb(61, 61, 61)";

    //var dark = "white";

    var d3cola = cola.d3adaptor()
        .linkDistance(function (v) { return sizes.edgeLenght(v.source.info.type); })
        .size([width, height]);

    var outer = d3.select("body").append("svg")
        .attr("width", width)
        .attr("height", height)
        .attr("pointer-events", "all");

    var zoom = d3.behavior.zoom();
    outer.append('rect')
        .attr('class', 'background')
        .attr('width', "100%")
        .attr('height', "100%")
        .call(zoom.on("zoom", redraw))
        .on("dblclick.zoom", zoomToFit);

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


    // get first node 
    /*
    var d = modelgraph.getNode(tmdb.Person, 819, addViewNode);
    $.when(d).then(function (startNode) {
        addViewNode(startNode);
        refocus(startNode);
    });
    */

    var d = modelgraph.getNode( "1763628",tmdb.XtraLarge, addViewNode);
    $.when(d).then(function (startNode) {
        addViewNode(startNode);
        refocus(startNode);
    });


    function refocus(focus) {
        var neighboursExpanded = modelgraph.expandNeighbours(focus, function (v) {
            if (!inView(v)) addViewNode(v, focus);
        });
        refreshViewGraph();
        $.when(neighboursExpanded).then(function f() {
            refreshViewGraph();
        });
    }

    function refreshViewGraph() {
        viewgraph.links = [];
        viewgraph.nodes.forEach(function (v) {
            var fullyExpanded = modelgraph.fullyExpanded(v);
            //console.log('fullyExpanded resultado:');
            //console.log(fullyExpanded);
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
            //console.log ("el tamaño");
            //console.log(v);
            //console.log (v.info.type);
            //console.log (sizes.width(v.type));
            var w = sizes.width(v.info.type) - 6,
                h = sizes.width(v.info.type) - 6,
                x = w / 2 + 25 * Math.cos(r * i),
                y = h / 2 + 30 * Math.sin(r * i),
                rect = new cola.vpsc.Rectangle(0, w, 0, h),
                vi = rect.rayIntersection(x, y);
               
            var dview = d3.select("#"+v.name()+"_spikes");
            //console.log(vi);
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

    function unhintNeighbours(v) {
        var dview = d3.select("#" + v.name() + "_spikes");
        dview.selectAll(".spike").remove();
    }

    function inView(v) { return typeof v.viewgraphid !== 'undefined'; }

    function addViewNode(v, startpos) {
        v.viewgraphid = viewgraph.nodes.length;
        var d = v.getImage();
        

        $.when(d).then(function (node) {
             //console.log('entra addViewNode para ver la promesa');
            //console.log(node.name());
            //console.log(v.imgurl);
            d3.select("#" + node.name()).append("image")
            .attr("transform", "translate(2,2)")
            .attr("xlink:href", function (v) {
                var url = v.imgurl;
                //console.log('Urlimagen:');
                //console.log(url);

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
        var focus = modelgraph.getNode(node.id,'mu');
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

        nodeEnter.append("text").text(function (d) { return d.label; });

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
            .on("click", function(node) { click(node) });

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


    })
.factory('Graph',function(APIRequest,Node,$rootScope){

	function Graph() {
            this.nodes = {};
            this.edges = {};
        }
        Graph.prototype.expandNeighbours = function (node, f) {
            //console.log('entra a expande vecinos');
            //console.log('expandiendo vecinos:'+node +' '+f)
            var _this = this;
            /*
            var dn = node.cast.map(function (c) {
                return _this.getNode(c.id,'hola', function (v) {
                    v.label = 'tag'+v.id;
                    _this.addEdge(node, v);
                    f(v);
                });
            });
            */
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
            //console.log('entra a fullyExpanded');
            var _this = this;
            return node.cast && node.cast.every(function (v) {
                return ( v.id) in _this.nodes;
            });
        };
        Graph.prototype.addNode = function (id, type) {
            //console.log('entra adiciona Nodo');
            var node = new Node(id, type);
            return this.nodes[node.name()] = node;
        };
        Graph.prototype.getNode = function (id, type, f) {//aqui vamos
            //console.log('entra aget node');
            var _this = this;
            var d = $.Deferred();
            //console.log('_This nodes en get node:');
            //console.log(_this.nodes);
            //var name = type + id.toString();
            var name = 'tag'+ id.toString();
            //console.log('_This nodes en get node:');
            //console.log(_this.nodes);

            if (name in this.nodes) {
                return this.nodes[name];
            }
            var node = this.addNode(id, type);
            f(node);
            //console.log('NOdo antes del cast');
            //console.log(node);
            api = new APIRequest;
            var cast = api.requestSons(node.info.relations,$rootScope.misnodos);
            //console.log('El cast es:');
            //console.log(cast);

            $.when(cast).then(function (c) {
                node.label = node.info.name;
                (node.cast = cast).forEach(function (v) {
                    var neighbourname = 'neighbour' + v.id.toString();
                    if (neighbourname in _this.nodes) {
                        _this.addEdge(node, _this.nodes[neighbourname]);
                    }
                });
                d.resolve(node);
            });
            return d.promise();
        };
        Graph.prototype.addEdge = function (u, v) {
            //console.log('entra adiciona edge');
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
        ////console.log(this.type + this.id.toString());
        return 'tag'+this.id; // Este es el nombre del nodo
    };
    Node.prototype.getImage = function () {
        ////console.log(this.id);
        ////console.log(this.info.image);
        //return $.get(this.info.image);
        var _this = this;
        var d = $.Deferred();
        
            _this.imgurl = this.info.image;
           
            d.resolve(_this);

        return d.promise();

    };
    Node.prototype.makeEdge = function (thisName, otherName) {
        //return this === tmdb.Movie ? new Edge2(thisName, otherName) : new Edge2(otherName, thisName);
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
                ////console.log('for'+ i + misnodos[i].id + '='+id);
            if (misnodos[i].id==id){
                ////console.log('entro al if del request');
                    mynode.push(misnodos[i]);
                    break;
                };
            
        };
        //console.log('entro al request');
        //console.log(mynode);
        return mynode;
    };
    APIRequest.prototype.request=function (type, id, content, append) {
        //console.log('entra a request con: '+type + '   '+id +'   '+content + '   '+append);
        if (typeof content === "undefined") { content = null; }
        if (typeof append === "undefined") { append = null; }
        var query = "https://api.themoviedb.org/3/" + type + "/" + id;
        if (content) {
            query += "/" + content;
        }
        query += "?api_key=1bba0362f468d50d2ec27acff6d5e05a";
        if (append) {
            query += "&append_to_response=" + append;
        }
        ////console.log($.get(query));
        return $.get(query);
    }

    return APIRequest;

})
.factory('Edge',function(){
	//console.log('entra a 3 Crea Edge');
    function Edge(source, target) {
        //console.log('edge2');
        this.source = source;
        this.target = target;
    }
    Edge.prototype.toString = function () {

        return this.source + '-' + this.target;
    };

    return Edge;

})
.factory('NodeType',function(){

        //console.log('entra a 1 NodeType');
        //console.log(misnodos);
        function NodeType() {
            //this.type = type;
            //this.image =image;
            //this.relations = relations;
            //this.article = article;
            //this.instruments = instruments;
            //this.influences = influences;
        }
        NodeType.prototype.width = function (type) {
            var width=0;
            if (type =="1") width =250;
            else if (type =="2") width =100;
            else if(type =="3") width =60;
            else if(type =="4") width =30;
            else  width =20;
            return width;
        };
        NodeType.prototype.edgeLenght = function (type) {
            var lenght=0;
            if (type =="1") lenght =175;
            else if (type =="2") lenght =100;
            else if(type =="3") lenght =75;
            else if(type =="4") lenght =50;
            else  lenght =20;
            return lenght;
        };
        
        return NodeType;


})
.factory('taou2',function(){})
	    	  
	

})();