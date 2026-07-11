import{f as Ie,u as ie,W as k,O as D,o as ce}from"./mini-r8F4-Fnv.js";function Dt(){return"10000000-1000-4000-8000-100000000000".replace(/[018]/g,e=>(+e^crypto.getRandomValues(new Uint8Array(1))[0]&15>>+e/4).toString(16))}function Ct({content:e,buttons:t,onCancel:r,onClose:n,type:i,placeholder:o="",width:a}){const c=Dt();function s(u){u.preventDefault(),u.stopPropagation(),r(document.getElementById(c))}function f(u){if(u.preventDefault(),u.stopPropagation(),n)return n(document.getElementById(c),document.getElementById("_in"+c).value)}function d(u,p){u.preventDefault(),u.stopPropagation(),p(document.getElementById(c),document.getElementById("_in"+c)?.value)}function l(u){u.key==="Escape"?s(u):u.key==="Enter"&&f(u)}return ie(()=>{i==="prompt"?setTimeout(()=>{document.getElementById("_in"+c)?.focus()},10):t&&setTimeout(()=>{document.getElementById("_btn"+c)?.focus()},10)}),k`<div id="${c}" aria-busy="true" class="alert" @click="${s}"><div class="alert-message" @click="${u=>u.stopPropagation()}" @keyup="${l}"><div class="msg" style="${a?"width:"+a+"px;":""}">${e} ${i==="prompt"&&`<br/><input type='text' id='_in${c}' @keyup="${l}" placeholder="${o||""}"/>`}</div><div>${t?.map((u,p)=>()=>k`<button id="${u.focus?"_btn"+c:""}" @click="${v=>d(v,u.onClick)}" tabindex="${p+1}">${u.label}</button>`)}</div></div></div>`}async function St(e,t){return await new Promise((r,n)=>{const i=document.body.querySelector("div"),o=document.createElement("div");i.appendChild(o);function a(s){s.parentElement.remove(),r(!0)}function c(s){s.parentElement.remove(),r(!1)}Ie(o,()=>Ct({content:e,buttons:[{label:"Cancel",onClick:c},{label:"OK",onClick:a,focus:!0}],onCancel:c,type:"confirm",width:t}))})}async function se(e,t){return await new Promise((r,n)=>{const i=document.body.querySelector("div"),o=document.createElement("div");i.appendChild(o);function a(c){c.parentElement.remove(),r(!1)}Ie(o,()=>Ct({content:e,buttons:[{label:"OK",onClick:a,focus:!0}],onCancel:a,type:"alert",width:t}))})}const zt={};let _e;function Z(...e){let t;if(!_e){const r=window._ctx_||{url:window.location.pathname};_e=Ut(n=>({...zt,...r}))}if(t=_e,!e||!e.length)return t.getState();if(e.length===1){if(typeof e[0]=="string")return t.getState()[e[0]];if(typeof e[0]=="object")return t.setState(e[0]);console.error("MiNi: unknown store argument")}else if(e.length===2){if(typeof e[0]!="string")return console.error("MiNi: unknown store argument");if(typeof e[1]=="function"){const r=t.getState()[e[0]];e[1]=e[1](r)}return t.setState({[e[0]]:e[1]})}else console.error("MiNi: store has too many arguments")}const We=e=>{let t;const r=(a,c)=>{const s=typeof a=="function"?a(t):a;Object.is(s,t)||(t=c??(typeof s!="object"||s===null)?s:Object.assign({},t,s))},n=()=>t,i={setState:r,getState:n,getInitialState:()=>o},o=t=e(r,n,i);return i},Ut=e=>e?We(e):We,Ot=function(){const t=typeof document<"u"&&document.createElement("link").relList;return t&&t.supports&&t.supports("modulepreload")?"modulepreload":"preload"}(),Gt=function(e){return"/"+e},Ye={},X=function(t,r,n){let i=Promise.resolve();if(r&&r.length>0){let a=function(f){return Promise.all(f.map(d=>Promise.resolve(d).then(l=>({status:"fulfilled",value:l}),l=>({status:"rejected",reason:l}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),s=c?.nonce||c?.getAttribute("nonce");i=a(r.map(f=>{if(f=Gt(f),f in Ye)return;Ye[f]=!0;const d=f.endsWith(".css"),l=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${f}"]${l}`))return;const u=document.createElement("link");if(u.rel=d?"stylesheet":Ot,d||(u.as="script"),u.crossOrigin="",u.href=f,s&&u.setAttribute("nonce",s),document.head.appendChild(u),d)return new Promise((p,v)=>{u.addEventListener("load",p),u.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${f}`)))})}))}function o(a){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=a,window.dispatchEvent(c),!c.defaultPrevented)throw a}return i.then(a=>{for(const c of a||[])c.status==="rejected"&&o(c.reason);return t().catch(o)})};var W=Uint8Array,le=Uint16Array,Nt=Int32Array,$t=new W([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),kt=new W([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Vt=new W([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Et=function(e,t){for(var r=new le(31),n=0;n<31;++n)r[n]=t+=1<<e[n-1];for(var i=new Nt(r[30]),n=1;n<30;++n)for(var o=r[n];o<r[n+1];++o)i[o]=o-r[n]<<5|n;return{b:r,r:i}},At=Et($t,2),Bt=At.b,jt=At.r;Bt[28]=258,jt[258]=28;var Xt=Et(kt,0),Ht=Xt.b,Me=new le(32768);for(var z=0;z<32768;++z){var J=(z&43690)>>1|(z&21845)<<1;J=(J&52428)>>2|(J&13107)<<2,J=(J&61680)>>4|(J&3855)<<4,Me[z]=((J&65280)>>8|(J&255)<<8)>>1}var de=function(e,t,r){for(var n=e.length,i=0,o=new le(t);i<n;++i)e[i]&&++o[e[i]-1];var a=new le(t);for(i=1;i<t;++i)a[i]=a[i-1]+o[i-1]<<1;var c;if(r){c=new le(1<<t);var s=15-t;for(i=0;i<n;++i)if(e[i])for(var f=i<<4|e[i],d=t-e[i],l=a[e[i]-1]++<<d,u=l|(1<<d)-1;l<=u;++l)c[Me[l]>>s]=f}else for(c=new le(n),i=0;i<n;++i)e[i]&&(c[i]=Me[a[e[i]-1]++]>>15-e[i]);return c},pe=new W(288);for(var z=0;z<144;++z)pe[z]=8;for(var z=144;z<256;++z)pe[z]=9;for(var z=256;z<280;++z)pe[z]=7;for(var z=280;z<288;++z)pe[z]=8;var Lt=new W(32);for(var z=0;z<32;++z)Lt[z]=5;var Wt=de(pe,9,1),Yt=de(Lt,5,1),Ce=function(e){for(var t=e[0],r=1;r<e.length;++r)e[r]>t&&(t=e[r]);return t},K=function(e,t,r){var n=t/8|0;return(e[n]|e[n+1]<<8)>>(t&7)&r},Se=function(e,t){var r=t/8|0;return(e[r]|e[r+1]<<8|e[r+2]<<16)>>(t&7)},Zt=function(e){return(e+7)/8|0},Kt=function(e,t,r){return(r==null||r>e.length)&&(r=e.length),new W(e.subarray(t,r))},qt=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],H=function(e,t,r){var n=new Error(t||qt[e]);if(n.code=e,Error.captureStackTrace&&Error.captureStackTrace(n,H),!r)throw n;return n},Fe=function(e,t,r,n){var i=e.length,o=0;if(!i||t.f&&!t.l)return r||new W(0);var a=!r,c=a||t.i!=2,s=t.i;a&&(r=new W(i*3));var f=function(je){var Xe=r.length;if(je>Xe){var He=new W(Math.max(Xe*2,je));He.set(r),r=He}},d=t.f||0,l=t.p||0,u=t.b||0,p=t.l,v=t.d,h=t.m,m=t.n,C=i*8;do{if(!p){d=K(e,l,1);var S=K(e,l+1,3);if(l+=3,S)if(S==1)p=Wt,v=Yt,h=9,m=5;else if(S==2){var g=K(e,l,31)+257,_=K(e,l+10,15)+4,B=g+K(e,l+5,31)+1;l+=14;for(var R=new W(B),A=new W(19),w=0;w<_;++w)A[Vt[w]]=K(e,l+w*3,7);l+=_*3;for(var U=Ce(A),y=(1<<U)-1,$=de(A,U,1),w=0;w<B;){var I=$[K(e,l,y)];l+=I&15;var E=I>>4;if(E<16)R[w++]=E;else{var F=0,j=0;for(E==16?(j=3+K(e,l,3),l+=2,F=R[w-1]):E==17?(j=3+K(e,l,7),l+=3):E==18&&(j=11+K(e,l,127),l+=7);j--;)R[w++]=F}}var oe=R.subarray(0,g),b=R.subarray(g);h=Ce(oe),m=Ce(b),p=de(oe,h,1),v=de(b,m,1)}else H(1);else{var E=Zt(l)+4,x=e[E-4]|e[E-3]<<8,T=E+x;if(T>i){s&&H(0);break}c&&f(u+x),r.set(e.subarray(E,T),u),t.b=u+=x,t.p=l=T*8,t.f=d;continue}if(l>C){s&&H(0);break}}c&&f(u+131072);for(var L=(1<<h)-1,P=(1<<m)-1,M=l;;M=l){var F=p[Se(e,l)&L],N=F>>4;if(l+=F&15,l>C){s&&H(0);break}if(F||H(2),N<256)r[u++]=N;else if(N==256){M=l,p=null;break}else{var ue=N-254;if(N>264){var w=N-257,ee=$t[w];ue=K(e,l,(1<<ee)-1)+Bt[w],l+=ee}var ye=v[Se(e,l)&P],we=ye>>4;ye||H(3),l+=ye&15;var b=Ht[we];if(we>3){var ee=kt[we];b+=Se(e,l)&(1<<ee)-1,l+=ee}if(l>C){s&&H(0);break}c&&f(u+131072);var Ne=u+ue;if(u<b){var Ve=o-b,Ft=Math.min(b,Ne);for(Ve+u<0&&H(3);u<Ft;++u)r[u]=n[Ve+u]}for(;u<Ne;++u)r[u]=r[u-b]}}t.l=p,t.p=M,t.b=u,t.f=d,p&&(d=1,t.m=h,t.d=v,t.n=m)}while(!d);return u!=r.length&&a?Kt(r,0,u):r.subarray(0,u)},Jt=new W(0),Qt=function(e){(e[0]!=31||e[1]!=139||e[2]!=8)&&H(6,"invalid gzip data");var t=e[3],r=10;t&4&&(r+=(e[10]|e[11]<<8)+2);for(var n=(t>>3&1)+(t>>4&1);n>0;n-=!e[r++]);return r+(t&2)},er=function(e){var t=e.length;return(e[t-4]|e[t-3]<<8|e[t-2]<<16|e[t-1]<<24)>>>0},tr=function(e,t){return((e[0]&15)!=8||e[0]>>4>7||(e[0]<<8|e[1])%31)&&H(6,"invalid zlib data"),(e[1]>>5&1)==1&&H(6,"invalid zlib data: "+(e[1]&32?"need":"unexpected")+" dictionary"),(e[1]>>3&4)+2};function rr(e,t){return Fe(e,{i:2},t,t)}function ir(e,t){var r=Qt(e);return r+8>e.length&&H(6,"invalid gzip data"),Fe(e.subarray(r,-8),{i:2},new W(er(e)),t)}function nr(e,t){return Fe(e.subarray(tr(e),-4),{i:2},t,t)}function or(e,t){return e[0]==31&&e[1]==139&&e[2]==8?ir(e,t):(e[0]&15)!=8||e[0]>>4>7||(e[0]<<8|e[1])%31?rr(e,t):nr(e,t)}var ar=typeof TextDecoder<"u"&&new TextDecoder,lr=0;try{ar.decode(Jt,{stream:!0}),lr=1}catch{}function G(e,t,r){for(var n="",i=t;i<t+r;i++)n+=String.fromCharCode(e.getUint8(i));return n}function Ze(e){return new Uint8Array([e>>24&255,e>>16&255,e>>8&255,e&255])}function Ke(e){return new Uint8Array([e>>8&255,e&255])}function Mt(e){return Uint8Array.from(Array.from(e).map(t=>t.charCodeAt(0)))}function Q(...e){const t=new Uint8Array(e.reduce((r,n)=>r+n.byteLength,0));return e.reduce((r,n)=>(t.set(new Uint8Array(n),r),r+n.byteLength),0),t.buffer}function De(e,t){if(!document)return console.error("[MiNi exif]: download file is browser only");if(!t)return console.error("[MiNi exif]: download missing output filename");if(!e||!(e instanceof ArrayBuffer)&&!(e instanceof Blob))return console.error("[MiNi exif]: download wrong data input");let r;e instanceof ArrayBuffer&&(r=new Blob([e]));var n=document.createElement("a");n.href=URL.createObjectURL(r),n.download=t,n.click()}var sr={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34675:"ICCProfileIFDPointer",34853:"GPSInfoIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",316:"HostComputer",33432:"Copyright"},cr={36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubsecTime",37521:"SubsecTimeOriginal",37522:"SubsecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"ISOSpeedRatings",34856:"OECF",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRation",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",42035:"LensMake",42036:"LensModel",42016:"ImageUniqueID"},ur={0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential"},fe={ExposureMode:{0:"Auto",1:"Manual",2:"Auto Bracket"},ExposureProgram:{0:"Not defined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Not defined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},Components:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"},ColorSpace:{1:"sRGB",2:"Adobe RGB",65533:"Wide Gamut RGB",65534:"ICC Profile",65535:"Uncalibrated"}};function $e(e,t,r,n,i){var o=e.getUint16(r,!i),a={},c,s,f;for(f=0;f<o;f++){c=r+f*12+2;const d=e.getUint16(c,!i);s=n[d],s&&(a[s]=fr(e,c,t,r,i))}return a}function fr(e,t,r,n,i){var o=e.getUint16(t+2,!i),a=e.getUint32(t+4,!i),c=e.getUint32(t+8,!i)+r,s,f,d,l,u,p;switch(o){case 1:case 7:if(a==1)s=t+8,d=e.getUint8(s,!i);else for(s=a>4?c:t+8,f=[],l=0;l<a;l++)f[l]=e.getUint8(s+l);break;case 2:s=a>4?c:t+8,f=G(e,s,a-1),f.length;break;case 3:if(a==1)s=t+8,d=e.getUint16(s,!i);else for(s=a>2?c:t+8,f=[],l=0;l<a;l++)f[l]=e.getUint16(s+2*l,!i);break;case 4:if(a==1)s=t+8,d=e.getUint32(s,!i);else for(s=c,f=[],l=0;l<a;l++)f[l]=e.getUint32(s+4*l,!i);break;case 9:if(a==1)s=t+8,d=e.getInt32(s,!i);else for(s=c,f=[],l=0;l<a;l++)f[l]=e.getInt32(s+4*l,!i);break;case 5:if(a==1)s=c,u=e.getUint32(s,!i),p=e.getUint32(s+4,!i),d=new Number(u/p),d.numerator=u,d.denominator=p;else for(s=c,f=[],l=0;l<a;l++)u=e.getUint32(s+8*l,!i),p=e.getUint32(s+4+8*l,!i),f[l]=new Number(u/p),f[l].numerator=u,f[l].denominator=p;break;case 10:if(a==1)s=c,u=e.getInt32(s,!i),p=e.getInt32(s+4,!i),d=new Number(u/p),d.numerator=u,d.denominator=p;else for(s=c,f=[],l=0;l<a;l++)u=e.getInt32(s+8*l,!i),p=e.getInt32(s+4+8*l,!i),f[l]=new Number(u/p),f[l].numerator=u,f[l].denominator=p;break}if(o)return{value:f||d,offset:s-r,type:o}}function xe(e,t=0){if(!(e instanceof ArrayBuffer))return console.error("[MiNi exif]: input must be an ArrayBuffer");var r,n,i,o,a;const c=new DataView(e);if(c.getUint16(t)==18761)r=!1;else if(c.getUint16(t)==19789)r=!0;else return console.error("[MiNi exif]: Not valid TIFF data! (no 0x4949 or 0x4D4D)"),!1;if(c.getUint16(t+2,!r)!=42)return console.error("[MiNi exif]: Not valid TIFF data! (no 0x002A)"),!1;var s=c.getUint32(t+4,!r);if(s<8)return console.error("[MiNi exif]: Not valid TIFF data! (First offset less than 8)",c.getUint32(tiffOffset+4,!r)),!1;if(n={tiff:$e(c,t,t+s,sr,r)},n.tiff.ExifIFDPointer){o=$e(c,t,t+n.tiff.ExifIFDPointer.value,cr,r);for(i in o)switch(i){case"LightSource":case"Flash":case"MeteringMode":case"ExposureMode":case"ExposureProgram":case"SensingMethod":case"SceneCaptureType":case"SceneType":case"CustomRendered":case"WhiteBalance":case"GainControl":case"Contrast":case"Saturation":case"Sharpness":case"SubjectDistanceRange":case"FileSource":case"ColorSpace":o[i].hvalue=fe[i][o[i].value];break;case"ExposureTime":o[i].hvalue=o[i].value.numerator+"/"+o[i].value.denominator;break;case"ShutterSpeedValue":o[i].hvalue="1/"+Math.round(Math.pow(2,o[i].value));break;case"ExifVersion":case"FlashpixVersion":o[i].hvalue=String.fromCharCode(o[i].value[0],o[i].value[1],o[i].value[2],o[i].value[3]);break;case"ApertureValue":case"BrightnessValue":o[i].hvalue=Math.round(o[i].value*1e3)/1e3;break;case"ComponentsConfiguration":o[i].hvalue=fe.Components[o[i].value[0]]+fe.Components[o[i].value[1]]+fe.Components[o[i].value[2]]+fe.Components[o[i].value[3]];break}n.exif=o,delete n.tiff.ExifIFDPointer}if(n.tiff.GPSInfoIFDPointer){a=$e(c,t,t+n.tiff.GPSInfoIFDPointer.value,ur,r);for(i in a)switch(i){case"GPSVersionID":a[i].hvalue=a[i].value[0]+"."+a[i].value[1]+"."+a[i].value[2]+"."+a[i].value[3];break;case"GPSLatitude":a[i].hvalue=a[i].value[0]+a[i].value[1]/60+a[i].value[2]/3600,a[i].hvalue=(a.GPSLatitudeRef.value==="N"?1:-1)*a[i].hvalue;break;case"GPSLongitude":a[i].hvalue=a[i].value[0]+a[i].value[1]/60+a[i].value[2]/3600,a[i].hvalue=(a.GPSLongitudeRef.value==="E"?1:-1)*a[i].hvalue;break;case"GPSTimeStamp":a[i].hvalue=a[i].value[0].toString().padStart(2,"0")+":"+a[i].value[1].toString().padStart(2,"0")+":"+a[i].value[2].toString().padStart(2,"0")+" UTC";break}n.gps=a,delete n.tiff.GPSInfoIFDPointer}return n}function ze(e,t,r,n,i,o){if(!e||!r||!n||!i||!t)return!1;const a=["exif","tiff","gps"];if(!a.includes(r))return console.error("[MiNi exif]: area must be one of",a);if(!e[r][n])return console.error("[MiNi exif]: '"+r+"/"+n+"' not present");if(!t)return!1;if(o){if(typeof i!=typeof o)return console.error("[MiNi exif]: newvalue type mismatch vs newvalue2",i,o);if(Array.isArray(i)){let v=[];for(let h=0;h<i.length;h++){let m=new Number(i[h]/o[h]);m.numerator=i[h],m.denominator=o[h],v.push(m)}i=v}else{let v=new Number(i/o);v.numerator=i,v.denominator=o,i=v}}const c=e[r][n],s=c.value.length||1;if(typeof i!=typeof c.value)return console.error("[MiNi exif]: newvalue type mismatch vs oldvalue",c.value,i);if(s>1&&(!i.length||i.length<1||i.length>s))return console.error("[MiNi exif]: newvalue too long",c.value,i);if(s>1&&i.length<s)if(Array.isArray(c.value))for(let v=0;v<s-i.length;v++)i.push(0);else if(typeof c.value=="string")i=i.concat(" ".repeat(s-i.length));else return console.error("[MiNi exif]: unknown type",c.value,i);const f=new DataView(t);let d,l;if(f.getUint16(0)==18761?d=!1:f.getUint16(0)==19789&&(d=!0),d===void 0)return console.error("[MiNi exif]: exif_raw corrupted");const u=c.type,p=c.offset;switch(u){case 1:case 7:if(s==1)f.setUint8(p,i,!d);else for(l=0;l<s;l++)f.setUint8(p+l,i[l],!d);break;case 2:for(l=0;l<s;l++)f.setUint8(p+l,i.charCodeAt(l),!d);break;case 3:if(s==1)f.setUint16(p,i,!d);else for(l=0;l<s;l++)f.setUint16(p+l,i[l],!d);break;case 4:if(s==1)f.setUint32(p,i,!d);else for(l=0;l<s;l++)f.setUint32(p+l,i[l],!d);break;case 9:if(s==1)f.setInt32(p,i,!d);else for(l=0;l<s;l++)f.setInt32(p+l,i[l],!d);break;case 5:if(s==1)f.setUint32(p,i.numerator,!d),f.setUint32(p+4,i.denominator,!d);else for(l=0;l<s;l++)f.setUint32(p+8*l,i[l].numerator,!d),f.setUint32(p+4+8*l,i[l].denominator,!d);break;case 10:if(s==1)f.setInt32(p,i.numerator,!d),f.setInt32(p+4,i.denominator,!d);else for(l=0;l<s;l++)f.setInt32(p+8*l,i[l].numerator,!d),f.setInt32(p+4+8*l,i[l].denominator,!d);break}return t}function Ue(e,t=0){if(!(e instanceof ArrayBuffer))return console.error("[MiNi exif]: input must be an ArrayBuffer");const r=new DataView(e);if(r.getUint32(t+36)!==1633907568)return console.error("[MiNi exif]: ICC missing valid signature");const n=G(r,t+16,4),i=r.getUint32(t+128);let o=t+128+4,a={ColorSpace:n};for(let c=0;c<i;c++){let s=G(r,o,4),f=r.getUint32(o+4),d=r.getUint32(o+8);if(s==="desc"){s="ColorProfile";const l=G(r,t+f,4);let u=[];if(l==="mluc"){const p=r.getUint32(t+f+8);if(r.getUint32(t+f+12)!==12)return console.error("[MiNi exif]: ICC with invalid mluc");const v=t+f+16;for(let h=0;h<p;h++){const m=r.getUint32(v+h*12+4),C=r.getUint32(v+h*12+8);u.push(G(r,t+f+C,m).replaceAll("\0",""))}f+=28}else l==="desc"&&(d=r.getUint32(t+f+8),u.push(G(r,t+f+12,d).replaceAll("\0","")));a[s]=u}o+=12}return a}function be(e){if(!(e instanceof ArrayBuffer))return console.error("[MiNi exif]: input must be an ArrayBuffer");const t=e.byteLength,r=new DataView(e);if(r.getUint16(0)!==65496)return console.error("[MiNi exif]: data is not JPG");const n=65498;let i=[],o=null,a=2;for(i.push({marker:"0xFFD8",data:e.slice(0,2)});o!=n;){let c=a;o=r.getUint16(c);const s=r.getUint16(c+2),f=o.toString(16).toUpperCase().padStart(6,"0x");o!=n?i.push({marker:f,data:e.slice(a,a+2+s)}):i.push({marker:f,data:e.slice(a,t)}),a+=2+s}return i}function dr(e){const t=be(e);let r,n;const i=t.filter(a=>a.marker==="0xFFE1");i?.length&&i.forEach(a=>{String.fromCharCode(...new Uint8Array(a.data.slice(4,8)))==="Exif"?r=a:n=a});const o=pr(e,t);return{exif:r?.data,icc:o?.data,xml:n?.data}}function pr(e,t){const r="ICC_PROFILE\0";t||(t=be(e));const n=t.find(i=>i.marker==="0xFFE2");return n?String.fromCharCode(...new Uint8Array(n.data.slice(4,16)))!==r?(console.error("[MiNi exif]: ICC_PROFILE missing"),null):n:null}function hr(e){if(!e)return console.error("[MiNi exif]: please load file first");const t=be(e).filter(r=>r.marker!=="0xFFE1");return Q(...t.map(r=>r.data))}function vr(e){const t=Ke(65505).buffer,r=Ke(e.byteLength+8).buffer,n=Mt("Exif\0\0").buffer;return Q(t,r,n,e)}function qe(e,t){if(!e)return console.error("[MiNi exif]: please load file first");if(!t)return console.error("[MiNi exif]: exif data missing");const r=be(e).filter(i=>i.marker!=="0xFFE1"),n=vr(t);return Q(r[0].data,n,...r.slice(1).map(i=>i.data))}function gr(e){let t=e,r,n,i,o,a;function c(){if(t){const{exif:s,icc:f,xml:d}=dr(t);r=s,n=f,i=d}if(r?(o=xe(r,10),a=r.slice(10)):(o=null,a=null),n&&(o={...o,icc:Ue(n,18)}),i){const s=new TextDecoder().decode(i.slice(4));o={...o,xml:s}}}return c(),{load:s=>{t=s,c()},remove:()=>(t=hr(t),c(),t),read:()=>({...o,format:"JPG"}),extract:()=>a,image:()=>t,replace:s=>(t=qe(t,s),c(),t),download:s=>De(t,s),patch:s=>{function f(d){if(d instanceof Object){const{area:l,field:u,value:p,value2:v}=d;if(!l||!u||p===void 0)return console.error("[MiNi exif]: patch missing input",l,u,p);a=ze(o,a,l,u,p,v)}else return console.error("[MiNi exif]: patch wrong input",d)}if(!o)return console.error("[MiNi exif]: no exif data");s instanceof Array?s.forEach(d=>f(d)):s instanceof Object&&f(s),t=qe(t,a),c()}}}let ge;function mr(e){if(!ge){ge=new Uint32Array(256);for(let i=0;i<256;i++){let o=i;for(let a=0;a<8;a++)o&1?o=3988292384^o>>>1:o=o>>>1;ge[i]=o}}for(var t=-1,r=new Uint8Array(e),n=0;n<e.byteLength;n++)t=t>>>8^ge[(t^r[n])&255];return(t^-1)>>>0}function xr(e,t,r){const n=e.getUint32(t),i=G(e,t+4,4),o=t+8,a=e.getUint32(t+8+n),c=r.slice(t,t+12+n);return{len:n,type:i,data:c,dataoffset:o,crc:a}}function Oe(e){return e.data.slice(8,-4)}function br(e,t){const r=e.byteLength,n=Ze(e.byteLength).buffer,i=Mt(t).buffer;let o=Q(n,i,e);const a=mr(o.slice(4)),c=Ze(a).buffer;return o=Q(o,c),{len:r,type:t,data:o,crc:a}}function he(e){if(!(e instanceof ArrayBuffer))return console.error("[MiNi exif]: input must be an ArrayBuffer");const t=e.byteLength,r=new DataView(e);if(r.getUint32(0)!==2303741511||r.getUint32(4)!==218765834)return console.error("[MiNi exif]: data is not PNG");let n=8,i=[{len:8,type:"",data:e.slice(0,8),dataoffset:0,crc:0}];for(;n<t;){const o=xr(r,n,e);i.push(o),n+=12+o.len}return i}function yr(e){const t=he(e);let r=t.find(o=>o.type==="eXIf");r&&(r=Oe(r));let n=_r(e,t);if(n){let o=!0,a=0,c=new Uint8Array(n);for(;o!==0;)o=c[a++];a++,c=c.slice(a),n=or(new Uint8Array(c))?.buffer}let i=wr(e,t);return{exif:r,icc:n,xml:i}}function wr(e,t){t||(t=he(e));let r=null;const n=t.filter(i=>i.type==="iTXt");return n?.length&&n.forEach(i=>{const o=Oe(i);String.fromCharCode(...new Uint8Array(o.slice(0,3)))==="XML"&&(r=o)}),r}function _r(e,t){t||(t=he(e));const r=t.find(n=>n.type==="iCCP");return r?Oe(r):null}function Cr(e){if(!e)return console.error("[MiNi exif]: please load file first");const t=he(e).filter(r=>r.type!=="eXIf"&&r.type!=="iTXt");return Q(...t.map(r=>r.data))}function Je(e,t){if(!e)return console.error("[MiNi exif]: please load file first");if(!t)return console.error("[MiNi exif]: exif data missing");const r=he(e).filter(i=>i.type!=="eXIf"&&i.type!=="iTXt"),n=br(t,"eXIf");return Q(...r.slice(0,2).map(i=>i.data),n.data,...r.slice(2).map(i=>i.data))}function Sr(e){let t=e,r,n,i,o,a;function c(){if(t){const{exif:s,icc:f,xml:d}=yr(t);r=s,n=f,i=d}if(r?(o=xe(r,0),a=r.slice(0)):(o=null,a=null),n&&(o={...o,icc:Ue(n,0)}),i){const s=new TextDecoder().decode(i);o={...o,xml:s}}}return c(),{load:s=>{t=s,c()},remove:()=>(t=Cr(t),c(),t),read:()=>({...o,format:"PNG"}),extract:()=>a,image:()=>t,replace:s=>(t=Je(t,s),c(),t),download:s=>De(t,s),patch:s=>{function f(d){if(d instanceof Object){const{area:l,field:u,value:p,value2:v}=d;if(!l||!u||p===void 0)return console.error("[MiNi exif]: patch input missing",l,u,p);a=ze(o,a,l,u,p,v)}else return console.error("[MiNi exif]: patch input wrong",d)}if(!o)return console.error("[MiNi exif]: no exif data");s instanceof Array?s.forEach(d=>f(d)):s instanceof Object&&f(s),t=Je(t,a),c()}}}function $r(e,t){const r=e.getUint32(t);return r===0?{length:e.byteLength-t,contentOffset:t+4+4}:r===1&&e.getUint32(t+8)===0?{length:e.getUint32(t+12),contentOffset:t+4+4+8}:{length:r,contentOffset:t+4+4}}function kr(e,t){const{length:r,contentOffset:n}=$r(e,t);return r<8?void 0:{type:e.getUint32(t+4),length:r,str:G(e,t+4,4),contentOffset:n}}function Qe(e,t){let r={},n=t.length-8,i=t.contentOffset;for(;n>0;){const o=G(e,i+4,4),a=e.getUint32(i);r[o]={length:a,str:o,contentOffset:i+8},i+=a,n-=a}return r}function Er(e){if(!(e instanceof ArrayBuffer))return console.error("[MiNi exif]: input must be an ArrayBuffer");e.byteLength;const t=new DataView(e);if(t.getUint32(4)!==1718909296&&t.getUint32(8)!==1751476579||t.getUint32(4)!==1718909296&&t.getUint32(8)!==1635150182)return console.error("[MiNi exif]: data is not HEIC/AVIF");let r={};t.getUint32(8)===1751476579?r={_format:"HEIC"}:r={_format:"AVIF"};let n=0,i,o,a={},c={};for(;n+4+4<=t.byteLength;){const s=kr(t,n);if(s===void 0)break;if(s.str==="meta"){n+=12;continue}if(s.str==="iinf"){let f=t.getUint32(s.contentOffset+2),d=s.contentOffset+8+2;for(let l=0;l<f;l++)if(t.getUint32(d+12)===1165519206?i=t.getUint32(d+8):t.getUint32(d+12)===1835625829&&(o=t.getUint32(d+8)),l+1<f)for(d+=16;t.getUint32(d)!==1768842853&&d<2e4;)d++}else if(s.str==="iloc"){t.getUint32(s.contentOffset+2);const f=t.getUint16(s.contentOffset+6),d=(s.length-16)/f,l=s.contentOffset+8;for(let u=0;u<f;u++)if(d===16){const p=t.getUint32(l+u*d),v=t.getUint32(l+u*d+8),h=t.getUint32(l+u*d+12);c[p]={id:p,off:v,size:h,type:"heic"}}else if(d===18){const p=t.getUint32(l+u*d);let v=t.getUint32(l+u*d+4);v||(v=t.getUint32(l+u*d+10));const h=t.getUint32(l+u*d+14);c[p]={id:p,off:v,size:h,type:"avif"}}else console.error("[MiNi exif]: unknown iloc block length",d)}else if(s.str==="iprp"){const f=Qe(t,s);if(f.ipco){const d=Qe(t,f.ipco);if(d.colr){const l=G(t,d.colr.contentOffset,4);if(l==="prof"||l==="rICC"){const u=d.colr.contentOffset+4;a={offset:u,data:e.slice(u,u+d.colr.length-8)}}}}}n+=s.length}if(i&&c[i]){const{off:s,size:f,type:d}=c[i];if(d==="heic"){const l=t.getUint32(s),u=e.slice(s+4+l,s+4+l+f-4-l);r.exif={data:u,offset:s+4+l}}else if(d==="avif"){const l=t.getUint32(s),u=e.slice(s+4+l,s+4+l+f-4-l);r.exif={data:u,offset:s+4+l}}}if(o&&c[o]){const{off:s,size:f,type:d}=c[o];if(d==="heic"){const l=e.slice(s,s+f);r.xml={data:l,offset:s}}else if(d==="avif"){const l=e.slice(s,s+f);r.xml={data:l,offset:s}}}return r.icc=a,r}function et(e,t,r){if(!e)return console.error("[MiNi exif]: please load file first");if(!t)return console.error("[MiNi exif]: exif data missing");const n=r.offset,i=r.data.byteLength;return Q(e.slice(0,n),t,e.slice(n+i))}function Ar(e){let t=e,r,n,i,o,a;function c(){if(t){const{exif:f,icc:d,xml:l,_format:u}=Er(t);n=f,i=d,o=l,r=u}s()}function s(){if(n?.data?(a=xe(n.data,0),a={...a,format:r}):a=null,i?.data&&(a={...a,icc:Ue(i.data,0)}),o){const f=new TextDecoder().decode(o.data);a={...a,xml:f}}}return c(),{load:f=>{t=f,c()},read:()=>a,extract:()=>n.data,image:()=>t,download:f=>De(t,f),replace:f=>f.byteLength!==n.data.byteLength?console.error("[MiNi exif]: new exif length must be "+n.data.byteLength+" bytes"):(t=et(t,f,n),c(),t),patch:f=>{function d(l){if(l instanceof Object){const{area:u,field:p,value:v,value2:h}=l;if(!u||!p||v===void 0)return console.error("[MiNi exif]: patch missing input",u,p,v);n.data=ze(a,n.data,u,p,v,h)}else return console.error("[MiNi exif]: patch wrong input",l)}if(!a)return console.error("[MiNi exif]: no exif data");f instanceof Array?f.forEach(l=>d(l)):f instanceof Object&&d(f),t=et(t,n.data,n),c()}}}const Br=async()=>await X(()=>import("./index.web-Bqyr3zbv.js"),[]);function Lr(e,t){const r=e.getUint32(t);return r===0?{length:e.byteLength-t,contentOffset:t+4+4}:r===1&&e.getUint32(t+8)===0?{length:e.getUint32(t+12),contentOffset:t+4+4+8}:{length:r,contentOffset:t+4+4}}function Mr(e,t){const{length:r,contentOffset:n}=Lr(e,t);return r<8?void 0:{type:e.getUint32(t+4),length:r,str:G(e,t+4,4),contentOffset:n}}async function tt(e){return(await(await Br()).default).decompress(e)}async function Tr(e){if(!(e instanceof ArrayBuffer))return console.error("[MiNi exif]: input must be an ArrayBuffer");e.byteLength;const t=new DataView(e);if(!(t.getUint32(4)===1247300640&&t.getUint32(8)===218793738))return console.error("[MiNi exif]: data is not JPEG-XL");let r=0,n,i;for(;r+4+4<=t.byteLength;){const o=Mr(t,r);if(o===void 0)break;if(o.str==="meta"){r+=12;continue}if(o.str==="brob"){const a=G(t,o.contentOffset,4);if(a==="Exif"){const c=e.slice(o.contentOffset+4,o.contentOffset+4+o.length-12);n=await tt(new Uint8Array(c)),n=n?.buffer}else if(a==="xml "){const c=e.slice(o.contentOffset+4,o.contentOffset+4+o.length-12);i=await tt(new Uint8Array(c)),i=i?.buffer}}o.str==="Exif"&&(n=e.slice(o.contentOffset,o.contentOffset+o.length-8)),o.str==="xml "&&(i=e.slice(o.contentOffset,o.contentOffset+o.length-8)),r+=o.length}return{exif:n,xml:i}}async function Rr(e){let t=e,r,n,i;async function o(){if(t){const{exif:c,xml:s}=await Tr(t);r=c,n=s}a()}function a(){if(r?(i=xe(r,4),i={...i,format:"JXL"}):i=null,n){const c=new TextDecoder().decode(n);i={...i,xml:c}}}return await o(),{load:c=>{t=c,updateExif()},read:()=>i}}function Pr(e,t){const r=e.getUint32(t);return r===0?{length:e.byteLength-t,contentOffset:t+4+4}:r===1&&e.getUint32(t+8)===0?{length:e.getUint32(t+12),contentOffset:t+4+4+8}:{length:r,contentOffset:t+4+4}}function Ir(e,t){const{length:r,contentOffset:n}=Pr(e,t);return r<8?void 0:{type:e.getUint32(t+4),length:r,str:G(e,t+4,4),contentOffset:n}}function rt(e,t){let r={},n=t.length-8,i=t.contentOffset;for(;n>0;){const o=G(e,i+4,4),a=e.getUint32(i);r[o]={length:a,str:o,contentOffset:i+8},i+=a,n-=a}return r}function Fr(e){if(!(e instanceof ArrayBuffer))return console.error("[MiNi exif]: input must be an ArrayBuffer");e.byteLength;const t=new DataView(e);if(!(t.getUint32(4)===1718909296&&t.getUint32(8)===1903435808))return console.error("[MiNi exif]: data is not QuickTime");let r=0,n=[],i=[];for(;r+4+4<=t.byteLength;){const a=Ir(t,r);if(a===void 0)break;if(a.str==="meta"){r+=12;continue}if(a.str==="moov"){const c=rt(t,a);if(c.meta){const s=rt(t,c.meta);let f;if(s.keys){let d=s.keys.contentOffset;s.length,f=t.getUint32(d+4),d=d+8;for(let l=0;l<f;l++){const u=t.getUint32(d);if(t.getUint32(d+4)!==1835299937)continue;const p=G(t,d+8,u-8);n.push(p),d+=u}n=n.map(l=>l.replace("com.apple.quicktime.",""))}if(s.ilst){let d=s.ilst.contentOffset;for(let l=0;l<f;l++){const u=t.getUint32(d),p=t.getUint32(d+8);if(t.getUint32(d+12)!==1684108385)continue;const v=G(t,d+16+8,p-8-8);i.push({value:v,offset:d+16+8,type:2}),d+=u}}}}r+=a.length}let o={};if(n.length&&i.length){let a=n.reduce((c,s,f)=>(c[s]=i[f],c),{});if(o.meta=a,o.meta["location.ISO6709"]){const c=o.meta["location.ISO6709"].value;o.gps={Latitude:parseFloat(c),Longitude:parseFloat(c.slice(8)),Altitude:parseFloat(c.slice(17))}}}return o}function Tt(e,t=!1){if(!(e instanceof ArrayBuffer))return console.error("[MiNi exif]: input must be an ArrayBuffer");const r=new DataView(e);if(r.getUint16(0)===65496)return gr(e);if(r.getUint32(0)===2303741511&&r.getUint32(4)===218765834)return Sr(e);if(r.getUint32(4)===1718909296&&(r.getUint32(8)===1751476579||r.getUint32(8)===1635150182))return Ar(e);if(r.getUint32(4)===1247300640&&r.getUint32(8)===218793738)return Rr(e);if(t||r.getUint32(4)===1718909296&&r.getUint32(8)===1903435808)return Fr(e);console.error("[MiNi exif]: unknown format")}function Dr(e,t){const{gl:r,img:n}=e;t=t||{translateX:0,translateY:0,angle:0,scale:0,flipv:0,fliph:0};let{translateX:i,translateY:o,angle:a,scale:c,flipv:s,fliph:f}=t;c+=1;let d=[c,c];const l=[Math.round(r.canvas.width*i*100)/100,Math.round(r.canvas.height*o*100)/100],u=`#version 300 es
        in vec2 vertex;
        uniform mat3 matrix;
        out vec2 texCoord;
        void main() {
          texCoord = vertex;
          gl_Position = vec4((matrix * vec3(vertex, 1)).xy, 0, 1);
        }
      `,p=`#version 300 es
        precision highp float;
        in vec2 texCoord;
        uniform sampler2D _texture;
        out vec4 outColor;   
        void main() {
          outColor = texture(_texture, vec2(texCoord.x, texCoord.y));
        }
      `;if(r.canvas.width===e.height){const E=n.width/n.height;d[0]*=E,d[1]/=E}const v=V.projection(r.canvas.width,r.canvas.height),h=V.translation(l[0],l[1]),m=V.rotation(-a*Math.PI/180),C=V.scaling(d[0]*(-f||1),d[1]*(-s||1));let S=[1,0,0,0,1,0,0,0,1];S=V.multiply(S,v),S=V.multiply(S,h),S=V.multiply(S,V.translation(r.canvas.width/2,r.canvas.height/2)),S=V.multiply(S,m),S=V.multiply(S,C),S=V.multiply(S,V.translation(-r.canvas.width/2,-r.canvas.height/2)),S=V.multiply(S,V.scaling(r.canvas.width,r.canvas.height)),e._.$matrix=e._.$matrix||new O(r,u,p),e.runFilter(e._.$matrix,{matrix:S})}var V={projection:function(e,t){return[2/e,0,0,0,2/t,0,-1,-1,1]},translation:function(e,t){return[1,0,0,0,1,0,e,t,1]},rotation:function(e){var t=Math.cos(e),r=Math.sin(e);return[t,-r,0,r,t,0,0,0,1]},scaling:function(e,t){return[e,0,0,0,t,0,0,0,1]},multiply:function(e,t){var r=e[0],n=e[0*3+1],i=e[0*3+2],o=e[1*3+0],a=e[1*3+1],c=e[1*3+2],s=e[2*3+0],f=e[2*3+1],d=e[2*3+2],l=t[0*3+0],u=t[0*3+1],p=t[0*3+2],v=t[1*3+0],h=t[1*3+1],m=t[1*3+2],C=t[2*3+0],S=t[2*3+1],E=t[2*3+2];return[l*r+u*o+p*s,l*n+u*a+p*f,l*i+u*c+p*d,v*r+h*o+m*s,v*n+h*a+m*f,v*i+h*c+m*d,C*r+S*o+E*s,C*n+S*a+E*f,C*i+S*c+E*d]}};function zr(e,t,r){const{gl:n}=e;r+=1;const i=`
    vec3 fromLinear(vec3 linearRGB) {
        bvec3 cutoff = lessThan(linearRGB.rgb, vec3(0.0031308));
        vec3 higher = vec3(1.055)*pow(linearRGB.rgb, vec3(1.0/2.4)) - vec3(0.055);
        vec3 lower = linearRGB.rgb * vec3(12.92);
        return vec3(mix(higher, lower, cutoff));
    }
    vec3 toLinear(vec3 sRGB) {
        bvec3 cutoff = lessThan(sRGB.rgb, vec3(0.04045));
        vec3 higher = pow((sRGB.rgb + vec3(0.055))/vec3(1.055), vec3(2.4));
        vec3 lower = sRGB.rgb/vec3(12.92);
        return vec3(mix(higher, lower, cutoff));
    }`;if(t.type==="1"){const o=`#version 300 es
        precision highp float;

        in vec2 texCoord;
        uniform sampler2D _texture;
        out vec4 outColor;

        uniform sampler2D map;
        uniform float filterStrength;

        ${i}

        vec4 lut(vec4 color) {
          vec3 texel = color.rgb;
          texel = fromLinear(texel);
          float size = 33.0;
          float sliceSize = 1.0 / size;
          float slicePixelSize = sliceSize / size;
          float sliceInnerSize = slicePixelSize * (size - 1.0);
          float xOffset = 0.5 * sliceSize + texel.x * (1.0 - sliceSize);
          float yOffset = 0.5 * slicePixelSize + texel.y * sliceInnerSize;
          float zOffset = texel.z * (size - 1.0);
          float zSlice0 = floor(zOffset);
          float zSlice1 = zSlice0 + 1.0;
          float s0 = yOffset + (zSlice0 * sliceSize);
          float s1 = yOffset + (zSlice1 * sliceSize);
          vec4 slice0Color = texture(map, vec2(xOffset, s0));
          vec4 slice1Color = texture(map, vec2(xOffset, s1));
          texel =  mix(slice0Color, slice1Color, zOffset - zSlice0).rgb;
          texel = toLinear(texel);
          return vec4(texel, color.a);
        }

        void main() {
          vec4 color = texture(_texture, texCoord);
          outColor = color * (1.0 - filterStrength) + lut(color) * filterStrength;
        }
    `;e._.$insta1=e._.$insta1||new O(n,null,o),e._.$instatxt1=e._.$instatxt1||new Y(n),e._.$instatxt1.loadImage(t.map1,n.RGBA),e._.$instatxt1.use(1),e.runFilter(e._.$insta1,{filterStrength:r??1,map:{unit:1}})}else if(t.type==="2"){const o=`#version 300 es
        precision highp float;
        precision highp int;
        
        in vec2 texCoord;
        uniform sampler2D _texture;
        out vec4 outColor;

        uniform sampler2D map;
        uniform sampler2D map2;
        uniform float filterStrength;

        ${i}

        vec4 lut(vec4 color) {
          vec3 texel = color.rgb;
          texel = fromLinear(texel);
          texel.r = texture(map, vec2(texel.r, 0.5)).r;
          texel.g = texture(map, vec2(texel.g, 0.5)).g;
          texel.b = texture(map, vec2(texel.b, 0.5)).b;
          float luma = dot(vec3(0.2126, 0.7152, 0.0722), texel);
          float shadowCoeff = 0.35 * max(0.0, 1.0 - luma);
          texel = mix(texel, max(vec3(0.0), 2.0 * texel - 1.0), shadowCoeff);
          texel = mix(texel, vec3(luma), -0.3);
          texel.r = texture(map2, vec2(texel.r, 0.5)).r;
          texel.g = texture(map2, vec2(texel.g, 0.5)).g;
          texel.b = texture(map2, vec2(texel.b, 0.5)).b;
          texel = toLinear(texel);
          return vec4(texel, color.a);
        }

        void main() {
          vec4 color = texture(_texture, texCoord);
          color = color * (1.0 - filterStrength) + lut(color) * filterStrength;
          outColor = color;
        }
    `;e._.$insta2=e._.$insta2||new O(n,null,o),e._.$instatxt1=e._.$instatxt1||new Y(n),e._.$instatxt2=e._.$instatxt2||new Y(n),e._.$instatxt1.loadImage(t.map1,n.RGBA),e._.$instatxt2.loadImage(t.map2,n.RGBA),e._.$instatxt1.use(1),e._.$instatxt2.use(2),e.runFilter(e._.$insta2,{filterStrength:r??1,map:{unit:1},map2:{unit:2}})}else if(t.type==="3"){const o=`#version 300 es
        precision highp float;
        precision highp int;
        
        in vec2 texCoord;
        uniform sampler2D _texture;
        out vec4 outColor;

        uniform sampler2D map;
        uniform sampler2D mapLgg;
        uniform float filterStrength;

        ${i}

        vec4 lut(vec4 color) {
          vec3 texel = color.rgb;
          texel = fromLinear(texel);
          texel = min(texel * 1.1343, vec3(1.0));
          texel.r = texture(map, vec2(texel.r, 0.5)).r;
          texel.g = texture(map, vec2(texel.g, 0.5)).g;
          texel.b = texture(map, vec2(texel.b, 0.5)).b;
          vec3 shadowColor = vec3(0.956862, 0.0, 0.83529);
          float luma = dot(vec3(0.309, 0.609, 0.082), texel);
          vec3 shadowBlend = 2.0 * shadowColor * texel;
          float shadowAmount = 0.6 * max(0.0, (1.0 - 4.0 * luma));
          texel = mix(texel, shadowBlend, shadowAmount);
          vec3 lgg;
          lgg.r = texture(mapLgg, vec2(texel.r, 0.5)).r;
          lgg.g = texture(mapLgg, vec2(texel.g, 0.5)).g;
          lgg.b = texture(mapLgg, vec2(texel.b, 0.5)).b;
          texel = mix(texel, lgg, min(1.0, 0.8 + luma));
          texel = toLinear(texel);
          return vec4(texel, color.a);
        }

        void main() {
          vec4 color = texture(_texture, texCoord);
          outColor = color * (1.0 - filterStrength) + lut(color) * filterStrength;
        }
    `;e._.$insta3=e._.$insta3||new O(n,null,o),e._.$instatxt1=e._.$instatxt1||new Y(n,0,0,n.RGBA,n.UNSIGNED_BYTE),e._.$instatxt1.loadImage(t.map1,n.RGBA),e._.$instatxt2=e._.$instatxt2||new Y(n,0,0,n.RGBA,n.UNSIGNED_BYTE),e._.$instatxt2.loadImage(t.map2,n.RGBA),e._.$instatxt1.use(1),e._.$instatxt2.use(2),e.runFilter(e._.$insta3,{filterStrength:r??1,map:{unit:1},mapLgg:{unit:2}})}else if(t.type==="4"){const o=`#version 300 es
        precision highp float;
        precision highp int;
        
        in vec2 texCoord;
        uniform sampler2D _texture;
        out vec4 outColor;

        uniform sampler2D map;
        uniform sampler2D map2;
        uniform float filterStrength;

        ${i}

        vec4 lut(vec4 color) {
          vec3 texel = color.rgb;
          texel = fromLinear(texel);
          texel.r = texture(map, vec2(texel.r, 0.5)).r;
          texel.g = texture(map, vec2(texel.g, 0.5)).g;
          texel.b = texture(map, vec2(texel.b, 0.5)).b;
          vec3 desat = vec3(dot(vec3(0.7, 0.2, 0.1), texel));
          texel = mix(texel, desat, 0.79);
          texel = vec3(min(1.0, 1.2 * dot(vec3(0.2, 0.7, 0.1), texel)));
          texel.r = texture(map2, vec2(texel.r, 0.5)).r;
          texel.g = texture(map2, vec2(texel.g, 0.5)).g;
          texel.b = texture(map2, vec2(texel.b, 0.5)).b;
          texel = toLinear(texel);
          return vec4(texel, color.a);
        }

        void main() {
          vec4 color = texture(_texture, texCoord);
          outColor = color * (1.0 - filterStrength) + lut(color) * filterStrength;
        }
    `;e._.$insta4=e._.$insta4||new O(n,null,o),e._.$instatxt1=e._.$instatxt1||new Y(n,0,0,n.RGBA,n.UNSIGNED_BYTE),e._.$instatxt1.loadImage(t.map1,n.RGBA),e._.$instatxt2=e._.$instatxt2||new Y(n,0,0,n.RGBA,n.UNSIGNED_BYTE),e._.$instatxt2.loadImage(t.map2,n.RGBA),e._.$instatxt1.use(1),e._.$instatxt2.use(2),e.runFilter(e._.$insta4,{filterStrength:r??1,map:{unit:1},map2:{unit:2}})}else if(t.type==="MTX"){const o=`#version 300 es
        precision highp float;
        precision highp int;
        
        in vec2 texCoord;
        uniform sampler2D _texture;
        out vec4 outColor;

        uniform float filterStrength;
        uniform mat4 uColorMatrix;
        uniform vec4 uColorOffset;

        vec4 applyColorMatrix(vec4 c, mat4 m, vec4 o) {
            vec4 res = (c * m) + (o * c.a);
            res = clamp(res, 0.0, 1.0);
            return res;
        }

        void main() {
          vec4 color = texture(_texture, texCoord);
          color = applyColorMatrix(color, uColorMatrix, uColorOffset);
          outColor = color;
        }
    `;let a={identity:[[1,0,0,0,0],[0,1,0,0,0],[0,0,1,0,0],[0,0,0,1,0]],polaroid:[[1+.438*r,-.062*r,-.062*r,0,0],[-.122*r,1+.378*r,-.122*r,0,0],[-.016*r,-.016*r,1+.483*r,0,0],[0,0,0,1,0]],kodachrome:[[(1+.1285582396593525*r)*((r/2+1)/2+.5),-.3967382283601348*r,-.03992559172921793*r,0,.06372958762196503*r],[-.16404339962244616*r,(1+.0835251566291304*r)*((r/2+1)/2+.5),-.05498805115633132*r,0,.024732407896706204*r],[-.16786010706155763*r,-.5603416277695248*r,(1+.6014850761964943*r)*((r/2+1)/2+.5),0,.03562982807460946*r],[0,0,0,1,0]],browni:[[(1-.4002976502*r)*((r/1.5+1)/2+.5),.34553243048391263*r,-.2708298674538042*r,0,.09486385711201746*r],[-.037703249837783157*r,(1-.1390422412*r)*((r/1.5+1)/2+.5),.15059552388459913*r,0,-.07393682996638255*r],[.24113635128153335*r,-.07441037908422492*r,(1-.5502781794*r)*((r/1.5+1)/2+.5),0,-.015124150555182566*r],[0,0,0,1,0]],vintage:[[(1-.3720654364*r)*((r/1.5+1)/2+.5),.3202183420819367*r,-.03965408211312453*r,0,.009651285835294123*r],[.02578397704808868*r,(1-.3558811356*r)*((r/1.5+1)/2+.5),.03259127616149294*r,0,.007462829176470591*r],[.0466055556782719*r,-.0851232987247891*r,(1-.4758351981*r)*((r/1.5+1)/2+.5),0,.005159190588235296*r],[0,0,0,1,0]]},c=a.identity,s=[0,0,0,0];r&&(c=Ur(c,a[t.mtx],4)),r&&(s=[0,1,2,3].map(l=>s[l]+a[t.mtx][l][4])),e._.$insta5=e._.$insta5||new O(n,null,o);const f=c.flat(),d=s;e.runFilter(e._.$insta5,{uColorMatrix:f,uColorOffset:d})}}function Ur(e,t,r=3){let n=[];for(var i=0;i<r;i++){n.push([]);for(var o=0;o<r;o++){n[i].push(0);for(var a=0;a<r;a++)e[i]&&t[a]&&(n[i][o]+=e[i][a]*t[a][o])}}return n}function Ge(e){var t=e.length;this.xa=[],this.ya=[],this.u=[],this.y2=[],e.sort(function(c,s){return c[0]-s[0]});for(var r=0;r<t;r++)this.xa.push(e[r][0]),this.ya.push(e[r][1]);this.u[0]=0,this.y2[0]=0;for(var r=1;r<t-1;++r){var n=this.xa[r+1]-this.xa[r-1],i=(this.xa[r]-this.xa[r-1])/n,o=i*this.y2[r-1]+2;this.y2[r]=(i-1)/o;var a=(this.ya[r+1]-this.ya[r])/(this.xa[r+1]-this.xa[r])-(this.ya[r]-this.ya[r-1])/(this.xa[r]-this.xa[r-1]);this.u[r]=(6*a/n-i*this.u[r-1])/o}this.y2[t-1]=0;for(var r=t-2;r>=0;--r)this.y2[r]=this.y2[r]*this.y2[r+1]+this.u[r]}Ge.prototype.at=function(e){for(var t=this.ya.length,r=0,n=t-1;n-r>1;){var i=n+r>>1;this.xa[i]>e?n=i:r=i}var o=this.xa[n]-this.xa[r],a=(this.xa[n]-e)/o,c=(e-this.xa[r])/o;return a*this.ya[r]+c*this.ya[n]+((a*a*a-a)*this.y2[r]+(c*c*c-c)*this.y2[n])*(o*o)/6};function ke(e){for(var t=new Ge(e),r=[],n=0;n<256;n++)r.push(Or(0,Math.floor(t.at(n/255)*256),255));return r}function Or(e,t,r){return Math.max(e,Math.min(t,r))}function Gr(e,t){if(t.every(s=>s===null))return;t[0]||(t[0]=[[0,0],[1,1]]);let r=t[1]||t[0],n=t[2]||t[0],i=t[3]||t[0];if(r=ke(r),n=ke(n),i=ke(i),r.length!==256||n.length!==256||i.length!==256)return console.error("curves: input unknown");for(var t=[],o=0;o<256;o++)t.splice(t.length,0,r[o],n[o],i[o],255);const a=`#version 300 es
        precision highp float;

        in vec2 texCoord;
        uniform sampler2D _texture;
        out vec4 outColor;

        uniform sampler2D curvemap;

        void main() {
            vec4 color = texture(_texture, texCoord);
            color.r = texture(curvemap, vec2(color.r)).r;
            color.g = texture(curvemap, vec2(color.g)).g;
            color.b = texture(curvemap, vec2(color.b)).b;
            outColor = color;
        }
      `,{gl:c}=e;e._.$curvestexture=e._.$curvestexture||new Y(c),e._.$curvestexture.initFromBytes(256,1,t,c.RGBA),e._.$curvestexture.use(2),e._.$curves=e._.$curves||new O(c,null,a),e.runFilter(e._.$curves,{curvemap:{unit:2}})}function Nr(e,t,r,n){const i=`#version 300 es
            precision highp float;

            in vec2 texCoord;
            uniform sampler2D _texture;
            uniform vec2 uResolution;
            uniform mat3 matrix;
            uniform bool useTextureSpace;
            out vec4 outColor;

            void main() {
                vec2 coord = texCoord * uResolution;
                if (useTextureSpace) coord = coord / uResolution * 2.0 - 1.0;
                vec3 warp = matrix * vec3(coord, 1.0);
                coord = warp.xy / warp.z;
                if (useTextureSpace) coord = (coord * 0.5 + 0.5) * uResolution;
                vec4 color = texture(_texture, coord / uResolution);
                vec2 clampedCoord = clamp(coord, vec2(0.0), uResolution);
                if (coord != clampedCoord) {
                    //color.a *= max(0.0, 1.0 - length(coord - clampedCoord));
                    color.a = 0.;
                }
                outColor = color;
            }
          `,{gl:o,img:a}=e;if(e._.$warp=e._.$warp||new O(o,null,i),t=Array.prototype.concat.apply([],t),t.length==4)t=[t[0],t[1],0,t[2],t[3],0,0,0,1];else if(t.length!=9)throw"can only warp with 2x2 or 3x3 matrix";const c=[o.canvas.width,o.canvas.height];e.runFilter(e._.$warp,{matrix:r?Rt(t):t,uResolution:c,useTextureSpace:n|0})}function Vr(e,t,r,n,i){t=t.flat(),r=r.flat();var o=it.apply(null,r),a=it.apply(null,t),c=jr(Rt(o),a);return Nr(e,c,n,i)}function it(e,t,r,n,i,o,a,c){var s=r-i,f=n-o,d=a-i,l=c-o,u=e-r+i-a,p=t-n+o-c,v=s*l-d*f,h=(u*l-d*p)/v,m=(s*p-u*f)/v;return[r-e+h*r,n-t+h*n,h,a-e+m*a,c-t+m*c,m,e,t,1]}function Rt(e){var t=e[0],r=e[1],n=e[2],i=e[3],o=e[4],a=e[5],c=e[6],s=e[7],f=e[8],d=t*o*f-t*a*s-r*i*f+r*a*c+n*i*s-n*o*c;return[(o*f-a*s)/d,(n*s-r*f)/d,(r*a-n*o)/d,(a*c-i*f)/d,(t*f-n*c)/d,(n*i-t*a)/d,(i*s-o*c)/d,(r*c-t*s)/d,(t*o-r*i)/d]}function jr(e,t){return[e[0]*t[0]+e[1]*t[3]+e[2]*t[6],e[0]*t[1]+e[1]*t[4]+e[2]*t[7],e[0]*t[2]+e[1]*t[5]+e[2]*t[8],e[3]*t[0]+e[4]*t[3]+e[5]*t[6],e[3]*t[1]+e[4]*t[4]+e[5]*t[7],e[3]*t[2]+e[4]*t[5]+e[5]*t[8],e[6]*t[0]+e[7]*t[3]+e[8]*t[6],e[6]*t[1]+e[7]*t[4]+e[8]*t[7],e[6]*t[2]+e[7]*t[5]+e[8]*t[8]]}function Xr(e,t,r){const{gl:n}=e,i=`#version 300 es
        precision highp float;

        in vec2 texCoord;
        uniform sampler2D _texture;
        out vec4 outColor;

        uniform sampler2D map;
        uniform float filterStrength;

        vec4 fromLinear(vec4 linearRGB) {
            bvec3 cutoff = lessThan(linearRGB.rgb, vec3(0.0031308));
            vec3 higher = vec3(1.055)*pow(linearRGB.rgb, vec3(1.0/2.4)) - vec3(0.055);
            vec3 lower = linearRGB.rgb * vec3(12.92);
            return vec4(mix(higher, lower, cutoff), linearRGB.a);
        }
        vec4 toLinear(vec4 sRGB) {
            bvec3 cutoff = lessThan(sRGB.rgb, vec3(0.04045));
            vec3 higher = pow((sRGB.rgb + vec3(0.055))/vec3(1.055), vec3(2.4));
            vec3 lower = sRGB.rgb/vec3(12.92);
            return vec4(mix(higher, lower, cutoff), sRGB.a);
        }

        void main(){
          vec4 color = texture(_texture, texCoord);
          vec4 texc = texture(map, texCoord);
          color = toLinear(color);
          texc = toLinear(texc);
          color = mix(color, texc, filterStrength);
          color = fromLinear(color);
          outColor = color;
        }`;e._.$blend=e._.$blend||new O(n,null,i),e._.$blendtxt=e._.$blendtxt||new Y(n),e._.$blendtxt.loadImage(t),e._.$blendtxt.use(1),e.runFilter(e._.$blend,{filterStrength:r??1,map:{unit:1}})}function Hr(e,t){const r=`#version 300 es
        //Bokeh disc. by David Hoskins.
        //https://www.shadertoy.com/view/4d2Xzw
        precision highp float;

        in vec2 texCoord;
        uniform sampler2D _texture;
        out vec4 outColor;

        uniform float bokehstrength;
        uniform float bokehlensin;
        uniform float bokehlensout;
        uniform float centerX;
        uniform float centerY;

        #define GOLDEN_ANGLE 2.39996323
        #define ITERATIONS 512
        const mat2 rot = mat2(cos(GOLDEN_ANGLE), sin(GOLDEN_ANGLE), -sin(GOLDEN_ANGLE), cos(GOLDEN_ANGLE));
        vec3 Bokeh(sampler2D tex, vec2 uv, float radius)
        {
          vec3 acc = vec3(0), div = acc;
            float r = 1.;
            vec2 vangle = vec2(0.0,radius*.01 / sqrt(float(ITERATIONS)));
            
          for (int j = 0; j < ITERATIONS; j++)
            {  
                // the approx increase in the scale of sqrt(0, 1, 2, 3...)
                r += 1. / r;
              vangle = rot * vangle;
                vec3 col = texture(tex, uv + (r-1.) * vangle).xyz; /// ... Sample the image
                //col = col * col *1.8; // ... Contrast it for better highlights - leave this out elsewhere.
            vec3 bokeh = pow(col, vec3(4));
            acc += col * bokeh;
            div += bokeh;
          }
          return acc / div;
        }


        void main() {
            vec4 color = texture(_texture, texCoord);
            vec4 bcolor = vec4(Bokeh(_texture, texCoord, bokehstrength), 1.);
    
            //vignette used to control alpha
            //to blur inside circle smoothstep(lensin, lensout, dist)
            //to blur outside circle smoothstep(lensout, lensin, dist)
            float dist = distance(texCoord.xy, vec2(centerX,centerY));
            float vigfin = pow(1.-smoothstep(max(0.001,bokehlensout), bokehlensin, dist),2.);

            outColor = mix( color, bcolor, vigfin);
        }
      `,{gl:n}=e;let{bokehstrength:i=.5,bokehlensin:o=0,bokehlensout:a=.5,centerX:c=0,centerY:s=0}=t||{};e._.$lensblur=e._.$lensblur||new O(n,null,r),e.runFilter(e._.$lensblur,{bokehstrength:i,bokehlensin:o,bokehlensout:a,centerX:c,centerY:s})}function Wr(e,t){const r=`#version 300 es
        //https://www.shadertoy.com/view/XdfGDH
        precision highp float;

        in vec2 texCoord;
        uniform sampler2D _texture;
        out vec4 outColor;

        uniform vec2 uResolution;
        uniform float gaussianstrength;
        uniform float gaussianlensin;
        uniform float gaussianlensout;
        uniform float centerX;
        uniform float centerY;

        float normpdf(in float x, in float sigma)
        {
          return 0.39894*exp(-0.5*x*x/(sigma*sigma))/sigma;
        }

        void main() {
            vec4 color = texture(_texture, texCoord);

            //declare stuff
            const int mSize = 11;
            const int kSize = (mSize-1)/2;
            float kernel[mSize];
            vec3 final_colour = vec3(0.0);
            
            //create the 1-D kernel
            float sigma = 7.0*gaussianstrength;
            float Z = 0.0;
            for (int j = 0; j <= kSize; ++j)
            {
              kernel[kSize+j] = kernel[kSize-j] = normpdf(float(j), sigma);
            }
            
            //get the normalization factor (as the gaussian has been clamped)
            for (int j = 0; j < mSize; ++j)
            {
              Z += kernel[j];
            }
            
            //read out the texels
            for (int i=-kSize; i <= kSize; ++i)
            {
              for (int j=-kSize; j <= kSize; ++j)
              {
                final_colour += kernel[kSize+j]*kernel[kSize+i]*texture(_texture, (texCoord.xy+vec2(float(i),float(j))/uResolution)).rgb;
              }
            }
            
            //vignette used to control alpha
            //to blur inside circle smoothstep(lensin, lensout, dist)
            //to blur outside circle smoothstep(lensout, lensin, dist)
            float dist = distance(texCoord.xy, vec2(centerX,centerY));
            float vigfin = pow(1.-smoothstep(max(0.001,gaussianlensout), gaussianlensin, dist),2.);

            outColor = mix( color, vec4(final_colour/(Z*Z), 1.0), vigfin);
        }
      `,{gl:n}=e;let{gaussianstrength:i=.5,gaussianlensin:o=0,gaussianlensout:a=.5,centerX:c=0,centerY:s=0}=t||{};const f=[n.canvas.width,n.canvas.height];e._.$gaussianblur=e._.$gaussianblur||new O(n,null,r),e.runFilter(e._.$gaussianblur,{gaussianstrength:i,gaussianlensin:o,gaussianlensout:a,centerX:c,centerY:s,uResolution:f})}function Yr(e,t){const r=`#version 300 es
        precision highp float;

        in vec2 texCoord;
        uniform sampler2D _texture;
        out vec4 outColor;

        uniform vec2 uTextureSize;
        uniform mat4 uColorMatrix;
        uniform vec4 uColorOffset;
        uniform float uClarityKernel[9];
        uniform float uClarityKernelWeight;
        uniform float uColorGamma;
        uniform float uVibrance;
        uniform float uColorVignette;
        uniform vec2 uVignettePos;
        uniform float vibrance;

        vec4 applyGamma(vec4 c, float g) {
            c.r = pow(c.r, g);
            c.g = pow(c.g, g);
            c.b = pow(c.b, g);
            return c;
        }
        vec4 applyVibrance(vec4 c, float v){
          float max = max(c.r, max(c.g, c.b));
          float avg = (c.r + c.g + c.b) / 3.0;
          float amt = (abs(max - avg) * 2.0) * -v;
          c.r += max != c.r ? (max - c.r) * amt : 0.00;
          c.g += max != c.g ? (max - c.g) * amt : 0.00;
          c.b += max != c.b ? (max - c.b) * amt : 0.00;
          return c;
        }
        vec4 applyColorMatrix(vec4 c, mat4 m, vec4 o) {
            vec4 res = (c * m) + (o * c.a);
            res = clamp(res, 0.0, 1.0);
            return res;
        }
        vec4 applyConvolutionMatrix(vec4 c, float k0, float k1, float k2, float k3, float k4, float k5, float k6, float k7, float k8, float w) {
          vec2 pixel = vec2(1) / uTextureSize;
          vec4 colorSum = texture(_texture, texCoord - pixel) * k0 + texture(_texture, texCoord + pixel * vec2(0.0, -1.0)) * k1 + texture(_texture, texCoord + pixel * vec2(1.0, -1.0)) * k2 + texture(_texture, texCoord + pixel * vec2(-1.0, 0.0)) * k3 + texture(_texture, texCoord) * k4 + texture(_texture, texCoord + pixel * vec2(1.0, 0.0)) * k5 + texture(_texture, texCoord + pixel * vec2(-1.0, 1.0)) * k6 + texture(_texture, texCoord + pixel * vec2(0.0, 1.0)) * k7 + texture(_texture, texCoord + pixel) * k8;
          vec4 color = vec4(clamp((colorSum / w), 0.0, 1.0).rgb, c.a);
          return color;
        }

        vec4 applyVignette2(vec4 c, vec2 pos, float v, vec2 upos){
          #define inner .20
          #define outer 1.1
          #define curvature .65
          vec2 curve = pow(abs(pos),vec2(1./curvature));
          float edge = pow(length(curve),curvature);
          float scale = 1.-abs(upos.x);
          float vignette = 1.-v*smoothstep(inner*scale,outer*scale,edge);
          vec4 color = vec4(c.rgb *= vignette , c.a);
          return color;
        }

        vec4 vignette3(vec4 c, vec2 pos, float radius)
        {
            float ambientlight = 0.14;
            float circle = length(pos) - radius;
            float v = 1.0 - smoothstep(0.0, 0.4f, circle) + ambientlight;
            return vec4(c.rgb*v,c.a);
        }

        void main() {
          vec4 color = texture(_texture, texCoord);
          if (uClarityKernelWeight != -1.0) { 
            color = applyConvolutionMatrix(color, uClarityKernel[0], uClarityKernel[1], uClarityKernel[2], uClarityKernel[3], uClarityKernel[4], uClarityKernel[5], uClarityKernel[6], uClarityKernel[7], uClarityKernel[8], uClarityKernelWeight); 
          } 
          color = applyGamma(color, uColorGamma);
          color = applyVibrance(color, uVibrance);
          color = applyColorMatrix(color, uColorMatrix, uColorOffset);
          if (uColorVignette != 0.0) {
            vec2 pos = texCoord.xy*2.-1. - uVignettePos;
            //color = vignette3(color, pos, uColorVignette);
            color = applyVignette2(color, pos, uColorVignette, uVignettePos);
          }
          outColor = color;
        }
      `,{gl:n}=e;let i=[0,0],{brightness:o=0,contrast:a=0,saturation:c=0,exposure:s=0,temperature:f=0,gamma:d=0,clarity:l=0,vibrance:u=0,vignette:p=0,tint:v=0,sepia:h=0}=t;o=o/4,a=(a+1)/2+.5,c=c+1,s=((s>0?s*3:s*1.5)+1)/2+.5,d+=1,f*=2,v*=2;let m={brightness:[[1,0,0,0,o],[0,1,0,0,o],[0,0,1,0,o],[0,0,0,1,0]],contrast:[[a,0,0,0,.5*(1-a)],[0,a,0,0,.5*(1-a)],[0,0,a,0,.5*(1-a)],[0,0,0,1,0]],saturation:[[.213+.787*c,.715-.715*c,.072-.072*c,0,0],[.213-.213*c,.715+.285*c,.072-.072*c,0,0],[.213-.213*c,.715-.715*c,.072+.928*c,0,0],[0,0,0,1,0]],exposure:[[s,0,0,0,0],[0,s,0,0,0],[0,0,s,0,0],[0,0,0,1,0]],temperature:f>0?[[1+.1*f,0,0,0,0],[0,1,0,0,0],[0,0,1+.1*-f,0,0],[0,0,0,1,0]]:[[1+.15*f,0,0,0,0],[0,1+.05*f,0,0,0],[0,0,1+.15*-f,0,0],[0,0,0,1,0]],tint:[[1,0,0,0,0],[0,1+.1*v,0,0,0],[0,0,1,0,0],[0,0,0,1,0]],sepia:[[1-.607*h,.769*h,.189*h,0,0],[.349*h,1-.314*h,.168*h,0,0],[.272*h,.534*h,1-.869*h,0,0],[0,0,0,1,0]],identity:[[1,0,0,0,0],[0,1,0,0,0],[0,0,1,0,0],[0,0,0,1,0]]},C=m.identity,S=[0,0,0,0];C=te(C,m.brightness,4),S=[0,1,2,3].map(y=>S[y]+m.brightness[y][4]),C=te(C,m.contrast,4),S=[0,1,2,3].map(y=>S[y]+m.contrast[y][4]),C=te(C,m.saturation,4),C=te(C,m.exposure,4),C=te(C,m.temperature,4),C=te(C,m.tint,4),C=te(C,m.sepia,4);let E=l>=0?[0,-1*l,0,-1*l,1+4*l,-1*l,0,-1*l,0]:[-1*l,-2*l,-1*l,-2*l,1+-3*l,-2*l,-1*l,-2*l,-1*l],x=E.reduce((y,$)=>y+$,0);x=x<=0?1:x,E=[E];const T=C.flat(),g=S,_=[n.canvas.width,n.canvas.height],B=u,R=p,A=E,w=x,U=i;e._.$adj=e._.$adj||new O(n,null,r),e.runFilter(e._.$adj,{uColorMatrix:T,uColorOffset:g,uColorGamma:1/d,uClarityKernel:A,uClarityKernelWeight:w,uTextureSize:_,uVibrance:B,uColorVignette:R,uVignettePos:U})}function Zr(e,t,r){const n=`#version 300 es
        precision highp float;

        in vec2 texCoord;
        uniform sampler2D _texture;
        out vec4 outColor;

        uniform float shadows;
        uniform float highlights;

        const mediump vec3 luminanceWeighting = vec3(0.2125, 0.7154, 0.0721);

        void main() {
          vec4 color = texture(_texture, texCoord);

          float luminance = dot(color.rgb, luminanceWeighting);
          float shadow = clamp((pow(luminance, 1.0/shadows) + (-0.76)*pow(luminance, 2.0/shadows)) - luminance, 0.0, 1.0);
          float highlight = clamp((1.0 - (pow(1.0-luminance, 1.0/(2.0-highlights)) + (-0.8)*pow(1.0-luminance, 2.0/(2.0-highlights)))) - luminance, -1.0, 0.0);
          vec3 result = vec3(0.0, 0.0, 0.0) + (luminance + shadow + highlight) * ((color.rgb - vec3(0.0, 0.0, 0.0))/luminance );

          // blend toward white if highlights is more than 1
          float contrastedLuminance = ((luminance - 0.5) * 1.5) + 0.5;
          float whiteInterp = contrastedLuminance*contrastedLuminance*contrastedLuminance;
          float whiteTarget = clamp(highlights, 0.0, 2.0) - 1.0;
          result = mix(result, vec3(1.0), whiteInterp*whiteTarget);

          // blend toward black if shadows is less than 1
          float invContrastedLuminance = 1.0 - contrastedLuminance;
          float blackInterp = invContrastedLuminance*invContrastedLuminance*invContrastedLuminance;
          float blackTarget = 1.0 - clamp(shadows, 0.0, 1.0);
          result = mix(result, vec3(0.0), blackInterp*blackTarget);

          outColor = vec4(result, color.a);
        }
  `,{gl:i}=e;e._.$sg=e._.$sg||new O(i,null,n),e.runFilter(e._.$sg,{highlights:t+1,shadows:r/2+1})}function Kr(e,t){const r=`#version 300 es
        precision highp float;

        in vec2 texCoord;
        uniform sampler2D _texture;
        out vec4 outColor;

        uniform vec2 uResolution;
        uniform float filterStrength;


        vec4 BlurColor (in vec2 Coord, in sampler2D Tex, in float MipBias)
        {
            vec2 TexelSize = MipBias/uResolution.xy;
            vec4  Color = texture(Tex, Coord, MipBias);
            Color += texture(Tex, Coord + vec2(TexelSize.x,0.0), MipBias);      
            Color += texture(Tex, Coord + vec2(-TexelSize.x,0.0), MipBias);     
            Color += texture(Tex, Coord + vec2(0.0,TexelSize.y), MipBias);      
            Color += texture(Tex, Coord + vec2(0.0,-TexelSize.y), MipBias);     
            Color += texture(Tex, Coord + vec2(TexelSize.x,TexelSize.y), MipBias);      
            Color += texture(Tex, Coord + vec2(-TexelSize.x,TexelSize.y), MipBias);     
            Color += texture(Tex, Coord + vec2(TexelSize.x,-TexelSize.y), MipBias);     
            Color += texture(Tex, Coord + vec2(-TexelSize.x,-TexelSize.y), MipBias);    
            return Color/9.0;
        }

        void main() {
          float Threshold = 0.4;
          float Intensity = filterStrength*1.0;
          float BlurSize = 3.0 * Intensity;

          vec4 color = texture(_texture, texCoord);
          vec4 Highlight = clamp(BlurColor(texCoord.xy, _texture, BlurSize)-Threshold,0.0,1.0)*1.0/(1.0-Threshold);
          outColor = 1.0-(1.0-color)*(1.0-Highlight*Intensity); //Screen Blend Mode
        }
  `,{gl:n}=e,i=[n.canvas.width,n.canvas.height];e._.$bloom=e._.$bloom||new O(n,null,r),e.runFilter(e._.$bloom,{filterStrength:t,uResolution:i})}function qr(e,t){const r=`#version 300 es
        precision highp float;

        in vec2 texCoord;
        uniform sampler2D _texture;
        out vec4 outColor;

        uniform vec2 uResolution;
        uniform float filterStrength;

        #define SIGMA 10.0
        #define BSIGMA 0.1
        #define MSIZE 15

        float normpdf(in float x, in float sigma)
        {
          return 0.39894*exp(-0.5*x*x/(sigma*sigma))/sigma;
        }

        float normpdf3(in vec3 v, in float sigma)
        {
          return 0.39894*exp(-0.5*dot(v,v)/(sigma*sigma))/sigma;
        }

        vec4 applyFilter(vec4 c, sampler2D _texture, vec2 texCoord) {

          const int kSize = (MSIZE-1)/2;
          float kernel[MSIZE] = float[MSIZE](0.031225216, 0.033322271, 0.035206333, 0.036826804, 0.038138565, 0.039104044, 0.039695028, 0.039894000, 0.039695028, 0.039104044, 0.038138565, 0.036826804, 0.035206333, 0.033322271, 0.031225216);
          vec3 final_colour = vec3(0.0);
          
          vec3 cc;
          float factor;
          float Z = 0.0;
          float bZ = 1.0/normpdf(0.0, BSIGMA);
          for (int i=-kSize; i <= kSize; ++i)
          {
            for (int j=-kSize; j <= kSize; ++j)
            {
              cc = texture(_texture, (texCoord.xy+vec2(float(i),float(j))/uResolution)).rgb;
              factor = normpdf3(cc-c.rgb, BSIGMA)*bZ*kernel[kSize+j]*kernel[kSize+i];
              Z += factor;
              final_colour += factor*cc;
            }
          }
          
          return vec4(final_colour/Z, 1.0);
        }

        void main() {
          vec4 color = texture(_texture, texCoord);
          color = color * (1.0 - filterStrength) + applyFilter(color, _texture, texCoord) * filterStrength;
          outColor = color;
        }
  `,{gl:n}=e,i=[n.canvas.width,n.canvas.height];e._.$noise=e._.$noise||new O(n,null,r),e.runFilter(e._.$noise,{filterStrength:t,uResolution:i})}function te(e,t,r=3){let n=[];for(var i=0;i<r;i++){n.push([]);for(var o=0;o<r;o++){n[i].push(0);for(var a=0;a<r;a++)e[i]&&t[a]&&(n[i][o]+=e[i][a]*t[a][o])}}return n}const nt=Object.freeze(Object.defineProperty({__proto__:null,filterAdjustments:Yr,filterBlend:Xr,filterBloom:Kr,filterBlurBokeh:Hr,filterBlurGaussian:Wr,filterCurves:Gr,filterHighlightsShadows:Zr,filterInsta:zr,filterMatrix:Dr,filterNoise:qr,filterPerspective:Vr},Symbol.toStringTag,{value:"Module"}));function Jr(e,t,r){let n=e.getContext("webgl2",{antialias:!1,premultipliedAlpha:!0});if(!n)return console.error("webgl2 not supported!");r==="display-p3"?(n.drawingBufferColorSpace="display-p3",n.unpackColorSpace="display-p3"):(n.drawingBufferColorSpace="srgb",n.unpackColorSpace="srgb");const i={width:0,height:0,gl:n,img:t,destroy:l,loadImage:v,paintCanvas:h,crop:T,resetCrop:g,resize:C,resetResize:S,captureImage:_,readPixels:B,runFilter:p,setupFiltersTextures:d,_:{}};n.canvas.width=i.width=t.width,n.canvas.height=i.height=t.height;const o=new Y(n);o.loadImage(t);const a=new O(n),c=new O(n,null,Qr);let s,f=0;function d(){s?.length&&s.forEach(w=>w.destroy()),s=[];for(var A=0;A<2;++A){const w=new Y(n,n.canvas.width,n.canvas.height);s.push(w)}}d();function l(){s?.length&&s.forEach(A=>A.destroy()),E&&E.destroy(),o.destroy(),delete i.img_cropped}let u;function p(A,w){w&&A.uniforms(w),u&&u.use(),s[f%2].drawTo(),A.drawRect(),u=s[f%2],f++}function v(){E?u=E:u=o,p(a,null)}function h(){u&&u.use(),n.bindFramebuffer(n.FRAMEBUFFER,null),c.drawRect()}let m={width:0,height:0};function C(A,w){n.canvas.width=i.width=m.width=A,n.canvas.height=i.height=m.height=w,d()}function S(){m.width&&(m.width=m.height=0,n.canvas.width=i.width=x.width||t.width,n.canvas.height=i.height=x.height||t.height,d())}let E,x={width:0,height:0};function T({left:A,top:w,width:U,height:y}){const $=U*y*4,I=new Uint8Array($);p(a,{}),n.readPixels(A,w,U,y,n.RGBA,n.UNSIGNED_BYTE,I);const F=n.unpackColorSpace,j=new ImageData(new Uint8ClampedArray(I.buffer),U,y,{colorSpace:F});E=new Y(n),E.loadImage(j),n.canvas.width=i.width=x.width=U,n.canvas.height=i.height=x.height=y,d(),i.img_cropped=ot(j,F)}function g(){E&&(E.destroy(),E=null,x.width=x.height=0,n.canvas.width=i.width=m.width||t.width,n.canvas.height=i.height=m.height||t.height,delete i.img_cropped,d())}function _(A,w){p(a,{});const{width:U,height:y}=n.canvas,$=U*y*4,I=new Uint8Array($);n.readPixels(0,0,U,y,n.RGBA,n.UNSIGNED_BYTE,I);const F=n.unpackColorSpace,j=new ImageData(new Uint8ClampedArray(I.buffer),U,y,{colorSpace:F});return ot(j,F,A,w)}function B(){p(a,{});const{width:A,height:w}=n.canvas,U=A*w*4,y=new Uint8Array(U);return n.readPixels(0,0,A,w,n.RGBA,n.UNSIGNED_BYTE,y),y}function R(A){return function(...w){A(i,...w)}}return Object.keys(nt).forEach(A=>i[A]=R(nt[A])),i}const Qr=`#version 300 es
        precision highp float;
        in vec2 texCoord;
        uniform sampler2D _texture;
        out vec4 outColor;

        vec4 fromLinear(vec4 linearRGB) {
            bvec3 cutoff = lessThan(linearRGB.rgb, vec3(0.0031308));
            vec3 higher = vec3(1.055)*pow(linearRGB.rgb, vec3(1.0/2.4)) - vec3(0.055);
            vec3 lower = linearRGB.rgb * vec3(12.92);
            return vec4(mix(higher, lower, cutoff), linearRGB.a);
        }

        void main() {
            vec4 color = texture(_texture, vec2(texCoord.x, 1.0 - texCoord.y));
            //outColor = color;
            outColor = fromLinear(color);
        }`;function O(e,t,r){const n=`#version 300 es
        in vec2 vertex;
        out vec2 texCoord;

        void main() {
          texCoord = vertex;
          gl_Position = vec4(vertex * 2.0 - 1.0, 0.0, 1.0);
        }
      `,i=`#version 300 es
        precision highp float;

        in vec2 texCoord;
        uniform sampler2D _texture;
        out vec4 outColor;   

        void main() {
          outColor = texture(_texture, texCoord);
        }
      `,o=e.createProgram();let a;e.attachShader(o,f(e,e.VERTEX_SHADER,t||n)),e.attachShader(o,f(e,e.FRAGMENT_SHADER,r||i)),e.linkProgram(o);function c(d=!0,l,u,p,v){const h=e.getParameter(e.VIEWPORT);l=l!==void 0?(l-h[0])/h[2]:0,u=u!==void 0?(u-h[1])/h[3]:0,p=p!==void 0?(p-h[0])/h[2]:1,v=v!==void 0?(v-h[1])/h[3]:1,e.useProgram(o),e.vertexBuffer=e.vertexBuffer||e.createBuffer(),e.bindBuffer(e.ARRAY_BUFFER,e.vertexBuffer),e.bufferData(e.ARRAY_BUFFER,new Float32Array([l,u,l,v,p,u,p,v]),e.STATIC_DRAW),a||(a=e.getAttribLocation(o,"vertex"),e.enableVertexAttribArray(a)),e.vertexAttribPointer(a,2,e.FLOAT,!1,0,0),d&&(e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT|e.GL_DEPTH_BUFFER_BIT)),e.drawArrays(e.TRIANGLE_STRIP,0,4)}function s(d={}){e.useProgram(o);for(let l in d){const u=e.getUniformLocation(o,l);if(u===null)continue;let p=d[l];if(Array.isArray(p))switch(p.length){case 1:{Array.isArray(p[0])&&(p=p[0]),e.uniform1fv(u,new Float32Array(p));break}case 2:e.uniform2fv(u,new Float32Array(p));break;case 3:e.uniform3fv(u,new Float32Array(p));break;case 4:e.uniform4fv(u,new Float32Array(p));break;case 9:e.uniformMatrix3fv(u,!1,new Float32Array(p));break;case 16:e.uniformMatrix4fv(u,!1,new Float32Array(p));break;default:throw`dont't know how to load uniform "`+l+'" of length '+p.length}else if(p?.unit)e.uniform1i(u,p.unit);else if(typeof p=="number")e.uniform1f(u,p);else throw'attempted to set uniform "'+l+'" to invalid value '+(p||"undefined").toString()}}function f(d,l,u){var p=d.createShader(l);if(d.shaderSource(p,u),d.compileShader(p),!d.getShaderParameter(p,d.COMPILE_STATUS))throw"compile error: "+d.getShaderInfoLog(p);return p}return{drawRect:c,uniforms:s}}function Y(e,t,r){let n=t,i=r,o=e.createTexture();e.bindTexture(e.TEXTURE_2D,o),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE);const a=e.SRGB8_ALPHA8;t&&r&&e.texImage2D(e.TEXTURE_2D,0,a,t,r,0,e.RGBA,e.UNSIGNED_BYTE,null);function c(u=0){if(!o)return console.error("texture has been destroyed");e.activeTexture(e.TEXTURE0+u),e.bindTexture(e.TEXTURE_2D,o)}function s(){e.deleteTexture(o),o=null}function f(){if(!o)return console.error("texture has been destroyed");if(e.framebuffer=e.framebuffer||e.createFramebuffer(),e.bindFramebuffer(e.FRAMEBUFFER,e.framebuffer),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,o,0),e.checkFramebufferStatus(e.FRAMEBUFFER)!==e.FRAMEBUFFER_COMPLETE)throw new Error("incomplete framebuffer");e.viewport(0,0,n,i)}function d(u,p){if(!o)return console.error("texture has been destroyed");n=u.width,i=u.height,e.bindTexture(e.TEXTURE_2D,o);let v=p||e.SRGB8_ALPHA8;e.texImage2D(e.TEXTURE_2D,0,v,e.RGBA,e.UNSIGNED_BYTE,u)}function l(u,p,v,h){n=u,i=p,e.bindTexture(e.TEXTURE_2D,o);let m=h||e.SRGB8_ALPHA8;e.texImage2D(e.TEXTURE_2D,0,m,u,p,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array(v))}return{use:c,destroy:s,drawTo:f,loadImage:d,initFromBytes:l}}function ot(e,t,r,n){const i=document.createElement("canvas");var o=i.getContext("2d",{colorSpace:t});i.width=e.width,i.height=e.height,o.putImageData(e,0,0);var a=new Image;return a.src=i.toDataURL(r,n),a}const at="icon-BgvqB1Sr.png",lt="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAXVBMVEVHcEz////19fb////////////////7+/z////8/f3///////////////8kKS////8AAAYQFx4cISgCCxXp6eo8QEWTlZimqKq4ubrb3N3Oz9BjZmlsb3J5fH9SV1ti3zuCAAAADnRSTlMAjOkVW5+z7zfPDGEUCtxuPFoAAAFVSURBVCiRdZPbksIgDIapOlJ0hSScofj+j7mBVmud3Vx0MnyTP8cKsdltnpQ0Rqppvomjne/KlbA8n0ssTt3Pn2y+5ugBLKIF8Clf551dZPKAejNkLC87i/hGA1N80ZkZWUsv1H2Mcij/XBMStoVTAoxPa0iUrj9dNHsONMa1GmIMtTljONRnFn6oBBq1OZgmDUk9xOw8aoIjBNL4dLOYCnu2HmG1XFaehIrQnSPMXDtEJeRiNXrzZZzKNinME1n/i8n+WM0K/4rssMsSuSNzRENWBdDc1BGm/sYFcStaW38IXVsv0xiCJ1jKzgq3yXXwEB7caM0NfAuj2Rya7/tj1QcPvmgIRvM+RnDBsbx18H1lFoqpPsiRb+lxhOvKxHwKsPcyIGE4bWd0YepDTO9IsuG0H9GJlaG6FVqgtLN+miXAssJqQ/k8zXHUeUub89dR//M7/AKcSin3jX0wmQAAAABJRU5ErkJggg==",ei='<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><path d="M43 21v23.873h-8.604V35L20 50l14.396 15v-9.877H43V79h4.5V21H43zm9.5 0v58H57V55.125h8.605v9.873L80 50L65.605 35.004v9.869H57V21h-4.5z"></path></g></svg>',ti=`<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">\r
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 6C12 5.44772 11.5523 5 11 5C10.4477 5 10 5.44772 10 6V16C10 16.5523 10.4477 17 11 17C11.5523 17 12 16.5523 12 16V6ZM9 9C9 8.44772 8.55228 8 8 8C7.44772 8 7 8.44772 7 9V16C7 16.5523 7.44772 17 8 17C8.55228 17 9 16.5523 9 16V9ZM15 9C15 8.44772 14.5523 8 14 8C13.4477 8 13 8.44772 13 9V16C13 16.5523 13.4477 17 14 17C14.5523 17 15 16.5523 15 16V9ZM18 13C18 12.4477 17.5523 12 17 12C16.4477 12 16 12.4477 16 13V16C16 16.5523 16.4477 17 17 17C17.5523 17 18 16.5523 18 16V13ZM6 15C6 14.4477 5.55228 14 5 14C4.44772 14 4 14.4477 4 15V16C4 16.5523 4.44772 17 5 17C5.55228 17 6 16.5523 6 16V15ZM21 15C21 14.4477 20.5523 14 20 14C19.4477 14 19 14.4477 19 15V16C19 16.5523 19.4477 17 20 17C20.5523 17 21 16.5523 21 16V15ZM4 18C3.44772 18 3 18.4477 3 19C3 19.5523 3.44772 20 4 20H21C21.5523 20 22 19.5523 22 19C22 18.4477 21.5523 18 21 18H4Z"/>\r
</svg>`,ri=`<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">\r
  <path d="M10 3a7 7 0 100 14 7 7 0 000-14zm-9 7a9 9 0 1118 0 9 9 0 01-18 0zm8-4a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm.01 8a1 1 0 102 0V9a1 1 0 10-2 0v5z"/>\r
</svg>`;function Te({el:e,onStart:t,onMove:r,onEnd:n,onZoom:i,onPinch:o,disableleave:a=!1}){const c=[];let s=0,f,d,l=!0;const u=x=>{c.push(x),t&&t({el:e,ev:x}),f=x.clientX,d=x.clientY,l=!0},p=x=>{if(!c.length)return;const T=c.findIndex(g=>g.pointerId===x.pointerId);c.splice(T,1),n&&n({el:e,ev:x})},v=x=>{if(!c.length)return;const T=c.findIndex(g=>g.pointerId===x.pointerId);if(c[T]=x,c.length===1)r&&r({el:e,ev:x,x:x.clientX-f,y:x.clientY-d}),f=x.clientX,d=x.clientY;else if(c.length===2){const g=Math.abs(c[0].x-c[1].x);if(s>0){let _=g-s;l&&(l=!1,_*=-1),x.preventDefault(),o&&o({el:e,ev0:c[0],ev1:c[1],diff:_})}s=g}},h=x=>{x.touches.length===2&&x.preventDefault()},m=x=>{u(x)},C=x=>v(x),S=x=>{p(x)},E=x=>i&&i({el:e,ev:x,zoom:x.deltaY/100});return e.addEventListener("pointerdown",m),e.addEventListener("pointermove",C),e.addEventListener("pointerup",S),a||(e.addEventListener("pointercancel",S),e.addEventListener("pointerout",S)),e.addEventListener("pointerleave",S),e.addEventListener("touchstart",h),i&&e.addEventListener("wheel",E,{passive:!1}),()=>{e.removeEventListener("pointerdown",m),e.removeEventListener("pointermove",C),e.removeEventListener("pointerup",S),a||(e.removeEventListener("pointercancel",S),e.removeEventListener("pointerout",S)),e.removeEventListener("pointerleave",S),e.removeEventListener("touchstart",h),i&&e.removeEventListener("wheel",E)}}function st(e,t,r,n,i,o){e.style.transformOrigin||(e.style.transformOrigin="0 0");let a=e.style.transform.match(/translate\((.*?)\)/)?.[1].split(",").map(d=>parseFloat(d))||[0,0],c=e.style.transform.match(/scale\((.*?)\)/)?.[1].split(",").map(d=>parseFloat(d))[0]||1;var s={x:0,y:0},f={x:0,y:0};f.x=t.x-e.parentElement.offsetLeft,f.y=t.y-e.parentElement.offsetTop,r=Math.max(-1,Math.min(1,r/10)),r&&(s.x=(f.x-a[0])/c,s.y=(f.y-a[1])/c,c+=r*n*c,c=Math.max(i,Math.min(o,c)),a[0]=-s.x*c+f.x,a[1]=-s.y*c+f.y,e.style.transform="translate("+a[0]+"px,"+a[1]+"px) scale("+c+","+c+")")}function ct(e,t){const r=Te({el:t,onMove:i=>{const o=document.elementFromPoint(i.ev.pageX,i.ev.pageY);if(o===e||o===t)return;const a=i.el.style.transform.match(/translate\((.*?)\)/)?.[1].split(",").map(s=>parseFloat(s))||[0,0],c=i.el.parentElement.style.transform.match(/scale\((.*?)\)/)?.[1].split(",").map(s=>parseFloat(s))[0]||1;a[0]+=i.x/c,a[1]+=i.y/c,i.el.style.transform=`translate(${a[0]}px,${a[1]}px)`}}),n=Te({el:e,onZoom:i=>{const o=i.ev;o.preventDefault();const a={x:o.pageX,y:o.pageY},c=document.elementFromPoint(a.x,a.y);if(!(c===e||c===t)){var s=o.wheelDelta||o.detail;st(i.el,a,s,.06,.9,8)}},onPinch:i=>{const o=i.ev0,a=i.ev1,c={x:(o.pageX+a.pageX)/2,y:(o.pageY+a.pageY)/2},s=document.elementFromPoint(c.x,c.y);if(!(s===e||s===t)){var f=i.diff;st(i.el,c,f,.05*2,.9,8)}}});return()=>{r(),n()}}const Ee=new Map;function ve(e,t,r=100){if(!Ee.has(e)){const n=setTimeout(()=>{t(),Ee.delete(e)},r);Ee.set(e,n)}}async function Pt(e){let t=document.createElement("input");try{t.setAttribute("hidden",""),t.type="file",t.value=null,e&&(t.accept=e),document.body.appendChild(t);const r=await new Promise(i=>{t.onchange=i,t.oncancel=i,t.click()});if(t.remove(),r.type==="cancel")return;const n=r.target.files[0];return n||await se("Unsupported file format!")}catch(r){await se("Error opening file"),console.error(r)}}function ii(e,t){if(!e||!t)return console.error("download missing inputs");try{var r=document.createElement("a");r.href=URL.createObjectURL(e),r.download=t,r.click()}catch(n){console.error(n)}}async function Re(e,t=null){try{if(!e)return;const r=new FileReader;await new Promise(f=>r.onload=f,r.readAsArrayBuffer(e));const{name:n,size:i,type:o,lastModified:a}=e,c=new Blob([r.result],{type:o}),s=new Image;s.src=URL.createObjectURL(c),await s.decode(),t&&t(r.result,{name:n,size:i,type:o,lastModified:a},s)}catch(r){console.error(r),await se("Unknown format")}}function ni(e){var t=-1,r=[" kB"," MB"," GB"," TB","PB","EB","ZB","YB"];do e/=1024,t++;while(e>1024);return Math.max(e,.1).toFixed(1)+r[t]}const oi=async(e,t)=>{console.log(e);const r={files:[new File([t],e,{type:t.type})]};try{if(!navigator.canShare||!navigator.canShare(r))throw new Error("Can't share data.");await navigator.share(r)}catch(n){n.message!=="Share canceled"&&console.error(n.name,">",n.message)}};function ai(e){const t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",r=t==="dark"?"light":"dark",n=Z("thememode").value;n==="auto"?(root.classList.add(r),root.classList.remove(t),Z("thememode").value=r):n===r?(root.classList.add(t),root.classList.remove(r),Z("thememode").value=t):!e&&n===t?(root.classList.remove(r),root.classList.remove(t),Z("thememode").value="auto"):e&&n===t&&(root.classList.add(r),root.classList.remove(n),Z("thememode").value=r)}function li(e="auto",t=!1){Z("thememode")||Z("thememode",D(e)),e&&root.classList.add(e);const r={auto:"✻",dark:"☾",light:"✺"};return k`<div><a style="rotate:-90deg" :title="${()=>Z("thememode").value}" @click="${()=>ai(t)}">${()=>r[Z("thememode").value]}</a></div>`}function si(e){return new Worker("https://mini2-photo-editor.netlify.app/assets/histogram_worker-ogrrdkqj.js",{name:e?.name})}function ci(e,t){let r;ie(()=>{s(),t&&t(f),r&&r(),r=Te({el:histo,onMove:({ev:d,x:l,y:u,el:p})=>{d.stopPropagation();const v=p.style.transform.match(/translate\((.*?)\)/)?.[1].split(",").map(m=>parseFloat(m))||[0,0],h=1;v[0]+=l/h,v[1]+=u/h,p.style.transform=`translate(${v[0]}px,${v[1]}px)`}})}),ce(()=>{a.terminate(),r()});let n,i,o,a,c=!1;async function s(){try{n=new OffscreenCanvas(10,10),n.width=350,i=n.getContext("2d",{colorSpace:e,willReadFrequently:!0}),o=document.getElementById("histogram").getContext("2d"),a=new si,a.onmessage=async d=>{d.data.bitmap?(o.clearRect(0,0,o.canvas.width,o.canvas.height),o.drawImage(d.data.bitmap,0,0),c=!1):console.log(d.data)},a.onerror=d=>{throw console.error(`Worker error: ${d.message}`),d},a.postMessage({init:!0,width:o.canvas.width,height:o.canvas.height})}catch(d){console.error(d)}}async function f(){if(a&&!c){c=!0,n.height=n.width/(canvas.width/canvas.height),i.drawImage(canvas,0,0,canvas.width,canvas.height,0,0,n.width,n.height);const d=i?.getImageData(0,0,i.canvas.width,i.canvas.height).data;a.postMessage({pixels:d})}}return k`<div id="histo" style="position:absolute;left:10px;width:260px;height:100px;background-color:grey;padding:5px;cursor:pointer"><div style="position:absolute;color:grey;right:40px;font-size:80%">${e}</div><canvas id="histogram" width="256" height="150" style="width:100%;height:100%;background-color:#121212"></canvas></div>`}function ui(e){let t;return ie(async()=>{t=new maplibregl.Map({container:"map",style:"https://tiles.stadiamaps.com/styles/alidade_smooth.json",center:e,zoom:9}),new maplibregl.Marker().setLngLat(e).addTo(t)}),ce(()=>{t?.remove()}),k`<style>#map{height:180px;width:180px;color:#000;border-radius:15px;margin:10px auto}</style><style>.maplibregl-ctrl-attrib{display:none}</style><div id="map"></div>`}function fi(e,t,r){const n=t.crop;t.trs;const i=D(!0);ie(()=>{E(n.currentcrop),crop.addEventListener("pointerdown",C)}),ce(()=>{crop.removeEventListener("pointerdown",C)});let o=!1,a,c,s,f,d,l,u;const p=50,v=100;function h(g){o=!1,crop.releasePointerCapture(g.pointerId),crop.removeEventListener("pointermove",S),crop.removeEventListener("pointerup",h),m(),n.currentcrop=u,r&&r(u)}function m(){u=croprect.getBoundingClientRect();const{offsetTop:g,offsetLeft:_,offsetHeight:B,offsetWidth:R}=croprect;u={...JSON.parse(JSON.stringify(u)),offsetTop:g,offsetLeft:_,offsetHeight:B,offsetWidth:R},u.offsetBottom=l.height-g-B,u.offsetRight=l.width-_-R}function C(g){o=!0,crop.setPointerCapture(g.pointerId),crop.addEventListener("pointermove",S),crop.addEventListener("pointerup",h),n.ar?(croprect.style.aspectRatio=n.ar,i.value=!1):(croprect.style.aspectRatio="",i.value=!0),a={x:g.x,y:g.y},l=crop.getBoundingClientRect(),m();const _=B=>B>=0&&B<=p;c=_(a.x-u.left+10),s=_(u.right-a.x+10),f=_(a.y-u.top+10),d=_(u.bottom-a.y+10),croprect.style.top=croprect.offsetTop+"px",croprect.style.bottom=l.height-croprect.offsetTop-croprect.offsetHeight+"px",croprect.style.left=croprect.offsetLeft+"px",croprect.style.right=l.width-croprect.offsetLeft-croprect.offsetWidth+"px"}function S(g){if(o){let w=function(U,y,$){return Math.max(U,Math.min(y,$))},_=g.x-a.x,B=g.y-a.y,R=croprect.style.aspectRatio;const A=R.split("/")[0]/R.split("/")[1];f&&(R?(s||c)&&(croprect.style.top="auto",croprect.style.bottom=l.height-croprect.offsetTop-croprect.offsetHeight+"px"):croprect.style.top=w(0,u.offsetTop+B,u.offsetTop+u.offsetHeight-v)+"px"),d&&(R?(s||c)&&(croprect.style.top=croprect.offsetTop+"px",croprect.style.bottom="auto"):croprect.style.bottom=w(0,u.offsetBottom-B,u.offsetBottom+u.offsetHeight-v)+"px"),c&&(R?f?croprect.style.left=w(Math.max(0,l.width-u.offsetRight-(u.offsetTop+u.offsetHeight)*A),u.offsetLeft+_,u.offsetLeft+u.offsetWidth-v)+"px":croprect.style.left=w(Math.max(0,l.width-u.offsetRight-(l.height-u.offsetTop)*A),u.offsetLeft+_,u.offsetLeft+u.offsetWidth-v)+"px":croprect.style.left=w(0,u.offsetLeft+_,u.offsetLeft+u.offsetWidth-v)+"px"),s&&(R?f?croprect.style.right=w(Math.max(0,l.width-u.offsetLeft-(u.offsetTop+u.offsetHeight)*A),u.offsetRight-_,u.offsetRight+u.offsetWidth-v)+"px":croprect.style.right=w(Math.max(0,l.width-u.offsetLeft-(l.height-u.offsetTop)*A),u.offsetRight-_,u.offsetRight+u.offsetWidth-v)+"px":croprect.style.right=w(0,u.offsetRight-_,u.offsetRight+u.offsetWidth-v)+"px"),!f&&!d&&!c&&!s&&(croprect.style.top=w(0,u.offsetTop+B,l.height-u.offsetHeight)+"px",croprect.style.bottom=w(0,u.offsetBottom-B,l.height-u.offsetHeight)+"px",croprect.style.left=w(0,u.offsetLeft+_,l.width-u.offsetWidth)+"px",croprect.style.right=w(0,u.offsetRight-_,l.width-u.offsetWidth)+"px")}}function E(g){const _=document.getElementById("crop");if(_.style.width=Math.round(e.offsetWidth)+"px",_.style.height=Math.round(e.offsetHeight)+"px",n.ar?croprect.style.aspectRatio=n.ar:croprect.style.aspectRatio="",!g)croprect.style.inset="0",n.currentcrop=0;else{const B=g;croprect.style.inset=`${B.offsetTop}px ${B.offsetRight}px ${B.offsetBottom}px ${B.offsetLeft}px`}r&&r(g||0)}let x=0;function T(g){if(g.preventDefault(),x&&Date.now()-x<200)return E();x=Date.now()}return k`
      <div id="crop" @dblclick="${()=>E()}" @click="${T}" style="width:${e?.offsetWidth}px;height:${e?.offsetHeight}px">
       <div id="croprect" style="inset:0;">
          <div class="cropcorner" id="top_left" ></div>
          <div class="cropcorner" id="top_right" ></div>
          <div class="cropcorner" id="bottom_left" ></div>
          <div class="cropcorner" id="bottom_right" ></div>
          ${()=>i.value&&k`
            <div class="cropcorner" id="left" ></div>
            <div class="cropcorner" id="right" ></div>
            <div class="cropcorner" id="top" ></div>
            <div class="cropcorner" id="bottom" ></div>
          `}
        </div>
      </div>
  `}function di(e,t,r,n,i){ie(()=>{o(n),splitview_container.addEventListener("pointerdown",s)}),ce(()=>{splitview_container.removeEventListener("pointerdown",s)});function o(l){l||(n=.5),splitview.src=e.src,splitview.width=e.width,splitview.height=e.height,splitview_container.style.width=t,splitview_container.style.height=r,splitview_container.style.aspectRatio="auto "+e.width+"/"+e.height,splitview.style.clipPath=`inset(0px ${(1-n)*100}% 0px 0px)`,splitview_bar.style.left=`calc(${n*100}% - 5px)`}let a=!1,c;function s(l){a=!0,splitview_container.setPointerCapture(l.pointerId),splitview_container.addEventListener("pointermove",d),splitview_container.addEventListener("pointerup",f),c=l.clientX}function f(l){a=!1,splitview_container.releasePointerCapture(l.pointerId),splitview_container.removeEventListener("pointermove",d),splitview_container.removeEventListener("pointerup",f),i&&i(n)}function d(l){if(a){l.preventDefault(),l.stopPropagation();const u=1/splitview_container.clientWidth,p=zoomable.style.transform.match(/scale\((.*?)\)/)?.[1].split(",").map(v=>parseFloat(v))[0]||1;n+=(l.clientX-c)*u/p,c=l.clientX,n=Math.max(.1,Math.min(.9,n)),splitview.style.clipPath=`inset(0px ${(1-n)*100}% 0px 0px)`,splitview_bar.style.left=`calc(${n*100}% - 5px)`}}return k`<div id="splitview_container"><img id="splitview"><div id="splitview_bar"></div></div>`}function Pe(e,t,r,n){async function i(){try{const s=await Pt(t);if(!s)return;r(s)}catch(s){console.error(s)}}function o(s){s.preventDefault();const f=s.target;f.style.borderColor="";let d;if(s.dataTransfer.items){const l=s.dataTransfer.items[0];if(!l.type.match("^"+t.split(",").map(u=>"^"+u).join("|")))return se("unknown format");d=l.getAsFile()}else d=s.dataTransfer.files[0];r(d)}function a(s){s.preventDefault();const f=s.target;f.style.borderColor||(f.style.borderColor="darkorange")}function c(s){s.preventDefault();const f=s.target;f.style.borderColor&&(f.style.borderColor="")}return k`<button id="clickdrop_btn" @click="${i}" @drop="${o}" @dragover="${a}" @dragleave="${c}" style="${n||""}">${e}</button>`}var Ae=/iPhone/i,ut=/iPod/i,ft=/iPad/i,dt=/\biOS-universal(?:.+)Mac\b/i,Be=/\bAndroid(?:.+)Mobile\b/i,pt=/Android/i,ae=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,me=/Silk/i,q=/Windows Phone/i,ht=/\bWindows(?:.+)ARM\b/i,vt=/BlackBerry/i,gt=/BB10/i,mt=/Opera Mini/i,xt=/\b(CriOS|Chrome)(?:.+)Mobile/i,bt=/Mobile(?:.+)Firefox\b/i,yt=function(e){return typeof e<"u"&&e.platform==="MacIntel"&&typeof e.maxTouchPoints=="number"&&e.maxTouchPoints>1&&typeof MSStream>"u"};function pi(e){return function(t){return t.test(e)}}function hi(e){var t={userAgent:"",platform:"",maxTouchPoints:0};!e&&typeof navigator<"u"?t={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0}:typeof e=="string"?t.userAgent=e:e&&e.userAgent&&(t={userAgent:e.userAgent,platform:e.platform,maxTouchPoints:e.maxTouchPoints||0});var r=t.userAgent,n=r.split("[FBAN");typeof n[1]<"u"&&(r=n[0]),n=r.split("Twitter"),typeof n[1]<"u"&&(r=n[0]);var i=pi(r),o={apple:{phone:i(Ae)&&!i(q),ipod:i(ut),tablet:!i(Ae)&&(i(ft)||yt(t))&&!i(q),universal:i(dt),device:(i(Ae)||i(ut)||i(ft)||i(dt)||yt(t))&&!i(q)},amazon:{phone:i(ae),tablet:!i(ae)&&i(me),device:i(ae)||i(me)},android:{phone:!i(q)&&i(ae)||!i(q)&&i(Be),tablet:!i(q)&&!i(ae)&&!i(Be)&&(i(me)||i(pt)),device:!i(q)&&(i(ae)||i(me)||i(Be)||i(pt))||i(/\bokhttp\b/i)},windows:{phone:i(q),tablet:i(ht),device:i(q)||i(ht)},other:{blackberry:i(vt),blackberry10:i(gt),opera:i(mt),firefox:i(bt),chrome:i(xt),device:i(vt)||i(gt)||i(mt)||i(bt)||i(xt)},any:!1,phone:!1,tablet:!1};return o.any=o.apple.device||o.android.device||o.windows.device||o.other.device,o.phone=o.apple.phone||o.android.phone||o.windows.phone,o.tablet=o.apple.tablet||o.android.tablet||o.windows.tablet,o}async function vi(e){return e.split(",")[0].match(/:(.*?);/)[1],fetch(e).then(function(r){return r.arrayBuffer()})}async function gi(e,t,r){const n=e.value,i=n.file.name,o=D(i),a=D("jpeg"),c=D("0.9");s();function s(){a.value==="jpeg"?!i.toLowerCase().endsWith(".jpeg")&&!i.toLowerCase().endsWith(".jpg")?o.value=i+".jpg":o.value=i:i.toLowerCase().endsWith(".png")?o.value=i:o.value=i+".png"}function f(l){a.value=l.target.value,s()}if(await St(()=>k`<div style="margin:10px 0"><div style="height:38px">Download image</div><div style="display:flex;flex-direction:column;font-size:14px"><div><input style="width:225px;font-size:14px" type="text" :value="${()=>o.value}" @change="${l=>o.value=l.target.value}"> <select style="width:60px;height:29px;font-size:14px" @change="${f}"><option value="jpeg" selected="selected">jpeg</option><option value="png">png</option></select></div><div style="height:60px;display:flex;justify-content:space-between;align-items:center">${()=>a.value==="jpeg"&&k`<div style="display:flex;align-items:center"><label style="color:gray;margin-right:10px">Quality</label> <input type="range" min="0.1" max="1.0" step="0.1" :value="${()=>c.value}" @input="${l=>c.value=l.target.value}"> <span style="width:30px;text-align:right">${()=>c.value.padEnd(3,".0")}</span></div>`}</div></div></div>`)){const l=t.extract();let p=r.captureImage("image/"+a.value,a.value==="jpeg"&&parseFloat(c.value)).src;const v=await vi(p),h=Tt(v);l&&(h.replace(l),n?.tiff?.Orientation&&h.patch({area:"tiff",field:"Orientation",value:1})),hi(window.navigator).any?oi(o.value,new Blob([h.image()])):h.download(o.value)}}const mi=`<svg style="width:60%;" viewBox="0 0 256 256"  xmlns="http://www.w3.org/2000/svg">
<rect x="54.8183" y="90.0903" width="120.743" height="120.743" rx="14.2449"  stroke-width="17.6366" fill="transparent"/>
<path d="M221.004 115.176L221.004 89.1424C221.004 63.8095 200.046 43.2732 174.193 43.2732L149.101 43.2732" stroke-width="17.6366" stroke-linecap="round" fill="transparent"/>
<path d="M131.428 47.5313C128.678 45.3586 128.678 41.1878 131.428 39.0151L155.912 19.671C159.471 16.8597 164.703 19.3941 164.703 23.929L164.703 62.6174C164.703 67.1523 159.471 69.6868 155.912 66.8755L131.428 47.5313Z" />
</svg>`,wt=`<svg style="width:60%;" viewBox="0 0 256 256"  xmlns="http://www.w3.org/2000/svg">
<path d="M40.2407 220.5L102.5 112.324L102.5 220.5H40.2407Z"  stroke-width="13" stroke-linejoin="round" fill="transparent"/>
<path d="M211.759 220.5L149.5 112.324L149.5 220.5H211.759Z"  stroke-width="13" stroke-linejoin="round" fill="transparent"/>
<line x1="78" y1="59.5" x2="174" y2="59.5"  stroke-width="13"/>
<path d="M45.3896 63.5218C42.6395 61.3491 42.6395 57.1783 45.3896 55.0056L69.8741 35.6614C73.4324 32.8501 78.6648 35.3846 78.6648 39.9195L78.6648 78.6079C78.6648 83.1428 73.4324 85.6773 69.8741 82.8659L45.3896 63.5218Z" />
<path d="M207.163 55.0056C209.913 57.1783 209.913 61.349 207.163 63.5217L182.679 82.8659C179.12 85.6772 173.888 83.1428 173.888 78.6078L173.888 39.9195C173.888 35.3846 179.12 32.8501 182.679 35.6614L207.163 55.0056Z" />
</svg>`,xi='<svg style="width:50%;" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg"><g stroke-width="0"></g><g  stroke-linecap="round" stroke-linejoin="round"></g><g ><path d="M 5.4648 42.5781 C 7.5272 42.5781 9.3085 41.3594 10.1757 39.6016 L 45.4724 49.9609 C 46.0820 52.2109 48.1211 53.875 50.5585 53.875 C 53.4179 53.875 55.7852 51.5313 55.7852 48.6484 C 55.7852 46.4687 54.4489 44.5937 52.5505 43.7969 L 51.5665 20.2422 C 53.5820 19.5156 55.0350 17.5703 55.0350 15.2969 C 55.0350 12.4140 52.6681 10.0703 49.8083 10.0703 C 47.9099 10.0703 46.2227 11.1016 45.3083 12.625 L 25.7851 7.2578 C 25.7851 4.4922 23.4179 2.1250 20.5585 2.1250 C 17.6757 2.1250 15.3085 4.4922 15.3085 7.3750 C 15.3085 8.9219 15.9882 10.3281 17.0897 11.2891 L 6.2148 32.1484 C 5.9804 32.1016 5.7226 32.1016 5.4648 32.1016 C 2.5819 32.1016 .2148 34.4453 .2148 37.3281 C .2148 40.2109 2.5819 42.5781 5.4648 42.5781 Z M 20.5585 12.625 C 22.2694 12.625 23.8163 11.7578 24.7772 10.4453 L 44.5820 15.9062 C 44.8398 17.9922 46.3163 19.7266 48.2852 20.3125 L 49.1056 43.5859 C 47.5585 44.0547 46.2928 45.2031 45.6836 46.6797 L 10.5976 36.3672 C 10.4101 35.3828 9.9413 34.4687 9.2851 33.7656 L 20.1601 12.6016 C 20.2772 12.6016 20.4179 12.625 20.5585 12.625 Z"></path></g></svg>';function It(e,t,r,n){let o=t.slice(0);const{top:a,left:c}=e.getBoundingClientRect();let s=e.offsetWidth,f=e.offsetHeight,d,l=!1,u;ie(()=>{mousecontainer.addEventListener("pointerdown",m),d=mousecanvas.getContext("2d"),S()}),ce(()=>{mousecontainer.removeEventListener("pointerdown",m)});function p(x,T,g){return Math.max(x,Math.min(g,T))}function v(x){var T=p(0,x.offsetX/s,1),g=p(0,x.offsetY/f,1);o[u]=[T,g]}function h(x){l=!1,u=void 0,mousecontainer.releasePointerCapture(x.pointerId),mousecontainer.removeEventListener("pointermove",C),mousecontainer.removeEventListener("pointerup",h)}function m(x){l=!0;const T=document.elementFromPoint(x.x,x.y);T.id.startsWith("mouse")&&(u=parseInt(T.id.replace("mouse",""))),mousecontainer.setPointerCapture(x.pointerId),mousecontainer.addEventListener("pointermove",C),mousecontainer.addEventListener("pointerup",h);const{left:g,top:_}=T.getBoundingClientRect();v(x)}function C(x){l&&u!==void 0&&(v(x),ve("mouse",()=>S(),20))}function S(){document.getElementById("mouse0")&&(o.forEach((x,T)=>{const g=document.getElementById("mouse"+T),_=x[0]*s-g.offsetWidth/2+"px",B=x[1]*f-g.offsetHeight/2+"px";g.style.left!==_&&(g.style.left=_),g.style.top!==B&&(g.style.top=B)}),r&&r(o,d))}function E(){n?o=n(o):o=t.slice(0),S()}return k`
      <style>
        #mousecontainer{position: fixed;top:${a}px;left:${c}px;width:${s}px;height:${f}px;}
        #mousecanvas{overflow:hidden;border:0px solid white;}
        .point{position:absolute;width: ${45}px;height: ${45}px;background-color:white; border-radius: 50%;cursor:pointer;border: 15px solid transparent;background-clip: padding-box;box-sizing: border-box;}
      </style>
      <div id="mousecontainer" @dblclick="${E}">
        <canvas id="mousecanvas" width="${s}" height="${f}"></canvas>
        ${o?.map((x,T)=>k`
            <div id="mouse${T}" style="left:${x[0]*s-45/2}px;top:${x[1]*f-45/2}px;" class="point" ></div>
          `)}
      </div>
  `}function bi(e,t,r){let n=[[.25,.25],[.75,.25],[.75,.75],[.25,.75]],i=t?.quad||n,o=!0;function a(s,f){f.clearRect(0,0,mousecanvas.width,mousecanvas.height),f.lineWidth=3,f.strokeStyle="red",f.beginPath();for(var d=0;d<4;d++){const l=s[d][0]*mousecanvas.width,u=s[d][1]*mousecanvas.height;f.lineTo(l,u)}f.closePath(),f.stroke(),o?o=!1:t.modified||(t.modified=!0),t.quad=s,r&&r()}function c(s){return t.modified=!1,n}return k`<style>#mousecanvas{background-image:repeating-linear-gradient(#ccc 0 1px,transparent 1px 100%),repeating-linear-gradient(90deg,#ccc 0 1px,transparent 1px 100%);background-size:9.99% 9.99%}</style>${It(e,i,a,c)}`}function ne(e,t,r,n,i,o,a){function c(){n[e]?.$skip||o&&o(e)}function s(f){f.preventDefault(),f.stopPropagation();const d=document.getElementById("btn_skip_"+e),l=document.getElementById(e),u=document.getElementById(e+"_content");n[e].$skip?(n[e].$skip=!1,d?.removeAttribute("disabled"),l?.removeAttribute("skipped"),u?.classList.remove("skip"),l.style.opacity="",i(!0)):(n[e].$skip=!0,d?.setAttribute("disabled",!0),l?.setAttribute("skipped",!0),u?.classList.add("skip"),i(!1))}return k`<div class="section" id="${e}" :style="${()=>r.value===e&&`height:${t}px;`}" :selected="${()=>r.value===e}" @click="${f=>{f.stopPropagation(),r.value=e}}"><div class="section_header">${!!i&&k`<a id="btn_skip_${e}" class="section_skip" @click="${s}" title="toggle">\u2609</a>`} <b class="section_label">${e}</b> ${!!o&&k`<a id="btn_reset_${e}" class="reset_btn" @click="${c}" disabled="disabled" title="reset">\u00D8</a>`}</div>${()=>r.value===e&&k`<div id="${e}_content" class="section_content ${n[e]?.$skip?"skip":""}" @click="${f=>f.stopPropagation()}"><div class="section_scroll"><hr><button class="close_btn" @click="${()=>r.value=""}">X</button> ${a}</div></div>`}</div>`}function yi(e,t,r,n,i){let o,a;D(()=>{e.value==="composition"?(o=n(),o.resetCrop(),p[1]=o.gl.canvas.width/o.gl.canvas.height,p[2]=1/p[1],h(),r(),a=e.value):a==="composition"&&(g(),a=void 0,c())},{effect:!0});async function c(){const y=t;if(!croprect)return;crop.style.display="";const $=canvas.width/crop.offsetWidth;y.crop.glcrop={left:Math.round(croprect.offsetLeft*$),top:Math.round(croprect.offsetTop*$),width:Math.round(croprect.offsetWidth*$),height:Math.round(croprect.offsetHeight*$)},r(),i()}function s(){if(!document.getElementById("croprect"))return;Object.keys(t.crop).forEach(F=>{t.crop[F]=0}),v(0),h(),Object.keys(t.trs).forEach(F=>{t.trs[F]=0,S("trs_"+F)}),Object.keys(t.perspective).forEach(F=>{t.perspective[F]=0});const $=document.getElementById("fliph"),I=document.getElementById("flipv");$.removeAttribute("selected"),I.removeAttribute("selected"),g(),f(),A(),l(),r()}function f(y){const $=document.getElementById("crop"),I=document.getElementById("croprect");$.style.width=Math.round(canvas.getBoundingClientRect().width)+"px",$.style.height=Math.round(canvas.getBoundingClientRect().height)+"px",t.crop.ar&&(I.style.aspectRatio=t.crop.ar),I.style.inset="0",t.crop.currentcrop=0}function d(y){y==="v"?(t.trs.flipv=!t.trs.flipv,t.trs.flipv?flipv.setAttribute("selected",!0):flipv.removeAttribute("selected")):(t.trs.fliph=!t.trs.fliph,t.trs.fliph?fliph.setAttribute("selected",!0):fliph.removeAttribute("selected")),l(),r()}function l(){Object.values(t.trs).reduce(($,I)=>$+=I,0)===0&&Object.values(t.crop).reduce(($,I)=>$+=I,0)===0&&t.perspective.modified==0&&t.resizer.width===0?btn_reset_composition.setAttribute("disabled",!0):btn_reset_composition.removeAttribute("disabled")}const u=["free","pic","1:pic","1:1","4:3","16:9","3:4","9:16"];let p=[0,0,0,1,4/3,16/9,3/4,9/16];function v(y){g(),t.crop.arindex=y,t.crop.ar=p[y],croprect&&(croprect.style.aspectRatio=p[y]);const $=document.getElementById("aspects");$&&($.querySelector("[selected]")?.removeAttribute("selected"),$.querySelector("#ar_"+y)?.setAttribute("selected",!0)),l()}function h(){const{width:y,height:$}=o;t.crop.canvas_angle%180?(o.gl.canvas.width=$,o.gl.canvas.height=y):(o.gl.canvas.width=y,o.gl.canvas.height=$),o.setupFiltersTextures(),i()}function m(y){t.crop.canvas_angle=(t.crop.canvas_angle+y)%360,h(),crop.style.width=Math.round(canvas.getBoundingClientRect().width)+"px",crop.style.height=Math.round(canvas.getBoundingClientRect().height)+"px",croprect.style.inset="0",g(),l(),r()}function C(y){const $=y.target.value,I=this.id.split("_");if(t[I[0]][I[1]]=parseFloat($),I.length===3?this.nextElementSibling.value=$:this.previousElementSibling.value=$,I[1]==="angle"){const F=parseFloat(Math.abs($))*Math.PI/180,j=canvas.width*Math.cos(F)+canvas.height*Math.sin(F),oe=canvas.width*Math.sin(F)+canvas.height*Math.cos(F),b=Math.max(j/canvas.width-1,oe/canvas.height-1);t.trs.scale=b,l()}r()}function S(y){const $=document.getElementById(y);if(!$)return;const I=y.split("_");$.value=t[I[0]][I[1]],$.previousElementSibling.value=$.value}function E(){if(!this)return;const y=this.id.split("_");t[y[0]][y[1]]=0,S(this.id),y[1]==="angle"&&(t.trs.scale=0),l(),r()}let x=D(!1);async function T(){x.value=t.perspective,crop.style.display="none"}function g(){const y=document.getElementById("crop");y&&(y.style.display=""),x.value=!1}function _(){x.value?g():T()}const B=D(100);function R(y,$){resize_width.value=t.resizer.width=y,resize_height.value=t.resizer.height=$,o.resize(y,$),B.value=Math.round(y/o.img.width*1e3)/10,h(),f(),l(),r()}function A(){o.resetResize(),t.resizer.width=0,t.resizer.height=0,resize_width.value=o.width,resize_height.value=o.height,B.value=100}function w(){const y=p[1],$=Math.max(100,this.value),I=Math.floor($/y);R($,I)}function U(){const y=p[1],$=Math.max(100,this.value),I=Math.floor($*y);R(I,$)}return k`${ne("composition",235,e,t,null,s,()=>k`<style>.crop_btn{width:38px;color:#fff;padding:0;margin:2px;border-radius:50%;fill:white;stroke:white;font-size:12px}.close_btn{display:none!important}</style><button class="done_btn" @click="${()=>e.value=""}">done</button><div style="display:flex;justify-content:flex-end;color:grey;margin-right:3px"><div style="flex:1;align-content:center;text-align:left"><span>rotation </span><input id="trs_angle_" style="width:75px" type="number" class="rangenumb" step="0.25" min="-45" max="45" value="${t.trs.angle}" @input="${C}"> <input id="trs_angle" type="range" value="${t.trs.angle}" min="-45" max="45" step="0.25" @input="${C}" @dblclick="${E}"></div><button id="fliph" class="crop_btn" title="flip x" selected="${!!t.trs.fliph}" @click="${()=>d("h")}">${wt}</button> <button id="flipv" class="crop_btn" title="flip y" selected="${!!t.trs.flipv}" @click="${()=>d("v")}" style="rotate:270deg">${wt}</button> <button class="crop_btn" title="rotate left" @click="${()=>m(-90)}">${mi}</button> <button class="crop_btn" title="perspective" :selected="${()=>!!x.value}" @click="${_}">${xi}</button></div><hr><div style="text-align:left;color:gray">crop ratio</div><div style="text-align:left" id="aspects">${u.map((y,$)=>k`<button id="ar_${$}" @click="${()=>v($)}" class="crop_btn" selected="${$===t.crop.arindex}" @dblclick="${f}">${y}</button>`)}</div><hr><div style="text-align:left;color:gray">image size</div><div style="display:flex;justify-content:space-around;align-items:center"><div style="width:100px;text-align:left;color:gray">(${()=>B.value+"%"})</div><input id="resize_width" type="number" value="${canvas.width}" style="text-align:center;width:90px" @change="${w}"> x <input id="resize_height" type="number" value="${canvas.height}" style="text-align:center;width:90px" @change="${U}"></div>${()=>x.value&&k`${bi(canvas,x.value,()=>{l(),r()})}`}`)}`}function wi(e,t,r){const n={lights:190,colors:150,effects:105};D(()=>{e.value===null&&["lights","colors","effects"].forEach(u=>c(u))},{effect:!0});function i(u){return Object.values(t[u]).reduce((p,v)=>p+=v,0)===0}function o(u){for(const p of Object.keys(t[u]))t[u][p]=0,d(u+"_"+p)}function a(u){o(u),r(),c(u)}function c(u){const p=document.getElementById("btn_reset_"+u);p&&(i(u)?p.setAttribute("disabled",!0):p.removeAttribute("disabled"))}function s(u){ve("param",()=>f.call(this,u),30)}function f(u){const p=u.target.value,v=this.id.split("_");t[v[0]][v[1]]=parseFloat(p),d(this.id),r(),c(v[0])}function d(u){const p=document.getElementById(u);if(!p)return;const v=u.split("_");p.value=t[v[0]][v[1]],v.length===3?p.previousElementSibling.value=p.value:p.nextElementSibling.value=p.value}function l(){if(!this)return;const u=this.id.split("_");t[u[0]][u[1]]=0,d(this.id),r(),c(u[0])}return k`${["lights","colors","effects"].map(u=>k`${ne(u,n[u],e,t,r,a,()=>k`${Object.keys(t[u]).filter(p=>!p.startsWith("$")).map(p=>k`/* RANGE INPUTS */<div style="display:flex;justify-content:space-around;align-items:center"><div class="rangelabel">${p}</div><input id="${u+"_"+p}" type="range" style="width:130px" value="${t[u][p]}" min="-1" max="1" step="0.01" @input="${s}" @dblclick="${l}"> <input id="${u+"_"+p+"_"}" type="number" class="rangenumb" value="${t[u][p]}" min="-1" max="1" step="0.01" @input="${s}"></div>`)}`)}`)}`}function _i(e,t){const i=D(e?.numpoints||5);let o=e?.space||0,a=e?.curvepoints||new Array(4).fill(null),c=new Array(4);a.forEach((g,_)=>{g?c[_]=!0:c[_]=null});function s(g){a[g]=[];for(let _=0;_<i._value;_++){const B=_/(i._value-1);a[g].push([B,B])}c[g]=null}function f(){s(o),T()}a[o]?.length||s(o);let d,l,u;ie(()=>{curvecontainer.addEventListener("pointerdown",C),d=curvescanvas.offsetWidth,l=curvescanvas.offsetHeight,u=curvescanvas.getContext("2d"),p("space"+o),e.resetFn=()=>{e.space=0,e.curvepoints=null,o=0,a=new Array(4).fill(null),p("space"+o)}}),ce(()=>{curvecontainer.removeEventListener("pointerdown",C)});function p(g){g=typeof g=="string"?g:this?.id;const _=document.getElementById(g);_&&(cccolors.getElementsByClassName("selected")[0]?.classList.remove("selected"),_.classList.add("selected"),o=parseInt(g.replace("space","")),e.space=o,a[o]||s(o),T())}let v=!1,h;function m(g){v=!1,curvecontainer.releasePointerCapture(g.pointerId),curvecontainer.removeEventListener("pointermove",x),curvecontainer.removeEventListener("pointerup",m),h=void 0}function C(g){v=!0,curvecontainer.setPointerCapture(g.pointerId),curvecontainer.addEventListener("pointermove",x),curvecontainer.addEventListener("pointerup",m),d=curvescanvas.offsetWidth,l=curvescanvas.offsetHeight;const _=document.elementFromPoint(g.x,g.y);_.id.startsWith("pt")&&(h=parseInt(_.id.replace("pt",""))),c[o]=!0,E(g)}function S(g,_,B){return Math.max(g,Math.min(B,_))}function E(g){const _=h?a[o][h-1][0]+.1:0,B=h<i._value-1?a[o][h+1][0]-.1:1;var R=S(_,g.offsetX/d,B),A=S(0,1-g.offsetY/l,1);a[o][h]=[R,A]}function x(g){v&&h!==void 0&&(E(g),ve("curve",()=>T(),20))}function T(){if(!a?.[o])return;a[o].forEach((w,U)=>{const y=document.getElementById("pt"+U);y.style.left=w[0]*d-45/2+"px",y.style.bottom=w[1]*l-45/2+"px"});const g=a[o].map(w=>w[0]),_=a[o].map(w=>w[1]),B=new Ge(a[o]);let R;u.clearRect(0,0,256,256),u.lineWidth=4,u.strokeStyle="#4B4947",u.beginPath();for(var A=0;A<256;A++)A<g[0]*256?R=_[0]:A>g[g.length-1]*256?R=_[_.length-1]:R=S(0,B.at(A/255),1),u.lineTo(A,(1-R)*256);u.stroke(),u.fillStyle="white",t&&t(a,c)}return k`
      <style>
        #curvecontainer{position: relative;width:200px;height: 120px;margin:auto;background-image: radial-gradient(#5b5b5b 1px, transparent 0);background-size: 10% 10%;border-radius: 10px;border: 1px solid #5b5b5b;}
        #curvescanvas{width:inherit;height: inherit;overflow:hidden;border:0px solid white;}
        .point{position:absolute;background-color: white; width: ${45}px;height: ${45}px; border-radius: 50%;cursor:pointer;border: 17px solid transparent;background-clip: padding-box;box-sizing: border-box;}
      </style>
      <div id="cccolors" style="display:flex;flex-direction:row; max-width:275px;">
        <div style="width:60px;">
          <button id="space0" @click="${p}" class="clrspace selected" style="border-color:white;" title="all colors"></button>
          <button id="space1" @click="${p}" class="clrspace" style="border-color:#c13119;" title="red"></button>
          <button id="space2" @click="${p}" class="clrspace" style="border-color:#0c9427;" title="green"></button>
          <button id="space3" @click="${p}" class="clrspace" style="border-color:#1e73be;" title="blue"></button>
        </div>
        <div id="curvecontainer" @dblclick="${f}">
          <canvas id="curvescanvas" width=${256} height=${256}></canvas>
          ${()=>i.value&&a[o]?.map((g,_)=>k`
              <div id="pt${_}" class="point"></div>
            `)}
        </div>
      </div>
  `}function Ci(e,t,r){let n=t.curve,i={space:0,numpoints:5,curvepoints:t.curve?.curvepoints||null,modifiedflag:null,resetFn:null};D(()=>{e.value===null&&t.curve?.curvepoints&&(n=t.curve,o(n.curvepoints,[!0,!0,!0,!0]))},{effect:!0});function o(s,f){i.curvepoints=f.map((d,l)=>d&&s[l]),i.curvepoints.reduce((d,l)=>d+=l,0)===0?n.curvepoints=0:n.curvepoints=i.curvepoints,c(),r()}function a(){i.resetFn&&i.resetFn()}function c(){document.getElementById("btn_reset_curve")&&(i?.curvepoints?.reduce((f,d)=>f+=d,0)===0?btn_reset_curve?.setAttribute("disabled",!0):btn_reset_curve?.removeAttribute("disabled"))}return k`${ne("curve",190,e,t,r,a,()=>k`<div class="cc_container">${()=>_i(i,o)}</div>`)}`}const Si='<svg xml:space="preserve" viewBox="0 0 100 100" y="0" x="0" xmlns="http://www.w3.org/2000/svg" id="圖層_1" version="1.1" style="margin: initial; display: block; shape-rendering: auto; background: transparent;" preserveAspectRatio="xMidYMid"><g class="ldl-scale" style="transform-origin: 50% 50%; transform: rotate(0deg) scale(0.8, 0.8);"><g class="ldl-ani" style="transform-box: view-box; opacity: 1; transform-origin: 50px 50px; transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1); animation: 1s linear 0s infinite normal forwards running animate;"><g class="ldl-layer"><g class="ldl-ani" style="transform-box: view-box;"><path fill="inherit" d="M89.982 48.757h-.002a40.04 40.04 0 0 0-2.246-12.003l-.125-.332a40.721 40.721 0 0 0-.574-1.517l-.334-.774a33.907 33.907 0 0 0-.487-1.112l-.078-.168c-.166-.355-.344-.705-.531-1.075l-.187-.367c-.13-.249-.266-.495-.404-.744l-1.44-2.406a38.537 38.537 0 0 0-.666-1.001l-1.74-2.292L59.423 62.63h28.506l.406-1.328c.048-.151.095-.303.137-.451a40.634 40.634 0 0 0 .717-2.97 36.2 36.2 0 0 0 .187-.96c.112-.631.202-1.266.284-1.905l.042-.314c.029-.208.057-.415.077-.619.107-1.026.174-1.96.201-2.843l.02-1.137-.018-1.346z"  ></path></g></g><g class="ldl-layer"><g class="ldl-ani" style="transform-box: view-box;"><path fill="inherit" d="M58.024 89.163l1.838-.429c.358-.091.714-.187 1.073-.288.58-.165 1.156-.346 1.728-.536l.178-.059c.285-.094.569-.189.847-.29.607-.22 1.204-.463 1.797-.711l.27-.11c.199-.081.398-.161.598-.251a41.757 41.757 0 0 0 2.686-1.315l.21-.115c.214-.116.404-.225.584-.331l1.229-.729a40.14 40.14 0 0 0 4.94-3.618 40.837 40.837 0 0 0 2.129-1.971l.121-.113a40.584 40.584 0 0 0 4.588-5.474l.121-.175c.208-.303.411-.61.688-1.037l2.006-3.501c.161-.315.324-.641.412-.844l1.029-2.795H43.77l14.254 24.692z"  ></path></g></g><g class="ldl-layer"><g class="ldl-ani" style="transform-box: view-box;"><path fill="inherit" d="M20.094 76.527l.955 1.023c.106.115.21.229.318.341a41.011 41.011 0 0 0 2.12 2.022l.196.174c.208.186.418.37.631.549.49.412.995.806 1.503 1.192l.244.19c.169.131.337.263.51.388A40.702 40.702 0 0 0 28.934 84l1.219.724c.187.11.376.219.584.334l.337.178c.759.407 1.536.776 2.445 1.194.106.054.213.107.311.149a39.841 39.841 0 0 0 8.692 2.698l.157.032c.622.115 1.244.217 1.859.303l.564.066c.501.063 1.002.125 1.499.168l.183.017c.391.03.78.054 1.269.08l.359.017c.272.011.542.018.91.024l.697.009.854-.014c.246-.005.495-.011.736-.021l.432-.02c.391-.021.78-.045 1.321-.088l2.649-.483L34.347 51.84 20.094 76.527zm26.815 11.795v.002-.002z"  ></path></g></g><g class="ldl-layer"><g class="ldl-ani" style="transform-box: view-box;"><path fill="inherit" d="M79.906 23.463l-.961-1.029a13.335 13.335 0 0 0-.326-.349 39.14 39.14 0 0 0-2.12-2.021l-.116-.103c-.228-.202-.454-.404-.685-.598a38.415 38.415 0 0 0-1.539-1.219l-.234-.183c-.16-.125-.32-.249-.489-.373a40.813 40.813 0 0 0-2.371-1.601l-2.148-1.239a40.129 40.129 0 0 0-11.527-4.055 39.84 39.84 0 0 0-3.868-.537 1.465 1.465 0 0 0-.22-.023l-2.452-.123-.05 1.115-.127-1.118-1.544.003c-.246.005-.494.011-.75.021l-.424.021a37.51 37.51 0 0 0-1.174.077l-2.908.296 21.78 37.725 14.253-24.687z"  ></path></g></g><g class="ldl-layer"><g class="ldl-ani" style="transform-box: view-box;"><path fill="inherit" d="M41.974 10.828l-1.372.32c-.157.035-.314.069-.468.109a41.654 41.654 0 0 0-2.807.826l-.161.054a42.89 42.89 0 0 0-.85.291c-.613.222-1.221.468-1.819.718l-.263.107c-.195.08-.389.158-.581.244-.936.417-1.776.827-2.576 1.254l-2.137 1.235c-3.491 2.154-6.615 4.828-9.369 8.043-.285.334-.561.667-.844 1.022l-.214.276a36.63 36.63 0 0 0-.7.918l-.308.427c-.198.278-.386.54-.605.866l-1.832 2.984-.127.228c-.103.184-.204.37-.312.575l-.254.489c-.172.341-.343.682-.507 1.026l-1.207 2.676H56.23L41.974 10.828z"  ></path></g></g><g class="ldl-layer"><g class="ldl-ani" style="transform-box: view-box;"><path fill="inherit" d="M12.071 37.361l-.404 1.322c-.048.155-.097.309-.139.457a39.505 39.505 0 0 0-.691 2.848l-.038.18c-.062.302-.124.604-.175.903a40.32 40.32 0 0 0-.284 1.906l-.042.309c-.029.208-.057.417-.077.62a38.802 38.802 0 0 0-.201 2.854l-.014.376c-.006.234-.006.441-.006.649l.02 1.444c.13 4.087.884 8.123 2.247 12.01l.137.37c.18.492.361.984.554 1.459l.281.653c.177.421.355.841.545 1.245l.08.172c.166.35.34.697.513 1.037l1.401 2.514c.136.226.273.454.432.705l.217.335c.216.331.43.661.663.993l1.678 2.412 21.81-37.774H12.071z"  ></path></g></g></g></g></svg>',Le=[{type:"1",label:"aden",map1:async()=>X(()=>import("./LUT_aden-BPNt8S6X.js"),[])},{type:"1",label:"crema",map1:async()=>X(()=>import("./LUT_crema-Dr3xVYGh.js"),[])},{type:"2",label:"clarendon",map1:async()=>X(()=>import("./LUT_clarendon1-UtcH-ItH.js"),[]),map2:async()=>X(()=>import("./LUT_clarendon2-gqIK7yZD.js"),[])},{type:"3",label:"gingham",map1:async()=>X(()=>import("./LUT_gingham1-XYBL9yCV.js"),[]),map2:async()=>X(()=>import("./LUT_gingham_lgg-DKTq37Dx.js"),[])},{type:"1",label:"juno",map1:async()=>X(()=>import("./LUT_juno-DAFSouMR.js"),[])},{type:"1",label:"lark",map1:async()=>X(()=>import("./LUT_lark-CFq9A7h3.js"),[])},{type:"1",label:"ludwig",map1:async()=>X(()=>import("./LUT_ludwig-B3y7u7o6.js"),[])},{type:"4",label:"moon",map1:async()=>X(()=>import("./LUT_moon1-GzydTKI3.js"),[]),map2:async()=>X(()=>import("./LUT_moon2-eVwlvPIO.js"),[])},{type:"1",label:"reyes",map1:async()=>X(()=>import("./LUT_reyes-BfSRwpFg.js"),[])},{type:"MTX",label:"polaroid",mtx:"polaroid"},{type:"MTX",label:"kodak",mtx:"kodachrome"},{type:"MTX",label:"browni",mtx:"browni"},{type:"MTX",label:"vintage",mtx:"vintage"}];async function _t(e){const t=new Image;return t.src=e,await t.decode(),t}function $i(e,t,r){const n=t.filters;let i=D(!1);D(async()=>{if(e.value===null&&t.filters?.label){const s=Le.findIndex(f=>f.label===t.filters.label);a(s)}},{effect:!0});async function o(s){const f=document.getElementById("loader");f&&setTimeout(()=>f.style.display="",20);const d=Le[parseInt(s)];d.map1&&typeof d.map1=="function"&&(d.map1=await _t((await d.map1()).default)),d.map2&&typeof d.map2=="function"&&(d.map2=await _t((await d.map2()).default));const{type:l,mtx:u,map1:p,map2:v,label:h}=d;n.opt={type:l,mtx:u,map1:p,map2:v,label:h},f&&(f.style.display="none")}async function a(s){i.value!==s?(i.value=s,btn_reset_filters?.removeAttribute("disabled"),await o(s),r()):c()}function c(){btn_reset_filters?.setAttribute("disabled",!0),i.value=!1,n.opt=0,r()}return k`<style>.btn_insta{width:70px;color:light-dark(white,#fff);font-size:12px}</style><style>@keyframes animate{0.00%{animation-timing-function:cubic-bezier(0.51,0.03,0.89,0.56);transform:translate(0,0) rotate(0deg) scale(1,1) skew(0deg,0deg);opacity:1}52.00%{animation-timing-function:cubic-bezier(0.17,0.39,0.55,0.91);transform:translate(0,0) rotate(211.13deg)}100.00%{animation-timing-function:cubic-bezier(0.17,0.39,0.55,0.91);transform:translate(0,0) rotate(360deg)}}</style>${ne("filters",235,e,t,r,c,()=>k`<div id="loader" style="width:23px;fill:orange;display:none;position:absolute;top:-30px">${Si}</div>${Le.map((s,f)=>k`<button class="btn_insta" @click="${()=>a(f)}" :selected="${()=>i.value===f}">${s.label}</button>`)}`)}`}function ki(e,t,r){const n=t.blender,i=D(!n.blendmap),o=D("");function a(){n.$skip||(n.blendmap=0,n.blendmix=.5,l("blender_blendmix"),i.value=!0,o.value="",r&&r(),s("blender"))}function c(p,v,h){h&&(h.filename=v?.name,n.blendmap=h,o.value=v?.name,n.blendmix=.5,i.value=!1,r&&r(),s("blender"))}function s(p){const v=document.getElementById("btn_reset_"+p);n.blendmap===0?v&&v.setAttribute("disabled",!0):v&&v.removeAttribute("disabled")}function f(p){ve("param",()=>d.call(this,p),30)}function d(p){const v=p.target.value,h=this.id.split("_");n[h[1]]=parseFloat(v),l(this.id),r(),s(h[0])}function l(p){const v=document.getElementById(p);if(!v)return;const h=p.split("_");v.value=n[h[1]],h.length===3?v.previousElementSibling.value=v.value:v.nextElementSibling.value=v.value}function u(){if(!this)return;const p=this.id.split("_");n[p[1]]=.5,l(this.id),r(),s(p[0])}return k`${ne("blender",100,e,t,r,a,k`<div>${()=>o.value?k`<input type="text" :value="${()=>o.value}" disabled="disabled" style="width:90%;margin-bottom:10px;padding-right:20px"> /* RANGE INPUT */<div style="display:flex;justify-content:space-around;align-items:center"><div class="rangelabel">blend mix</div><input id="blender_blendmix" style="width:130px" type="range" value="${n.blendmix}" min="0" max="1" step="0.01" @input="${f}" @dblclick="${u}" :disabled="${()=>i.value}"> <input id="blender_blendmix_" type="number" class="rangenumb" step="0.01" min="0" max="1" value="${n.blendmix}" @input="${f}" :disabled="${()=>i.value}"></div>`:k`${Pe("click or drop<br> to blend file","image/*",p=>Re(p,c),"width:90%; height:50px;")}`}</div>`)}`}function Ei(e,t,r){const n={bokehstrength:0,bokehlensout:.5,gaussianstrength:0,centerX:.5,centerY:.5};a("blur")||c("blur");const i=D(!1);D(()=>{e.value==="blur"?(i.value=[[t.blur.centerX,t.blur.centerY]],re()):(i.value=!1,e.value===null&&f("blur"))},{effect:!0});function o(h){t.blur.centerX=h[0][0],t.blur.centerY=h[0][1],r()}function a(h){for(const m of Object.keys(n))if(!(m in t[h])||t[h][m]!==n[m])return!1;return!0}function c(h){for(const m of Object.keys(n))t[h][m]!==n[m]&&(t[h][m]=n[m],p(h+"_"+m))}function s(h){c(h),r(),f(h),i.value=!1,i.value=[[t.blur.centerX,t.blur.centerY]]}function f(h){const m=document.getElementById("btn_reset_"+h);m&&(a(h)?m.setAttribute("disabled",!0):m.removeAttribute("disabled"))}function d(h){h&&re(),r()}function l(h){ve("param",()=>u.call(this,h),30)}function u(h){const m=h.target.value,C=this.id.split("_");t[C[0]][C[1]]=parseFloat(m),p(this.id),r(),f(C[0])}function p(h){const m=document.getElementById(h);if(!m)return;const C=h.split("_");m.value=t[C[0]][C[1]],C.length===3?m.previousElementSibling.value=m.value:m.nextElementSibling.value=m.value}function v(){if(!this)return;const h=this.id.split("_");t[h[0]][h[1]]=0,p(this.id),r(),f(h[0])}return k`${ne("blur",125,e,t,d,s,()=>k`/* mouse canvas */<style>.point{background-color:red!important;border:2px solid #ff8c00}</style>${()=>i.value&&It(canvas,i.value,o)} ${["bokehstrength","gaussianstrength","bokehlensout"].filter(h=>!h.startsWith("$")).map((h,m)=>k`/* RANGE INPUTS */<div style="display:flex;justify-content:space-around;align-items:center"><div class="rangelabel">${["bokeh strength","gauss strength","cirble radius"][m]}</div><input id="${"blur_"+h}" type="range" style="width:130px" value="${t.blur[h]}" min="0" max="1" step="0.01" @input="${l}" @dblclick="${v}"> <input id="${"blur_"+h+"_"}" type="number" class="rangenumb" value="${t.blur[h]}" min="0" max="1" step="0.01" @input="${l}"></div>`)}<div style="text-align:left;color:gray"><i>(center red dot)</i></div>`)}`}function Ai(e,t,r){let n=!0;D(()=>{if(e.value==="recipes"){const c=i();Object.keys(c).length?n=!1:n=!0}},{effect:!0});function i(){const c={};return["colors","curve","lights","effects"].forEach(s=>{const f=Object.keys(t[s]).reduce((d,l)=>(t[s][l]&&(d[l]=t[s][l]),d),{});Object.keys(f).length&&(c[s]=f)}),(t.blur.bokehstrength||t.blur.gaussianstrength)&&(c.blur=t.blur),t.filters?.opt?.label&&(c.filters=t.filters.opt.label),c}async function o(){const c=i();if(!Object.keys(c).length)return;const s=D("recipe_"+new Date().toISOString().split("T")[0]+".json");if(!await St(()=>k`<div style="margin:10px 0"><div style="height:38px">Download recipe</div><div style="display:flex;flex-direction:column;font-size:14px"><div><input style="width:225px;font-size:14px" type="text" :value="${()=>s.value}" @change="${u=>s.value=u.target.value}"></div></div></div>`))return;const d=new TextEncoder().encode(JSON.stringify(c)),l=new Blob([d],{type:"application/json;charset=utf-8"});ii(l,s.value)}async function a(){const c=await Pt("application/json");if(!c)return;const s=new FileReader;await new Promise(d=>s.onload=d,s.readAsText(c));const f=JSON.parse(s.result);["colors","curve","lights","effects","blur"].forEach(d=>{f[d]&&(t[d]={...t[d],...f[d]})}),f.filters&&(t.filters.label=f.filters),e.value=null,r()}return k`${ne("recipes",125,e,t,null,null,()=>k`<div><button @click="${a}">load</button> <button id="save_btn" @click="${o}" disabled="${n}">save</button></div><div><small>will save: <i>lights, colors, effects, curve, filters and blur</i></small></div>`)}`}const Bi={appname:"Photo Editor"};function re(){const e=document.getElementById("canvas"),t=document.getElementById("editor"),r=e.width/e.height;t.offsetWidth/r>t.offsetHeight?(e.style.height="99%",e.style.width=""):(e.style.width="99%",e.style.height=""),zoomable.style.transform="",pannable.style.transform=""}function Li(){Z(Bi);let e,t,r;const n=D(!1),i=D();let o={trs:{translateX:0,translateY:0,angle:0,scale:0,flipv:0,fliph:0},crop:{currentcrop:0,glcrop:0,canvas_angle:0,ar:0,arindex:0},lights:{brightness:0,exposure:0,gamma:0,contrast:0,shadows:0,highlights:0,bloom:0},colors:{temperature:0,tint:0,vibrance:0,saturation:0,sepia:0},effects:{clarity:0,noise:0,vignette:0},curve:{curvepoints:0},filters:{opt:0,mix:0},perspective:{quad:0,modified:0},perspective2:{before:0,after:0,modified:0},blender:{blendmap:0,blendmix:.5},resizer:{width:0,height:0},blur:{bokehstrength:0,bokehlensout:.5,gaussianstrength:0,gaussianlensout:.5,centerX:.5,centerY:.5}};async function a(b,L){if(b)try{let P,M,N,ue={name:L};if(typeof b=="string"&&b.startsWith("http"))P=await(await fetch(b)).arrayBuffer();else if(b instanceof Image)P=await(await fetch(b.src)).arrayBuffer(),N=b;else if(b instanceof ArrayBuffer)P=b;else if(b instanceof Blob)M=b,P=await b.arrayBuffer();else return console.error("Unknown input type");ue.size=P.byteLength,M||(M=new Blob([P])),N||(N=new Image,N.src=URL.createObjectURL(M),await N.decode()),c(P,ue,N)}catch(P){console.error(P)}}async function c(b,L,P){n.value&&s();try{e=await Tt(b)}catch(N){console.error(N)}let M=e?.read();M||(M={}),M.xml&&(M.xml=M.xml.slice(M.xml.indexOf("<")).replace(/ +(?= )/g,"").replace(/\r\n|\n|\r/gm,"")),M.file={...L,hsize:ni(L.size),width:P?.width||P?.videoWidth||"-",height:P?.height||P?.videoHeight||"-"},M.img=P,M.colorspace=M.icc?.ColorProfile?.[0].includes("P3")?"display-p3":"srgb",console.log("metadata",{...M}),n.value=M}function s(){h.value=null,B(),U(),R=.5;for(const b in o)for(const L in o[b])o[b][L]=0}D(()=>{if(i.value){const b=n._value;try{t&&t.destroy(),t=Jr(document.getElementById("canvas"),b.img,b.colorspace),r&&r(),r=ct(zoomable,pannable),re(),f()}catch(L){console.error(L)}}},{effect:!0});async function f(){if(t.loadImage(),o.perspective2.after){let L=o.perspective2.before.map(M=>[M[0]*canvas.width,M[1]*canvas.height]),P=o.perspective2.after.map(M=>[M[0]*canvas.width,M[1]*canvas.height]);t.filterPerspective(L,P,!1,!1)}if((C||o.crop.glcrop)&&(o.trs.angle+=o.crop.canvas_angle,t.filterMatrix(o.trs),o.trs.angle-=o.crop.canvas_angle,o.perspective.quad)){let L=[[.25,.25],[.75,.25],[.75,.75],[.25,.75]];L=L.map(M=>[M[0]*canvas.width,M[1]*canvas.height]);let P=o.perspective.quad.map(M=>[M[0]*canvas.width,M[1]*canvas.height]);t.filterPerspective(L,P,!1,!1)}if(o.crop.glcrop)return t.crop(o.crop.glcrop),o.crop.glcrop=0,f();!o.blender.$skip&&o.blender.blendmap&&t.filterBlend(o.blender.blendmap,o.blender.blendmix);let b={};o.lights.$skip||(b={...b,...o.lights}),o.colors.$skip||(b={...b,...o.colors}),o.effects.$skip||(b={...b,...o.effects}),t.filterAdjustments({...b}),b.bloom&&t.filterBloom(b.bloom),b.noise&&t.filterNoise(b.noise),(b.shadows||b.highlights)&&t.filterHighlightsShadows(b.highlights||0,-b.shadows||0),!o.curve.$skip&&o.curve.curvepoints&&t.filterCurves(o.curve.curvepoints),!o.filters.$skip&&o.filters.opt&&t.filterInsta(o.filters.opt,o.filters.mix),!o.blur.$skip&&o.blur.bokehstrength&&t.filterBlurBokeh(o.blur),!o.blur.$skip&&o.blur.gaussianstrength&&(o.blur.gaussianlensout=o.blur.bokehlensout,t.filterBlurGaussian(o.blur)),t.paintCanvas(),T&&T()}function d(b){b?.preventDefault(),re()}let l=0;function u(b){if(b.preventDefault(),l&&Date.now()-l<200)return d(b);l=Date.now()}function p(b){b.preventDefault(),h.value=""}async function v(b){b?.stopPropagation();const L=n.value;await se(()=>k`<div style="text-align:left;font-size:12px;max-height:50vh;overflow:auto"><div class="section">FILE</div><div>name: ${L.file.name}</div><div>size: ${L.file.width} x ${L.file.height} (${L.file.hsize})</div><div>date: ${L.exif?.DateTimeOriginal?.value||new Date(L.file.lastModified).toLocaleString("en-UK")}</div><div>prof: ${L.colorspace}</div>${L.tiff&&k`<div class="section">TIFF</div>`} ${L.tiff&&Object.entries(L.tiff).sort((P,M)=>P[0]?.toString().localeCompare(M[0]?.toString())).map(P=>k`<div>${P[0]}: ${P[1].hvalue||P[1].value}</div>`)} ${L.gps&&k`<div class="section">GPS</div>`} ${()=>L.gps&&ui([L.gps.GPSLongitude.hvalue,L.gps.GPSLatitude.hvalue])} ${L.exif&&k`<div class="section">EXIF</div>`} ${L.exif&&Object.entries(L.exif).sort((P,M)=>P[0]?.toString().localeCompare(M[0]?.toString())).map(P=>k`<div>${P[0]}: ${P[1].hvalue||P[1].value}</div>`)}</div>`,400)}const h=D();let m=null;D(()=>{h.value==="composition"?S():m==="composition"&&E(),m=h.value},{effect:!0});let C=!1;function S(){U(),B(),re(),C=!0,btn_info.setAttribute("disabled",!0),btn_histo.setAttribute("disabled",!0),btn_split.setAttribute("disabled",!0),r&&r()}function E(){C=!1,btn_info.removeAttribute("disabled"),btn_histo.removeAttribute("disabled"),btn_split.removeAttribute("disabled"),r=ct(zoomable,pannable)}function x(){Object.values(o.trs).reduce((b,L)=>b+=L,0)===0&&Object.values(o.crop).reduce((b,L)=>b+=L,0)===0&&o.perspective.modified==0&&o.resizer.width===0?btn_reset_composition.setAttribute("disabled",!0):btn_reset_composition.removeAttribute("disabled")}let T;const g=D(!1);function _(b){b?.stopPropagation(),!C&&(g.value?g.value=!1:g.value=!0)}function B(){g.value=!1}let R,A;const w=D(!1);function U(){w.value=!1}function y(b){b?.stopPropagation(),!C&&(w._value?w.value=!1:(A=t.img_cropped||t.img,w.value=!0))}function $(b){R=b}async function I(){await se(b=>k`<div style="position:relative;height:250px;overflow:auto"><img id="snail.jpg" @click="${F}" style="cursor:pointer;position:absolute;top:50px;left:20px;border-radius:10px" src="/tools/snail-8577681_1280.jpg" title="jpg" width="130"> <img id="seagull.png" @click="${F}" style="cursor:pointer;position:absolute;top:50px;left:160px;border-radius:10px" src="/tools/seagull-8547189_1280.png" title="png" width="150"> <img id="water.jpg" @click="${F}" style="cursor:pointer;position:absolute;top:145px;left:160px;border-radius:10px" src="/tools/water-8100724_1280.jpg" title="jpg" width="150"> <img id="perspective.jpg" @click="${F}" style="cursor:pointer;position:absolute;top:50px;left:320px;border-radius:10px" src="/tools/perspective2.jpg" title="jpg" width="137"></div>`,460)}function F(){a(this.src,this.id),root.lastElementChild.remove()}async function j(){document.fullscreenElement?document.exitFullscreen&&await document.exitFullscreen():await document.documentElement.requestFullscreen()}function oe(){h.value="",re()}return document.addEventListener("fullscreenchange",oe),k`<div class="app"><div class="btn_theme">${()=>li("dark",!0)}</div>/******** LOADING PAGE ********/ ${()=>!n.value&&k`<div class="main" style="justify-content:center"><img src="${at}" width="130" alt="logo"><h1>${Z("appname")}</h1><div>${Pe("click or drop<br> to load file","image/*",b=>Re(b,c),"height: 120px;")} <button style="height:80px;width:80px" @click="${I}">sample images</button></div><div style="font-size:13px;color:gray;margin-top:20px"><i>100% private and offline!</i></div></div>`} /******** EDITOR PAGE ********/ ${()=>n.value&&k`<div class="btn_fullscreen"><a @click="${j}">\u26F6</a></div><div class="header"><div class="banner"><img src="${at}" width="30" alt="logo"> ${Z("appname")}</div></div><div class="main"><div class="container"><div id="editor" class="editor"><div id="zoomable" @dblclick="${d}" @click="${u}"><div id="pannable">/******** PAINT CANVAS *******/<canvas :ref="${i}" id="canvas" class="checkered"></canvas>/******** SPLIT VIEW *******/ ${()=>w.value&&di(A,canvas.style.width,canvas.style.height,R,$)} /******** CROP CANVAS *******/ ${()=>h.value==="composition"&&fi(canvas,o,x)}</div></div></div><div class="sidebar" @click="${p}"><div class="menubuttons"><div style="display:flex;align-items:center;justify-content:center">${Pe("open","image/*",b=>Re(b,c),"width:105px;height:30px;")} <button style="width:105px;height:30px" id="btn_download" @click="${()=>{h.value="",gi(n,e,t)}}">download</button></div><div style="display:flex;align-items:center;justify-content:center"><button style="width:70px;height:30px;fill:white" id="btn_info" @click="${v}" title="file info"><div style="scale:0.35;margin-top:-15px">${ri}</div></button> <button style="width:70px;height:30px;fill:white" id="btn_histo" @click="${_}" :selected="${()=>g.value}" tile="histogram"><div style="scale:0.4;margin-top:-15px">${ti}</div></button> <button style="width:70px;height:30px;fill:white" id="btn_split" @click="${y}" :selected="${()=>w.value}" tile="splitview"><div style="scale:0.5;margin-top:-15px">${ei}</div></button></div></div><div class="menusections">/******** COMPOSITION *******/ ${yi(h,o,f,()=>t,re)} /******** PERSPECTIVE *******/ /******** ADJUSTMENTS *******/ ${wi(h,o,f)} /******** COLOR CURVE *******/ ${Ci(h,o,f)} /******** FILTERS *******/ ${$i(h,o,f)} /******** BLENDER *******/ ${ki(h,o,f)} /******** BLUR *******/ ${Ei(h,o,f)} /******** RECIPES *******/ ${Ai(h,o,f)}</div></div></div>/******** HISTOGRAM *******/ ${()=>g.value&&ci(n._value.colorspace,b=>{T=b,f()})}</div>`}<div class="footer"><a style="margin-right:10px;font-size:10px" href="https://tools.famral.com/image" target="_blank"><img src="${lt}" style="width:15px"></a></div></div>`}await Ie(document.getElementById("root"),Li);
