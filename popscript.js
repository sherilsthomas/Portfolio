 var myButton = document.querySelectorAll('.button');
    var closeButton = document.querySelectorAll('.close');
    var popup = document.querySelectorAll('.popup');
    var popupInSide = document.querySelectorAll('.myIframe');

    for (var i = 0; i < myButton.length; i++) {
        myButton[i].addEventListener('click', function (event) {
            var buttonPDFLink = this.getAttribute("data-href");
            for (var i = 0; i < popup.length; i += 1) {
                popup[i].style.display = 'flex';
            }
            for (var i = 0; i < popupInSide.length; i += 1) {
                // The url I throw into the iframe is blocked because I don't use ssl. I used google doc viever instead
                popupInSide[i].setAttribute("src", "https://docs.google.com/gview?url=" + buttonPDFLink + "&embedded=true")
            }
        });
    }
    // close button side
    for (var i = 0; i < closeButton.length; i++) {
        closeButton[i].addEventListener('click', function (event) {
            for (var i = 0; i < popup.length; i += 1) {
                popupInSide[i].removeAttribute("src");
                popup[i].style.display = 'none';
            }
        });
    }
