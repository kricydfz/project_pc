$(function () {
  var $content = $("#wrap>content");
  var $cList=$content.children(".contentList");
  var $cLiNodes=$cList.children("li");
  var $contentLiH=$cLiNodes.first().height

  var $head=$("#wrap>.header")
  var $nList = $("#wrap .header .headerContent>nav>ul>li")
  var $pList=$content.find(".sideNav>li");
  var $firstLiImg=$cList.find(".firstLi img");

  var $secondLis = $cList.find(".secondLi .second>.left>.photoList>li");
  var $secondLi1=$secondLis.eq(0);
  var $secondLi2=$secondLis.eq(1);
  var $secondLi3=$secondLis.eq(2);
  var $secondRight = $cList.find(".secondLi .second>.right");

  var $thirdLis = $cList.find(".thirdLi .third>.left>.photoList li");
  var $thirdLi2 = $thirdLis.eq(1);
  var $thirdLi3 = $thirdLis.eq(2);
  var $thirdRight = $cList.find(".thirdLi .third>.right");

  var $fourLis = $cList.find(".fourLi .four>.left>.photoList li")
  var $fourLi1 = $fourLis.eq(0)
  var $fourLi2 = $fourLis.eq(1)
  var $fourLi3 = $fourLis.eq(2)
  var $fourRight = $cList.find(".fourLi .four>.right")

  var $fiveLis = $cList.find(".fiveLi .five>.left>.photoList>li")
  var $fiveLi1 = $fiveLis.eq(0)
  var $fiveLi2 = $fiveLis.eq(1)
  var $fiveLi3 = $fiveLis.eq(2)
  var $fiveRight = $cList.find(".fiveLi .five>.right")
//  todo 导航区效果
 $nList.each((index,item)=>{
   // $($nList).removeAttr("class")
    console.log(item,index);

    $(item).click(()=>{
          $('#wrap .header .headerContent nav ul li[class]').removeAttr("class")
       // $($nList).removeAttr("class")
      $(item).addClass( 'class','active')




      //  todo 内容区效果
      $content.animate({top: (-$contentLiH * index ) + "px" }, 1000)
    // /!* 小圆点的变化 *!/
    $("#wrap .content .sideNav li[class]").removeAttr("class")
    $($cLiNodes[index]).attr('class', 'active')


  })

  })
//  TODO 点击小圆点

  $pList.each((index,item)=>{
   console.log(index,item);
   $(item).click(()=>{
     $pList.children.removeClass('active')
     $(item).attr('class','active')
     $content.animate({top: (-$contentLiH * index ) + "px" }, 1000)
   })
  })


})