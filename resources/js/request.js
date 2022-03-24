function reach(address, callback)
{
    let request = new XMLHttpRequest();

    request.onreadystatechange = function()
    {
        if(request.readyState == 4)
        {
            callback(request.responseText);
        }
    };

    request.open('GET', address);
    request.send();
}