var dataapi_link="http://cmsdev.app-link.org/alucard263096/kdx/api";//��д���Լ��������ķ�����������Ϣ
var uploadpath="http://applinkupload.oss-cn-shenzhen.aliyuncs.com/alucard263096/kdx/";

function getJSON(api,request_json,callback){
    $.ajax(dataapi_link+api,{
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
        success:function(data){
            data=JSON.parse(data);
            if(callback!=undefined){
                callback(data);
            }
        }
     });
}

var apiconfig_beforeSend=function(XHR){
	var accesstoken=localStorage.accesstoken;
	if(!(accesstoken)){
		accesstoken=newGuid();
		//alert(accesstoken);
		localStorage.accesstoken=accesstoken;
	}
	XHR.setRequestHeader("accesstoken", accesstoken);
};

var apiconfig_complete=function(XHR, TS){
	//alert("co");
};
var newGuid=function()
{
    var guid = "";
    for (var i = 1; i <= 32; i++){
      var n = Math.floor(Math.random()*16.0).toString(16);
      guid +=   n;
      if((i==8)||(i==12)||(i==16)||(i==20))
        guid += "-";
    }
    return guid;    
};

function HtmlDecode(str) {
    var s = "";
    if (str.length == 0) return "";
    s = str.replace(/&amp;/g, "&");
    s = s.replace(/&lt;/g, "<");
    s = s.replace(/&gt;/g, ">");
    s = s.replace(/&nbsp;/g, " ");
    s = s.replace(/&#39;/g, "\'");
    s = s.replace(/&quot;/g, "\""); 


    s = s.replace(new RegExp("\"/alucard263096/kdx/upload/", "gm"), "\"" + "https://cmsdev.app-link.org/alucard263096/kdx/upload/");


    return s;
  }