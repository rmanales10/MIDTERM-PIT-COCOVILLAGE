
window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var navigationBar = document.querySelector('.navigation-bar');
    if (window.scrollY > 0) {
        navigationBar.style.top = '0'; // Bring navigation bar to top on scroll
    } else {
        navigationBar.style.top = '40px'; // Reset navigation bar position
    }
});







lage = 0;
function add(){
    var no = document.getElementById('no');
    no.innerHTML = lage +=1;
}
function minus(){
    var no = document.getElementById('no');
    if(lage < 1 ){
    no.innerHTML = "AYAW"
    return;
    }
    no.innerHTML = lage -=1;
    
}



function handleClick() {
    var element = document.getElementById("Description");
    var plus = document.getElementById("show");
    if (element.style.display !== "none") {
        element.style.display = "none";
        plus.innerHTML = "+"
    } else {
        element.style.display = "block";
        plus.innerHTML = "-"
    element.innerHTML = `Coco loves animals! The Silicone Veterinary Playset is a must-have to take care of your pet friends! Through this pretend play, children can pretend to be little veterinarians, ensuring the animals' happiness and health!<br><br>

    Everything is included in this toy to allow children to explore, ask questions, and acquire knowledge.
    <br><br>
    The set is cute, and each piece is carefully thought out so that the game can be complete and realistic. 
    <br><br>
    *The plush toy is not included in the playset.
    <br><br>
    DIMENSIONS
    <br><br>
    Bowl: 
    <br><br>
    &nbsp;&nbsp;•&nbsp;Length: 4" (10 cm) <br>
    &nbsp;&nbsp;•&nbsp;Depth: 4" (10 cm) <br>
    &nbsp;&nbsp;•&nbsp;Height: 1,5" (4 cm) <br><br>
    Bone:
    <br><br>
    &nbsp;&nbsp;•&nbsp;Length: 2" (50 cm) <br>
    &nbsp;&nbsp;•&nbsp;Depth: 1,25" (30 cm) <br>
    &nbsp;&nbsp;•&nbsp;Height: 0,25" (0,6 cm) <br><br>
     Fish:
     <br><br>
    Length: 2" (50 cm) <br>
    &nbsp;&nbsp;•&nbsp; Depth: 1,25" (30 cm) <br>
    &nbsp;&nbsp;•&nbsp;Height: 0,25" (0,6 cm) <br><br>
    &nbsp;&nbsp;•&nbsp;Elizabethan circle:
    <br><br>
    &nbsp;&nbsp;•&nbsp;Length: 12,25" (31 cm) <br>
    &nbsp;&nbsp;•&nbsp;Depth: 7,5" (19 cm) <br>
    &nbsp;&nbsp;•&nbsp;Height: 0,3" (0,8 cm)  <br><br>
    Otoscope:
    <br><br>
    &nbsp;&nbsp;•&nbsp;Length: 4,75" (12 cm) <br>
    &nbsp;&nbsp;•&nbsp;Depth: 1,75" (4,5 cm) <br>
    &nbsp;&nbsp;•&nbsp;Height: 1,25" (3,3 cm) <br><br>
     Stethoscope:
     <br><br>
     &nbsp;&nbsp;•&nbsp;Length: 16,15" (41 cm) <br>
     &nbsp;&nbsp;•&nbsp;Depth: 5,75" (14,5 cm) <br>
     &nbsp;&nbsp;•&nbsp;Height: 1,25" (3 cm) <br><br>
     Syringe:
     <br><br>
     &nbsp;&nbsp;•&nbsp;Length: 4,25" (11 cm) <br>
     &nbsp;&nbsp;•&nbsp;Depth: 1,25" (3,25 cm) <br>
     &nbsp;&nbsp;•&nbsp;Height: 1,25" (3,25 cm) <br><br>
     Thermometer:
     <br><br>
     &nbsp;&nbsp;•&nbsp;Length: 4" (10 cm) <br>
     &nbsp;&nbsp;•&nbsp;Depth: 1,25" (3 cm) <br>
     &nbsp;&nbsp;•&nbsp;Height: 0,5" (1 cm) <br><br>
     Woundplast: 
     <br><br>
     &nbsp;&nbsp;•&nbsp;Length: 5,5" (14 cm) <br>
     &nbsp;&nbsp;•&nbsp;Depth: 1,5" (4 cm) <br>
     &nbsp;&nbsp;•&nbsp;Height: 0,1" (0,2 cm) <br><br>
     X-ray Cat: 
     <br><br>
     &nbsp;&nbsp;•&nbsp;Length: 4,75" (12 cm) <br>
     &nbsp;&nbsp;•&nbsp;Depth: 3,75" (9,5 cm) <br>
     &nbsp;&nbsp;•&nbsp;Height: 0,1" (0,2 cm) <br><br>
     Bottle: 
     <br><br>
     &nbsp;&nbsp;•&nbsp;Length: 3,25" (8 cm) <br>
     &nbsp;&nbsp;•&nbsp;Depth: 1,75" (4,5 cm) <br>
     &nbsp;&nbsp;•&nbsp;Height: 1,75" (4,5 cm) <br><br>
    <br><br><br>
    
    FEATURES
    <br><br>
    Suitable for ages 3+<br>
    BPA Free<br>
    ASSEMBLY & CARE<br>
    <br><br>
    Please remove the item from its packaging and dispose of all plastic attachments before using. Before the first use, blanch it in boiling water for 3 minutes. Clean the product before each use by wiping it with a damp cloth and mild soap. Wipe it dry and allow it to air dry thoroughly. 
    <br><br>
    All silicone products can be sterilized in the microwave and are safe for washing machines and dishwashers. Avoid using detergents, solvents, or abrasives that contain chlorine or disinfectants. `;
  }
}