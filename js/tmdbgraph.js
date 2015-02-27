///<reference path="../extern/jquery.d.ts"/>
var tmdb;
(function (tmdb) {
    //Declaracion de el objeto NodeType y sus prototipos
    var NodeType = (function () {
    	console.log('entra a 1');
        function NodeType(type, credits, label, imagesarray) {
            this.type = type;
            this.credits = credits;
            this.label = label;
            this.imagesarray = imagesarray;
        }
        NodeType.prototype.toString = function () {
            return this.type;
        };

        NodeType.prototype.next = function () {
            return this === tmdb.Movie ? tmdb.Person : tmdb.Movie;
        };

        NodeType.prototype.makeEdge = function (thisName, otherName) {
            return this === tmdb.Movie ? new Edge(thisName, otherName) : new Edge(otherName, thisName);
        };
        return NodeType;
    })();
    tmdb.NodeType = NodeType;
	console.log('entra a 2');
    //Creacion de dos tipos de nodo Movie and Person
    tmdb.Movie = new NodeType("movie", "credits", "title", "posters");
    tmdb.Person = new NodeType("person", "movie_credits", "name", "profiles");
    //Declaracion de el objeto Nodo y sus  prototipos
    var Node = (function () {
    	console.log('entra a 3');
        function Node(type, id) {
            this.type = type;
            this.id = id;
            this.degree = 0;
        }
        Node.prototype.name = function () {
        	//console.log(this.type + this.id.toString());
            return this.type + this.id.toString(); // Este es el nombre del nodo
        };
        Node.prototype.getImage = function () {
            var _this = this;
            var d = $.Deferred();
            var images = request(this.type, this.id, "images");
            $.when(images).then(function (i) {
                var paths = i[_this.type.imagesarray];

                _this.imgurl = paths.length > 0 ? 'http://image.tmdb.org/t/p/w185/' + paths[0].file_path : 'http://upload.wikimedia.org/wikipedia/commons/3/37/No_person.jpg';
               // console.log('Imagen con index: '+  _this.imgurl);
                d.resolve(_this);
            });

            return d.promise();
        };
        return Node;
    })();
    tmdb.Node = Node;
    //Declaracion de el objeto Edge y sus prototipos
    var Edge = (function () {
    	console.log('entra a 4');
        function Edge(source, target) {
        	console.log('entra a 5');
            this.source = source;
            this.target = target;
        }
        Edge.prototype.toString = function () {
        	
            return this.source + '-' + this.target;
        };
        return Edge;
    })();
    tmdb.Edge = Edge;
    //funcion que hace el yamado al api de peliculas y trae la informacion
    function request(type, id, content, append) {
    	console.log('entra a A con: '+type + '   '+id +'   '+content + '   '+append);
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
        console.log(query);
        return $.get(query);
    }
    //Se declara la clase Graph donde se declara dos arreglos uno de nodes y uno de edges, ademas se definen unos prototipos
    var Graph = (function () {
    	console.log('entra a 7');
        function Graph() {
            this.nodes = {};
            this.edges = {};
        }
        Graph.prototype.expandNeighbours = function (node, f) {
        	console.log('entra a 8');
        	console.log('expandiendo vecinos:'+node +' '+f)
            var _this = this;

            var dn = node.cast.map(function (c) {
                return _this.getNode(node.type.next(), c.id, function (v) {
                    v.label = c[v.type.label];
                    _this.addEdge(node, v);
                    f(v);
                });
            });
            console.log('El dn del cast');
            console.log(dn);
            //No ententi hay que revizar
            var d = $.Deferred();
            $.when.apply($, dn).then(function () {
                var neighbours = Array.prototype.slice.call(arguments);
                d.resolve(neighbours);
            });
            return d.promise();
        };
        Graph.prototype.fullyExpanded = function (node) {
        	console.log('entra a 9');
            var _this = this;
            return node.cast && node.cast.every(function (v) {
                return (node.type.next() + v.id) in _this.nodes;
            });
        };
        Graph.prototype.addNode = function (type, id) {
        	console.log('entra a 10');

            var node = new Node(type, id);
            return this.nodes[node.name()] = node;
        };
        Graph.prototype.getNode = function (type, id, f) {
        	console.log('entra a 11');
            
            var _this = this;
            var d = $.Deferred();
            console.log('_This nodes en get node:');
            console.log(_this.nodes);
            var name = type + id.toString();
            if (name in this.nodes) {
                return this.nodes[name];
            }

            var node = this.addNode(type, id);


            f(node);
            var cast = request(type, id, null, type.credits);
            console.log('cast:');
            console.log(cast);
            $.when(cast).then(function (c) {
                node.label = c[type.label];
                console.log('node.label:');
                console.log(node.label);
                console.log('_This nodes  primer cast');
                 console.log(_this.nodes);
                (node.cast = c[type.credits].cast).forEach(function (v) {
                    console.log('node.cast:');
                    console.log(node.cast);
                    var neighbourname = type.next() + v.id.toString();
                    console.log('neighbourname:');
                    console.log(neighbourname);
                    if (neighbourname in _this.nodes) {
                        console.log('_This nodes if');
                        console.log(_this.nodes);
                        _this.addEdge(node, _this.nodes[neighbourname]);
                    }
                });
                d.resolve(node);
            });
            return d.promise();
        };
        Graph.prototype.addEdge = function (u, v) {
        	console.log('entra a 12');
            var edge = u.type.makeEdge(u.name(), v.name());
            var ename = edge.toString();
            if (!(ename in this.edges)) {
                this.edges[ename] = edge;
            }
            ++u.degree, ++v.degree;
        };
        return Graph;
    })();
    tmdb.Graph = Graph;
})(tmdb || (tmdb = {}));
//# sourceMappingURL=tmdbgraph.js.map
