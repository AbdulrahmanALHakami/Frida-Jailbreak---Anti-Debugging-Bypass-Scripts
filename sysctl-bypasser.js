




Interceptor.attach(Module.findExportByName(null, "sysctl"), {
    onEnter: function(args) {
        console.log("[+] sysctl() detected! Bypassing...");
        this.bypass = true;
    },
    onLeave: function(retval) {
        if (this.bypass) {
            retval.replace(0); 
        }
    }
});

