var api = 'http://cmsdev.app-link.org',
    imgUrl = 'http://applinkupload.oss-cn-shenzhen.aliyuncs.com/alucard263096/kdx/xyfc/',
    vadUrl = 'http://applinkupload.oss-cn-shenzhen.aliyuncs.com/alucard263096/kdx/xykc/',
    imgUrl2 = 'http://applinkupload.oss-cn-shenzhen.aliyuncs.com/alucard263096/kdx/xyxy/',
    imgUrl3 = 'http://applinkupload.oss-cn-shenzhen.aliyuncs.com/alucard263096/kdx/xydyr/',
    imgUrl4  =  './img/user/'
var action = {
    // 学院课程
    courseList:(parm,callBack)=>{
        var url = api + '/alucard263096/kdx/api/xyfc/courselist';
        $.ajax({
            url: url,
            type:"GET",//请求方式 "POST" 或 "GET"， 默认为 "GET"。注意：其它 HTTP 请求方法，如 PUT 和 DELETE 也可以使用，但仅部分浏览器支持。
            dataType:"json",    //根据返回数据类型可以有这些类型可选：xml html script json jsonp text
            data:parm,
            beforeSend:function(xhr){

            },
            success: function(res,textStatus){
                callBack(res)
            },
            error:function(XMLHttpRequest, textStatus, errorThrown){

            },
            complete:function(XMLHttpRequest, textStatus) {

            },
            //一组数值的HTTP代码和函数对象，当响应时调用了相应的代码。例如，如果响应状态是404，将触发以下警报：
            statusCode:{
                404:function(){
                    alert('404，页面不存在');
                }
            }
        });

    },
    // 学院课程
    workerList:(parm,callBack)=>{
        var url = api + '/alucard263096/kdx/api/xyfc/workerlist';
        console.log(parm)
        $.ajax({
            url: url,
            type:"GET",//请求方式 "POST" 或 "GET"， 默认为 "GET"。注意：其它 HTTP 请求方法，如 PUT 和 DELETE 也可以使用，但仅部分浏览器支持。
            dataType:"json",    //根据返回数据类型可以有这些类型可选：xml html script json jsonp text
            data:parm,
            beforeSend:function(xhr){

            },
            success: function(res,textStatus){
                callBack(res)
            },
            error:function(XMLHttpRequest, textStatus, errorThrown){

            },
            complete:function(XMLHttpRequest, textStatus) {

            },
            //一组数值的HTTP代码和函数对象，当响应时调用了相应的代码。例如，如果响应状态是404，将触发以下警报：
            statusCode:{
                404:function(){
                    alert('404，页面不存在');
                }
            }
        });

    },
    // 学院代言人
    daiyanrenList:(parm,callBack)=>{
        var url = api + '/alucard263096/kdx/api/xyfc/daiyanrenlist';
        $.ajax({
            url: url,
            type:"GET",//请求方式 "POST" 或 "GET"， 默认为 "GET"。注意：其它 HTTP 请求方法，如 PUT 和 DELETE 也可以使用，但仅部分浏览器支持。
            dataType:"json",    //根据返回数据类型可以有这些类型可选：xml html script json jsonp text
            data:parm,
            beforeSend:function(xhr){

            },
            success: function(res,textStatus){
                callBack(res)
            },
            error:function(XMLHttpRequest, textStatus, errorThrown){

            },
            complete:function(XMLHttpRequest, textStatus) {

            },
            //一组数值的HTTP代码和函数对象，当响应时调用了相应的代码。例如，如果响应状态是404，将触发以下警报：
            statusCode:{
                404:function(){
                    alert('404，页面不存在');
                }
            }
        });

    },
    wenzhangList:(parm,callBack)=>{
        var url = api + '/alucard263096/kdx/api/xyfc/wenzhanglist';
        $.ajax({
            url: url,
            type:"GET",//请求方式 "POST" 或 "GET"， 默认为 "GET"。注意：其它 HTTP 请求方法，如 PUT 和 DELETE 也可以使用，但仅部分浏览器支持。
            dataType:"json",    //根据返回数据类型可以有这些类型可选：xml html script json jsonp text
            data:parm,
            beforeSend:function(xhr){

            },
            success: function(res,textStatus){
                callBack(res)
            },
            error:function(XMLHttpRequest, textStatus, errorThrown){

            },
            complete:function(XMLHttpRequest, textStatus) {

            },
            //一组数值的HTTP代码和函数对象，当响应时调用了相应的代码。例如，如果响应状态是404，将触发以下警报：
            statusCode:{
                404:function(){
                    alert('404，页面不存在');
                }
            }
        });

    },
    register:(parm,callBack)=>{
        var url = api + '/alucard263096/kdx/api/xyfc/membersubmit';
        $.ajax({
            url: url,
            type:"GET",//请求方式 "POST" 或 "GET"， 默认为 "GET"。注意：其它 HTTP 请求方法，如 PUT 和 DELETE 也可以使用，但仅部分浏览器支持。
            dataType:"json",    //根据返回数据类型可以有这些类型可选：xml html script json jsonp text
            data:parm,
            beforeSend:function(xhr){

            },
            success: function(res,textStatus){
                callBack(res)
            },
            error:function(XMLHttpRequest, textStatus, errorThrown){

            },
            complete:function(XMLHttpRequest, textStatus) {

            },
            //一组数值的HTTP代码和函数对象，当响应时调用了相应的代码。例如，如果响应状态是404，将触发以下警报：
            statusCode:{
                404:function(){
                    alert('404，页面不存在');
                }
            }
        });

    },

}