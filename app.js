// function focused() {
    

//     let sectionElement = document.querySelector('div');

//     //let divElemnts = Array.from(document.querySelectorAll('div div'));


//     sectionElement.addEventListener('focus', function (e) {

//         if (e.target.tagName == 'INPUT') {
//             e.target.parentNode.classList.add('focused');

//         }

//     });

//     sectionElement.addEventListener('blur', function (e) {

//         e.target.parentNode.classList.remove('focused');
//     });

// }

function focused() {
    let mainDiv = document.getElementsByTagName("div")[0];

    Array.from(mainDiv.getElementsByTagName("input")).forEach(element => {
        element.addEventListener("focus",focus);
    });

    Array.from(mainDiv.getElementsByTagName("input")).forEach(element => {
        element.addEventListener("blur",focusLost);
    });


    function focus(e) {
        let parent = e.target.parentNode;
       parent.classList.add("focused");
       console.log('We are onfocus!');
    }


    function focusLost(e) {
        let parent = e.target.parentNode;
       parent.classList.remove("focused");
       console.log('We lost focus!');
    }

 }