Interceptor.attach(Module.findExportByName(null, "ptrace"), {
    onEnter: function (args) {
        console.log("[+] Intercepting ptrace()");
        if (args[0].toInt32() === 0x1) {
            console.log("[+] ptrace anti-debugging detected! Bypassing...");
            this.bypass = true;
        }
    },
    onLeave: function (retval) {
        if (this.bypass) {
            retval.replace(0);
        }
    }
});
