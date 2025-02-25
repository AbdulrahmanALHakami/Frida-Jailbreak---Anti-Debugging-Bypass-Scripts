// Hooking fopen() NULL for jailbreak paths
Interceptor.attach(Module.findExportByName(null, "fopen"), {
    onEnter: function(args) {
        var filename = Memory.readUtf8String(args[0]);
        console.log("[+] fopen() called with: " + filename);
        
        if (filename.includes("/var/jb/") || filename.includes("/etc/passwd") || 
            filename.includes("/Library/MobileSubstrate/") || filename.includes("libinjector.dylib")) {
            console.log("[+] Blocking fopen() for jailbreak detection.");
            this.replaceNull = true;
        }
    },
    onLeave: function(retval) {
        if (this.replaceNull) {
            retval.replace(ptr(0)); // Return NULL to prevent detection
        }
    }
});

// Hooking access()  prevent detection
Interceptor.attach(Module.findExportByName(null, "access"), {
    onEnter: function(args) {
        var path = Memory.readUtf8String(args[0]);
        console.log("[+] access() called with: " + path);
        
        if (path.includes("/var/jb/") || path.includes("/etc/passwd") || 
            path.includes("/Library/MobileSubstrate/") || path.includes("libinjector.dylib")) {
            console.log("[+] Blocking access() for jailbreak detection.");
            this.blockAccess = true;
        }
    },
    onLeave: function(retval) {
        if (this.blockAccess) {
            retval.replace(-1); // Return -1 to indicate file does not exist
        }
    }
});

// Hooking stat() prevent jailbreak detection
Interceptor.attach(Module.findExportByName(null, "stat"), {
    onEnter: function(args) {
        var path = Memory.readUtf8String(args[0]);
        console.log("[+] stat() called with: " + path);
        
        if (path.includes("/var/jb/") || path.includes("/etc/passwd") || 
            path.includes("/Library/MobileSubstrate/") || path.includes("libinjector.dylib")) {
            console.log("[+] Blocking stat() for jailbreak detection.");
            this.blockStat = true;
        }
    },
    onLeave: function(retval) {
        if (this.blockStat) {
            retval.replace(-1); // Return -1 to indicate file does not exist
        }
    }
});

