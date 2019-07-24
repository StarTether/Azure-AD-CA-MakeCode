(function() {
    if (window.ksRunnerInit) return;

    // This line gets patched up by the cloud
    var pxtConfig = {
    "relprefix": "/Azure-AD-CA-MakeCode/",
    "verprefix": "",
    "workerjs": "/Azure-AD-CA-MakeCode/worker.js",
    "monacoworkerjs": "/Azure-AD-CA-MakeCode/monacoworker.js",
    "gifworkerjs": "/Azure-AD-CA-MakeCode/gifjs/gif.worker.js",
    "pxtVersion": "5.6.4",
    "pxtRelId": "",
    "pxtCdnUrl": "/Azure-AD-CA-MakeCode/",
    "commitCdnUrl": "/Azure-AD-CA-MakeCode/",
    "blobCdnUrl": "/Azure-AD-CA-MakeCode/",
    "cdnUrl": "/Azure-AD-CA-MakeCode/",
    "targetVersion": "0.0.0",
    "targetRelId": "",
    "targetUrl": "",
    "targetId": "camakecode",
    "simUrl": "/Azure-AD-CA-MakeCode/simulator.html",
    "partsUrl": "/Azure-AD-CA-MakeCode/siminstructions.html",
    "runUrl": "/Azure-AD-CA-MakeCode/run.html",
    "docsUrl": "/Azure-AD-CA-MakeCode/docs.html",
    "isStatic": true
};

    var scripts = [
        "/Azure-AD-CA-MakeCode/highlight.js/highlight.pack.js",
        "/Azure-AD-CA-MakeCode/bluebird.min.js",
        "/Azure-AD-CA-MakeCode/marked/marked.min.js",
    ]

    if (typeof jQuery == "undefined")
        scripts.unshift("/Azure-AD-CA-MakeCode/jquery.js")
    if (typeof jQuery == "undefined" || !jQuery.prototype.sidebar)
        scripts.push("/Azure-AD-CA-MakeCode/semantic.js")
    if (!window.pxtTargetBundle)
        scripts.push("/Azure-AD-CA-MakeCode/target.js");
    scripts.push("/Azure-AD-CA-MakeCode/pxtembed.js");

    var pxtCallbacks = []

    window.ksRunnerReady = function(f) {
        if (pxtCallbacks == null) f()
        else pxtCallbacks.push(f)
    }

    window.ksRunnerWhenLoaded = function() {
        pxt.docs.requireHighlightJs = function() { return hljs; }
        pxt.setupWebConfig(pxtConfig || window.pxtWebConfig)
        pxt.runner.initCallbacks = pxtCallbacks
        pxtCallbacks.push(function() {
            pxtCallbacks = null
        })
        pxt.runner.init();
    }

    scripts.forEach(function(src) {
        var script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.head.appendChild(script);
    })

} ())
