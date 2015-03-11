
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
   
    var NodeType2 = (function () {
        //console.log('entra a 1 NodeType');
        //console.log(misnodos);
        function NodeType2() {
            //this.type = type;
            //this.image =image;
            //this.relations = relations;
            //this.article = article;
            //this.instruments = instruments;
            //this.influences = influences;
        }
        NodeType2.prototype.width = function (type) {
            var width=0;
            if (type =="1") width =250;
            else if (type =="2") width =100;
            else if(type =="3") width =60;
            else if(type =="4") width =30;
            else  width =20;
            return width;
        };
        NodeType2.prototype.edgeLenght = function (type) {
            var lenght=0;
            if (type =="1") lenght =175;
            else if (type =="2") lenght =100;
            else if(type =="3") lenght =75;
            else if(type =="4") lenght =50;
            else  lenght =20;
            return lenght;
        };
        
        return NodeType2;
    })();
    
    tmdb.NodeType2 = NodeType2;
    ////console.log('entra a 2');
    //Creacion de dos tipos de nodo Movie and Person
    //tmdb.Movie = new NodeType2("movie", "credits", "title", "posters");
    //tmdb.Person = new NodeType2("person", "movie_credits", "name", "profiles");
    //tmdb.medium = new NodeType2("medium","");

    //Declaracion de el objeto Nodo y sus  prototipos
   
    var Node2 = (function () {
        //console.log('entra a 2 Node');
        function Node2(id, type) {
            this.info = request2(id)[0];           
            this.type = type;
            this.id = id;
            this.degree = 0;

        }
        Node2.prototype.name = function () {
            ////console.log(this.type + this.id.toString());
            return 'tag'+this.id; // Este es el nombre del nodo
        };
        Node2.prototype.getImage = function () {


            ////console.log(this.id);
            ////console.log(this.info.image);
            //return $.get(this.info.image);

            var _this = this;
            var d = $.Deferred();
            
                _this.imgurl = this.info.image;
               
                d.resolve(_this);

            return d.promise();

        };
        Node2.prototype.makeEdge = function (thisName, otherName) {
            //return this === tmdb.Movie ? new Edge2(thisName, otherName) : new Edge2(otherName, thisName);
            return new Edge2(thisName, otherName) ;
        };
        return Node2;
    })();
    
    tmdb.Node2 = Node2;
    //Declaracion de el objeto Edge y sus prototipos
   

    var Edge2 = (function () {
        //console.log('entra a 3 Crea Edge2');
        function Edge2(source, target) {
            //console.log('edge2');
            this.source = source;
            this.target = target;
        }
        Edge2.prototype.toString = function () {
            
            return this.source + '-' + this.target;
        };
        return Edge2;
    })();
    tmdb.Edge2 = Edge2;
    //funcion que hace el llamado al api de peliculas y trae la informacion
    function request(type, id, content, append) {
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

     function requestSons(sons) { 
        //console.log(sons);
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
    function request2(id) {
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
    //Se declara la clase Graph donde se declara dos arreglos uno de nodes y uno de edges, ademas se definen unos prototipos
    

    var Graph2 = (function () {
        //console.log('entra a  5 Graph');
        function Graph2() {
            this.nodes = {};
            this.edges = {};
        }
        Graph2.prototype.expandNeighbours = function (node, f) {
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
        Graph2.prototype.fullyExpanded = function (node) {
            //console.log('entra a fullyExpanded');
            var _this = this;
            return node.cast && node.cast.every(function (v) {
                return ( v.id) in _this.nodes;
            });
        };
        Graph2.prototype.addNode = function (id, type) {
            //console.log('entra adiciona Nodo');
            var node = new Node2(id, type);
            return this.nodes[node.name()] = node;
        };
        Graph2.prototype.getNode = function (id, type, f) {//aqui vamos
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
            var cast = requestSons(node.info.relations);
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
        Graph2.prototype.addEdge = function (u, v) {
            //console.log('entra adiciona edge');
            var edge = u.makeEdge(u.name(), v.name());
            var ename = edge.toString();
            if (!(ename in this.edges)) {
                this.edges[ename] = edge;
            }
            ++u.degree, ++v.degree;
        };
        
        


        return Graph2;
    })();
    tmdb.Graph2 = Graph2;






})(tmdb || (tmdb = {}));
