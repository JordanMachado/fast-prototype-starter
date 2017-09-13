import style from 'styles/main.scss';
import domready from 'domready';
import assetsLoader from 'assets-loader';
import manifestModel from './manifests/manifest-model';
import manifestImage from './manifests/manifest-image';
import manifestAudio from './manifests/manifest-audio';

const loader = assetsLoader({
  assets: [].concat(manifestModel, manifestImage, manifestAudio)
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
  // console.log(getAsset('main_loop').play());
}
