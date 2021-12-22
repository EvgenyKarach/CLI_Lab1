# CLI_Lab1

### Downloading and installing NPM modules

```
$ git clone https://github.com/EvgenyKarach/CLI_Lab1/
```

```
$ cd CLI_Lab1
```

```
$ npm i
```

### (optional) Installing the application as an NPM module

```
$ [sudo] npm i -g ./
```

### Usage example:

CLI tool accept 3 options:

1. -i, --input: an input file
2. -o, --output: an output file
3. -t, --task: an task task1.1/task1.2

explanation: 

* task task1.1 - duplicateEncode function
* task task1.2 - multiplication function

task1.1 input.txt to output.txt :

```
$ [node] index  -i "./input.txt" -o "./output.txt" -t task1.1
```

task1.2 input2.txt to output2.txt :

```
$ [node] index --input input2.txt --output output2.txt --task task1.2
```

task1.1 stdin to stdout:

```
$ [node] index --task task1.1
```
