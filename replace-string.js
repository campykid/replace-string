// Скрипт замены css свойства во всех файлах.

var glob = require('glob');
var _ = require('lodash');
var fs = require('fs');

// Читаем каждйы файл с расширением css.
glob('bem/blocks/**/*.css', function (er, files) {
	// Для каждого файла.
	_.each(files, function(file) {
		var readFile = fs.readFileSync(file, 'utf8');
		// Заменяем строку равную RegExp'у со свойством, в нашем случае font-size c числом.
		var result = readFile.replace(/font-size ([0-9\.]+)/g, function () {
			// Указываем на что заменить, в аргументы передаются числа из группы RegExp'а.
			return 'font:' + arguments[1] + ' px;';
		});
		console.log(result);
		// Пишем резуьтат в файл.
		fs.writeFileSync(file, result, 'utf8');
	});
});