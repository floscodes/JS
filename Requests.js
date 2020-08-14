function HttpRequest(url, method="get", data="") {  

    url=url.toString();
    method=method.toString();
    data=data.toString();

//CHECK CSRF-Token

    function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
var csrftoken = getCookie('csrftoken');


    
    var req = new XMLHttpRequest();


    if (method == "get" || method == "GET" || method == "Get") {

        req.open("GET", url, false);
        req.send();


     

    if (req.status == 200) {

        return req.responseText;

        

}

        

}


if (method == "post" || method == "POST" || method == "Post") {

    req.open("POST", url, false);

    if (data != "") {
        req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        
    }

    if (csrftoken != "" || csrftoken != null) {
        req.setRequestHeader("X-CSRFToken", csrftoken);
    }

    req.send(data);

    
if (req.status == 200) {

    return req.responseText;

    

}

    
    
}



}