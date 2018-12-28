
function StoreApi()
{
   //获取所有省
				
    this.provicelist = function(request_json,callback){
        $.ajax(dataapi_link+'/shop/provinces',{
					//提交数据的类型 POST GET
					type:'POST',
					async:true,
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

   //根据省获取市
				//http://cmsdev.app-link.org/alucard263096/kdx/api/shop/cities?provinceid=440000
    this.citylist = function(request_json,callback){
	
        $.ajax(dataapi_link+'/shop/cities',{
					//提交数据的类型 POST GET
					type:'POST',
					async:true,
					data:request_json,
					beforeSend:apiconfig_beforeSend, //发送请求
					complete:apiconfig_complete,//请求完成2018/7/13
					crossDomain:true,
					datatype: 'json',//xml, html, script, json, jsonp, text
					xhrFields: {  withCredentials: true  },
					//成功返回之后调用的函数             
					success:callback
				 });
    };
//根据市获取区
				//http://cmsdev.app-link.org/alucard263096/kdx/api/shop/areas?provinceid=440000&cityid=440100
    this.areaslist = function(request_json,callback){
        $.ajax(dataapi_link+'/shop/areas',{
					//提交数据的类型 POST GET
					type:'POST',
					async:true,
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
//根据门店
				//http://cmsdev.app-link.org/alucard263096/kdx/api/shop/list?province_id=440000&city_id=440100&area_id=440112    获取所有门店地址，参数可不传
    this.storelist = function(request_json,callback){
        $.ajax(dataapi_link+'/shop/list',{
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
	//http://cmsdev.app-link.org/alucard263096/kdx/api/shop/enquiry?shop_id=257&customername=sss&customermobile=123333&productname=ssss
	this.uploadinfo = function(request_json,callback){
        $.ajax(dataapi_link+'/shop/enquiry',{
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
	//http://cmsdev.app-link.org/alucard263096/kdx/api/shop/list?nearshop=Y&mylat=45.7323400000&mylng=126.6560200000
	this.querydistince = function(request_json,callback){
        $.ajax(dataapi_link+'/shop/list',{
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