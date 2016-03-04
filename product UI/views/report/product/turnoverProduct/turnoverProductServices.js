define(['app', 'ajaxService'], function (app) {

    app.register.service('turnoverProductServices', ['ajaxService', function (ajaxService) {
        
        //获取区域范围
        this.getCoverage = function (salseQueryInfo, successFunction, errorFunction) {
            return ajaxService.AjaxPost(salseQueryInfo, "api/report/product/turnoverProduct/coverage.json", successFunction, errorFunction);
        };


        //获取查询内容
        this.searchData = function (salseQueryInfo, successFunction, errorFunction) {
            return ajaxService.AjaxPost(salseQueryInfo, "api/report/product/turnoverProduct/searchData.json", successFunction, errorFunction);
        };


        
        


    }]);
});