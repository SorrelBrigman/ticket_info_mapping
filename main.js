  'use strict'


  xlsxj = require("xlsx-to-json");












  xlsxj({
    input: "xl_files/duluth.xlsx",
    output: "json/output.json"
  }, function(err, result) {
    if(err) {
      console.error(err);
    }else {
      console.log(result);
    }
  });
