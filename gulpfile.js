const gulp = require("gulp");
const htmlbeautify = require("gulp-html-beautify");

gulp.task("htmlbeautify", () => {
    const options = {
        indentSize: 4
    };
    return gulp.src("index.html")
        .pipe(htmlbeautify(options))
        .pipe(gulp.dest("."))
});