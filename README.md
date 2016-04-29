# generate-form-by-table-structure
According to the table structure to automatically generate the form 

根据表结构自动生成表单，支持数据库有`mysql`、`oracle`

在开发复杂的业务系统经常遇到几十，上百个字段的表，或者一个模块涉及十多张表的时候，
可以借助自动生成表单的方式，加快表单搭建速度！

## Usage

 * `npm install`，如果`oracledb`不能正常安装，请参考>>[nodejs链接oracle](http://giscafer.com/2016/04/13/node-oracledb-demo/)

 * 修改`oracle/dbconfig.js`配置

 * 运行`node oracle/builder.js`

生成表单在`builder`目录下，如`mainForm.html`文件是自动生成的angular表单模板

```html
	<table class="dataTables" width="100%" id="main_form">
	    <thead>
	        <tr>
	            <th class="head center">ID</th>
	            <th class="head center">NAME</th>
	            <th class="head center">COUNTRYCODE</th>
	            <th class="head center">DISTRICT</th>
	            <th class="head center">POPULATION</th>
	        </tr>
	    </thead>
	    <tbody>
	        <tr ng-repeat=" curRow  in formObject.list">
	            <td>
	                <a ng-click="" class="text-tips" title="{{curRow.ID}}">
	                    <label ng-bind="curRow.ID"></label>
	                </a>
	            </td>
	            <td>
	                <a ng-click="" class="text-tips" title="{{curRow.NAME}}">
	                    <label ng-bind="curRow.NAME"></label>
	                </a>
	            </td>
	            <td>
	                <a ng-click="" class="text-tips" title="{{curRow.COUNTRYCODE}}">
	                    <label ng-bind="curRow.COUNTRYCODE"></label>
	                </a>
	            </td>
	            <td>
	                <a ng-click="" class="text-tips" title="{{curRow.DISTRICT}}">
	                    <label ng-bind="curRow.DISTRICT"></label>
	                </a>
	            </td>
	            <td>
	                <a ng-click="" class="text-tips" title="{{curRow.POPULATION}}">
	                    <label ng-bind="curRow.POPULATION"></label>
	                </a>
	            </td>
	        </tr>
	    </tbody>
	</table>

```
同样可生成弹窗表单`popForm.html`和`infoForm.html`

## License
![](https://img.shields.io/badge/license-MIT-blue.svg)

---

> [giscafer.com](http://giscafer.com) &nbsp;&middot;&nbsp;
> GitHub [@giscafer](https://github.com/giscafer) &nbsp;&middot;&nbsp;
> Weibo [@Nickbing Lao](https://weibo.com/laohoubin)
