import{_ as $,a as P}from"./index.fffee04c.js";import{_ as U}from"./index.741335c9.js";import{_ as A}from"./index.7de057ee.js";import{u as Y,G as W,H as z,r as c,I as K,c as O,a as n,b as e,v as B,f as d,A as X,M as F,J as G,e as E,K as I,o as J}from"./entry.de766614.js";const j=`<svg xmlns="http://www.w3.org/2000/svg" width="30" height="56.084" viewBox="0 0 30 56.084">\r
  <path id="arrow" d="M3259.36,4442.07l-18.522,28.041h-11.476l18.52-28.041-18.522-28.043h11.478Z" transform="translate(-3229.36 -4414.027)" fill="#59bfae"/>\r
</svg>\r
`;const Z={class:"photography-page"},Q={class:"animation-steps__wrapper"},ee={class:"photography-page__hero position_relative"},te={class:"slide-section position_relative"},ie={class:"photography-page__hero-video position_absolute"},oe=["src"],se=e("div",{class:"slide-section__text"},[e("div",{class:"slide-section__text-head text_center"},[e("h1",null,[E("Your Products, "),e("br"),E(" Professionally Captured")])])],-1),ne=e("p",null,"What makes our photography so true to life?",-1),ae=e("p",{class:"ff_icon fs_48"},"",-1),re=[ne,ae],le={class:"photography-page__brick"},ce={class:"slide-section position_relative"},de={class:"slide-section__bg position_absolute"},_e={class:"container d_flex flex_column justify-content_center"},ue=I('<div class="slide-section__text"><div class="slide-section__text-inside slide-section__text_1"><div class="slide-section__text-head"><h2>Realistic <br> Lighting</h2></div><div class="slide-section__text-desc"><p class="fs_32"> We mimic sunlight in our lighting setup which enables us <br> to capture texture. Shown here is the contrast between a <br> scanned image and our method. </p></div></div><div class="slide-section__text-inside slide-section__text_2 position_absolute"><div class="slide-section__text-head"><h2>Incredible <br> Detail</h2></div><div class="slide-section__text-desc"><p class="fs_32"> We take it to the next level with our photography, our <br> process involves techniques used in the macro world for <br> insect photography. Simply put - details are captured. </p></div></div><div class="slide-section__text-inside slide-section__text_3 position_absolute"><div class="slide-section__text-head"><h2>Accurate <br> Colour</h2></div><div class="slide-section__text-desc"><p class="fs_32"> Colour accuracy checks are carried out on each image to <br> ensure we capture the true nature of your products. </p></div></div></div>',1),pe={class:"slide-section__brick"},ge={class:"slide-section__brick-box position_relative"},he={class:"background-slider position_absolute"},ve={class:"background-slider__icon"},me={class:"background-slider__icon-wrapper"},fe={class:"background-slider__icon-wrapper-inside d_flex align-items_center"},be=["innerHTML"],ye=e("span",null,null,-1),xe=["innerHTML"],we={class:"background-img"},ke={class:"foreground-img"},Se=I('<div class="slide-section__brick-text position_relative"><div class="slide-section__brick-text-inside slide-section__brick-text_1 d_flex justify-content_between"><p><strong>Scanned</strong></p><p><strong>Photograph</strong></p></div><div class="slide-section__brick-text-inside slide-section__brick-text_2 position_absolute d_flex justify-content_between"><p><strong>Low Res</strong></p><p><strong>High Res</strong></p></div><div class="slide-section__brick-text-inside slide-section__brick-text_3 position_absolute d_flex justify-content_between"><p><strong>Uncalibrated</strong></p><p><strong>Calibrated</strong></p></div></div>',1),Le={class:"scrollable-section"},v="Photography | BLOC-TEC",u="https://bloc-tec.com",m=`Elevate your product imagery to new heights with Bloc Tec's photographic expertise. Our dedicated team specializes in capturing products with realistic lighting, incredible details, and accurate color representation. Showcase your products in the best possible light and leave a lasting impression on your customers. See the difference Bloc Tec can make for your brand today.">`,Te="photography,product,brick,house,patio,accurate color,texture,detail,lighting,realistic lighting,professional equipment,experts,experience,knowledgable,showcase,studio,techniques,gear,manufacturing,tiles,garden",w="Alternative text for the image",k="photography",je={__name:"index",setup(Me){Y({title:v,meta:[{name:"description",content:m},{name:"keywords",content:Te},{property:"og:title",content:v},{property:"og:description",content:m},{property:"og:image",content:u+`/images/meta/facebook/${k}.jpg`},{property:"og:image:alt",content:w},{property:"og:url",content:u+"/photography/"},{property:"og:type",content:"website"},{property:"twitter:title",content:v},{property:"twitter:description",content:m},{property:"twitter:image",content:u+`/images/meta/twitter/${k}.jpg`},{property:"twitter:image:alt",content:w},{property:"twitter:card",content:"summary_large_image"},{property:"linkedin:title",content:v},{property:"linkedin:description",content:m},{property:"linkedin:image",content:u+`/images/meta/linkedin/${k}.jpg`},{property:"linkedin:image:alt",content:w},{property:"linkedin:url",content:u+"/photography/"},{property:"instagram:title",content:v},{property:"instagram:description",content:m},{property:"instagram:image",content:u+`/images/meta/instagram/${k}.jpg`},{property:"instagram:image:alt",content:w}]});const T=W().path;let M=z(),_=M.getSlideState(T),o=c(_.current),C=c(_.next),p=c(_.past),S=c(!1),f=c(1),s=c(50),D=c(!1),g=c(!1),h=c(!0);function H(){D.value=!0,document.querySelector(".foreground-img").style.width=s.value+"%",document.querySelector(".background-slider__icon").style.width=s.value+"%"}function V(){b(2200,100)}function N(){document.getElementById("brickVideo"),f.value++,f.value===4&&(f.value=1)}function b(a=2200,t=null,r=null){const i=document.querySelector(".photography-page__brick"),l=3;(t>0||r==="up")&&o.value<l?(o.value+=1,p.value=o.value-1):(t<0||r==="down")&&o.value>0&&(o.value-=1,p.value=o.value+1),g.value=!0,i&&(o.value!==3&&i.classList.remove("oh"),setTimeout(()=>{s.value=50,document.querySelector(".foreground-img").style.width=s.value+"%",document.querySelector(".background-slider__icon").style.width=s.value+"%",console.log(s.value),o.value===3&&i.classList.add("oh"),g.value=!1},a)),M.setSlideState(T,{current:o.value,next:C.value,past:p.value})}function R(){document.addEventListener("touchstart",r,!1),document.addEventListener("touchmove",i,!1);var a=null,t=null;function r(l){a=l.touches[0].clientX,t=l.touches[0].clientY}function i(l){if(!(!a||!t)){var L=l.touches[0].clientX,y=l.touches[0].clientY,q=a-L,x=t-y;Math.abs(q)+Math.abs(x)>1&&(Math.abs(x)>Math.abs(q)&&(x>0&&g.value===!1&&h.value&&b(2200,null,"up"),x<0&&g.value===!1&&h.value&&b(2200,null,"down")),a=null,t=null)}}}return K(()=>{window.addEventListener("popstate",()=>{S.value=!0}),S.value&&(o.value=_.current,C.value=_.next,p.value=_.past,S.value=!1),setTimeout(()=>{const a=document.querySelector(".animation-steps"),t=document.querySelector(".photography-page__brick");t.addEventListener("scroll",r=>{t.scrollTop>1?h.value=!1:h.value=!0}),a.addEventListener("wheel",r=>{g.value===!1&&h.value&&b(2200,r.deltaY)},{passive:!0}),R()},610)}),(a,t)=>{const r=$,i=U,l=P,L=A;return J(),O("div",Z,[n(r),e("div",Q,[e("div",{class:B("animation-steps animation-steps_"+d(o)+" animation-lstep_"+d(p))},[e("section",ee,[e("div",te,[e("div",ie,[e("video",{class:"section__video",autoplay:"autoplay",muted:"muted",playsinline:"playsinline",onEnded:N,src:`/video/brick${d(f)}.mp4`,id:"brickVideo"},null,40,oe)]),se,e("div",{onClick:V,class:"scrl-down position_absolute fs_32 text_center cursor_pointer"},re)])]),e("section",le,[e("div",null,[e("div",ce,[e("div",de,[n(i,{img:"light",alt:"Light",class:"light_bg"}),n(i,{img:"butterfly",alt:"Butterfly",class:"butterfly_bg"}),n(i,{img:"colour_calibration",alt:"Colour Calibration",class:"colour_calibration_bg"})]),e("div",_e,[ue,e("div",pe,[e("div",ge,[e("label",he,[X(e("input",{type:"range",class:B({animation_false:d(D)}),"onUpdate:modelValue":t[0]||(t[0]=y=>G(s)?s.value=y:s=y),max:"100",min:"0",onInput:H},null,34),[[F,d(s)]]),e("span",ve,[e("span",me,[e("div",fe,[e("span",{innerHTML:d(j)},null,8,be),ye,e("span",{innerHTML:d(j)},null,8,xe)])])])]),e("div",we,[n(i,{img:"brick_1",alt:"Door"})]),e("div",ke,[n(i,{img:"brick_2",alt:"Door",class:"foreground-img-inside foreground-img_1"}),n(i,{img:"brick_1",alt:"Door",class:"foreground-img-inside foreground-img_2"}),n(i,{img:"brick_4",alt:"Door",class:"foreground-img-inside foreground-img_3"})])]),Se])])]),e("div",Le,[n(l),n(L)])])])],2)])])}}};export{je as default};