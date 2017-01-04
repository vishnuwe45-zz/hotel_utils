$.ajax({
    url : "/api/wallet/gfgdgdf/", 
    type : "PUT", 
    beforeSend: function(request) {
        request.setRequestHeader("Content-Type", "application/json");
        request.setRequestHeader("Authorization", "Bearer bgfdsdfsdf");
    },
    data : JSON.stringify({"wallet_points":100}),     
    success : function(json) {                    
        console.log(json); 
    },    
    error : function(xhr,errmsg,err) {                
        console.log(xhr.status + ": " + xhr.responseText); 
    }
});