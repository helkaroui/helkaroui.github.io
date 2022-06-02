---
title: Mount disk
---

## Create a mount point
The mount point is the directory where users will access the data on the drive
```
sudo mkdir /data
```

We'll want to also change the group ownership of that directory.
```
sudo groupadd data
sudo usermod -aG data $USER
sudo usermod -aG data root
```

Then change the ownership of the mountpoint with the command: 
```
sudo chown -R :data /data
```


##  The automount entry
we need to find the UUID (Universal Unique Identifier) of the drive. To do that, issue the command: 
```
sudo blkid
```

In order to create the automount entry, run this cmd:
```
sudo vim /etc/fstab
```

At the bottom of that file, we'll add an entry that contains the information we've discovered. The entry will look like this: 
```
UUID=14D82C19D82BF81E /data    auto nosuid,nodev,nofail,x-gvfs-show 0 0
```

Breaking that line down, we have:
- UUID=14D82C19D82BF81E - is the UUID of the drive. You don't have to use the UUID here. You could just use /dev/sdj, but it's always safer to use the UUID as that will never change (whereas the device name could).
- /data - is the mount point for the device.
- auto - automatically determine the file system
- nosuid - specifies that the filesystem cannot contain set userid files. This prevents root escalation and other security issues.
- nodev - specifies that the filesystem cannot contain special devices (to prevent access to random device hardware).
- nofail - removes the errorcheck.
- x-gvfs-show - show the mount option in the file manager. If this is on a GUI-less server, this option won't be necessary.
- 0 - determines which filesystems need to be dumped (0 is the default).
- 0 - determine the order in which filesystem checks are done at boot time (0 is the default).


Before you reboot the machine, you need to test your new fstab entry. To do this, issue the command: 
```
sudo mount -a
```

If you see no errors, the fstab entry is correct and you're safe to reboot. 