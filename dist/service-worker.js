if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return d[e]||(s=new Promise((async s=>{if("document"in self){const d=document.createElement("script");d.src=e,document.head.appendChild(d),d.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!d[e])throw new Error(`Module ${e} didn’t register its module`);return d[e]}))},s=(s,d)=>{Promise.all(s.map(e)).then((e=>d(1===e.length?e[0]:e)))},d={require:Promise.resolve(s)};self.define=(s,n,c)=>{d[s]||(d[s]=Promise.resolve().then((()=>{let d={};const i={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return d;case"module":return i;default:return e(s)}}))).then((e=>{const s=c(...e);return d.default||(d.default=s),d}))})))}}define("./service-worker.js",["./workbox-15dd0bab"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"bundled_assets/android-chrome-192x192.png",revision:"119ca91c6f660944e4938e7d386aa583"},{url:"bundled_assets/android-chrome-256x256.png",revision:"e94238d9e99239cb98fe6cb5f280b598"},{url:"bundled_assets/apple-touch-icon.png",revision:"7aabab4cfdf8892c1e0a3e7510184ec1"},{url:"bundled_assets/brand-icons-1rCpc.ttf",revision:"c5ebe0b32dc1b5cc449a76c4204d13bb"},{url:"bundled_assets/brand-icons-21hcn.woff2",revision:"e8c322de9658cbeb8a774b6624167c2c"},{url:"bundled_assets/brand-icons-2aw1d.woff",revision:"a046592bac8f2fd96e994733faf3858c"},{url:"bundled_assets/brand-icons-3-LcE.eot",revision:"13db00b7a34fee4d819ab7f9838cc428"},{url:"bundled_assets/brand-icons-3lG5I.svg",revision:"a1a749e89f578a49306ec2b055c073da"},{url:"bundled_assets/browserconfig.xml",revision:"61bfd064535af0c276bb63b3fd579733"},{url:"bundled_assets/favicon-16x16.png",revision:"7c7685764d02954c2dd5557c0ad1a99f"},{url:"bundled_assets/favicon-32x32.png",revision:"e3a59cb16f3d1dd696546773b2ce3d35"},{url:"bundled_assets/favicon.ico",revision:"66a25c162ddd29780d5cbc709b3e21c1"},{url:"bundled_assets/flags-3pCao.png",revision:"9c74e172f87984c48ddf5c8108cabe67"},{url:"bundled_assets/icons-1TZXe.eot",revision:"8e3c7f5520f5ae906c6cf6d7f3ddcd19"},{url:"bundled_assets/icons-1w0HE.woff",revision:"faff92145777a3cbaf8e7367b4807987"},{url:"bundled_assets/icons-1ztQD.woff2",revision:"0ab54153eeeca0ce03978cc463b257f7"},{url:"bundled_assets/icons-3GzRJ.ttf",revision:"b87b9ba532ace76ae9f6edfe9f72ded2"},{url:"bundled_assets/icons-73JY3.svg",revision:"962a1bf31c081691065fe333d9fa8105"},{url:"bundled_assets/manifest.json",revision:"bf19c8812fc2b4f056ce8d623cc52810"},{url:"bundled_assets/mstile-150x150.png",revision:"822479f5e99a7c194ba1fab4fccc270b"},{url:"bundled_assets/outline-icons-194Xa.woff",revision:"ef60a4f6c25ef7f39f2d25a748dbecfe"},{url:"bundled_assets/outline-icons-2ANWA.eot",revision:"701ae6abd4719e9c2ada3535a497b341"},{url:"bundled_assets/outline-icons-2MUNM.ttf",revision:"ad97afd3337e8cda302d10ff5a4026b8"},{url:"bundled_assets/outline-icons-2gBP7.woff2",revision:"cd6c777f1945164224dee082abaea03a"},{url:"bundled_assets/outline-icons-mG4Yk.svg",revision:"82f60bd0b94a1ed68b1e6e309ce2e8c3"},{url:"bundled_assets/safari-pinned-tab.svg",revision:"af7d56213c808e126dc8fb9b6e663a75"},{url:"bundled_assets/site.webmanifest",revision:"a446ba533a27b6c3c94d61ef0eec34c6"},{url:"index.html",revision:"091257e1f08c11e3bed1603e6c2ed565"}],{})}));
