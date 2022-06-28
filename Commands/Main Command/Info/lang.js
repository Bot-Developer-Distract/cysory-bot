module.exports = {
    commands: ['lang', 'language'],
    description: 'list of language',
    callback: (message) => {
        message.channel.send(
'```js\naf: Afrikaans\nsq: Albanian\nar: Arabic\nhy: Armenian\nbn: Bengali (India)\nbs: Bosnian\nmy: Burmese (Myanmar)\nca: Catalan\ncn: Chinese\nhr: Croatian\ncs: Czech\nda: Danish\nnl: Dutch\nen: English (United States)\neo: Esperanto\net: Estonian\nfil: Filipino\nfi: Finnish\nfr: French (Canada)\nde: German\nel: Greek\ngu: Gujarati\nhi: Hindi\nhu: Hungarian\nis: Icelandic\nid: Indonesian\nit: Italian\nja: Japanese (Japan)\nkn: Kannada\nkm: Khmer\nko: Korean\nla: Latin\nlv: Latvian\nmk: Macedonian\nml: Malayalam\nmr: Marathi\nne: Nepali\nnb: Norwegian\npl: Polish\npt: Portuguese\nro: Romanian\nru: Russian\nsr: Serbian\nsi: Sinhala\nsk: Slovak\nes: Spanish (Spain)\nsw: Swahili\nsv: Swedish\nta: Tamil\nte: Telugu\nth: Thai\ntr: Turkish\nuk: Ukrainian\nur: Urdu\nvi: Vietnamese\ncy: Welsh```'
)
    }
}