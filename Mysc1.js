// Adblock
!function() {
    function f() {
        var a = document.createElement("div");
        a.id = "wdbloogablock";
        a.innerHTML = '<div class="inner"> <div class="header"> <h2>يبدو أنك تستخدم مانع الإعلانات</h2> </div> <div class="isi"> <p>لا تقلق , لا مشكلة فى ذلك ,إلا انه لضمان أستمرار تقديم افضل خدمة لك , من فضلك ضع موقعنا ضمن القائمة البيضاء لمانع الإعلانات لديك :) <br /> واليك الطريقة ان كنت لا تعلم كيف تفعلها ^^ </p> <div class="tombol"><button class="1 active">Adblock</button><button class="2">Adblock Plus</button></div> <div class="fixblock"> <div class="1 active"> <ol> <li>اضغط على أيقونة AdBlock في متصفحك<br><img src="data:image/png;base64,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" alt="Adblock"></li> <li>قم بأختيار, Don\'t run on pages on this domain<br><img src="data:image/png;base64,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
