# generate-form-by-table-structure
According to the table structure to automatically generate the form 
根据表结构自动生成表单

## Usage

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

## License
![](https://img.shields.io/badge/license-MIT-blue.svg)

---

> [giscafer.com](http://giscafer.com) &nbsp;&middot;&nbsp;
> GitHub [@giscafer](https://github.com/giscafer) &nbsp;&middot;&nbsp;
> Weibo [@Nickbing Lao](https://weibo.com/laohoubin)
