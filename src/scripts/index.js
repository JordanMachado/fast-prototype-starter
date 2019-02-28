import style from 'styles/main.scss';
import domready from 'domready';
import assetsLoader from 'assets-loader';
import {Query, SuperConfig} from 'dev';
SuperConfig.init();
const assets = []
const loader = assetsLoader({
  assets
});
window.getAsset = function(id) {
  return loader.get(id);
}

domready(()=> {
  console.log('Fast prototype starter https://github.com/JordanMachado/fast-prototype-starter');


  if(assets.length > 0) {
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
  } else {
    init();
  }


});

function init() {
  console.log('Init experiment');
}
