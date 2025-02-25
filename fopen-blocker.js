var jailbreak_paths = [
    "/var/jb/",
    "/etc/passwd",
    "/Library/MobileSubstrate/",
    "libinjector.dylib"
];

// Hooking fopen()
Interceptor.attach(Module.findExportByName(null, "fopen"), {
    onEnter: function(args) {
        var filename = Memory.readUtf8String(args[0]);
        
        if (filename) {
            console.log("[+] fopen() called with: " + filename);
            
            for (var i = 0; i < jailbreak_paths.length; i++) {
                if (filename.includes(jailbreak_paths[i])) {
                    console.log("[+] Blocking fopen() for: " + filename);
                    this.replaceNull = true;
                    return;
                }
            }
        }
    },
    onLeave: function(retval) {
        if (this.replaceNull) {
            retval.replace(ptr(0)); 
        }
    }
});
