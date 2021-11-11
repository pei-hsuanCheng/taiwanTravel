import jsSHA from 'jssha';

export const getAuthorizationHeader = () => {
  var AppID = '726011dcb1964683b41723d6617f4394';
  var AppKey = '25CkxsJSx_WZ8Bvx2ypPI2_LF9k';

  var GMTString = new Date().toGMTString();
  var ShaObj = new jsSHA('SHA-1', 'TEXT');
  ShaObj.setHMACKey(AppKey, 'TEXT');
  ShaObj.update('x-date: ' + GMTString);
  var HMAC = ShaObj.getHMAC('B64');
  var Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';

  return { 'Authorization': Authorization, 'X-Date': GMTString /*,'Accept-Encoding': 'gzip'*/};
}