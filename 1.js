var old_T=oT.replace(/ 3840x2160| 7680x4320|,/g,'');var t_n=old_T.match(/#\d*[.]*\d*/g);if(t_n===null){var t_n=''};var new_T=$.trim(old_T.replace(/#\d*[.]*\d*/gi,''));var new_mT=new_T.replace(/ \[[\s\S]*?\]/gi,'')+' Wallpaper '+t_n;var mD_px='';$("title").html(new_mT);var wp_T=new_T.replace(/\(|\)|\[|\]/gi,'');$(".wp_title").html(wp_T);var new_mK=$.trim(oT.replace(/#\d*[.]*\d*/g,'wallpaper').replace(/\/|:|'|\./g,'').replace(/-/g,' ').toLowerCase());var new_mD=new_T.replace(/( 4K| 8K| 4K 3840x2160| 8K 7680x4320)$/gi,'');$('meta[name=description]').attr('content',new_mD+' Wallpaper 4K '+mD_px+'for Desktop, iPhone, PC, Laptop, Computer, Android Phone, Smartphone, iMac, MacBook, Tablet, Mobile Device.');$('meta[name=keywords]').attr('content',new_mK+', hd');var wp_stag=wp_words.replace(/\[[\s\S]*?\]/g,"");var wp_stag_arr=wp_stag.split(&quot;,&quot;);var text_search=&quot;&quot;;var i;for(i=0;i&lt;wp_stag_arr.length;i++){wp_stag_lnk=wp_stag_arr[i].trim();if(wp_stag_lnk!==""){wp_stag_t=wp_stag_lnk;wp_stag_lnk=wp_stag_lnk.replace(/ /g,&quot;+&quot;);text_search+=&quot;&lt;a title=&#39;&quot;+wp_stag_t+&quot;Wallpapers&#39;href=/search?q=&quot; + wp_stag_lnk + &quot;&amp;by-date=true&gt;&quot; + wp_stag_t + &quot;&lt;/a&gt;&quot;;}}
$(".wp_search").html(text_search);$(".wp_kywrds").html(text_search);var wp_D=wp_T.replace(/ 4K| 8K/gi,'');$(".rep1").html(wp_D);
