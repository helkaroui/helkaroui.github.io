---
title: Quick start
---

In this tutorial, we will get a brief introduction to Go programming.

## Prerequisites
- Some programming experience. The code here is pretty simple, but it helps to know something about functions.
- A tool to edit your code. Any text editor you have will work fine. Most text editors have good support for Go. The most popular are VSCode (free), GoLand (paid), and Vim (free).
- A command terminal. Go works well using any terminal on Linux and Mac, and on PowerShell or cmd in Windows.


## Install Go
Select the tab for your computer's operating system below, then follow its installation instructions. 

1. Download the Go installer
```
wget https://golang.org/dl/go1.17.3.linux-amd64.tar.gz
```

2. Extract the archive you downloaded into /usr/local, creating a Go tree in /usr/local/go. 

For example, run the following as root or through sudo: 
```
tar -C /usr/local -xzf go1.17.3.linux-amd64.tar.gz
```

3. Add /usr/local/go/bin to the PATH environment variable. 

For bash-shell, you can do this by adding the following line to your $HOME/.bashrc or /etc/environment (for a system-wide installation):
```
export PATH=$PATH:/usr/local/go/bin
```

For fish-shell, you can add this line to your $Home/.config/fish/config.fish
```
set -U fish_user_paths /usr/local/go/bin $fish_user_paths
```

4. Verify that you've installed Go by opening a command prompt and typing the following command: 
```
go version
```

## Run the first "Hello World"

1. Create a hello directory for your first Go source code. 
2. Enable dependency tracking for your code. 

When your code imports packages contained in other modules, you manage those dependencies through your code's own module. That module is defined by a go.mod file that tracks the modules that provide those packages. That go.mod file stays with your code, including in your source code repository. 

To enable dependency tracking for your code by creating a go.mod file, run the go mod init command, giving it the name of the module your code will be in. The name is the module's module path.

```shell
go mod init example/hello
```

3. In your text editor, create a file hello.go in which to write your code. 

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

4. Run your code to see the greeting. 
```shell
$ go run .
Hello, World!
```



## Resources
- Concepts : https://github.com/golang/go/wiki/Modules#new-concepts