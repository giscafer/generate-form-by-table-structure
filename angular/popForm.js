/**
 * 表格列表页
 */
var _ = require('lodash');
var fs = require('fs');
var path = require('path');
var async = require('async');

var filePath = path.join(__dirname, '../builder/');
var fileName_edit='/popForm.html';
var fileName_info='/infoForm.html';

function builder(result) {
    var columns = _.map(result, 'COLUMN_NAME');
    console.info('column names:\n' + columns+'\n');
    var tableHtml_edit = '<table class="dataTables" width="100%" id="pop_form">' +
        buildEditTableHtml(columns) + '</table>';
    var tableHtml_info = '<table class="dataTables" width="100%" id="pop_form">' +
        buildInfoTableHtml(columns) + '</table>';
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
            fs.writeFile(filePath + fileName_edit, tableHtml_edit, function(err) {
                if (err) {
                    return cb(err + '\n');
                } else {
                    return cb(null,"writeFile success!\n Please see in "+filePath + fileName_edit);
                }
            });
        },
        function(cb) {
            fs.writeFile(filePath + fileName_info, tableHtml_info, function(err) {
                if (err) {
                    return cb(err + '\n');
                } else {
                    return cb(null,"writeFile success!\n Please see in "+filePath + fileName_info);
                }
            });
        }
    ], function(err, result) {
        if (err) { console.error("In waterfall error cb: ==>", err, "<=="); }
        if (result) {
           console.info(result);
        }
    });
}

function buildInfoTableHtml(columns) {
      var tbodyHtml = '<tr>';
        var colspan=2;//一行2列
        var separate=0;
        _.map(columns, function(column, index) {
        	while(separate>=colspan){
        		separate=0;
        		tbodyHtml+='</tr><tr>';
        	}
        	separate++;
            tbodyHtml += '<td class="text">'+column+'</td><td class="input"><label ng-bind="formObject.list.'+column+'"></label></td>';
        });
        tbodyHtml += '</tr></tbody>';
        return tbodyHtml;
}

function buildEditTableHtml(columns) {
    var tbodyHtml = '<tr>';
    var colspan=2;//一行2列
    var separate=0;
    _.map(columns, function(column, index) {
    	while(separate>=colspan){
    		separate=0;
    		tbodyHtml+='</tr><tr>';
    	}
    	separate++;
        tbodyHtml += '<td class="text">'+column+'</td><td class="input"><input type="text" name="'+column+'"' + 
			'class="common-input" style="width:90%;"' + 
			'ng-model="formObject.list.'+column+'"></td>';
    });
    tbodyHtml += '</tr></tbody>';
    return tbodyHtml;
}

module.exports = {
    builder
};
