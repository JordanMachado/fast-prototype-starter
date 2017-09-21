# Fast-prototype-starter WORK IN PROGRESS

description here of all the features comming soon:

- auto minify json
- auto convert wav in .mp3 & .ogg
- optimize obj
- images (will create high and low res)

## List npm scripts

* npm start
* npm dev
* npm run audio
* npm run json
* npm run json:watch
* npm run model
* npm run model:watch
* npm run image
* npm run image:watch



# Audio

## prequire : ffmpeg
```
http://brew.sh/
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

brew install ffmpeg --with-fdk-aac --with-ffplay --with-freetype
 --with-frei0r --with-libass --with-libvo-aacenc --with-libvorbis
 --with-libvpx --with-opencore-amr --with-openjpeg --with-opus
 --with-rtmpdump --with-schroedinger --with-speex --with-theora --with-tools
```

## scripts

### convert all audio files in .mp3 & .ogg if it's .wav copy and convert
```
npm run audio
```

### watch audio folder and convert
```
npm run audio:watch
```


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
