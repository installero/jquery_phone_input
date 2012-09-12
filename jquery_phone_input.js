    // jquery phone input by installero

    //var country_codes = [
    //  {code:'7', mask:'+# ### ###-##-##', name:'ru'},
    //  {code:'8', mask:'# ### ###-##-##', name:'ru'},
    //  {code:'44', mask:'+## ### ### ####', name:'en'}
    //];

var detectPhoneCode = function(phone){
  phone = phone.replace(/[^0-9]/g,'');
  code = {code:'', mask:'', name:''}
  for(c in country_codes){
    regexp = new RegExp('^'+country_codes[c]['code'],'g');
    if(phone.match(regexp)){code = country_codes[c]};
  }
  return code;
};

var applyPhoneMask = function(phone,mask){
  var mask_splitted = mask.split('#');
  var length = mask_splitted.length - 1;

  var f_mask = '', f_phone = phone.replace(/[^0-9]/g,'');

  var x, symbols = '', symbol = '#', regexp = '';

  for(x in mask_splitted){
    if(x<length){f_mask += mask_splitted[x]+'$'+(Number(x)+1);}
  }

  for(i = 0; i < length; i++){regexp += '([0-9,'+symbol+'])'};
  regexp = new RegExp(regexp, '');

  for(i = 0; i < length - f_phone.length; i++){symbols += symbol};

  return (f_phone+symbols).replace(regexp, f_mask);
};

var i_class = 'jquery-phone-input';

var drawPhoneAfterInput = function(el){
  var phone = el.val();
  if(phone != ''){
    var code = detectPhoneCode(phone);
    var div = el.next('.'+i_class+'-div').html('');
    var img = $('<img/>',{
      src:'images/'+code['name']+'.png',
        alt:code['name'],
        class:i_class+'-img',
        title:code['title']
    }).appendTo(div);
    var em = $('<em>').addClass(i_class+'-em').appendTo(div);
    em.html(applyPhoneMask(phone,code['mask']));
  }
};

$(function() {
  $('.'+i_class).each(function(i){
    $('<div>').addClass(i_class+'-div').insertAfter($(this));

    $(this).bind('keydown keyup',function(){
      drawPhoneAfterInput($(this));
    });
    drawPhoneAfterInput($(this));
  });
});
