var headerHeight=jQuery(".fusion-header-wrapper").height(),fusionReanimateSlider=function(a){var b=a.find(".slide-content"),c=a.siblings(".tfs-scroll-down-indicator");jQuery(b).each(function(){jQuery(this).stop(!0,!0),jQuery(this).css("margin-top","50px"),jQuery(this).animate({opacity:"1","margin-top":"0"},1e3)}),jQuery(c).each(function(){var a=jQuery(this);a.stop(!0,!0),a.css("opacity","0"),b.offset().top+b.height()+25<a.offset().top&&(a.css("padding-bottom","50px"),setTimeout(function(){a.animate({opacity:"1","padding-bottom":"0"},500,"easeOutCubic")},500))})};!function(a){"use strict";a(".tfs-slider").each(function(){var b=this;1<=a(b).parents(".post-content").length&&(a(b).data("parallax",0),a(b).data("full_screen",0)),cssua.ua.mobile&&a(b).data("parallax",0)})}(jQuery),jQuery(window).load(function(){jQuery().flexslider&&jQuery(".tfs-slider").each(function(){var a,b,c,d,e,f,g,h,i,j,k,l=this,m=jQuery(l).find("li").get(0);headerHeight=jQuery(".fusion-header-wrapper").height(),"function"==typeof fusionCalculateResponsiveTypeValues&&(a="#"+jQuery(this).parent().attr("id"),k=a+" h1, "+a+" h2, "+a+" h3, "+a+" h4, "+a+" h5, "+a+" h6",fusionSetOriginalTypographyData(k),fusionCalculateResponsiveTypeValues(jQuery(this).data("typo_sensitivity"),jQuery(this).data("typo_factor"),800,k)),1<=jQuery(l).parents(".post-content").length&&(jQuery(l).data("parallax",0),jQuery(l).data("full_screen",0)),(cssua.ua.mobile||Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)"))&&jQuery(l).data("parallax",0),j=0,1<=jQuery("#wpadminbar").length&&(j=jQuery("#wpadminbar").height()),1<=jQuery(l).parents("#sliders-container").length&&1===jQuery(l).data("parallax")&&jQuery(".fusion-header").addClass("fusion-header-backface"),1==jQuery(l).data("full_screen")?(b=jQuery(window).height()-j,"above"===avadaFusionSliderVars.slider_position&&(b=jQuery(window).height()-(headerHeight+j)),0===jQuery(l).data("parallax")&&(b=1==avadaFusionSliderVars.header_transparency&&"below"===avadaFusionSliderVars.slider_position?jQuery(window).height()-j:jQuery(window).height()-(headerHeight+j)),Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)")&&(b=jQuery(window).height()-(headerHeight+j)),jQuery(".fusion-top-frame").length&&(b=b-jQuery(".fusion-top-frame").height()-jQuery(".fusion-bottom-frame").height()),jQuery(l).find("video").each(function(){var a,c=jQuery(this).width()/jQuery(this).height(),d=c*b,e="-"+(d-jQuery(l).width())/2+"px",f=jQuery(l).parent().parent().parent().width();jQuery(l).parents(".post-content").length&&(f=jQuery(l).width()),f>d?(d="100%",e=0,a="static"):a="absolute",jQuery(this).width(d),jQuery(this).css({left:e,position:a})})):(c=jQuery(l).data("slider_width"),-1!==c.indexOf("%")?(c=jQuery(m).find(".background-image").data("imgwidth"),c||cssua.ua.mobile||(c=jQuery(m).find("video").width()),c||(c=940),jQuery(l).data("first_slide_width",c),c<jQuery(l).data("slider_width")&&(c=jQuery(l).data("slider_width")),!0):c=parseInt(jQuery(l).data("slider_width"),10),b=parseInt(jQuery(l).data("slider_height"),10),d=b/c,.5>d&&(d=.5),e=jQuery(l).parent().parent().parent().width(),1<=jQuery(l).parents(".post-content").length&&(e=jQuery(l).width()),b=d*e,b>parseInt(jQuery(l).data("slider_height"),10)&&(b=parseInt(jQuery(l).data("slider_height"),10)),200>b&&(b=200)),1==jQuery(l).data("full_screen")&&(jQuery(l).css("max-width","100%"),jQuery(l).find(".slides, .background").css("width","100%")),"Left"!==avadaFusionSliderVars.header_position&&"Right"!==avadaFusionSliderVars.header_position||jQuery(l).hasClass("fixed-width-slider")||1!=jQuery(l).data("parallax")||(jQuery(l).css("max-width",jQuery("#wrapper").width()),jQuery("body").hasClass("side-header-left")?jQuery(l).css("left",jQuery("#side-header").width()):jQuery("body").hasClass("side-header-right")&&jQuery(l).css("right",jQuery("#side-header").width())),jQuery(l).parents(".fusion-slider-container").css("height",b),jQuery(l).css("height",b),jQuery(l).find(".background, .mobile_video_image").css("height",b),1<=jQuery(".layout-boxed-mode").length&&(f=jQuery(".layout-boxed-mode #wrapper").width(),jQuery(l).css("width",f),jQuery(l).css("margin-left","auto"),jQuery(l).css("margin-right","auto"),1!=jQuery(l).data("parallax")||Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)")||(jQuery(l).css("left","50%"),"Left"===avadaFusionSliderVars.header_position||"Right"===avadaFusionSliderVars.header_position?(f=jQuery(".layout-boxed-mode #wrapper").width()-jQuery(".layout-boxed-mode #side-header").width(),"Right"===avadaFusionSliderVars.header_position&&(f=jQuery(".layout-boxed-mode #wrapper").width()+jQuery(".layout-boxed-mode #side-header").width()),jQuery(l).css("margin-left","-"+Math.floor(f/2)+"px")):jQuery(l).css("margin-left","-"+f/2+"px")),jQuery(l).find(".slides, .background").css("width","100%")),cssua.ua.mobile&&(jQuery(l).find(".fusion-button").each(function(){jQuery(this).removeClass("button-xlarge button-large button-medium"),jQuery(this).addClass("button-small")}),jQuery(l).find("li").each(function(){jQuery(this).attr("data-autoplay","no"),jQuery(this).data("autoplay","no")})),jQuery(l).find("a.button").each(function(){jQuery(this).data("old",jQuery(this).attr("class"))}),Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.content_break_point+"px)")?jQuery(l).find(".fusion-button").each(function(){jQuery(this).data("old",jQuery(this).attr("class")),jQuery(this).removeClass("button-xlarge button-large button-medium"),jQuery(this).addClass("button-small")}):jQuery(l).find("a.button").each(function(){jQuery(this).attr("class",jQuery(this).data("old"))}),1==jQuery(l).data("parallax")&&(!Modernizr.mq("only screen and (min-width: "+avadaFusionSliderVars.side_header_break_point+"px)")||0!==avadaFusionSliderVars.header_transparency&&"0"!==avadaFusionSliderVars.header_transparency&&!1!==avadaFusionSliderVars.header_transparency||"below"!==avadaFusionSliderVars.slider_position||(g=jQuery(l).find(".slide-content-container"),jQuery(g).each(function(){jQuery(this).css("padding-top",headerHeight+"px")})),jQuery(window).scroll(function(){jQuery(window).scrollTop()>=jQuery(l).parents("#sliders-container").position().top+jQuery(l).parents("#sliders-container").height()?(cssua.ua.mobile||Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)")||jQuery(l).css("position","static"),jQuery(l).css("visibility","hidden")):(cssua.ua.mobile||Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)")||jQuery(l).css("position","fixed"),jQuery(l).css("visibility","visible"))})),h=jQuery(window).width(),i=jQuery(window).height(),jQuery(window).on("resize",function(){var a,b,c,d,e,f,g,j,k,m,n,o,p;(h!==jQuery(window).width()||h!==jQuery(window).width()&&i!==jQuery(window).height())&&(a=jQuery(".fusion-header-wrapper").height(),b=0,void 0!==jQuery(l).find(".flex-active-slide").find(".tfs-scroll-down-indicator").offset()&&jQuery(l).find(".flex-active-slide").find(".slide-content").offset().top+jQuery(l).find(".flex-active-slide").find(".slide-content").height()+25<jQuery(l).find(".flex-active-slide").find(".tfs-scroll-down-indicator").offset().top?jQuery(l).find(".flex-active-slide").find(".tfs-scroll-down-indicator").css("opacity","1"):jQuery(l).find(".flex-active-slide").find(".tfs-scroll-down-indicator").css("opacity","0"),jQuery("#wpadminbar").length&&(b=jQuery("#wpadminbar").height()),e=Math.max.apply(null,jQuery(l).find(".slide-content").map(function(){return jQuery(this).outerHeight()}).get()),e+=40,1==jQuery(l).data("full_screen")?(c=jQuery(window).height()-b,Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)")&&jQuery("#side-header").length&&(a=jQuery("#side-header").outerHeight()),"above"===avadaFusionSliderVars.slider_position&&(c=jQuery(window).height()-(a+b)),0===jQuery(l).data("parallax")&&(c=1==avadaFusionSliderVars.header_transparency&&"below"===avadaFusionSliderVars.slider_position?jQuery(window).height()-b:jQuery(window).height()-(a+b)),Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)")&&(c=jQuery(window).height()-(a+b)),jQuery(".fusion-top-frame").length&&(c=c-jQuery(".fusion-top-frame").height()-jQuery(".fusion-bottom-frame").height()),c<e&&(c=e),setTimeout(function(){jQuery(l).find("video").each(function(){var a,b=jQuery(this).width()/jQuery(this).height(),d=b*c,e="-"+(d-jQuery(l).width())/2+"px",f=jQuery(l).parent().parent().parent().width();jQuery(l).parents(".post-content").length&&(f=jQuery(l).width()),f>d?(d="100%",e=0,a="static"):a="absolute",jQuery(this).width(d),jQuery(this).css({left:e,position:a})})},100)):(d=jQuery(l).data("slider_width"),-1!==d.indexOf("%")?(d=jQuery(l).data("first_slide_width"),d<jQuery(l).data("slider_width")&&(d=jQuery(l).data("slider_width")),f=!0):d=parseInt(jQuery(l).data("slider_width"),10),c=parseInt(jQuery(l).data("slider_height"),10),g=c/d,.5>g&&(g=.5),j=jQuery(l).parent().parent().parent().width(),1<=jQuery(l).parents(".post-content").length&&(j=jQuery(l).width(),jQuery(l).parents(".tab-content").length&&(j=jQuery(l).parents(".tab-content").width()-60)),c=g*j,c>parseInt(jQuery(l).data("slider_height"),10)&&(c=parseInt(jQuery(l).data("slider_height"),10)),200>c&&(c=200),c<e&&e<=parseInt(jQuery(l).data("slider_height"),10)&&(c=e),jQuery(l).find("video").each(function(){var a,b,e=jQuery(this).width()/jQuery(this).height(),g=e*c;g<d&&!jQuery(l).hasClass("full-width-slider")&&(g=d),a="-"+(g-jQuery(l).width())/2+"px",b=jQuery(l).parent().parent().parent().width(),1<=jQuery(l).parents(".post-content").length&&(b=jQuery(l).width()),b>g&&!0===f&&1!=jQuery(l).data("full_screen")&&(g="100%",a=0),jQuery(this).width(g),jQuery(this).css("left",a)})),Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.content_break_point+"px)")?jQuery(l).find(".fusion-button").each(function(){void 0===jQuery(this).data("old")&&jQuery(this).data("old",jQuery(this).attr("class")),jQuery(this).removeClass("button-xlarge button-large button-medium"),jQuery(this).addClass("button-small")}):jQuery(l).find(".fusion-button").each(function(){jQuery(this).attr("class",jQuery(this).data("old"))}),1==jQuery(l).data("full_screen")&&"fade"===jQuery(l).data("animation")&&(jQuery(l).css("max-width","100%"),jQuery(l).find(".slides, .background").css("width","100%")),"Left"!==avadaFusionSliderVars.header_position&&"Right"!==avadaFusionSliderVars.header_position||jQuery(l).hasClass("fixed-width-slider")||1!=jQuery(l).data("parallax")||(jQuery(l).css("max-width",jQuery("#wrapper").width()),jQuery("body").hasClass("side-header-left")?jQuery(l).css("left",jQuery("#side-header").width()):jQuery("body").hasClass("side-header-right")&&jQuery(l).css("right",jQuery("#side-header").width())),jQuery(l).parents(".fusion-slider-container").css("height",c),jQuery(l).parents(".fusion-slider-container").css("max-height",c),jQuery(l).css("height",c),jQuery(l).find(".background, .mobile_video_image").css("height",c),1<=jQuery(".layout-boxed-mode").length&&0===jQuery(l).parents(".post-content").length&&(k=jQuery(".layout-boxed-mode #wrapper").width(),jQuery(l).css("width",k),jQuery(l).css("margin-left","auto"),jQuery(l).css("margin-right","auto"),1!=jQuery(l).data("parallax")||Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)")||(jQuery(l).css("left","50%"),"Left"===avadaFusionSliderVars.header_position||"Right"===avadaFusionSliderVars.header_position?(k=jQuery(".layout-boxed-mode #wrapper").width()-jQuery(".layout-boxed-mode #side-header").width(),"Right"===avadaFusionSliderVars.header_position&&(k=jQuery(".layout-boxed-mode #wrapper").width()+jQuery(".layout-boxed-mode #side-header").width()),jQuery(l).css("margin-left","-"+Math.floor(k/2)+"px")):jQuery(l).css("margin-left","-"+k/2+"px")),"slide"!==jQuery(l).data("animation")&&jQuery(l).find(".slides").css("width","100%"),jQuery(l).find(".background").css("width","100%")),1!==jQuery(l).data("parallax")||Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)")?1==jQuery(l).data("parallax")&&Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)")&&(jQuery(l).css("position","relative"),jQuery(l).css("left","0"),jQuery(l).css("margin-left","0"),"absolute"!==jQuery(".fusion-header-wrapper").css("position")&&jQuery(".fusion-header-wrapper").css("position","relative"),jQuery("#main, .fusion-footer-widget-area, .fusion-footer-copyright-area, .fusion-page-title-bar").css("position","relative"),jQuery("#main, .fusion-footer-widget-area, .fusion-footer-copyright-area, .fusion-page-title-bar").css("z-index","3"),jQuery(".fusion-header-wrapper").css("z-index","5"),jQuery(".fusion-header-wrapper").css("height","auto"),jQuery(l).parents(".fusion-slider-container").css("margin-top",""),jQuery(l).find(".flex-direction-nav li a").css("margin-top",""),jQuery(l).find(".flex-control-nav").css("bottom",0),0!==avadaFusionSliderVars.header_transparency&&"0"!==avadaFusionSliderVars.header_transparency&&!1!==avadaFusionSliderVars.header_transparency||"below"!==avadaFusionSliderVars.slider_position||(o=jQuery(l).find(".slide-content-container"),jQuery(o).each(function(){jQuery(this).css("padding-top","")}))):(jQuery(l).css("position","fixed"),"absolute"!==jQuery(".fusion-header-wrapper").css("position")?(jQuery(".fusion-header-wrapper").css("position","relative"),p=a/2+"px","below"===avadaFusionSliderVars.slider_position&&jQuery(l).parents(".fusion-slider-container").css("margin-top","-"+a+"px")):p="0",jQuery(l).find(".flex-direction-nav li a").css("margin-top",p),jQuery("#main, .fusion-footer-widget-area, .fusion-footer-copyright-area, .fusion-page-title-bar").css("position","relative"),jQuery("#main, .fusion-footer-widget-area, .fusion-footer-copyright-area, .fusion-page-title-bar").css("z-index","3"),jQuery(".fusion-header-wrapper").css("z-index","5"),jQuery(".fusion-header-wrapper").css("height",a),jQuery(l).hasClass("fixed-width-slider")&&("Left"===avadaFusionSliderVars.header_position||"Right"===avadaFusionSliderVars.header_position?(m=jQuery(l).parents("#sliders-container").length?jQuery("#sliders-container"):jQuery("#main"),m.width()<parseFloat(jQuery(l).parent().css("max-width"))?jQuery(l).css("max-width",m.width()):jQuery(l).css("max-width",jQuery(l).parent().css("max-width")),m.width()<parseFloat(jQuery(l).parent().css("max-width"))?jQuery(l).css("max-width",m.width()):jQuery(l).css("max-width",jQuery(l).parent().css("max-width")),-1*(n="Left"===avadaFusionSliderVars.header_position?"-"+(jQuery(l).width()-jQuery("#side-header").width())/2+"px":"-"+(jQuery(l).width()+jQuery("#side-header").width())/2+"px")>jQuery(l).width()&&(n=-1*jQuery(l).width())):n="-"+jQuery(l).width()/2+"px",jQuery(l).css("left","50%"),jQuery(l).css("margin-left",n)),jQuery(l).find(".flex-control-nav").css("bottom",a/2),0!==avadaFusionSliderVars.header_transparency&&"0"!==avadaFusionSliderVars.header_transparency&&!1!==avadaFusionSliderVars.header_transparency||"below"!==avadaFusionSliderVars.slider_position||(o=jQuery(l).find(".slide-content-container"),jQuery(o).each(function(){jQuery(this).css("padding-top",a+"px")}))),Modernizr.mq("only screen and (max-width: 640px)")?(jQuery(l).parents(".fusion-slider-container").css("height",c),jQuery(l).css("height",c),jQuery(l).find(".background, .mobile_video_image").css("height",c)):(Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)"),jQuery(l).parents(".fusion-slider-container").css("height",c),jQuery(l).css("height",c),jQuery(l).find(".background, .mobile_video_image").css("height",c)),o=jQuery(l).find(".slide-content-container"),1<=jQuery(l).parents(".post-content").length&&(jQuery(l).parents(".fusion-slider-container").css("height","auto"),jQuery(l).css("height","auto"),jQuery(l).parents(".fusion-slider-container").css("max-height","none"),jQuery(l).find(".mobile_video_image").each(function(){var a,b,d=jQuery(".mobile_video_image").css("background-image").replace("url(","").replace(")","");d&&(a=new Image,a.name=d,a.src=d,a.onload=function(){var a=this.height/this.width,d=jQuery(l).parent().parent().parent().width();1<=jQuery(l).parents(".post-content").length&&(d=jQuery(l).width()),(b=a*d)<c&&(jQuery(l).find(".mobile_video_image").css("height",b),jQuery(l).css("height",b))})})),"Left"!==avadaFusionSliderVars.header_position&&"Right"!==avadaFusionSliderVars.header_position||1<=jQuery(l).parents("#sliders-container").length&&(o=jQuery(l).parents("#sliders-container").find(".slide-content-container"),jQuery(o).each(function(){Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)")?(jQuery(this).find(".slide-content").css("margin-left",""),jQuery(this).find(".slide-content").css("margin-right","")):jQuery(this).hasClass("slide-content-right")?jQuery(this).find(".slide-content").css("margin-right","100px"):jQuery(this).hasClass("slide-content-left")&&jQuery(this).find(".slide-content").css("margin-left","100px")})),Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)")&&jQuery(".fusion-header-wrapper").css("height",""),h=jQuery(window).width(),i=jQuery(window).height())}),1<=jQuery(l).parents(".post-content").length&&(jQuery(l).css("max-width","100%"),"slide"!==jQuery(l).data("animation")&&jQuery(l).find(".slides").css("max-width","100%")),jQuery(l).find("video").each(function(){"function"==typeof jQuery(this)[0].pause&&jQuery(this)[0].pause()}),jQuery(l).flexslider({animation:jQuery(l).data("animation"),slideshow:jQuery(l).data("autoplay"),slideshowSpeed:jQuery(l).data("slideshow_speed"),animationSpeed:jQuery(l).data("animation_speed"),controlNav:Boolean("pagination_circles"===jQuery(l).data("slider_indicator")),directionNav:Boolean(Number(jQuery(l).data("nav_arrows"))),animationLoop:Boolean(Number(jQuery(l).data("loop"))),smoothHeight:!0,pauseOnHover:!1,useCSS:!0,video:!0,touch:!0,prevText:"&#xe61e;",nextText:"&#xe620;",start:function(a){var b,c,e,f,h,i,j,k,n=0;jQuery(l).parent().find(".fusion-slider-loading").remove(),1<=jQuery("#wpadminbar").length&&(n=jQuery("#wpadminbar").height()),jQuery(a.slides.eq(a.currentSlide)).find(".slide-content-container").show(),jQuery(a.slides.eq(a.currentSlide)).find(".tfs-scroll-down-indicator").show(),"function"==typeof jQuery.fn.fusion_responsive_title_shortcode&&jQuery(a.slides.eq(a.currentSlide)).find(".fusion-title").fusion_responsive_title_shortcode(),b=Math.max.apply(null,jQuery(l).find(".slide-content").map(function(){return jQuery(this).outerHeight()}).get()),b+=40,1==jQuery(l).data("full_screen")?(c=jQuery(window).height()-n,"above"===avadaFusionSliderVars.slider_position&&(c=jQuery(window).height()-(headerHeight+n)),0===jQuery(l).data("parallax")&&(c=1==avadaFusionSliderVars.header_transparency&&"below"===avadaFusionSliderVars.slider_position?jQuery(window).height()-n:jQuery(window).height()-(headerHeight+n)),Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)")&&(c=jQuery("#side-header").length?jQuery(window).height()-(jQuery("#side-header").outerHeight()+n):jQuery(window).height()-(headerHeight+n)),c<b&&(c=b),jQuery(".fusion-top-frame").length&&(c=c-jQuery(".fusion-top-frame").height()-jQuery(".fusion-bottom-frame").height()),jQuery(l).find("video").each(function(){var a=jQuery(this).width()/jQuery(this).height(),b=a*c,d="-"+(b-jQuery(l).width())/2+"px";h=jQuery(l).parent().parent().parent().width(),1<=jQuery(l).parents(".post-content").length&&(h=jQuery(l).width()),h>b&&(b="100%",d=0),jQuery(this).width(b),jQuery(this).css("left",d)})):(e=jQuery(l).data("slider_width"),-1!==e.indexOf("%")?(e=jQuery(m).find(".background-image").data("imgwidth"),e||cssua.ua.mobile||(e=jQuery(m).find("video").width()),e||(e=940),jQuery(l).data("first_slide_width",e),e<jQuery(l).data("slider_width")&&(e=jQuery(l).data("slider_width")),f=!0):e=parseInt(jQuery(l).data("slider_width"),10),c=parseInt(jQuery(l).data("slider_height"),10),d=c/e,.5>d&&(d=.5),h=jQuery(l).parent().parent().parent().width(),1<=jQuery(l).parents(".post-content").length&&(h=jQuery(l).width(),jQuery(l).parents(".tab-content").length&&(h=jQuery(l).parents(".tab-content").width()-60)),c=d*h,c>parseInt(jQuery(l).data("slider_height"),10)&&(c=parseInt(jQuery(l).data("slider_height"),10)),200>c&&(c=200),c<b&&(c=b),jQuery(l).find("video").each(function(){var a,b,d=jQuery(this).width()/jQuery(this).height(),g=d*c;g<e&&!jQuery(l).hasClass("full-width-slider")&&(g=e),a="-"+(g-jQuery(l).width())/2+"px",b=jQuery(l).parent().parent().parent().width(),1<=jQuery(l).parents(".post-content").length&&(b=jQuery(l).width()),b>g&&!0===f&&1!=jQuery(l).data("full_screen")&&(g="100%",a=0),jQuery(this).width(g),jQuery(this).css("left",a)})),jQuery(l).parents(".fusion-slider-container").css("max-height",c),jQuery(l).parents(".fusion-slider-container").css("height",c),jQuery(l).css("height",c),jQuery(l).find(".background, .mobile_video_image").css("height",c),1!==jQuery(l).data("parallax")||Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)")?1==jQuery(l).data("parallax")&&Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)")&&(jQuery(l).css("position","relative"),jQuery(l).css("left","0"),jQuery(l).css("margin-left","0"),"absolute"!==jQuery(".fusion-header-wrapper").css("position")&&jQuery(".fusion-header-wrapper").css("position","relative"),jQuery("#main, .fusion-footer-widget-area, .fusion-footer-copyright-area, .fusion-page-title-bar").css("position","relative"),jQuery("#main, .fusion-footer-widget-area, .fusion-footer-copyright-area, .fusion-page-title-bar").css("z-index","3"),jQuery(".fusion-header-wrapper").css("z-index","5"),jQuery(".fusion-header-wrapper").css("height","auto"),jQuery(l).parents(".fusion-slider-container").css("margin-top",""),jQuery(l).find(".flex-direction-nav li a").css("margin-top",""),jQuery(l).find(".flex-control-nav").css("bottom",0),0!==avadaFusionSliderVars.header_transparency&&"0"!==avadaFusionSliderVars.header_transparency&&!1!==avadaFusionSliderVars.header_transparency||"below"!==avadaFusionSliderVars.slider_position||(g=jQuery(l).find(".slide-content-container"),jQuery(g).each(function(){jQuery(this).css("padding-top","")}))):(jQuery(l).css("position","fixed"),"absolute"!==jQuery(".fusion-header-wrapper").css("position")?(jQuery(".fusion-header-wrapper").css("position","relative"),k=headerHeight/2+"px","below"===avadaFusionSliderVars.slider_position&&jQuery(l).parents(".fusion-slider-container").css("margin-top","-"+headerHeight+"px")):k="0",jQuery(l).find(".flex-direction-nav li a").css("margin-top",k),jQuery("#main, .fusion-footer-widget-area, .fusion-footer-copyright-area, .fusion-page-title-bar").css("position","relative"),jQuery("#main, .fusion-footer-widget-area, .fusion-footer-copyright-area, .fusion-page-title-bar").css("z-index","3"),jQuery(".fusion-header-wrapper").css("z-index","5"),jQuery(".fusion-header-wrapper").css("height",headerHeight),1==jQuery(l).data("full_screen")?jQuery(a).find(".flex-control-nav").css("bottom",headerHeight/2):jQuery(a).find(".flex-control-nav").css("bottom",0),jQuery(l).hasClass("fixed-width-slider")&&("Left"===avadaFusionSliderVars.header_position||"Right"===avadaFusionSliderVars.header_position?(i=jQuery(l).parents("#sliders-container").length?jQuery("#sliders-container"):jQuery("#main"),i.width()<parseFloat(jQuery(l).parent().css("max-width"))?jQuery(l).css("max-width",i.width()):jQuery(l).css("max-width",jQuery(l).parent().css("max-width")),-1*(j="Left"===avadaFusionSliderVars.header_position?"-"+(jQuery(l).width()-jQuery("#side-header").width())/2+"px":"-"+(jQuery(l).width()+jQuery("#side-header").width())/2+"px")>jQuery(l).width()&&(j=-1*jQuery(l).width())):j="-"+jQuery(l).width()/2+"px",jQuery(l).css("left","50%"),jQuery(l).css("margin-left",j)),0!==avadaFusionSliderVars.header_transparency&&"0"!==avadaFusionSliderVars.header_transparency&&!1!==avadaFusionSliderVars.header_transparency||"below"!==avadaFusionSliderVars.slider_position||(g=jQuery(l).find(".slide-content-container"),jQuery(g).each(function(){jQuery(this).css("padding-top",headerHeight+"px")}))),g=jQuery(l).find(".slide-content-container"),jQuery(a.slides.eq(a.currentSlide)).find("video").each(function(){"yes"===jQuery(this).parents("li").attr("data-autoplay")&&"function"==typeof jQuery(this)[0].play&&jQuery(this)[0].play()}),"Left"!==avadaFusionSliderVars.header_position&&"Right"!==avadaFusionSliderVars.header_position||1<=jQuery(l).parents("#sliders-container").length&&(g=jQuery(l).parents("#sliders-container").find(".slide-content-container"),jQuery(g).each(function(){Modernizr.mq("only screen and (max-width: "+avadaFusionSliderVars.side_header_break_point+"px)")||(jQuery(this).hasClass("slide-content-right")?jQuery(this).find(".slide-content").css("margin-right","100px"):jQuery(this).hasClass("slide-content-left")&&jQuery(this).find(".slide-content").css("margin-left","100px"))})),fusionReanimateSlider(g),void 0!==a.slides&&0!==a.slides.eq(a.currentSlide).find("iframe").length&&playVideoAndPauseOthers(a),jQuery(l).find(".overlay-link").hide(),jQuery(a.slides.eq(a.currentSlide)).find(".overlay-link").show(),jQuery(l).find("[data-youtube-video-id], [data-vimeo-video-id]").each(function(){var a=jQuery(this);setTimeout(function(){resizeVideo(a)},500)}),jQuery.waypoints("viewportHeight"),jQuery.waypoints("refresh")},before:function(){jQuery(l).find(".slide-content-container").hide(),jQuery(l).find(".tfs-scroll-down-indicator").hide()},after:function(a){jQuery(a.slides.eq(a.currentSlide)).find(".slide-content-container").show(),jQuery(a.slides.eq(a.currentSlide)).find(".tfs-scroll-down-indicator").show(),"function"==typeof jQuery.fn.fusion_responsive_title_shortcode&&jQuery(a.slides.eq(a.currentSlide)).find(".fusion-title").fusion_responsive_title_shortcode(),g=jQuery(l).find(".slide-content-container"),fusionReanimateSlider(g),jQuery(l).find(".overlay-link").hide(),jQuery(a.slides.eq(a.currentSlide)).find(".overlay-link").show(),jQuery(a.slides.eq(a.currentSlide)).find("[data-youtube-video-id], [data-vimeo-video-id]").each(function(){resizeVideo(jQuery(this))}),playVideoAndPauseOthers(a),jQuery('[data-spy="scroll"]').each(function(){jQuery(this).scrollspy("refresh")})}})})});