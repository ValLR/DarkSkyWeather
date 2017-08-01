/*Dependencias*/
var gulp = require("gulp");
var	concat = require("gulp-concat");
var	uglify = require("gulp-uglify");
var sass = require("gulp-sass");
var minifyCSS = require("gulp-minify-css");
var webserver = require("gulp-webserver");

/*Configuración de la tarea 'darkweather'*/
gulp.task("script",function(){
	gulp.src(["node_modules/jquery/dist/jquery.js", "node_modules/materialize-css/dist/js/materialize.js", "assets/js/*.js"])
	.pipe(concat("script.js"))
	//carpeta dist
	.pipe(gulp.dest("dist/js/"));
});

/*Configuración de la tarea 'style'*/
gulp.task("style",function(){
	gulp.src(["node_modules/materialize-css/dist/css/materialize.css", "assets/sass/main.scss"])
	.pipe(sass().on("error", sass.logError))
	.pipe(minifyCSS())
	.pipe(concat("style.min.css"))
	.pipe(gulp.dest("dist/css"));	
});

/*Configuración de la tarea 'webserver'*/
gulp.task("webserver", function(){
	gulp.src("../darkskyweather/")
		.pipe(webserver({
		fallback: "index.html",
		livereload: true,
		directoryListing:false,
		open:true
	}));
});

gulp.task("watch",function(){
	gulp.watch("assets/sass/*.scss", ["style"]);
});

/*Ahora le indicamos a gulp cuales son las tareas que debe ejecutar*/
/*cuando corramos el comando gulp en la terminal*/
gulp.task("default",["script","style","webserver","watch"]);