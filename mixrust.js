var curcontent = new Array();

var BlockListArrays = [
  /* 1 час    */ ["pistol.revolver", "shotgun.double",],
  /* 2 часа   */ ["pistol.python", "pistol.semiauto", "riot.helmet"],
  /* 4 часа   */ ["shotgun.pump", "pistol.m92", "coffeecan.helmet", "roadsign.jacket", "roadsign.kilt"],
  /* 8 часов  */ ["flamethrower", "shotgun.spas12", "smg.2", "smg.thompson", "rifle.semiauto"],
  /* 12 часов */ ["smg.mp5", "rifle.bolt", "rifle.m39", "metal.facemask", "metal.plate.torso", "grenade.f1"],
  /* 24 часа  */ ["rifle.ak", "rifle.lr300", "rifle.l96", "grenade.beancan", "surveycharge", "explosive.satchel"],
  /* 36 часов */ ["lmg.m249", "heavy.plate.helmet", "heavy.plate.jacket", "heavy.plate.pants"],
  /* 48 часов */ ["ammo.rifle.explosive", "ammo.rocket.basic", "rocket.launcher", "explosive.timed"],
];


curcontent["rules"] = {
  xhead: 'Правила',
  xcon: '<div class="xbox_custom_rules"><ul><p class="MsoNormal"><span>Информация</span></p>\
<p><li>Не знание правил не освобождает Вас от ответственности.</li></p>\
<p><li>Зайдя на сервер Вы автоматически соглашаетесь со всеми нижеперечисленными пунктами правил.</li></p>\
<p><li>Вы несете ответственность за все свои аккаунты. Получив бан за нарушение на одном аккаунте, вы получите его и на последующих. То же самое будет если на одном из ваших аккаунтах имеется EAC блокировка.</li></p>\
<p><li>Если Вы уже были замечены с читами / макросами на другом сервере / проекте и на вас есть пруфы - мы имеем право забанить Вас без проверки.</li></p>\
<p><li>Администрация не обязуется компенсировать игровые ценности, утраченные по причине вашей ошибки, багов игры или технических проблем на сервере.</li></p>\
<p><li>Запрещена продажа или реклама Читов/Макросов.</li></p>\
<p><li>Запрещено выдавать себя за Администратора, модератора или проверяющего.</li></p>\
<p><li>Администрация сама выбирает наказание для игрока в зависимости от степени нарушения и обстоятельств. Игрок может получить просто предупреждение, а может получить и перманентный бан.</li></p>\
<p class="MsoNormal"><span>Геймплей</span></li></p>\
<p><li>Запрещено использовать/хранить читы/макросы или любой другой софт дающий преимущество перед честными игроками.</li></p>\
<p><li>Запрещена игра с читерами/макросниками.</li></p>\
<p><li>Запрещено использование услуг читеров.</li></p>\
<p><li>Запрещено использование любых видов багов с целью или без цели получения преимущества над другими игроками.</li></p>\<br>\
<p class="MsoNormal"><span>Нарушение лимита игроков в команде</span></li></p>\
<p><li>Нельзя жить больше положенного максимума в одном доме</li></p>\
<p><li>Нельзя устраивать альянсы и перемирия с соседями если в сумме вас больше указанного в названии сервера максимума</li></p>\
<p><li>Частая смена тиммейта будет считаться за нарушения правила о лимите</li></p>\
<p><li>Нельзя рейдить и антирейдить в 1+/2+/3+ (подсад, доп.люди на обороне)</li></p><br>\
<p class="MsoNormal"><span>Игровой Чат</span></li></p>\
<p><li>Запрещены ссылки в чате на сторонние сервисы и сайты.</li></p>\
<p><li>Запрещен флуд (многократное повторение бессмысленных фраз, символов) или многократное отправление одинаковых фраз за короткий промежуток времени.</li></p>\
<p><li>Запрещены провокационные сообщения, по типу - "я читер, проверь меня".</li></p>\<br>\
<p class="MsoNormal"><span>Проверки</span></li></p>\
<p><li>Вы имеете полное право отказаться проходить проверку, но в этом случае вы и ваши тиммейты получат блокировку на всех наших серверах.</li></p>\
<p><li>При согласии на проверку вы разрешаете устанавливать сторонние программы нужные администрации для проверки вашего PC.</li></p>\
<p><li>Проверки проходят только через программы «DISCORD» и «SKYPE». Каждый игрок на нашем проекте, в обязательном порядке должен иметь одну из данных программ на своём пк (или хотя-бы аккаунт в дискорде).</li></p>\
<p><li>Выход с сервера во время вызова на проверку увенчается блокировкой.</li></p>\
<p><u><br>\
</u></p>\
</ul></div></div>'
};

curcontent["lvl-system-free"] = {
  xhead: 'Система уровней',
  patternxcon: `<div class="store-categories">
    <button class="btn btn-secondary active" onclick="Open('lvl-system-free', false);">FREE LEVELS</button>
    <button class="btn btn-secondary" onclick="Open('lvl-system-epic', false);">EPIC LEVELS</button>
    
    <div class="xbox_custom_lvlsys">`,
  xcon: '',
};

curcontent["lvl-system-epic"] = {
  xhead: 'Система уровней',
  patternxcon: `<div class="store-categories">
    <button class="btn btn-secondary" onclick="Open('lvl-system-free', false);">FREE LEVELS</button>
    <button class="btn btn-secondary active" onclick="Open('lvl-system-epic', false);">EPIC LEVELS</button>
    
    <div class="xbox_custom_lvlsys">`,
  xcon: '',
};

curcontent["block"] = {
  xhead: 'Блокировка предметов после вайпа', 
  xcon: '<div class="xbox_custom_block"><div class="kit-items">',
};

function Open(el, usefade = true, zind = false) {
  closepage();
  var div1 = document.createElement("div");
    div1.id = 'Modal';
  var div2 = document.createElement("div");
  div2.className = 'modal modal-xacku fade';
  if(!usefade) div2.classList.add("show");
  div2.style = 'display: block; z-index: 1100;';
  div2.id = 'closer';
  //div2.onclick = closepage;
  var div3 = document.createElement("div");
  div3.className = "modal-dialog modal-lg";
  if(el=="block")div3.className+=" modal-lg-block"
  var div4 = document.createElement("div");
  div4.className = "modal-content";
  var div5 = document.createElement("div");
  div5.className = "modal-header";
  div5.innerHTML = '<h4 class="modal-title">'+curcontent[el].xhead+'</h4>';
  var div6 = document.createElement("div");
  div6.className = "modal-body";
  div6.innerHTML = curcontent[el].xcon;
  var div7 = document.createElement("div");
  div7.className = "modal-footer";
  div7.innerHTML = '<button type="button" class="btn btn-secondary" id="closer" onclick="closepage()">Закрыть</button>';
  var div8 = document.createElement("div");
  div8.className = "modal-backdrop fade show";
  div8.style = 'z-index: 1050;';
  
  div1.appendChild(div2);
  //div2.appendChild(div2_5);
  div2.appendChild(div3);
  div3.appendChild(div4);
  div4.appendChild(div5);
  div4.appendChild(div6);
  div4.appendChild(div7);
  div1.appendChild(div8);
  if(usefade) setTimeout(()=> div2.classList.add("show"), 0);
  
  var body = document.getElementsByTagName('body')[0];
  body.appendChild(div1);
  body.className = "modal-open";
}


function closepage() {
  var Modal = document.getElementById('Modal');
  var Modalparent = null;
  try {
    Modalparent = ((Modal.parentElement) ? Modal.parentElement : ((Modal.parentNode) ? Modal.parentNode : null));
  } catch (error) {
    return;
  }
  if (Modalparent == null) return;
  Modalparent.removeChild(Modal);
  document.getElementsByTagName('body')[0].className = "";
}

function search(e){
  if (e.offsetX < 1) { 
    console.log(e.target.innerText + ' | ' + e.clientX);
    if (document.selection) { // IE
      var range = document.body.createTextRange();
      range.moveToElementText(e.target);
      range.select();
    } else if (window.getSelection) {
      var range = document.createRange();
      range.selectNode(e.target);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
    }
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('успешно скопирован, нажмите CTRL + V чтобы вставить в консоль F1 в игре.'); 
      } catch (err) {
      console.log('Oops, unable to copy' + err);
      }
    }
}

var promoWrap,
    scratch,
    scratchParts,
    scratched = false;
    screatchProperties = {
      h: 10, l: -70,
      speed: 2,  t: 20,
      bgt: 65, bgl: 35,
    };

window.onload = function () {
  document.body.onclick=function(event)
  {
    if(event.target.id == 'closer')closepage();
    if(event.target.className == 'MsoCommand')search(event);
  }
  
  for (var i = 0; i < BlockListArrays.length; i++) {
    curcontent["block"].xcon += '<div class="block_by_category block_category_'+ (i + 1) +'">';
    for (var b = 0; b < BlockListArrays[i].length; b++) {
      curcontent["block"].xcon += '<div class="kit-items__item"><div class="kit-item"><img class="kit-item__image" src="https://static.moscow.ovh/images/games/rust/icons/'+ BlockListArrays[i][b] +'.png">\
                    <div class="kit-item__quantity block-lvl-'+ (i + 1) +'"></div></div></div>';
    }
    curcontent["block"].xcon += '</div>';
  }
  curcontent["block"].xcon += '</div>\<br></i></div>';

  // lvl sys init
  Object.keys(lvlsys).forEach(function(type, numKey){
    let lvls = lvlsys[type].list;
    let needExp = 0;
    lvls.forEach(function(value){
      needExp += value.exp;
      curcontent["lvl-system-"+type].patternxcon += `<div class="lvl-el"><div class="lvl-header">Уровень ${value.lvl}</div><div class="lvl-body"><img src="${value.img}" alt=""></div><div class="lvl-footer">Exp: ${needExp}</div></div>`;
    });
    curcontent["lvl-system-"+type].patternxcon += '</div></div>';
    curcontent["lvl-system-"+type].xcon = curcontent["lvl-system-"+type].patternxcon;
  });
  //

  //scratched widget init
  scratchInit();
}

document.addEventListener("load", scratchInit);

function scratchInit() {
  promoWrap = document.getElementById('promo');
  scratch = promoWrap.children[1];
  scratchParts = [];

  //gen scratch parts
  let partsCount = (promoWrap.offsetWidth+screatchProperties.l*-1)/screatchProperties.h;
  for (let a = 0; a < partsCount; a++) {
    let part = document.createElement('div');
    let bg = document.createElement('div');
    part.className = 's-part';
    part.style.height = screatchProperties.h+'px';
    part.style.top = screatchProperties.t+'px';
    part.style.left = (screatchProperties.l+screatchProperties.h*a)+'px';
    bg.className = 'bg';
    bg.style.top = (screatchProperties.bgt-(screatchProperties.h*0.7)*a)+'px';
    bg.style.left = (screatchProperties.bgl-(screatchProperties.h*0.7)*a)+'px';
    part.append(bg);
    scratch.append(part);
    scratchParts.push(part);
  }
  promoWrap.style.opacity = 1;
  promoWrap.children[0].style.display = 'block';
  scratch.onclick=function(event){
    if (!scratched) {
      scratched = true;
      // scratch.getElementsByTagName('img')[0].remove();
      toscratch();
    }
  }
}

function toscratch() {
  if (Object.keys(scratchParts).length > 0) {
    let part2scratch = Math.floor(Math.random() * (Object.keys(scratchParts).length + 1));
    if (typeof scratchParts[Object.keys(scratchParts)[part2scratch]] != 'undefined') {
      let part = scratchParts[Object.keys(scratchParts)[part2scratch]];
      part.style.width = '0px';
      delete(scratchParts[Object.keys(scratchParts)[part2scratch]]);
      part.remove();
    }
    setTimeout(toscratch, 50);
  } else {
    scratch.remove();
  }
}
