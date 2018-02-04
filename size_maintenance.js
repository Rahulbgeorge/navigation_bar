/*Opennav(): used for opening and closing navigation bar
closenav(): used for closeing navigation bar
device_resize(): used for resizing the content based on the device
*/

function openNav() {
    
    window_width=window.innerWidth;
    window_height=window.innerHeight;
    if(window_width>window_height)
    {
    console.log(window_width);
    if(window_width>980)
    {
    document.getElementById("mySidenav").style.width = "20%";
    document.getElementById("container").style.width="80%";
    }
    else if (window_width>600)
    {
        document.getElementById("mySidenav").style.width = "35%";
        document.getElementById("container").style.width="65%";

    }
}
else{

    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("container").style.width="0%";

}
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0%";
    document.getElementById("container").style.width="100%";
}


function device_resize()
{
    window_width=window.innerWidth;
    window_height=window.innerHeight;

    if(window.devicePixelRatio>1)
    {document.getElementById("body").style.fontSize="1em";
    document.getElementById("mySidenav").style.fontSize="2.5em";
    
    }

}