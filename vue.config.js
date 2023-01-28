module.exports = {
  chainWebpack: (config) => {
    config.module.rules.delete('eslint');
    //config.externals({ canvg: 'canvg', html2canvas: 'html2canvas', dompurify: 'dompurify' });
  },
};
