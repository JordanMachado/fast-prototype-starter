import style from 'styles/main.scss';
import domready from 'domready';
import assetsLoader from 'assets-loader';

// TODO get manifest for all assets
let _assets = ['assets/image/grey-pattern.jpg']

let assets = [];
for (var i = 0; i < _assets.length; i++) {
  let asset = _assets[i];
  let id = asset.split(/(\\|\/)/g).pop().replace(/\.[^/.]+$/, "")
  assets.push({
    id,
    url: asset,
  })
}
const loader = assetsLoader({
  assets
});
window.getAsset = function(id) {
  return loader.get(id);
}


domready(()=> {
  console.log('Fast prototype starter https://github.com/JordanMachado/fast-prototype-starter');
  // TODO animation loader
  document.body.classList.add('loading');
  loader.on('error', function(error) {
    console.error(error);
  })
  .on('progress', function(progress) {
    // console.log((progress * 100).toFixed() + '%');
  })
  .on('complete', function(assets) {
    document.body.classList.remove('loading');
    window.assets = assets;
    console.table(assets);
    init();
  })
  .start();

});

function init() {
  console.log('Init experiment');
}
