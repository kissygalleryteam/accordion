KISSY.add("kg/accordion/1.0.1/index",["base","node"],function(l,e,a,s){var i,r=e("base"),t=e("node");i=function(l){var e=t.all,a=r,s=a.extend({initializer:function(){{var l=this;l.get("$target")}l.render()},render:function(){var l=this;l._create()},_create:function(){var l=this,a=l.get("tpl"),s=e(a);e("#J_according").append(s);var i=e("#J_according li");return i.length?(i.on("mouseenter mouseleave",function(a){a.preventDefault();var s=e(a.currentTarget);"mouseenter"===a.type?(window.clearInterval(intervalId),i.removeClass("select"),s.addClass("select")):"mouseleave"===a.type&&l.run()}),void l.run()):!1},run:function(){var l=this,a=l.get("speed"),s=1;intervalId=window.setInterval(function(){s++;var l=e("#J_according li").length;s>l&&(s=1);var a=e("#J_according li");a.removeClass("select"),e("#J_according li:nth-child("+s+")").addClass("select")},a)}},{ATTRS:{$target:{value:"",getter:function(l){return e(l)}},tpl:{value:'<ul class="slide-wrapper"><li class="slide-li select"><a href="#" target="_blank"><img class="slide-large" src="images/large1.jpg" alt=""/><img class="slide-small" src="images/small1.jpg" alt=""/></a></li><li class="slide-li"><a href="#" target="_blank"><img class="slide-large" src="images/large2.jpg" alt=""/><img class="slide-small" src="images/small2.jpg" alt=""/></a></li><li class="slide-li"><a href="#" target="_blank"><img class="slide-large" src="images/large3.jpg" alt=""/><img class="slide-small" src="images/small3.jpg" alt=""/></a></li><li class="slide-li"><a href="#" target="_blank"><img class="slide-large" src="images/large4.jpg" alt=""/><img class="slide-small" src="images/small4.jpg" alt=""/></a></li><li class="slide-li"><a href="#" target="_blank"><img class="slide-large" src="images/large5.jpg" alt=""/><img class="slide-small" src="images/small5.jpg" alt=""/></a></li></ul>'},speed:{value:4e3}}});return l=s}(),s.exports=i});