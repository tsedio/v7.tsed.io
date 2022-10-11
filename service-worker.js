/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "agenda.svg",
    "revision": "1cdb3ee54460e1b37b1a23fae0ffdb49"
  },
  {
    "url": "ajv_logo.png",
    "revision": "0eea34da468eeeeacb1203d940e9956d"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "ef32096f0356bcc24fbb05923de934a8"
  },
  {
    "url": "android-chrome-512x512.png",
    "revision": "3a696e8f3f93851050d8cf718dcbab79"
  },
  {
    "url": "apollo-graphql-1.svg",
    "revision": "9086960b926427485f6647fa421c677d"
  },
  {
    "url": "apollo-graphql-compact.svg",
    "revision": "393e9a672ee8cc3d6c93dcee8aa29e33"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "2bd360921c440880ed011e5ce177d7b1"
  },
  {
    "url": "assets/fonts/boxicons.afbad0fa.eot",
    "revision": "afbad0fa2cbbb785e034ae3e3bb328ff"
  },
  {
    "url": "assets/fonts/boxicons.deea39cb.woff",
    "revision": "deea39cb9dc8b17f9d640014ca2f87af"
  },
  {
    "url": "assets/fonts/boxicons.f46ca69e.ttf",
    "revision": "f46ca69e63f9c5f080203c3f510b4110"
  },
  {
    "url": "assets/img/boxicons.ac68c5be.svg",
    "revision": "ac68c5bee58c439e4c2851555d41be8b"
  },
  {
    "url": "assets/img/client-controllers.6d7f6640.png",
    "revision": "6d7f6640fb5f9de3911e71b7634caecd"
  },
  {
    "url": "assets/img/hooks-in-sequence.c4f287f6.png",
    "revision": "c4f287f6e61aca7297cf49a55116100b"
  },
  {
    "url": "assets/img/invalid.41be58de.svg",
    "revision": "41be58deae51feff0d52b23ba55267bb"
  },
  {
    "url": "assets/img/middleware-in-sequence.b2978130.svg",
    "revision": "b2978130bdc2fbb8c92f888dcbe8bfc5"
  },
  {
    "url": "assets/img/middleware.0ddb812b.png",
    "revision": "0ddb812b6c3d3083902afed18cb4146b"
  },
  {
    "url": "assets/img/npm.68b58fb3.svg",
    "revision": "68b58fb3ec9c563fa1202fb343d3ba7e"
  },
  {
    "url": "assets/img/official.be85e546.svg",
    "revision": "be85e546a3f076756c6671ddfac0b43c"
  },
  {
    "url": "assets/img/providers.3d1881c2.png",
    "revision": "3d1881c2ed84ba491696de4958c386bf"
  },
  {
    "url": "assets/img/signin-page.e5cb5f7e.png",
    "revision": "e5cb5f7e90677a8f1f5633b737a1e740"
  },
  {
    "url": "assets/img/socketio.f76a6256.png",
    "revision": "f76a6256e475dd5e50524a65f64d87ce"
  },
  {
    "url": "assets/img/star.e7194b5b.svg",
    "revision": "e7194b5b7057b26406a5d0c9fc9707a8"
  },
  {
    "url": "assets/img/templating-engine.041778e2.png",
    "revision": "041778e2d51bbcd3b5ec1dcff0c6f955"
  },
  {
    "url": "assets/img/valid.36052327.svg",
    "revision": "360523273738006fb14d43ef3cc082ea"
  },
  {
    "url": "assets/js/10.bbc5427e.js",
    "revision": "b48b5cb197bb5f572a6ad2d662b05a28"
  },
  {
    "url": "assets/js/11.2d908e4a.js",
    "revision": "a9e8d6aef464dd5f3fcff5c93280ed98"
  },
  {
    "url": "assets/js/12.7595764b.js",
    "revision": "1dfe91c60a1f040cabd1272ceaa35630"
  },
  {
    "url": "assets/js/13.361a3962.js",
    "revision": "5002ad91fbb521302dd035b08e14007b"
  },
  {
    "url": "assets/js/14.e4e988df.js",
    "revision": "7fefd935a6002b445af4e7ff065ff88c"
  },
  {
    "url": "assets/js/15.f7dfa0c0.js",
    "revision": "7c8802bf6e7eafb18081c28bcae4180e"
  },
  {
    "url": "assets/js/16.e6941305.js",
    "revision": "159a76da6fdcfda7ed1faca0f2e04931"
  },
  {
    "url": "assets/js/17.d2311838.js",
    "revision": "60fc7277af9f3a7c714b7af29b1c9de7"
  },
  {
    "url": "assets/js/18.15e65e92.js",
    "revision": "261c9ed9a1067537cfc0fe7e8d8047e8"
  },
  {
    "url": "assets/js/19.614a5cab.js",
    "revision": "1f61de3a3180e950e7a327830470364d"
  },
  {
    "url": "assets/js/20.b2bc1f33.js",
    "revision": "3278562538fe269c24e1af5d9eed41c2"
  },
  {
    "url": "assets/js/21.e155eb60.js",
    "revision": "bab64f187edccee27f029d4c515f3065"
  },
  {
    "url": "assets/js/22.d8f679bf.js",
    "revision": "0186a76b0e500e61cf5929ceca4a4ebc"
  },
  {
    "url": "assets/js/23.a7a2ae22.js",
    "revision": "abf16374967b6f2fb511dbf749eeda23"
  },
  {
    "url": "assets/js/24.0861d64c.js",
    "revision": "c6420d17258f4354d083c69762138848"
  },
  {
    "url": "assets/js/25.9ab243da.js",
    "revision": "325590ed6173de3a7925245790989222"
  },
  {
    "url": "assets/js/26.e09c30cd.js",
    "revision": "818eca1a7e2fe229962b7291978cfaaf"
  },
  {
    "url": "assets/js/27.162db43b.js",
    "revision": "96f890ca5cdb57e00d34446fd149fcf5"
  },
  {
    "url": "assets/js/28.ea96bbb4.js",
    "revision": "312127eb4ca9a7f833e011fc2b4b2998"
  },
  {
    "url": "assets/js/29.3c3aff01.js",
    "revision": "baef35dfed7549feabc4935326d350ca"
  },
  {
    "url": "assets/js/3.ac186268.js",
    "revision": "b9b8e4ebc65d433656c82e8c92c2da70"
  },
  {
    "url": "assets/js/30.2ed09850.js",
    "revision": "e581acb628bcac25b9598665dbebde8e"
  },
  {
    "url": "assets/js/31.7872e29c.js",
    "revision": "243fed223f82c9bc09dacf0fe190192e"
  },
  {
    "url": "assets/js/32.d54fe85f.js",
    "revision": "4245a187c491ab36bd6dd63a7d2b25b6"
  },
  {
    "url": "assets/js/33.552f88aa.js",
    "revision": "686fa6dc858ad462b88dbd92160a9c85"
  },
  {
    "url": "assets/js/34.1cf09481.js",
    "revision": "0831a27e8028b0341c820ced2d3f8221"
  },
  {
    "url": "assets/js/35.5d23a874.js",
    "revision": "074f609921d161231790e04a26a5d262"
  },
  {
    "url": "assets/js/36.5a62d1fb.js",
    "revision": "0c2e5367f5e37b35221977dccd65e814"
  },
  {
    "url": "assets/js/37.4567d2d8.js",
    "revision": "57f71bd6f79648cf61c7cb6e34f8a49c"
  },
  {
    "url": "assets/js/38.b4b4b1d0.js",
    "revision": "44ee95163fc6ee5c6006f07a2d68389e"
  },
  {
    "url": "assets/js/39.d7f342ce.js",
    "revision": "0ec5440b2420678e0d8ce7c478c2b965"
  },
  {
    "url": "assets/js/4.f84dd102.js",
    "revision": "a72667a591b50a62c45db6fd405340e6"
  },
  {
    "url": "assets/js/40.5ccf13b8.js",
    "revision": "939b48d3b53e64c4fc0887c9ea8767d0"
  },
  {
    "url": "assets/js/41.79d1f614.js",
    "revision": "a9bdf405d928e25f99b449a57bb7b0e5"
  },
  {
    "url": "assets/js/42.192c10dd.js",
    "revision": "4489185fb1984b8d6950f83b82455e2e"
  },
  {
    "url": "assets/js/43.63391f16.js",
    "revision": "b65e74d1af4601909a8963cd3371a496"
  },
  {
    "url": "assets/js/44.71be61fb.js",
    "revision": "289128fa1ac46bdb1228c3a13926ff91"
  },
  {
    "url": "assets/js/45.fab608d6.js",
    "revision": "b3ceed2080a6f62ed65073d25d027955"
  },
  {
    "url": "assets/js/46.35e541c4.js",
    "revision": "a03342c83e9428050018e52c679e44c5"
  },
  {
    "url": "assets/js/47.30239a8b.js",
    "revision": "bac8e6e9ae1c054775949718a47203da"
  },
  {
    "url": "assets/js/48.53c329bd.js",
    "revision": "345e323cecb3fc80d29c6e2dba7cbffd"
  },
  {
    "url": "assets/js/49.83776b44.js",
    "revision": "8963cf5dbecb939d83fc3645b19c2455"
  },
  {
    "url": "assets/js/5.1528f72c.js",
    "revision": "deded6a1ea426c6f2557042f8167e395"
  },
  {
    "url": "assets/js/50.05679281.js",
    "revision": "5011851d51cdeab9acd76a264bb3814e"
  },
  {
    "url": "assets/js/51.b11dd76d.js",
    "revision": "218b8d60ddc64c6e708bf32f2bd48391"
  },
  {
    "url": "assets/js/52.57c58496.js",
    "revision": "7a3d882d636984b95f7e3da2f6d2f941"
  },
  {
    "url": "assets/js/53.c4785d29.js",
    "revision": "96e91a2c459a3314b4f2f5e521a521e6"
  },
  {
    "url": "assets/js/54.394db26e.js",
    "revision": "4f5318780c2bda103e95cae3852f70cc"
  },
  {
    "url": "assets/js/55.7c66b0e4.js",
    "revision": "98b51a4ad9120b375bb4a96b3d0394e8"
  },
  {
    "url": "assets/js/56.425e8c4f.js",
    "revision": "512c350c0541850bf0bf700c0d5e752d"
  },
  {
    "url": "assets/js/57.9b24160b.js",
    "revision": "9cebc92d2b4a2ab74aab0a41df7c4141"
  },
  {
    "url": "assets/js/58.247f0282.js",
    "revision": "591e023c921a6347176d28ddfa8a3ed3"
  },
  {
    "url": "assets/js/59.7b0dfbec.js",
    "revision": "4cade860bdf46fe50b2e4d3e51d877b3"
  },
  {
    "url": "assets/js/6.3bde86d6.js",
    "revision": "378aa01feaff06a1e11dcd1c0961e5d5"
  },
  {
    "url": "assets/js/60.0e3c5632.js",
    "revision": "7e9b1b9cbc52bb33a56b9e28e69347bd"
  },
  {
    "url": "assets/js/61.3ef4e94d.js",
    "revision": "3d2f3d0e011f1073d439d0db631f4b63"
  },
  {
    "url": "assets/js/62.6b750eaa.js",
    "revision": "1b400d062e6859cbc4869341fc2aa9a5"
  },
  {
    "url": "assets/js/63.27cfecc9.js",
    "revision": "02d2b56dae6e210b4e4bb0e55765450d"
  },
  {
    "url": "assets/js/64.486a7dcd.js",
    "revision": "225b5da39010f757007076acef118585"
  },
  {
    "url": "assets/js/65.11b6c66e.js",
    "revision": "1048ba571eba9da3e1391c6e7d191b27"
  },
  {
    "url": "assets/js/66.3cbe4e1a.js",
    "revision": "4a018cbf892b9dc91a7757a4a6ef8aff"
  },
  {
    "url": "assets/js/67.e2ce07e7.js",
    "revision": "0c1fdb60aaa8cccc0b516349109096bf"
  },
  {
    "url": "assets/js/68.180a2593.js",
    "revision": "bf3f90708a91e85910c830b1c8ca2dfb"
  },
  {
    "url": "assets/js/69.e274f262.js",
    "revision": "ce4192ab0fa4e88e90defa7b70c39194"
  },
  {
    "url": "assets/js/7.d4af2adb.js",
    "revision": "95240d050f3baa402df2248920d1d890"
  },
  {
    "url": "assets/js/70.93f77683.js",
    "revision": "faf94c486155a13719fe852e52645b99"
  },
  {
    "url": "assets/js/71.8bcd8829.js",
    "revision": "50d388c8603dff5e11615f38238f3588"
  },
  {
    "url": "assets/js/72.f4235ada.js",
    "revision": "293c3502a75fb8dd62b71a19f1a27d5a"
  },
  {
    "url": "assets/js/73.478bcf88.js",
    "revision": "412de77ce991c6f82f0950bb57df1b38"
  },
  {
    "url": "assets/js/74.9dd103db.js",
    "revision": "fee0e97473399c1c76ff948f4510f341"
  },
  {
    "url": "assets/js/75.e3be781a.js",
    "revision": "0d7c131eeed8261a65c7ec756ca3e8d9"
  },
  {
    "url": "assets/js/76.87122bab.js",
    "revision": "6be4a35d38674be2e590bc6bb5f912d2"
  },
  {
    "url": "assets/js/77.86ed847d.js",
    "revision": "0266a3eafb927423dcdd1bc52e905fc1"
  },
  {
    "url": "assets/js/78.f6312bc0.js",
    "revision": "8f17bc105cbd3045d2df3d79d8072a78"
  },
  {
    "url": "assets/js/79.8d5f5dfe.js",
    "revision": "c5f49ebc36a0bddede4e8cd0f5e769d8"
  },
  {
    "url": "assets/js/8.c7e27df6.js",
    "revision": "b862e87ee9c630babf5fbb2fcd228662"
  },
  {
    "url": "assets/js/9.c0ad1a1e.js",
    "revision": "b9182b7862a32268bcd4f0e1ffb27dd5"
  },
  {
    "url": "assets/js/app.bc0712df.js",
    "revision": "81b8d92dab21e1e8a11791e998e0305d"
  },
  {
    "url": "assets/js/vendors~docsearch.586f85c4.js",
    "revision": "345d3821bb0982ccd43c932c63b89f83"
  },
  {
    "url": "aws.png",
    "revision": "0c234b5d57f00ca68dfb3b3cfc5e8f51"
  },
  {
    "url": "azure.png",
    "revision": "2ab4ccd7a23e22b54e90ddbda5f7e480"
  },
  {
    "url": "babel.svg",
    "revision": "1441142edc8c8eb20f1a38bf22fb26e8"
  },
  {
    "url": "bg.svg",
    "revision": "627266770d0e7f34fa0a178513013a52"
  },
  {
    "url": "codesanbox.svg",
    "revision": "4b5fd814b19006c77a916e84ddea5732"
  },
  {
    "url": "codesandbox.svg",
    "revision": "7aaaef45844803b13cab0883c05d09b1"
  },
  {
    "url": "configuration.html",
    "revision": "144a25e45ba88136c2e2342a2af978b0"
  },
  {
    "url": "contributing.html",
    "revision": "527250098bbfa029a1b52ceb245fc54b"
  },
  {
    "url": "docs/authentication.html",
    "revision": "07015eadfbbdb21c78dd7f7c4ee71123"
  },
  {
    "url": "docs/cache.html",
    "revision": "53ae6ed6738949a206a75dfa096bd961"
  },
  {
    "url": "docs/command.html",
    "revision": "3da54b4ce287be6cf30175460035fae3"
  },
  {
    "url": "docs/configuration.html",
    "revision": "2898da3cbfb6786f3a70cfd705d75635"
  },
  {
    "url": "docs/controllers.html",
    "revision": "de2556e7223e598f6b021d2d09ad44b9"
  },
  {
    "url": "docs/converter.html",
    "revision": "f604d03504a9f93d2f91c1dd562e3306"
  },
  {
    "url": "docs/custom-endpoint-decorators.html",
    "revision": "456ec2b854cb16953688360b2b6943f6"
  },
  {
    "url": "docs/custom-providers.html",
    "revision": "cb6ced3ed86da517e88ed84d7298e2bc"
  },
  {
    "url": "docs/exceptions.html",
    "revision": "b1ae0a27d55792ba0e0f91b52398fab5"
  },
  {
    "url": "docs/factory.html",
    "revision": "0a5a503a9b571d268ffd284fa61ac7d9"
  },
  {
    "url": "docs/hooks.html",
    "revision": "0ffb20c52b4094f7661dfd1d8a78e65f"
  },
  {
    "url": "docs/injection-scopes.html",
    "revision": "43fc193da8844de125183623b8e31fe7"
  },
  {
    "url": "docs/interceptors.html",
    "revision": "62fdc68c902f081437f8d403f50ae32d"
  },
  {
    "url": "docs/json-mapper.html",
    "revision": "de983e490a1a34a7b5bab05b8a9d6ddd"
  },
  {
    "url": "docs/logger.html",
    "revision": "0d1dddcfe3acb0074fbfadc637a44421"
  },
  {
    "url": "docs/middlewares.html",
    "revision": "0aca6816e088d48ed6dc4b59e37906e6"
  },
  {
    "url": "docs/migration.html",
    "revision": "6d12b3c43d971143dac671715f846291"
  },
  {
    "url": "docs/model.html",
    "revision": "1ecbe2e947e8149ebffa3d09b20bf051"
  },
  {
    "url": "docs/modules.html",
    "revision": "cbec9aaa4646e596ef0e3028d364f124"
  },
  {
    "url": "docs/not-found-page.html",
    "revision": "d24dc75df8219e4b3b47c8f6575c8bda"
  },
  {
    "url": "docs/pipes.html",
    "revision": "63738c09ef309863f1d5e7f6e68628e3"
  },
  {
    "url": "docs/platform-api.html",
    "revision": "7f0389c20a0431b8a4eb4f5981d0ddf4"
  },
  {
    "url": "docs/providers-lazy-loading.html",
    "revision": "66e642d3dff7206bae8b6a145ad1703f"
  },
  {
    "url": "docs/providers.html",
    "revision": "f1cdcb8cadcecaaeed7ad1df93bcb8e9"
  },
  {
    "url": "docs/request-context.html",
    "revision": "e1df8365821cbd973921133611b96cdc"
  },
  {
    "url": "docs/response-filter.html",
    "revision": "01acfb0aa300c4a2249658dc0e08ff51"
  },
  {
    "url": "docs/serve-files.html",
    "revision": "d4c580200907b900d6f070041360aa82"
  },
  {
    "url": "docs/services.html",
    "revision": "218aef03192a65e8536531b7fb868fd0"
  },
  {
    "url": "docs/templating.html",
    "revision": "604dd240a767357cfe1f159b3cde970b"
  },
  {
    "url": "docs/testing.html",
    "revision": "52a411dfbfef1c045c65259bb8592366"
  },
  {
    "url": "docs/throw-http-exceptions.html",
    "revision": "70d47cfc61ac00299d84e253e162f28e"
  },
  {
    "url": "docs/upload-files.html",
    "revision": "700919f55dc289e68bbfc45309b8a143"
  },
  {
    "url": "docs/validation.html",
    "revision": "539608a7cf199400b25874c69e448dea"
  },
  {
    "url": "elastic-logstash.svg",
    "revision": "39e646a7f5e6fc7cf9e57502a11e77b1"
  },
  {
    "url": "express.png",
    "revision": "177bb6f67c4d179bc2145b206f751fd7"
  },
  {
    "url": "expressjs.svg",
    "revision": "91157328ea3140cff26e66386d673998"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "4cf47eff0c0d0d7c1a1eca0593bd4508"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "67207fa4b833919cd8e16af9d1e62733"
  },
  {
    "url": "getting-started/cli-selected-features.png",
    "revision": "4606aca078eaa020e89aa7b204ff51db"
  },
  {
    "url": "getting-started/create-your-first-controller.html",
    "revision": "89ad9e5b13d2fea5f9929f2d2debe56c"
  },
  {
    "url": "getting-started/index.html",
    "revision": "60aca08475392d634e793c6a34071332"
  },
  {
    "url": "getting-started/migrate-from-express.html",
    "revision": "7512778bd14eaedb7cb6c471aa265b8d"
  },
  {
    "url": "getting-started/migration-from-v6.html",
    "revision": "f91880b4a1924b567ff76e88f2aa0681"
  },
  {
    "url": "getting-started/migration-workflow.png",
    "revision": "f5b2334a39cac925d999570f210446a9"
  },
  {
    "url": "getting-started/server-start.png",
    "revision": "6e8f62a51aec9106afd4c316fb496e3e"
  },
  {
    "url": "getting-started/start-from-scratch.html",
    "revision": "5d9e58b7624ea1869c006b3d140fae60"
  },
  {
    "url": "getting-started/start-with-cli.html",
    "revision": "bcafdfe08a320127da3b01a45b00918c"
  },
  {
    "url": "graphql.svg",
    "revision": "6270a2d4757a839d4653c02f3db32e2f"
  },
  {
    "url": "hero-bg.svg",
    "revision": "86a81d807a0434005e193f16ecab9298"
  },
  {
    "url": "index.html",
    "revision": "bf2f9b65b4fbb69101f8456a1981c195"
  },
  {
    "url": "ioredis.svg",
    "revision": "0460cb8db3e30ae96d00f9d4f82dd029"
  },
  {
    "url": "jest.svg",
    "revision": "131690707f4bef04f0fda37cf3ec6ef5"
  },
  {
    "url": "keycloak_icon.svg",
    "revision": "551d4a112f4544564b7b5d0ad652b5c2"
  },
  {
    "url": "keycloak.svg",
    "revision": "f50bd48e8aaf5f7f9d4578c0054e5160"
  },
  {
    "url": "koa.svg",
    "revision": "62af385028c883ad8d31da5aae232ac7"
  },
  {
    "url": "license.html",
    "revision": "5a5c2710fafbae16d79bcfb3f2feed2b"
  },
  {
    "url": "logentries.svg",
    "revision": "c2b01b56058d4d8642d6bc1ac2d445ac"
  },
  {
    "url": "loggly.svg",
    "revision": "e714a8ff3baf7e366246769e6b727b3e"
  },
  {
    "url": "meetup.png",
    "revision": "4a524099d42afcea50615302d9877c6b"
  },
  {
    "url": "mochajs.svg",
    "revision": "0493ae31c60109eadf99e902b2711bf7"
  },
  {
    "url": "mongoose.png",
    "revision": "baad9b475e92ad28a84e1c40a38fd551"
  },
  {
    "url": "nexus.png",
    "revision": "37d830678140b080ad13a1e997b0c0c5"
  },
  {
    "url": "our-team.png",
    "revision": "18ee30a2e0dd427260def769f7961225"
  },
  {
    "url": "package.svg",
    "revision": "2b5870d739dfe062a4e4ebb8061e102e"
  },
  {
    "url": "partners/artips.png",
    "revision": "60e537b48744da2822063020756a95da"
  },
  {
    "url": "partners/schnell.svg",
    "revision": "da6070c91af67360f90bb1f004e0e461"
  },
  {
    "url": "passportjs.png",
    "revision": "3c4e380e6c0da1da329b6d780f543125"
  },
  {
    "url": "pricing.html",
    "revision": "a426951de19256b9f5f3af9dbb4b0625"
  },
  {
    "url": "prisma-2.png",
    "revision": "722446ffb492c2e357a12c78f07ff0bc"
  },
  {
    "url": "prisma-2.svg",
    "revision": "ece734638af321cb392e377d43a632e3"
  },
  {
    "url": "prisma-3.svg",
    "revision": "973b701601ce879e4880a88d218a7248"
  },
  {
    "url": "rabbitmq.svg",
    "revision": "0e43817b743528cfac9f67ad36fb0b35"
  },
  {
    "url": "rapid7.svg",
    "revision": "268047f0fbe17dac944e5648544d8134"
  },
  {
    "url": "react.png",
    "revision": "1e9d10a77c464d818e7c6cd3c5a3f259"
  },
  {
    "url": "screens/opencollective-tiers.png",
    "revision": "55d24c1bd8b74a097c7e2f67619cd17b"
  },
  {
    "url": "serverless.png",
    "revision": "52572b708bd3c2e46a221e157e9debdb"
  },
  {
    "url": "serverless.svg",
    "revision": "832bb3164714db34fc2480a09ed8b0f6"
  },
  {
    "url": "slack.svg",
    "revision": "4db20049c6e466d3d4b34bbc7b6edc3e"
  },
  {
    "url": "socket-io.png",
    "revision": "4cb9ecf17526b09e164702939c0018d0"
  },
  {
    "url": "socketio.png",
    "revision": "fba517c4c075d458b826f2bac55c41e8"
  },
  {
    "url": "socketio.svg",
    "revision": "5dc4ade3acf6b3836ab45becc3d07fef"
  },
  {
    "url": "sponsors.html",
    "revision": "2ef202fe5a6856b0ef2852465f605ae8"
  },
  {
    "url": "sponsors.svg",
    "revision": "3cd1255c162104e46a0f046a301554b6"
  },
  {
    "url": "stripe.svg",
    "revision": "2d7f562527f8630a7f0eb4a9fbd71324"
  },
  {
    "url": "swagger.svg",
    "revision": "ee5300f60d0ba789478ec58a5349d10d"
  },
  {
    "url": "tsed-og.png",
    "revision": "04d5349862d2a9c8325ab2c330aa9c86"
  },
  {
    "url": "tsed.png",
    "revision": "bcd670cd3906e592683e60465feab493"
  },
  {
    "url": "tutorials/agenda.html",
    "revision": "d92cbf69ef552586701c3829c657b6c5"
  },
  {
    "url": "tutorials/ajv.html",
    "revision": "df32a96172c38bc7d80217973601435a"
  },
  {
    "url": "tutorials/aws.html",
    "revision": "6ae2f13ea4946a5d3407efead15086ed"
  },
  {
    "url": "tutorials/graphql.html",
    "revision": "3a21fcd84b1b625e63d0f76360449f7b"
  },
  {
    "url": "tutorials/index.html",
    "revision": "a5bf99ce72e6e5dca1eacab3abefc454"
  },
  {
    "url": "tutorials/ioredis.html",
    "revision": "353c33eba873d6ea5ecd119a5f5e1839"
  },
  {
    "url": "tutorials/keycloak.html",
    "revision": "253814ed645de8964572601a9d90b216"
  },
  {
    "url": "tutorials/mikroorm.html",
    "revision": "334350738201e09b6d8c0f7045a7b42b"
  },
  {
    "url": "tutorials/mongoose.html",
    "revision": "79812a5d53c0decd87a29bc91d4578bb"
  },
  {
    "url": "tutorials/multer.html",
    "revision": "ac69c4ed9daae7e37fa6c80c6c9020e9"
  },
  {
    "url": "tutorials/objection.html",
    "revision": "c9b9430bca2c38df0970fedc6e4be913"
  },
  {
    "url": "tutorials/oidc.html",
    "revision": "a6626bdf51f0a89bd5bd6ce2636c28cb"
  },
  {
    "url": "tutorials/passport.html",
    "revision": "dd1dbc995c28a6aa37f36c14bccc822e"
  },
  {
    "url": "tutorials/prisma-client.html",
    "revision": "a849108cd3db6fa8a49c04859f7347d8"
  },
  {
    "url": "tutorials/prisma.html",
    "revision": "289f29ce53fef760af45a9d7afd4d5d8"
  },
  {
    "url": "tutorials/seq.html",
    "revision": "3ba142624973f0b95b8872e8d1c41ac9"
  },
  {
    "url": "tutorials/serve-static-files.html",
    "revision": "8da08b19501676348371366955a8a31c"
  },
  {
    "url": "tutorials/serverless.html",
    "revision": "2b7eaf8d64eb9c2c78e4fa33585d7239"
  },
  {
    "url": "tutorials/session.html",
    "revision": "6db1ce51bf0266990f420e51cc51fd27"
  },
  {
    "url": "tutorials/socket-io.html",
    "revision": "277366cf2e04f8b15e48801c8607849d"
  },
  {
    "url": "tutorials/stripe.html",
    "revision": "86b774a1634ee2e4cb7382919c880100"
  },
  {
    "url": "tutorials/swagger.html",
    "revision": "d77e9fd10edad44db98fd51296df71fe"
  },
  {
    "url": "tutorials/templating.html",
    "revision": "33cfa3c84c2e4e527011fd16e76b7ae0"
  },
  {
    "url": "tutorials/terminus.html",
    "revision": "66d58efaa6f94bbd944cb8336963269a"
  },
  {
    "url": "tutorials/typeorm.html",
    "revision": "28b431010b583d55a9236c3f6e19b14f"
  },
  {
    "url": "typegraphql.png",
    "revision": "bec26ca21b76b18a76253d8df2ca1db3"
  },
  {
    "url": "typeorm.png",
    "revision": "c3f8c53e67ffb9100ddc47f14adb5b10"
  },
  {
    "url": "typescript.png",
    "revision": "dcb5077d586b4dc51b40a03d760c18af"
  },
  {
    "url": "vuejs.png",
    "revision": "1906510af222740d24066f8f02ec8909"
  },
  {
    "url": "webpack.svg",
    "revision": "9cf70b1acb9c5a67d656085ec29fbf3f"
  },
  {
    "url": "zenika.png",
    "revision": "f7aa5b93b25d17094b972ee05c366825"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
