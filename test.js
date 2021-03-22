var old_T = oT.replace(/ 3840x2160| 7680x4320|,/g,'');
var t_n = old_T.match(/#\d*[.]*\d*/g); 
if(t_n === null){ var t_n = '' };
var new_T = $.trim(old_T.replace(/#\d*[.]*\d*/gi,''));
var new_mT =  new_T.replace(/ \[[\s\S]*?\]/gi,'') + ' Wallpaper ' + t_n;
var mD_px = '';
