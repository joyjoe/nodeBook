var gulp = require("gulp");
var del = require("del");
var less = require("gulp-less");
var autoprefixer = require("gulp-autoprefixer");
var babel = require("gulp-babel");

gulp.task("clean", () => {
  del.sync("build");
});

gulp.task("css", () => {
  gulp.src("src/**/*.css")
  .pipe(gulp.dest("build"));
});

gulp.task("less", () => {
  gulp.src("src/**/*.less")
  .pipe(less())
  .pipe(autoprefixer({
    "browsers": ["last 5 versions", "last 3 iOS versions", "> 5% in CN"]
  }))
  .pipe(gulp.dest("build"));
});

gulp.task("script", () => {
  gulp.src("src/**/*.js")
  .pipe(babel({
    "presets": ["env"],
    "plugins": [
      "transform-object-assign",
      // "transform-class-properties"
    ]
  }))
  .pipe(gulp.dest("build"));
});

gulp.task("default", ["clean", "less", "script"], (err) => {
  console.log("task is over!");
});


gulp.task("watch", () => {
  let watch = gulp.watch(["src/script/*.js", "src/**/*.less"], ["default"]);
  watch.on("change", (e) => {
    console.log(`File ${e.path} was ${e.type}, runing task`);
  });
});