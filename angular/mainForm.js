/**
 * 表格列表页
 */
var _ = require('lodash');
var fs = require('fs');
var path = require('path');
var async = require('async');

var filePath = path.join(__dirname, '../builder/');
var fileName='/mainForm.html';

function builder(result) {
    var columns = _.map(result, 'COLUMN_NAME');
    console.info('column names:\n' + columns+'\n');
    var tableHtml = '<table class="dataTables" width="100%" id="main_form">' +
        buildTheadHtml(columns) + buildTbodyHtml(columns) + '</table>';
    /**
     * 使用async控制异步情况，mkdir是异步的，
     * 而writeFile是需要在目录创建后才能操作，否则报错
     */
    async.series([
        function(cb) {
            fs.exists(filePath, function(flag) {
                if (!flag) {
                	console.log('filePath is not exists……\n');
                    fs.mkdir(filePath, fs.stats, function(err, res) {
                        if (err) {
                            return cb(err + '\n');
                        } else {
                            return cb(null,'filePath has created success!\n');
                        }
                    });
                }
                return cb(null,'filePath is exists!');
            });
        },
        function(cb) {
            fs.writeFile(filePath + fileName, tableHtml, function(err) {
                if (err) {
                    return cb(err + '\n');
                } else {
                    return cb(null,"writeFile success!\n Please see in "+filePath + fileName);
                }
            });
        }
    ], function(err, result) {
        if (err) { console.error("In waterfall error cb: ==>", err, "<=="); }
        if (result) {
           console.info(result[1]);
        }
    });
}

function buildTheadHtml(columns) {
    var theadHtml = '<thead><tr>';
    _.map(columns, function(column, index) {
        theadHtml += '<th class="head center">' + column + '</th>';
    });
    theadHtml += '</tr></thead>';
    return theadHtml;
}

function buildTbodyHtml(columns) {
    var tbodyHtml = '<tbody><tr ng-repeat=" curRow  in formObject.list">';
    _.map(columns, function(column, index) {
        tbodyHtml += '<td><a ng-click="" class="text-tips" title="{{curRow.' + column + '}}">' +
            '<label ng-bind = "curRow.' + column + '"></label></a></td>';
    });
    tbodyHtml += '</tr></tbody>';
    return tbodyHtml;
}

module.exports = {
    builder
};
