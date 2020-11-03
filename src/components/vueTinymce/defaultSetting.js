/*
 *根据项目需求设置的默认设置
 *可以传自定义值覆盖
 *文档https://www.tiny.cloud/docs/
 */
import Bus from '@/components/common/bus.js'
import axios from "axios";
let navigatorLanguage = (navigator.language || navigator.browserLanguage).toLowerCase(); //常规浏览器语言和IE浏览器
navigatorLanguage = navigatorLanguage.substr(0, 2); //截取lang前2位字符
let activeLan = ['zh', 'en', 'ja', 'ko'];
navigatorLanguage = activeLan.includes(navigatorLanguage) ? navigatorLanguage : 'en'
const languageTypeList = {
  'en': 'en',
  'zh': 'zh_CN',
  'ko': 'ko_KR',
  'ja': 'ja'
}
const defaultSetting = {
  menubar: false,
  toolbar: "fullscreen | fontsizeselect | bold italic underline strikethrough | alignleft aligncenter alignright | undo redo | removeformat | formatselect forecolor backcolor  | link unlink | numlist bullist | indent outdent |  searchreplace |",
  toolbar_drawer: "sliding",
  quickbars_insert_toolbar: "",
  quickbars_selection_toolbar: "removeformat | bold italic underline strikethrough | fontsizeselect forecolor backcolor",
  plugins: "link image media table lists fullscreen quickbars wordcount  emoticons searchreplace",
  language: languageTypeList[navigatorLanguage], //本地化设置
  image_advtab: true,
  image_description: false,
  media_alt_source: false,
  media_poster: false,
  height: 350,
  branding: false,
  elementpath: false,
  statusbar: false,
  file_picker_types: 'image media',//file image media
  file_picker_callback: function (callback, value, meta) {
    //文件分类 .pdf, .txt, .zip, .rar, .7z, .doc, .docx, .xls, .xlsx, .ppt, .pptx
    //视频格式 .tiff,.pjp,.jfif,.webp,.gif,.svg,.bmp,.png,.jpeg,.svgz,.jpg,.ico,.xbm,.dib,.tif,.pjpeg,.avif
    //图片格式 .mp4,.m4v,.ogv,.webm,.mov,.wav,.wave,.mp3,.ogg,.oga,.ogx,.ogm,.spx,.opus
    // var filetype = '.pdf, .txt, .zip, .rar, .7z, .doc, .docx, .xls, .xlsx, .ppt, .pptx,.tiff,.pjp,.jfif,.webp,.gif,.svg,.bmp,.png,.jpeg,.svgz,.jpg,.ico,.xbm,.dib,.tif,.pjpeg,.avif,.mp4,.m4v,.ogv,.webm,.mov,.wav,.wave,.mp3,.ogg,.oga,.ogx,.ogm,.spx,.opus';
    var filetype = '.bmp, .jpeg, .gif, .png, .jpg, .tiff, .aiml, .html, .zip, .doc, .docx,.xls,.xlsx,.pdf,.txt,.mp4,.rmvb,.avi,.mpeg,.mpg,.mov,.json';
    //后端接收上传文件的地址
    var upurl = '/api/file/userupload';
    //为不同插件指定文件类型及后端地址
    switch (meta.filetype) {
      case 'image':
        filetype = '.bmp, .jpeg, .gif, .png, .jpg, .tiff,';
        upurl = '/api/file/sysupload';
        break;
      case 'media':
        filetype = '.mp4,.rmvb,.avi,.mpeg,.mpg,.mov';
        upurl = '/api/file/sysupload';
        break;
      case 'file':
      default:
    }
    //模拟出一个input用于添加本地文件
    var input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', filetype);
    input.click();
    input.onchange = function () {
      tinymce.activeEditor.setProgressState(true);
      var file = this.files[0];
      var formData = new FormData();
      formData.append('file', file);
      axios({
        url: upurl,
        method: "post",
        data: formData,
      })
        .then(res => {
          console.log(res);
          callback(res.data.data.url);
          tinymce.activeEditor.setProgressState(false);
        })
        .catch(err => {
          console.log(err);
          tinymce.activeEditor.setProgressState(false);
        });
    };
  },
  // 开启图片上传后会走此配置
  // images_upload_handler: function (blobInfo, succFun, failFun) {
  //   var formData;
  //   var file = blobInfo.blob();//转化为易于理解的file对象
  //   if (file.size / 1024 / 1024 > 2) {
  //     failFun(Bus.$t("photoLessThan"));
  //     return;
  //   }
  //   formData = new FormData();
  //   formData.append('file', file);//此处与源文档不一样
  //   // xhr.send(formData);
  //   axios({
  //     url: '/api/file/sysupload',
  //     method: "post",
  //     data: formData,
  //   })
  //     .then(res => {
  //       console.log(res);
  //       succFun(res.data.data.url);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }
}
export default defaultSetting;