function convertHTML(str) {
    //define substitution matrix
    const htmlEntities = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&apos;',
      '"': '&quot;',
    };
    //map each character to corresponding HTML entity
    return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
  }
  
  convertHTML("Dolce & Gabbana");