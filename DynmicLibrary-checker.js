Interceptor.attach(Module.findExportByName(null, "dlopen"), {
    onEnter: function(args) {
        var libname = Memory.readUtf8String(args[0]);
        if (libname.includes("frida") || libname.includes("cycript")) {
            console.log("[+] Preventing loading of: " + libname);
            this.block = true;
        }
    },
    onLeave: function(retval) {
        if (this.block) {
            retval.replace(ptr(0)); 
        }
    }
});
