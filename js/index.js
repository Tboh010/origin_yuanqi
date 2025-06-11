
//导航滑动
(function (){

  if (!navigation) return // 防止导航栏不存在时报错
    window.addEventListener('scroll',function(){
  const scrollPosition = window.scrollY || document.documentElement.scrollTop
  const navigation =  document.querySelector('.navigation')
  // console.log(scrollPosition)
  //获取视口高度
  const vh = window.innerHeight
  // 代表100vh 占一个视口的距离
    const  home =   vh * 1

   if (scrollPosition >= home) {
    navigation.classList.add('div-fixed')
  } else {
    navigation.classList.remove('div-fixed')
  }
       
})




})();

function scrollToElement(e) {
  document.getElementById(`${e}`).scrollIntoView({ 

   behavior: 'smooth' })

}


