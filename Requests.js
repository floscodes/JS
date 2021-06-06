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

//Check if there is a hidden csrf-input-field, if so, get the value

try {
    var csrffield = document.getElementsByTagName("input");

    var l = csrffield.length;
    var i=0;

while (true) {
    if (i > l) {
        break;
    }

    if (csrffield[i].name.toLowerCase().includes("csrf") == true) {
        csrftoken=csrffield[i].value;
        break;
    }
    i++;
}

}

catch (err) {

    var csrftoken = getCookie('csrftoken');

}


    
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
        //Set it twice with a different header-name so that different apps can deal with it
        req.setRequestHeader("X-CSRF-Token", csrftoken);
        req.setRequestHeader("X-CSRFToken", csrftoken);
    }

    req.send(data);

    
if (req.status == 200) {

    return req.responseText;

    

}
 
    
}


}