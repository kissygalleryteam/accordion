KISSY.add('kg/accordion/1.0.0/index',["node","base"],function(S ,require, exports, module) {
 var $ = require('node').all;
var Base = require('base');

var Accordion = Base.extend({
    //初始化
    initializer:function(){
        var self = this;
        var $target = self.get('$target');
        self.render();
    },
    //渲染模板
    render: function(){
        var self = this;
        self._create();
    },
    //创建DOM结构
    _create: function(){
        var self = this;
        var tpl = self.get('tpl');
        var $content = $(tpl);
        $('#J_according').append($content);
        var $slideLi = $('#J_according li');
        if(!$slideLi.length) return false;
        $slideLi.on('mouseenter mouseleave',function(ev){
            ev.preventDefault();
            var $currentTarget = $(ev.currentTarget);
            //鼠标移入时，清除切换计时器
            if(ev.type === 'mouseenter'){
                window.clearInterval(intervalId);
                $slideLi.removeClass('select');
                $currentTarget.addClass('select');
            }else if(ev.type === 'mouseleave'){
                self.run();
            }
        });
        self.run();
    },
    //图片切换滚动
    run: function(){
        var self = this;
        var speed = self.get('speed');
        var currentIndex = 1;
        //重复操作辨识id
        intervalId = window.setInterval(function(){
            currentIndex++;
            var liLength = $('#J_according li').length;
            if(currentIndex > liLength){
                currentIndex = 1;
            }
            var $slideLi = $('#J_according li');
            $slideLi.removeClass('select');
            $('#J_according li:nth-child('+currentIndex+')').addClass('select');
        },speed);
    }
},{
    ATTRS:{
        $target:{
            value:'',
            getter:function(v){
                return $(v);
            }
        },
        //模板
        tpl: {
            value: '<ul class="slide-wrapper">'
            +'<li class="slide-li select"><a href="#" target="_blank"><img class="slide-large" src="images/large1.jpg" alt=""/><img class="slide-small" src="images/small1.jpg" alt=""/></a></li>'
            +'<li class="slide-li"><a href="#" target="_blank"><img class="slide-large" src="images/large2.jpg" alt=""/><img class="slide-small" src="images/small2.jpg" alt=""/></a></li>'
            +'<li class="slide-li"><a href="#" target="_blank"><img class="slide-large" src="images/large3.jpg" alt=""/><img class="slide-small" src="images/small3.jpg" alt=""/></a></li>'
            +'<li class="slide-li"><a href="#" target="_blank"><img class="slide-large" src="images/large4.jpg" alt=""/><img class="slide-small" src="images/small4.jpg" alt=""/></a></li>'
            +'<li class="slide-li"><a href="#" target="_blank"><img class="slide-large" src="images/large5.jpg" alt=""/><img class="slide-small" src="images/small5.jpg" alt=""/></a></li>'
            +'</ul>'
        },
        speed: {
            value: 4000
        }
    }
});

module.exports = Accordion;




});