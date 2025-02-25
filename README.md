# Frida-Jailbreak---Anti-Debugging-Bypass-Scripts





![Frida](https://img.shields.io/badge/Frida-16.5.6-blue) 
![iOS](https://img.shields.io/badge/iOS-Jailbreak%20Bypass-green)
![Security](https://img.shields.io/badge/Security-Bypass-red)

## Overview
This repository contains multiple **Frida scripts** that bypass **Jailbreak Detection**, **Anti-Debugging**, and **Anti-Frida mechanisms** in iOS applications like TikTok, banking apps, and other high-security apps.

These scripts allow you to:
- Bypass **Jailbreak Detection** by intercepting system calls (`fopen`, `access`, `stat`).
- Disable **sysctl() checks** that detect Frida.
- Hook into **ptrace()** to prevent process debugging detection.
- Prevent dynamic library checks that detect **Frida, Cycript, and other tools**.

---

##  **Features**
 **Bypass Jailbreak Detection** - Intercepts API calls like `fopen()`, `access()`, and `stat()` to hide jailbreak-related files.  
 **Prevent Dynamic Library Checks** - Blocks applications from detecting injected libraries like `FridaGadget.dylib`.  
 **Disable sysctl() Detection** - Stops apps from detecting Frida through system-level syscalls.  
 **Bypass ptrace() Debugging Check** - Prevents apps from blocking Frida by using `ptrace(PT_DENY_ATTACH)`.  
 **Hook into shell execution** - Blocks execution of suspicious shell commands that detect Frida or Jailbreak.

---

##**Included Scripts**
| File | Description |
|------|------------|
| **bypass-jailbreakDetections.js** | Hooks and bypasses common jailbreak detection techniques. |
| **bypassjailbreak.js** | Alternative script to bypass basic jailbreak checks. |
| **DynmicLibrary-checker.js** | Prevents detection of dynamic libraries like `FridaGadget.dylib`. |
| **fopen-blocker.js** | Blocks apps from detecting `fopen()` calls for jailbreak-related paths. |
| **ptrace-bypasser.js** | Prevents apps from using `ptrace(PT_DENY_ATTACH)` to block debugging tools. |
| **sysctl-bypasser.js** | Bypasses `sysctl()`-based Frida detection. |

---

##**Usage**
frida -U -p <app PID> -l <anysample.js>

Researcher : Abdulrahman Al-Hakami 

