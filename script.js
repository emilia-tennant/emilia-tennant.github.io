// ==UserScript==
// @name           change old name to new name
// @description    changes your old name to your new name on mcdonalds sites
// @author         Emilia Tennant
// @match          *://*.mcdonalds.com.au/*
// @match          *://*.mcd.com/*
// @version        1
// ==/UserScript==

//EDIT----------------------------------------------------------------------------------------------------HERE-----------------AND-HERE

function sleep(ms){return new Promise(resolve=>setTimeout(resolve,ms))}function replace(){const oldName='CHANGE';const newName='CHANGE';var words={[oldName.charAt(0).toUpperCase()+oldName.toLowerCase().slice(1)]:[newName.charAt(0).toUpperCase()+newName.toLowerCase().slice(1)],[oldName.toLowerCase()]:[newName.charAt(0).toUpperCase()+newName.toLowerCase().slice(1)],[oldName.toUpperCase()]:[newName.charAt(0).toUpperCase()+newName.toLowerCase().slice(1)]};var regexs=[],replacements=[],tagsWhitelist=['PRE','BLOCKQUOTE','CODE','INPUT','BUTTON','TEXTAREA'],rIsRegexp=/^\/(.+)\/([gim]+)?$/,word,text,texts,i,userRegexp;function prepareRegex(string){return string.replace(/([\[\]\^\&\$\.\(\)\?\/\\\+\{\}\|])/g,'\\$1')}function isTagOk(tag){return tagsWhitelist.indexOf(tag)===-1}delete words[''];for(word in words){if(typeof word==='string'&&words.hasOwnProperty(word)){userRegexp=word.match(rIsRegexp);if(userRegexp){regexs.push(new RegExp(userRegexp[1],'g'))}else{regexs.push(new RegExp(prepareRegex(word).replace(/\\?\*/g,function(fullMatch){return fullMatch==='\\*'?'*':'[^ ]*'}),'g'))}replacements.push(words[word])}}texts=document.evaluate('//body//text()[ normalize-space(.) != "" ]',document,null,6,null);for(i=0;text=texts.snapshotItem(i);i+=1){if(isTagOk(text.parentNode.tagName)){regexs.forEach(function(value,index){text.data=text.data.replace(value,replacements[index])})}}};for(let _=0;_<100;_++){replace();await sleep(100)}
