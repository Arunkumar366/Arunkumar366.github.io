// background image slider

const sliderImage = ["tajmahal.png","jaipur.png","TN.png","vadaku.png","kerala.png","blue.png","old.jpg"];

let slider = document.querySelector('.background-image');
let sliderGridItems = [...document.querySelectorAll('.grid-item')];

let currentImage = 0;

setInterval(()=>{
  changeSliderImage();
}, 5000)

const changeSliderImage=()=> {
  sliderGridItems.map((gridItem,index)=>{
    setTimeout(()=>{

      gridItem.classList.remove('hide');

      setTimeout(()=> {

        if(index == sliderGridItems.length-1){
          if(currentImage >= sliderImage.length-1){
            currentImage=0;
          }else{
            currentImage++;
          }
          slider.src =`img/${sliderImage[currentImage]}`;

          sliderGridItems.map((item,i)=>{
            setTimeout(()=>{
              item.classList.add('hide');
            },i*100)
          })
        }       
      },100)
    },index*100);
  })
}