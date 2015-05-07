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
    app.controller('mapController',function($scope){});
    app.controller('articleController',function($scope, $routeParams){
      $scope.idnode=$routeParams.idNode;
      //console.log($routeParams.idNode);



    });


    app.controller('distritoController',function($scope,Graph,$rootScope,NodeType){

var tmdb;
(function (tmdb) {
    //Declaracion de el objeto NodeType y sus prototipos

    // Nodo Principal

    var nodoOlinguito=
        {
            "id": "1763628",
            "type": 1,
            "name": "Distrito",
            "image": "../assets/logo_def.png",
            "relations": [
                {"id": "2341312"},
                {"id": "3567564"},
                {"id": "3422344"},
                {"id": "5634464"}
            ],
            "article": false
        };

// Nodo Bandas
var nodoOvalle={
            "id": "2341312",
            "type": 2,
            "name": "bandas",
            "image": "../assets/circle.png",
            "relations": [
                {"id": "8213623"},
                {"id": "9645747"},
                {"id":"4534366"}
            ],
            "article": false
        };

// Nodo Influencias

var nodoRoberto={
            "id": "3567564",
            "type": 2,
            "name": "influencias",
            "image": "../assets/botones_influencias/bt_infuencias_incio2.png",
            "relations": [
                {"id": "1034578"},
                {"id": "1135673"}
            ],
            "article": false
        };

// Nodo Protagonista
var nodoProtagonistas={
            "id": "5634464",
            "type": 2,
            "name": "protagonistas",
            "image": "../assets/botones_protagonistas/protagonistas_v2.png",
            "relations": [
                {"id":"4554334"},
                {"id":"6574533"}
            ],
            "article": false
        };

    var nodoOcho={
            "id": "8213623",
            "type": 3,
            "name": "Bastardas Populares",
            "image": "../assets/circle.png",
            "relations": [],
            "article": false
        };
    var nodoNueve={
            "id": "9645747",
            "type": 3,
            "name": "Puras Tradicionales",
            "image": "../assets/circle.png",
            "relations": [],
            "article": false
        };
    var nodoDiez={
        "id": "1034578",
        "type": 3,
        "name": "De Allá",
        "image": "../assets/botones_influencias/botones_influencias_tipo_alla.png",
        "relations": [
          {"id":"in2"},{"id":"in4"},{"id":"in7"},{"id":"in14"},{"id":"in15"},{"id":"in16"},{"id":"in17"},{"id":"in18"},{"id":"in19"},{"id":"in21"}
        ],
        "article": false
    };
    var nodoOnce={
        "id": "1135673",
        "type": 3,
        "name": "De Aquí",
        "image": "../assets/botones_influencias/botones_influencias_tipo_aca.png",
        "relations": [
            {"id":"1135000"},{"id":"1135999"},{"id":"in13"}
        ],
        "article": false
    };

    var caribe={
        "id": "1135000",
        "type": 3,
        "name": "Caribe",
        "image": "../assets/botones_influencias/botones_influencias_tipo_caribe.png",
        "relations": [
          {"id":"in1"},{"id":"in3"},{"id":"in6"},{"id":"in8"},{"id":"in9"},{"id":"in10"},{"id":"in11"},{"id":"in22"}
        ],
        "article": false
    };
    var pacifico={
        "id": "1135999",
        "type": 3,
        "name": "Pacífico",
        "image": "../assets/botones_influencias/botones_influencias_tipo_pacifico.png",
        "relations": [
            {"id":"in5"},{"id":"in12"}
        ],
        "article": false
    };
    var nodoEnlajugada={
        "id": "4554334",
        "type": 3,
        "name": "En la Jugada",
        "image": "../assets/circle.png",
        "relations": [
              {"id":"35125441"},
              {"id":"76867881"}
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
            {"id":"7686788"},
            {"id":"3512544"}
        ],
        "article": false
    };
    var nodoHombres={
        "id": "3512544",
        "type": 3,
        "name": "hombres",
        "image": "../assets/botones_protagonistas/protagonistas_TIPO_hombre.png",
        "relations": [
          {"id":"a1"},{"id":"a2"},{"id":"a3"},{"id":"a4"},{"id":"a6"},{"id":"a7"},{"id":"a8"},{"id":"a9"},
          {"id":"a10"},{"id":"a11"},{"id":"a12"},{"id":"a13"},{"id":"a14"},{"id":"a15"},{"id":"a16"},{"id":"a17"},
          {"id":"a18"},{"id":"a19"},{"id":"a20"},{"id":"a21"},{"id":"a27"},{"id":"a28"},{"id":"a29"},{"id":"a30"},
          {"id":"a31"},{"id":"a32"},{"id":"a33"},{"id":"a34"},{"id":"a35"},{"id":"a36"},{"id":"a37"},{"id":"a38"},
          {"id":"a40"},{"id":"a41"},{"id":"a42"},{"id":"a43"},{"id":"a44"},{"id":"a46"},{"id":"a47"},{"id":"a48"},
          {"id":"a50"},{"id":"a52"},{"id":"a54"},{"id":"a55"},{"id":"a56"},{"id":"a58"},{"id":"a59"},{"id":"a60"},
          {"id":"a61"},{"id":"a62"},{"id":"a63"},{"id":"a64"},{"id":"a65"},{"id":"a66"},{"id":"a67"},{"id":"a68"},
          {"id":"a70"},{"id":"a71"},{"id":"a72"}
        ],
        "article": false
    };
    var nodoMujeres={
        "id": "7686788",
        "type": 3,
        "name": "mujeres",
        "image": "../assets/botones_protagonistas/protagonistas_TIPO_mujer.png",
        "relations": [
          {"id":"a5"},{"id":"a26"},{"id":"a39"},{"id":"a45"},{"id":"a49"},{"id":"a51"},{"id":"a57"},{"id":"a69"}
        ],
        "article": false
    };

    var nodoHombresJugada={
        "id": "35125441",
        "type": 3,
        "name": "hombres",
        "image": "../assets/botones_protagonistas/protagonistas_TIPO_hombre.png",
        "relations": [
          {"id":"a22"},{"id":"a23"},{"id":"a24"},{"id":"a25"},{"id":"a74"},{"id":"a75"},{"id":"a73"}
        ],
        "article": false
    };
    var nodoMujeresJugada={
        "id": "76867881",
        "type": 3,
        "name": "mujeres",
        "image": "../assets/botones_protagonistas/protagonistas_TIPO_mujer.png",
        "relations": [
          {"id":"a53"}
        ],
        "article": false
    };

    var nodoInstrumentos={
            "id": "3422344",
            "type": 2,
            "name": "instrumentos",
            "image": "../assets/botones_instrumentos/bt_instru_inicio.png",
            "relations": [
                {"id": "3245355"},
                {"id": "790005"},
                {"id": "5544332"},
                {"id": "0423902"}
            ],
            "article": false
        };
    var nodoCuerda={
        "id": "3245355",
        "type": 3,
        "name": "Cuerda",
        "image": "../assets/botones_instrumentos/instru_cuerda.png",
        "relations": [
          {"id":"ist6"},{"id":"ist11"},{"id":"ist24"}
        ],
        "article": false
    };
    var nodoViento={
        "id": "790005",
        "type": 3,
        "name": "Viento",
        "image": "../assets/botones_instrumentos/instru_viento.png",
        "relations": [
              {"id":"ist1"},
              {"id":"ist2"},
              {"id":"ist13"},
              {"id":"ist15"},
              {"id":"ist16"},
              {"id":"ist26"},
              {"id":"ist28"},
              {"id":"ist29"}
        ],
        "article": false
    };
    var nodoPercusion={
        "id": "5544332",
        "type": 3,
        "name": "Percusión",
        "image": "../assets/botones_instrumentos/instru_percusion.png",
        "relations": [
          { "id": "ist3"},
          { "id": "ist4"},
          { "id": "ist8"},
          { "id": "ist12"},
          { "id": "ist14"},
          { "id": "ist18"},
          { "id": "ist19"},
          { "id": "ist20"},
          { "id": "ist21"},
          { "id": "ist22"},
          { "id": "ist23"},
          { "id": "ist25"}
        ],
        "article": false
    };
    var nodoElectricos={
        "id": "0423902",
        "type": 3,
        "name": "Electrónicos",
        "image": "../assets/botones_instrumentos/instru_electronicos.png",
        "relations": [
            {"id":"ist9"},
            {"id":"ist27"}
        ],
        "article": false
    };

    // Nodos de Instrumentos hijos

    var ist1 = {
      "id":"ist1",
      "type": 4,
      "name": "saxofón",
      "image": "../assets/circle.png",
      "relations": [

      ],
      "article": true
    };
    var ist2 = {
      "id":"ist2",
      "type": 4,
      "name": "clarinete",
      "image": "../assets/circle.png",
      "relations": [],
      "article": false
    };
    var ist3 = {
      "id":"ist3",
      "type": 4,
      "name": "bateria",
      "image": "../assets/circle.png",
      "relations": [

      ],
      "article": false
    };
    var ist4 = {
      "id":"ist4",
      "type": 4,
      "name": "timbales",
      "image": "../assets/circle.png",
      "relations": [

      ],
      "article": false
    };
    var ist5 = {
      "id":"ist5",
      "type": 4,
      "name": "guitarra",
      "image": "../assets/circle.png",
      "relations": [

      ],
      "article": false
    };
    var ist6 = {
      "id":"ist6",
      "type": 4,
      "name": "bajo",
      "image": "../assets/circle.png",
      "relations": [
        {"id":"a1"}
      ],
      "article": false
    };
    var ist7 = {
      "id":"ist7",
      "type": 4,
      "name": "teclados",
      "image": "../assets/circle.png",
      "relations": [

      ],
      "article": false
    };
    var ist8 = {
      "id":"ist8",
      "type": 4,
      "name": "guacharaca",
      "image": "../assets/circle.png",
      "relations": [
          {"id":"a1"}
      ],
      "article": false
    };
    var ist9 = {
      "id":"ist9",
      "type": 4,
      "name": "sintetizador",
      "image": "../assets/circle.png",
      "relations": [

      ],
      "article": false
    };
    var ist10 = {
      "id":"ist10",
      "type": 4,
      "name": "organo",
      "image": "../assets/circle.png",
      "relations": [

      ],
      "article": false
    };
    var ist11 = {
      "id":"ist11",
      "type": 4,
      "name": "piano",
      "image": "../assets/circle.png",
      "relations": [

      ],
      "article": false
    };
    var ist12 = {
      "id":"ist12",
      "type": 4,
      "name": "bongos",
      "image": "../assets/circle.png",
      "relations": [

      ],
      "article": false
    };
    var ist13 = {
      "id":"ist13",
      "type": 4,
      "name": "trombones",
      "image": "../assets/circle.png",
      "relations": [

      ],
      "article": false
    };
    var ist14 = {
      "id":"ist14",
      "type": 4,
      "name": "congas",
      "image": "../assets/circle.png",
      "relations": [

      ],
      "article": false
    };
    var ist15 = {
      "id":"ist15",
      "type": 4,
      "name": "trompetas",
      "image": "../assets/circle.png",
      "relations": [

      ],
      "article": false
    };
    var ist16 = {
      "id":"ist16",
      "type": 4,
      "name": "gaitas ",
      "image": "../assets/circle.png",
      "relations": [

      ],
      "article": true
    };
    var ist17 = {
      "id":"ist17",
      "type": 4,
      "name": "gaita hembra",
      "image": "../assets/circle.png",
      "relations": [

      ],
      "article": false
    };
    var ist18 = {
      "id":"ist18",
      "type": 4,
      "name": "bombo",
      "image": "../assets/circle.png",
      "relations": [

      ],
      "article": false
    };
    var ist19 = {
      "id":"ist19",
      "type": 4,
      "name": "marimbas",
      "image": "../assets/circle.png",
      "relations": [

      ],
      "article": true
    };
    var ist20 = {
      "id":"ist20",
      "type": 4,
      "name": "tambores ",
      "image": "../assets/circle.png",
      "relations": [

      ],
      "article": true
    };
    var ist21 = {
      "id":"ist21",
      "type": 4,
      "name": "tambor alegre",
      "image": "../assets/circle.png",
      "relations": [

      ],
      "article": false
    };
    var ist22 = {
      "id":"ist22",
      "type": 4,
      "name": "tambora",
      "image": "../assets/circle.png",
      "relations": [

      ],
      "article": false
    };
    var ist23 = {
      "id":"ist23",
      "type": 4,
      "name": "maraca",
      "image": "../assets/circle.png",
      "relations": [

      ],
      "article": false
    };
    var ist24 = {
      "id":"ist24",
      "type": 4,
      "name": "contra bajo",
      "image": "../assets/circle.png",
      "relations": [

      ],
      "article": false
    };
    var ist25 = {
      "id":"ist25",
      "type": 4,
      "name": "Caja",
      "image": "../assets/circle.png",
      "relations": [

      ],
      "article": false
    };
    var ist26 = {
      "id":"ist26",
      "type": 4,
      "name": "Voz",
      "image": "../assets/circle.png",
      "relations": [

      ],
      "article": false
    };
    var ist27 = {
      "id":"ist27",
      "type": 4,
      "name": "bits",
      "image": "../assets/circle.png",
      "relations": [

      ],
      "article": false
    };
    var ist28 = {
      "id":"ist28",
      "type": 4,
      "name": "flauta",
      "image": "../assets/circle.png",
      "relations": [

      ],
      "article": false
    };
    var ist29 = {
      "id":"ist29",
      "type": 4,
      "name": "Acordeón",
      "image": "../assets/circle.png",
      "relations": [

      ],
      "article": false
    };

    // NODOS DE BANDAS

    var b1 = {
      "id":"b1",
      "type": 4,
      "name" : "Meridian Brothers",
      "image": "../assets/circle.png",
      "relations": [

      ],
      "article": true
    };
    var b2 = {
      "id":"b2",
      "type": 4,
      "name" : "Curupira",
      "image": "../assets/circle.png",
      "relations": [

      ],
      "article": true
    };
    var b3 = {
      "id":"b3",
      "type": 4,
      "name" : "La 33",
      "image": "../assets/circle.png",
      "relations": [

      ],
      "article": true
    };
    var b4 = {
      "id":"b4",
      "type": 4,
      "name" : "Frente Cumbiero",
      "image": "../assets/circle.png",
      "relations": [

      ],
      "article": true
    };
    var b5 = {
      "id":"b5",
      "type": 4,
      "name" : "Los pirañas",
      "image": "../assets/circle.png",
      "relations": [

      ],
      "article": true
    };
    var b6 = {
      "id":"b6",
      "type": 4,
      "name" : "Mula",
      "image": "../assets/circle.png",
      "relations": [

      ],
      "article": false
    };
    var b7 = {
      "id":"b7",
      "type": 4,
      "name" : "La miniTK del miedo",
      "image": "../assets/circle.png",
      "relations": [

      ],
      "article": true
    }
    var b8 = {
      "id":"b8",
      "type": 4,
      "name" : "Animales blancos",
      "image": "../assets/circle.png",
      "relations": [

      ],
      "article": false
    };
    var b9 = {
      "id":"b9",
      "type": 4,
      "name" : "Suricato",
      "image": "../assets/circle.png",
      "relations": [

      ],
      "article": false
    };
    var b10 = {
      "id":"b10",
      "type": 4,
      "name" : "Bituin",
      "image": "../assets/circle.png",
      "relations": [

      ],
      "article": false
    };
    var b11 = {
      "id":"b11",
      "type": 4,
      "name" : "Retrovisor",
      "image": "../assets/circle.png",
      "relations": [

      ],
      "article": true
    };
    var b12 = {
      "id":"b12",
      "type": 4,
      "name" : "Ricardo Gallo Cuarteto",
      "image": "../assets/circle.png",
      "relations": [

      ],
      "article": false
    };
    var b13 = {
      "id":"b13",
      "type": 4,
      "name" : "Ondatrópica",
      "image": "../assets/circle.png",
      "relations": [

      ],
      "article": true
    };
    var b14 = {
      "id":"b14",
      "type": 4,
      "name" : "Quantic",
      "image": "../assets/circle.png",
      "relations": [

      ],
      "article": false
    };
    var b15 = {
      "id":"b15",
      "type": 4,
      "name" : "Sidestepper",
      "image": "../assets/circle.png",
      "relations": [

      ],
      "article": false
    };
    var b16 = {
      "id":"b16",
      "type": 4,
      "name" : "Ensamble Polifónico Vallenato",
      "image": "../assets/circle.png",
      "relations": [

      ],
      "article": true
    };

    //NODOS INFLUENCIAS

    var in1 = {"id":"in1", "type":4, "name": "Cumbia","image": "../assets/circle.png","relations": [], "article":true };
    var in2 = {"id":"in2", "type":4, "name": "dub inglés","image": "../assets/circle.png","relations": [], "article":false };
    var in3 = {"id":"in3", "type":4, "name": "vallenato","image": "../assets/circle.png","relations": [], "article":false };
    var in4 = {"id":"in4", "type":4, "name": "jazz","image": "../assets/circle.png","relations": [], "article":true };
    var in5 = {"id":"in5", "type":4, "name": "salsa","image": "../assets/circle.png","relations": [], "article":true };
    var in6 = {"id":"in6", "type":4, "name": "champeta","image": "../assets/circle.png","relations": [], "article":true };
    var in7 = {"id":"in7", "type":4, "name": "chicha peruana","image": "../assets/circle.png","relations": [], "article":false };
    var in8 = {"id":"in8", "type":4, "name": "cumbia sicodélica","image": "../assets/circle.png","relations": [], "article":false };
    var in9 = {"id":"in9", "type":4, "name": "chalupa","image": "../assets/circle.png","relations": [], "article":false };
    var in10 = {"id":"in10", "type":4, "name": "fandango","image": "../assets/circle.png","relations": [], "article":false };
    var in11 = {"id":"in11", "type":4, "name": "puya","image": "../assets/circle.png","relations": [], "article":false };
    var in12 = {"id":"in12", "type":4, "name": "currulao","image": "../assets/circle.png","relations": [], "article":true };
    var in13 = {"id":"in13", "type":4, "name": "joropo","image": "../assets/circle.png","relations": [], "article":false };
    var in14 = {"id":"in14", "type":4, "name": "rap","image": "../assets/circle.png","relations": [], "article":false };
    var in15 = {"id":"in15", "type":4, "name": "rock","image": "../assets/circle.png","relations": [], "article":true };
    var in16 = {"id":"in16", "type":4, "name": "funk","image": "../assets/circle.png","relations": [], "article":true };
    var in17 = {"id":"in17", "type":4, "name": "metal","image": "../assets/circle.png","relations": [], "article":false };
    var in18 = {"id":"in18", "type":4, "name": "indie","image": "../assets/circle.png","relations": [], "article":false };
    var in19 = {"id":"in19", "type":4, "name": "electrónica","image": "../assets/circle.png","relations": [], "article":false };
    var in20 = {"id":"in20", "type":4, "name": "latin","image": "../assets/circle.png","relations": [], "article":false };
    var in21 = {"id":"in21", "type":4, "name": "soul","image": "../assets/circle.png","relations": [], "article":false };
    var in22 = {"id":"in22", "type":4, "name": "Chandé","image": "../assets/circle.png","relations": [], "article":false };

    //NODOS de Artistas

    var a1 = { "id":"a1","type":4,"name":"Mario Galeano","image": "../assets/circle.png","relations": [{"id":"ist6"},{"id":"ist8"}],"article":true};
    var a2 = { "id":"a2","type":4,"name":"Ebilis Álvarez","image": "../assets/circle.png","relations": [],"article":false};
    var a3 = { "id":"a3","type":4,"name":"Pedro Ojeda","image": "../assets/circle.png","relations": [],"article":true};
    var a4 = { "id":"a4","type":4,"name":"Marco Fajardo","image": "../assets/circle.png","relations": [],"article":false};
    var a5 = { "id":"a5","type":4,"name":"María Angélica Valencia","image": "../assets/circle.png","relations": [],"article":true};
    var a6 = { "id":"a6","type":4,"name":"Damián Ponce","image": "../assets/circle.png","relations": [],"article":false};
    var a7 = { "id":"a7","type":4,"name":"César Quevedo","image": "../assets/circle.png","relations": [],"article":true};
    var a8 = { "id":"a8","type":4,"name":"Alejandro Forero","image": "../assets/circle.png","relations": [],"article":false};
    var a9 = { "id":"a9","type":4,"name":"Mauricio Báez ","image": "../assets/circle.png","relations": [],"article":false};
    var a10 = { "id":"a10","type":4,"name":"Sergio Mejía","image": "../assets/circle.png","relations": [],"article":false};
    var a11 = { "id":"a11","type":4,"name":"Santiago Mejía","image": "../assets/circle.png","relations": [],"article":true};
    var a12 = { "id":"a12","type":4,"name":"Guillermo Céliz","image": "../assets/circle.png","relations": [],"article":false};
    var a13 = { "id":"a13","type":4,"name":"Alejandro Pérez","image": "../assets/circle.png","relations": [],"article":false};
    var a14 = { "id":"a14","type":4,"name":"Juan David Fernández","image": "../assets/circle.png","relations": [],"article":false};
    var a15 = { "id":"a15","type":4,"name":"Diego Sánchez","image": "../assets/circle.png","relations": [],"article":false};
    var a16 = { "id":"a16","type":4,"name":"Juan Felipe Cárdenas","image": "../assets/circle.png","relations": [],"article":false};
    var a17 = { "id":"a17","type":4,"name":"David Cantillo","image": "../assets/circle.png","relations": [],"article":false};
    var a18 = { "id":"a18","type":4,"name":"José Miguel Vega","image": "../assets/circle.png","relations": [],"article":false};
    var a19 = { "id":"a19","type":4,"name":"Vladimir Romero","image": "../assets/circle.png","relations": [],"article":false};
    var a20 = { "id":"a20","type":4,"name":"Roland Nieto","image": "../assets/circle.png","relations": [],"article":false};
    var a21 = { "id":"a21","type":4,"name":"Pablo Martínez","image": "../assets/circle.png","relations": [],"article":false};
    var a22 = { "id":"a22","type":4,"name":"Javier Galavis","image": "../assets/circle.png","relations": [],"article":false};
    var a23 = { "id":"a23","type":4,"name":"Ray Fuquen","image": "../assets/circle.png","relations": [],"article":false};
    var a24 = { "id":"a24","type":4,"name":"William Flórez","image": "../assets/circle.png","relations": [],"article":false};
    var a25 = { "id":"a25","type":4,"name":"Carlos Cadena","image": "../assets/circle.png","relations": [],"article":false};
    var a26 = { "id":"a26","type":4,"name":"Maria Jose Salgado","image": "../assets/circle.png","relations": [],"article":false};
    var a27 = { "id":"a27","type":4,"name":"Urián Sarmiento","image": "../assets/circle.png","relations": [],"article":false};
    var a28 = { "id":"a28","type":4,"name":"Jorge Sepulveda","image": "../assets/circle.png","relations": [],"article":false};
    var a29 = { "id":"a29","type":4,"name":"Andres Felipe Salazar","image": "../assets/circle.png","relations": [],"article":false};
    var a30 = { "id":"a30","type":4,"name":"Juan Sebastian Monsalve","image": "../assets/circle.png","relations": [],"article":false};
    var a31 = { "id":"a31","type":4,"name":"Camilo Velasquez","image": "../assets/circle.png","relations": [],"article":false};
    var a32 = { "id":"a32","type":4,"name":"Ricardo Narvaez","image": "../assets/circle.png","relations": [],"article":false};
    var a33 = { "id":"a33","type":4,"name":"Mange Valencia","image": "../assets/circle.png","relations": [],"article":true};
    var a34 = { "id":"a34","type":4,"name":"Camilo Bartelsman","image": "../assets/circle.png","relations": [],"article":false};
    var a35 = { "id":"a35","type":4,"name":"Kike Mendoza","image": "../assets/circle.png","relations": [],"article":false};
    var a36 = { "id":"a36","type":4,"name":"Santiago Botero","image": "../assets/circle.png","relations": [],"article":true};
    var a37 = { "id":"a37","type":4,"name":"Ricardo Gallo ","image": "../assets/circle.png","relations": [],"article":true};
    var a38 = { "id":"a38","type":4,"name":"Nicolás Vallejo","image": "../assets/circle.png","relations": [],"article":true};
    var a39 = { "id":"a39","type":4,"name":"Lina Tono","image": "../assets/circle.png","relations": [],"article":true};
    var a40 = { "id":"a40","type":4,"name":"Diego Maldonado","image": "../assets/circle.png","relations": [],"article":true};
    var a41 = { "id":"a41","type":4,"name":"Andrés Gualdrón","image": "../assets/circle.png","relations": [],"article":true};
    var a42 = { "id":"a42","type":4,"name":"Santiago Jimenez","image": "../assets/circle.png","relations": [],"article":false};
    var a43 = { "id":"a43","type":4,"name":"Sergio González ","image": "../assets/circle.png","relations": [],"article":false};
    var a44 = { "id":"a44","type":4,"name":"Diego Rozo","image": "../assets/circle.png","relations": [],"article":false};
    var a45 = { "id":"a45","type":4,"name":"María Mónica Gutierrez","image": "../assets/circle.png","relations": [],"article":false};
    var a46 = { "id":"a46","type":4,"name":"Kike Harker","image": "../assets/circle.png","relations": [],"article":false};
    var a47 = { "id":"a47","type":4,"name":"Sebastián Cifuentes","image": "../assets/circle.png","relations": [],"article":false};
    var a48 = { "id":"a48","type":4,"name":"Santiago de Mendoza","image": "../assets/circle.png","relations": [],"article":false};
    var a49 = { "id":"a49","type":4,"name":"Juanita Añez","image": "../assets/circle.png","relations": [],"article":true};
    var a50 = { "id":"a50","type":4,"name":"Daniel de Mendoza","image": "../assets/circle.png","relations": [],"article":false};
    var a51 = { "id":"a51","type":4,"name":"Valentina Añez","image": "../assets/circle.png","relations": [],"article":false};
    var a52 = { "id":"a52","type":4,"name":"Camilo Giraldo ","image": "../assets/circle.png","relations": [],"article":false};
    var a53 = { "id":"a53","type":4,"name":"Carmen Gil Vrolojk","image": "../assets/circle.png","relations": [],"article":false};
    var a54 = { "id":"a54","type":4,"name":"Juan David Castaño","image": "../assets/circle.png","relations": [],"article":false};
    var a55 = { "id":"a55","type":4,"name":"Juan Manuel Toro","image": "../assets/circle.png","relations": [],"article":false};
    var a56 = { "id":"a56","type":4,"name":"Vladimir Giraldo","image": "../assets/circle.png","relations": [],"article":false};
    var a57 = { "id":"a57","type":4,"name":"Nidia Góngora","image": "../assets/circle.png","relations": [],"article":false};
    var a58 = { "id":"a58","type":4,"name":"Wilson Viveros","image": "../assets/circle.png","relations": [],"article":false};
    var a59 = { "id":"a59","type":4,"name":"Juan Carlos Puello","image": "../assets/circle.png","relations": [],"article":false};
    var a60 = { "id":"a60","type":4,"name":"Freddy Colorado","image": "../assets/circle.png","relations": [],"article":false};
    var a61 = { "id":"a61","type":4,"name":"Will Holland","image": "../assets/circle.png","relations": [],"article":false};
    var a62 = { "id":"a62","type":4,"name":"Alfredito Linares","image": "../assets/circle.png","relations": [],"article":false};
    var a63 = { "id":"a63","type":4,"name":"Ramaya","image": "../assets/circle.png","relations": [],"article":false};
    var a64 = { "id":"a64","type":4,"name":"Michi Sarmiento","image": "../assets/circle.png","relations": [],"article":false};
    var a65 = { "id":"a65","type":4,"name":"Markitos Mikolta","image": "../assets/circle.png","relations": [],"article":false};
    var a66 = { "id":"a66","type":4,"name":"Miguel Vega","image": "../assets/circle.png","relations": [],"article":false};
    var a67 = { "id":"a67","type":4,"name":"Jorge Gaviria","image": "../assets/circle.png","relations": [],"article":false};
    var a68 = { "id":"a68","type":4,"name":"Richard Blair","image": "../assets/circle.png","relations": [],"article":false};
    var a69 = { "id":"a69","type":4,"name":"Erika Muñoz","image": "../assets/circle.png","relations": [],"article":false};
    var a70 = { "id":"a70","type":4,"name":"Edgardo Garcés","image": "../assets/circle.png","relations": [],"article":false};
    var a71 = { "id":"a71","type":4,"name":"Teto Ocampo","image": "../assets/circle.png","relations": [],"article":false};
    var a72 = { "id":"a72","type":4,"name":"El Chongo","image": "../assets/circle.png","relations": [],"article":false};
    var a73 = { "id":"a73","type":4,"name":"Janio Coronado","image": "../assets/circle.png","relations": [],"article":false};
    var a74 = { "id":"a74","type":4,"name":"Luis Daniel Vega","image": "../assets/circle.png","relations": [],"article":false};
    var a75 = { "id":"a75","type":4,"name":"Benjamin","image": "../assets/circle.png","relations": [],"article":false};

    var misnodos =new Array(nodoOvalle, nodoCuerda,nodoViento,nodoPercusion,nodoElectricos, nodoEnlajugada, nodoHombres, nodoComba, nodoMujeres, nodoArtistas, nodoInstrumentos, nodoProtagonistas, nodoOlinguito,nodoRoberto,nodoOcho,nodoNueve,nodoDiez,nodoOnce, nodoInstrumentos,caribe,pacifico,ist1,ist2,ist3,ist4,ist5,ist6,ist7,ist8,ist9,ist10,ist11,ist12,ist13,ist14,ist15,ist16,ist17,ist18,ist19,ist20,ist21,ist22,ist23,ist24,ist25,ist26,ist27,ist28,ist29,ist3,ist4,ist8,ist12,ist14,ist18,ist19,ist20,ist21,ist22,ist23,ist25,ist9,ist27,ist6,ist11,ist24,b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,in1,in2,in3,in4,in5,in6,in7,in8,in9,in10,in11,in12,in13,in14,in15,in16,in17,in18,in19,in20,in21,in22,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19,a20,a21,a22,a23,a24,a25,a26,a27,a28,a29,a30,a31,a32,a33,a34,a35,a36,a37,a38,a39,a40,a41,a42,a43,a44,a45,a46,a47,a48,a49,a50,a51,a52,a53,a54,a55,a56,a57,a58,a59,a60,a61,a62,a63,a64,a65,a66,a67,a68,a69,a70,a71,a72,a73,a74,a75,nodoHombresJugada,nodoMujeresJugada);

        //linea de codigo provisional para el factory Nodo
   $rootScope.misnodos=misnodos;


})(tmdb || (tmdb = {}));
    $scope.click = function() {
        $scope.boolChangeClass = !$scope.boolChangeClass;
        //$scope.$apply();
    }

        var width = $(window).width(),
        height = $(window).height(),
        imageScale = 0.1;

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

    var d = modelgraph.getNode( "1763628","tmdb.XtraLarge", addViewNode);
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
        nodeEnter.append("rect")

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

            });

        nodeEnter.append("text")
        .attr("x", -20)
        .attr("y", -15).text(function (d) {

            if(d.info.type>=3)
                return d.label;
                else return "";

             }).
        attr("class","customlabel")
        .style("color","white");
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


    })
.factory('Graph',function(APIRequest,Node,$rootScope){

    function Graph() {
            this.nodes = {};
            this.edges = {};
        }
    Graph.prototype.expandNeighbours = function (node, f) {

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

            // mi codigo
            (node.cast = cast).forEach(function (v) {
                var neighbourname = 'tag' + v.id.toString();
                if (neighbourname in _this.nodes) {
                    _this.addEdge(node, _this.nodes[neighbourname]);
                }
            });
            // fin ki codigo

            /*
            (node.cast = cast).forEach(function (v) {
                var neighbourname = 'tag' + v.id.toString();
                if (neighbourname in _this.nodes) {
                    _this.addEdge(node, _this.nodes[neighbourname]);
                }
            });
            */
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

        //return $.get(this.info.image);
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

    function NodeType() {

    }
    NodeType.prototype.width = function (type) {
        var width=0;
        if (type =="1") width =250;
        else if (type =="2") width =120;
        else if(type =="3") width =80;
        else if(type =="4") width =30;
        else  width =20;
        return width;
    };
    NodeType.prototype.edgeLenght = function (type) {
        var lenght=0;
        if (type =="1") lenght =175;
        else if (type =="2") lenght =120;
        else if(type =="3") lenght =75;
        else if(type =="4") lenght =50;
        else  lenght =20;
        return lenght;
    };

    return NodeType;


})
.factory('taou2',function(){})



})();
