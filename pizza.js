function retrieveSavedOrder()
{
  var saved = getCookie("savedOrder");
  console.log(saved);
}

function makeFullOrder()
{
  var checkoutName = getCookie("name");
  var pizza = getCookie("pizzaType");
  return checkoutName + " ordered a " + pizza + " pizza";
}

function checkoutOrders()
{
  document.getElementById("order").innerHTML = makeFullOrder();
}

function saveOrder()
{
  var fullOrder = makeFullOrder();
  setCookie("savedOrder", fullOrder, 9999);
}

function getCustomerName()
{
  var name = document.getElementById("orderName");
  //get the status of each checkbox
  var veg = document.getElementById("checkVeggies").checked;
  var pepperoni = document.getElementById("checkPepperoni").checked;
  var sausage = document.getElementById("checkSausage").checked;

  //check if each checkbox is checked
  if( pepperoni && sausage && !veg)
  {
    setCookie("pizzaType","meat lovers",1);
  }
  else if( veg && !pepperoni && !sausage )
  {
    setCookie("pizzaType","veggie",1);
  }
  else if( pepperoni && sausage && veg )
  {
    setCookie("pizzaType","supreme",1);
  }
  else if( !veg && !pepperoni && !sausage)
  {
    setCookie("pizzaType","cheese",1);
  }
  else
  {
    setCookie("pizzaType","custom",1);
  }
  setCookie("name",name.value,1);
  window.location.href="checkout.html";
}


//setCookie and getCookie are courtesy of w3schools
// https://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
