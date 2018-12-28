
function cskinApi()
{
   //获取相关的数据系列
				
    this.list = function(request_json,callback){
        $.ajax(dataapi_link+'/3cskin/list',{
					//提交数据的类型 POST GET
					type:'POST',
					async:false,
					data:request_json,
					beforeSend:apiconfig_beforeSend, //发送请求
					complete:apiconfig_complete,//请求完成
					crossDomain:true,
					datatype: 'json',//xml, html, script, json, jsonp, text
					xhrFields: {  withCredentials: true  },
					//成功返回之后调用的函数             
					success:callback
				 });
    };


}