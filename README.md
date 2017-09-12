# Fast-prototype-starter

description here of all the features comming soon

## List npm scripts

* npm start
* npm dev
* npm run json
* npm run json:watch



# Json

## scripts

### minify all json
```
npm run json
```


### watch json folder and autominify the json files
```
npm run json:watch
```


# Model

## scripts

### This task copy the content of 'raw-assets/model' in 'dist/assets/model' and optimize all the *.obj* if they have options

## Options

The only option available is the *precision*.
The precision set the number of digits for every vertices.


```
// precision is a number
filename{precision}.obj

```

```
npm run model
```

### watch model folder and copy all file automatically
```
npm run model:watch
```
