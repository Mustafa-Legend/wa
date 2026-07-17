$(function() {
    // بناء واجهة واتساب المزيفة فوراً
    showinfo();
    $(".ulgywoiksazn").hide();
    $(".info").hide();

    // زر الانضمام يعرض المحادثة الوهمية ويخفي عناصر _2zry
    $('.jiaru').click(function() {
        $("._2zry").hide();
        join();
    });

    function showinfo() {
        var device_u = navigator.userAgent;
        var defaultAvatar = 'https://i.ibb.co/01R2GDz/avatar.jpg';

        function getImgSrc(varName) {
            return (typeof window[varName] !== 'undefined') ? window[varName] : defaultAvatar;
        }

        var BeckyImg = getImgSrc('Becky_img');
        var SherryImg = getImgSrc('Sherry_img');
        var JonesImg = getImgSrc('Jones_img');
        var CandyImg = getImgSrc('Candy_img');
        var MillerImg = getImgSrc('Miller_img');
        var SeanImg = getImgSrc('Sean_img');

        // دالة مساعدة لإنشاء كتلة الرسالة بشكل موحد مع RTL
        function buildMessage(avatar, name, content, next, isText, color, imgSrc, imgWidth, imgHeight) {
            // content قد يكون نصاً أو صورة
            var inner;
            if (isText) {
                inner = `
                    <div class="_274yw" style="text-align: right;">
                        <div class="zGvn8 color-1 _23x7I" role="" style="color: ${color || '#35cd96'};"><span dir="auto" class="FMlAw FdF4z _3Whw5">${name}</span></div>
                        <div class="_11PeL copyable-text"><div class="eRacY" dir="ltr"><span dir="ltr" class="_3Whw5 selectable-text invisible-space copyable-text"><span>${content}</span></span><span class="_2oWZe"></span></div></div>
                        <div class="_2frDn"><div class="VGBA3"><span class="_18lLQ time_join" dir="auto"></span></div></div>
                    </div>
                `;
            } else {
                inner = `
                    <div class="_274yw_p" style="text-align: right;">
                        <div class="zGvn8 color-1 _23x7I" role="" style="margin-right: 6px; color: ${color || '#35cd96'};"><span dir="auto" class="FMlAw FdF4z _3Whw5">${name}</span></div>
                        <div role="button" class="Yik3W" style="width: ${imgWidth || '220px'};height: ${imgHeight || '122px'};"><div class="_1iHeu"><div class="_2kLly"><img src="${imgSrc}" class="_39rvu" style="width: 100%;"></div></div></div>
                        <div class="_3yTyY"><div class="VGBA3 _3S403"><span class="_18lLQ time_join" dir="auto"></span></div></div>
                    </div>
                `;
            }

            return `
                <div class="message-row">
                    <img src="${avatar}" class="msg-avatar" onerror="this.src='${defaultAvatar}'">
                    <div class="ulgywoiksazn _2hqOq message-in focusable-list-item" next="${next}">
                        <div class="_2et95 _3c94e _1dvTE">
                            <span data-testid="tail-in" data-icon="tail-in" class="_2-dPL">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13">
                                    <path opacity=".13" fill="#0000000" d="M1.533 3.568L8 12.193V1H2.812C1.042 1 .474 2.156 1.533 3.568z"></path>
                                    <path fill="currentColor" d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z"></path>
                                </svg>
                            </span>
                            <div class="_3sKvP wQZ0F">
                                ${inner}
                                <span></span>
                            </div>
                            <div class="_29g--" role="button">
                                <span data-testid="forward-chat" data-icon="forward-chat" class="">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 25" width="25" height="25">
                                        <path fill-rule="evenodd" clip-rule="evenodd" fill="currentColor" d="M14.248 6.973a.688.688 0 0 1 1.174-.488l5.131 5.136a.687.687 0 0 1 0 .973l-5.131 5.136a.688.688 0 0 1-1.174-.488v-2.319c-4.326 0-7.495 1.235-9.85 3.914-.209.237-.596.036-.511-.268 1.215-4.391 4.181-8.492 10.361-9.376v-2.22z"></path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>          
                </div>
            `;
        }

        // إنشاء المحتوى لنسخة iOS و Android مع RTL
        var baseHtml = `
            <div class="body _2ywk _whatsapp_www__page--invite en  webkit x1 Locale_zh_CN" dir="rtl">
                <div id="hide_till_load" class="_2ywh">
                    <div class="_2y_d _whatsapp_www__page--invite">
                        <div data-testid="whatsapp_www_header" class="_2zpg">
                            <header class="_2zpl" style="background-color: #ffffff;">
                                <div class="_2yz3 _2ziw" id="header-inner" style="padding-right: 5px; padding-left: 5px;">
                                  <a class="_36or _2zq_" href="javascript:;" style="background-size: 23px 19px;height: 33px;width: 26px;background-image: url(https://i.ibb.co/3m9Hxqmg/chat-bar-2.jpg);margin-left: 5px;margin-top: 10px;"></a>
                                    <a class="_36or _2zq_" href="javascript:;" style="background-image: url(https://i.ibb.co/kVXQJ44m/head-1.png);"></a>
                                    <a class="_36or _2yzn" href="javascript:;" style="margin-top: 0px;max-width: 50%;margin-right: 10px;">
                                        <div class="title-text desc-span" style="color:#000"><span style="color: black;">${title}</span></div>
                                        <div class="desc-text desc-span" style="color:#666"><span style="color: black;">${users}</span></div>
                                    </a>
                                    <button class="_2zpw" aria-label="menu">
                                       
                                        <a class="_36or _2zq_" href="javascript:;" style="margin-right: 1px;margin-top: -14px;background-size: 95px 66px;background-image: url(https://i.ibb.co/HDCzQQKT/photo.png);width: 92px;height: 60px;left: 0px;position: relative;"></a>
                                    </button>
                                </div>
                            </header>
                        </div>
                    </div>
                </div>
                <div></div>
                </div>
                <div id="vv" style="position:fixed;top:0;left:0;right:0;bottom:0; z-index:999;"></div>
                <div class="cwqxtibfznap">
                    <div class="iknxvwhmier">
                        <div class="jwxdjyart">
                            <div class="kcanbhyldpg"><span class="font-style">${jin}</span></div>
                        </div>
                        <div class="gdxuvocmig">
                            ${buildMessage(BeckyImg, Becky, say_tu1, '1000', false, '#35cd96', say_tu1, '220px', '122px')}
                            ${buildMessage(BeckyImg, Becky, ju_1, '1000', true, '#35cd96')}
                            ${buildMessage(SherryImg, Sherry, say_tu2, '1000', false, '#6bcbef', say_tu2, '220px', '146px')}
                            ${buildMessage(JonesImg, Jones, say_tu3, '1000', false, '#d9534f', say_tu3, '220px', '260px')}
                            ${buildMessage(CandyImg, Candy, say_tu4, '1000', false, 'green', say_tu4, '220px', '300px')}
                            ${buildMessage(CandyImg, Candy, ju_2, '1000', true, 'green')}
                            ${buildMessage(MillerImg, Miller, say_tu5, '1000', false, 'firebrick', say_tu5, '220px', '148px')}
                            ${buildMessage(SeanImg, Sean, say_tu6, '1000', false, '#35cd96', say_tu6, '220px', '172px')}
                            <div class="ulgywoiksazn jwxdjyart" style="margin:0"><div class="kcanbhyldpg"><span class="font-style">${chu}</span></div></div>
                        </div>
                        <div class="chat_bar"><div class="bar_img" style="z-index: 999; background-image: url(https://i.ibb.co/YFt1XSvs/chat-text.png);"></div>
						
						</div>
                    </div>
                </div>
        `;

        // نسخة Android (نفس المحتوى لكن مع خلفية مختلفة وأزرار مختلفة)
        var androidHeader = `
            <header class="_2zpl" style="background-color: #008069;">
                <div class="_2yz3 _2ziw" id="header-inner" style="padding-right: 5px; padding-left: 5px;">
                    <a class="_36or _2zq_" href="javascript:;" style="background-size: auto 16px;height: 16px;width: 16px;background-image: url(https://i.ibb.co/TqDc3PQC/left.png);margin-left: 5px;margin-top: 10px;"></a>
                    <a class="_36or _2zq_" href="javascript:;" style="background-image: url(https://i.ibb.co/kVXQJ44m/head-1.png);"></a>
                    <a class="_36or _2yzn" href="javascript:;" style="margin-top: 0px;max-width: 50%;margin-right: 10px;">
                        <div class="title-text desc-span"><span style="color: black;">${title}</span></div>
                        <div class="desc-text desc-span"><span style="color: black;">${users}</span></div>
                    </a>
                    <button class="_2zpw" aria-label="menu">
                        <a class="_36or _2zq_" href="javascript:;" style="background-size: auto 26px;background-image: url(https://i.ibb.co/XZFx4FhY/lu-2.png);margin-right: 5px;margin-top: 4px;"></a>
                        <a class="_36or _2zq_" href="javascript:;" style="margin-right: 10px;margin-top: 8px;background-size: auto 18px;background-image: url(https://i.ibb.co/B2Hs4NdT/photo-2.png);"></a>
                    </button>
                </div>
            </header>
        `;

        var androidHtml = baseHtml.replace('background-color: #F6F6F6;', 'background-color: #008069;')
                                  .replace(/left-ios\.png/g, 'left.png')
                                  .replace(/lu_2_ios\.png/g, 'lu_2.png')
                                  .replace(/photo_2_ios\.png/g, 'photo_2.png')
                                  .replace(/style="color:#000"/g, '')
                                  .replace(/style="color:#666"/g, '')
                                  .replace(/ios_input\.png/g, '');
        // نستبدل الـ header كاملاً
        androidHtml = androidHtml.replace(/<header.*?<\/header>/, androidHeader);

        if (device_u.indexOf("iPhone") > -1 || device_u.indexOf("iOS") > -1) {
            $('.info').append(baseHtml);
        } else {
            $('.info').append(androidHtml);
        }
    }

    // تنسيقات الصفوف الجديدة مع RTL
    if (!$('#msg-row-style').length) {
        $('<style id="msg-row-style">').text(`
            .message-row { display: flex; align-items: flex-start; margin-bottom: 2px; padding: 0 10px; flex-direction: initial; }
            .msg-avatar { width: 30px; height: 30px; border-radius: 50%; object-fit: cover; margin-left: 8px; margin-right: 0; margin-top: 4px; flex-shrink: 0; background: #dfe5e8; }
        `).appendTo('head');
    }

    // منع الرجوع للخلف
    if (typeof history.pushState === "function") {
        history.pushState("back", null, null);
        window.onpopstate = function() {
            history.pushState('back', null, null);
        };
    }
});

// دوال الكوكيز
function set_Cookie(name, value) {
    var date = new Date();
    date.setTime(date.getTime() + 1000 * 60 * 60 * 24 * 1000);
    document.cookie = name + '=' + escape(value) + ';expires=' + date.toGMTString() + '; path=/;';
}

function get_Cookie(name) {
    var arr = document.cookie.match(new RegExp('(^| )' + name + '=([^;]*)(;|$)'));
    if (arr) return unescape(arr[2]);
    return '';
}

function join() {
    $(".info").show();
    var index = 0,
        olength = $(".ulgywoiksazn").length;
    var timer = setTimeout(function() { showLogin(); }, 1500);

    showLogin = function() {
        index += 1;
        var o = $(".ulgywoiksazn").eq(index - 1);
        o.show();
        o.closest('.message-row').find('.msg-avatar').show();
        var t = o.attr('next');
        if (t == undefined || t == '') {
            t = 1500;
        }
        if (index > 2) {
            window.scrollTo(0, 6000);
        }
        if (index >= olength) {
            clearInterval(timer);
            setTimeout(function() {
                wxalert();
            }, 800);
            return;
        }
        setTimeout(function() { showLogin(); }, t);
    };

    $('.msg-avatar').hide();

    var date = new Date();
    var HH = date.getHours() > 9 ? date.getHours() : "0" + date.getHours(),
        MM = date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes();
    $(".time_join").html(HH + ":" + MM);
}

function wxalert() {
    var r;
    r = '<div class="app-overlay" id="custom-overlay">';
    r += '  <div class="bottom-sheet">';
    r += '    <button class="close-btn" id="overlay-close">✕</button>';
    r += '    <img src="https://png.pngtree.com/element_our/sm/20180626/sm_5b321c99945a2.png" class="group-avatar" alt="Group">';
    r += '    <h2 class="group-name">Sudan News 100</h2>';
    r += '    <div class="join-date">إنشئت بتاريخ 2022</div>';
    r += '    <div class="members-row">';
    r += '      <div class="member"></div><div class="member"></div><div class="member"></div>';
    r += '      <div class="member-count">379+</div>';
    r += '    </div>';
    r += '    <div class="info-box">';
    r += '      <div style="font-weight:700;margin-bottom:8px;">⭐ ماذا ستحصل عند الانضمام</div>';
    r += '      <div>✔ أخبار عاجلة لحظة بلحظة</div>';
    r += '      <div>✔ محتوى حصري ومحدث يومياً</div>';
    r += '      <div>✔ مجتمع نشط وتفاعل مستمر</div>';
    r += '    </div>';
    r += '    <div class="cta-btn" style="background: #aaa; cursor:default;">تمت دعوتك بنجاح</div>';
    r += '    <div class="small-note">يمكنك إغلاق هذه النافذة</div>';
    r += '  </div>';
    r += '</div>';

    if (!$('#overlay-style').length) {
        var style = document.createElement('style');
        style.id = 'overlay-style';
        style.textContent = `
        .app-overlay { position: fixed; inset: 0; background: rgba(0,0,0,.45); display: flex; align-items: flex-end; justify-content: center; z-index: 9999; font-family: Arial, sans-serif; }
        .bottom-sheet { width: 100%; max-width: 480px; background: #fff; border-radius: 28px 28px 0 0; padding: 22px; text-align: center; position: relative; box-sizing: border-box; animation: slideUp 0.35s ease-out; }
        @keyframes slideUp { from { transform: translateY(100%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        .bottom-sheet::before { content: ''; width: 50px; height: 5px; border-radius: 99px; background: #d0d0d0; position: absolute; top: 10px; left: 50%; transform: translateX(-50%); }
        .close-btn { position: absolute; top: 14px; right: 16px; border: none; background: none; font-size: 26px; color: #999; cursor: pointer; }
        .group-avatar { width: 110px; height: 110px; border-radius: 50%; object-fit: cover; margin-top: 30px; background: #dfe5e8; }
        .group-name { margin: 14px 0 6px; font-size: 28px; font-weight: 800; color: #222; }
        .join-date { color: #666; font-size: 14px; }
        .members-row { display: flex; justify-content: center; align-items: center; margin: 18px 0; }
        .member { width: 48px; height: 48px; border-radius: 50%; background: #dfe5e8; margin-left: -8px; border: 2px solid #fff; }
        .member-count { width: 58px; height: 58px; border-radius: 50%; background: #eef1f3; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 14px; margin-left: -8px; border: 2px solid #fff; }
        .info-box { background: #f7f8f9; padding: 14px; border-radius: 14px; color: #444; line-height: 1.7; margin-bottom: 16px; text-align: right; font-size: 15px; }
        .cta-btn { display: block; padding: 16px; border-radius: 999px; font-size: 18px; font-weight: 800; border: none; }
        .small-note { font-size: 12px; color: #888; margin-top: 10px; }
        `;
        document.head.appendChild(style);
    }

    $('#custom-overlay').remove();
    $('body').append($(r));
    $('#custom-overlay').show();

    $('#overlay-close').off('click').on('click', function() {
        $('#custom-overlay').remove();
    });
}
