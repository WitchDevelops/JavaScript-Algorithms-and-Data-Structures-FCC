function convertHTML(str: string): string {
    //define substitution matrix
    const htmlEntities:{ [key:string]:string } = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&apos;',
      '"': '&quot;',
    };
    //map each character to corresponding HTML entity
    return str.replace(/([&<>\"'])/g, (match: string) => htmlEntities[match]);
  }
  
  convertHTML("Dolce & Gabbana");