console.log("[+] Hooking all jailbreak detection functions...");

// Hooking stat()
Interceptor.attach(Module.findExportByName(null, "stat"), {
    onEnter: function (args) {
        console.log("[+] stat() called with: " + Memory.readUtf8String(args[0]));
    },
    onLeave: function (retval) {
        retval.replace(-1); // Prevent detection
    }
});

// Hooking fopen()
Interceptor.attach(Module.findExportByName(null, "fopen"), {
    onEnter: function (args) {
        console.log("[+] fopen() called with: " + Memory.readUtf8String(args[0]));
    },
    onLeave: function (retval) {
        retval.replace(ptr(0)); // Prevent detection
    }
});

// Hooking access()
Interceptor.attach(Module.findExportByName(null, "access"), {
    onEnter: function (args) {
        console.log("[+] access() called with: " + Memory.readUtf8String(args[0]));
    },
    onLeave: function (retval) {
        retval.replace(-1); // Prevent detection
    }
});

// Hooking fork()
Interceptor.attach(Module.findExportByName(null, "fork"), {
    onEnter: function (args) {
        console.log("[+] fork() detected! Bypassing...");
    },
    onLeave: function (retval) {
        retval.replace(-1); // Prevent detection
    }
});

// Hooking ptrace()
Interceptor.attach(Module.findExportByName(null, "ptrace"), {
    onEnter: function (args) {
        console.log("[+] ptrace() detected! Bypassing...");
        retval.replace(0); // Prevent anti-debugging
    }
});

// Hooking sysctl()
Interceptor.attach(Module.findExportByName(null, "sysctl"), {
    onEnter: function (args) {
        console.log("[+] sysctl() detected! Bypassing...");
    },
    onLeave: function (retval) {
        retval.replace(0); // Prevent jailbreak detection
    }
});

console.log("[+] All jailbreak detection functions hooked successfully!");
