{"filter":false,"title":"user.js","tooltip":"/adopt_early/routes/user.js","undoManager":{"mark":100,"position":100,"stack":[[{"start":{"row":53,"column":17},"end":{"row":53,"column":18},"action":"insert","lines":["o"],"id":35}],[{"start":{"row":53,"column":18},"end":{"row":53,"column":19},"action":"insert","lines":["g"],"id":36}],[{"start":{"row":53,"column":19},"end":{"row":53,"column":21},"action":"insert","lines":["()"],"id":37}],[{"start":{"row":53,"column":20},"end":{"row":53,"column":25},"action":"insert","lines":["iconv"],"id":38}],[{"start":{"row":53,"column":26},"end":{"row":53,"column":27},"action":"insert","lines":[";"],"id":39}],[{"start":{"row":53,"column":27},"end":{"row":54,"column":0},"action":"insert","lines":["",""],"id":40},{"start":{"row":54,"column":0},"end":{"row":54,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":54,"column":8},"end":{"row":54,"column":9},"action":"insert","lines":["c"],"id":41}],[{"start":{"row":54,"column":9},"end":{"row":54,"column":10},"action":"insert","lines":["o"],"id":42}],[{"start":{"row":54,"column":10},"end":{"row":54,"column":11},"action":"insert","lines":["n"],"id":43}],[{"start":{"row":54,"column":11},"end":{"row":54,"column":12},"action":"insert","lines":["s"],"id":44}],[{"start":{"row":54,"column":8},"end":{"row":54,"column":12},"action":"remove","lines":["cons"],"id":45},{"start":{"row":54,"column":8},"end":{"row":54,"column":15},"action":"insert","lines":["console"]}],[{"start":{"row":54,"column":15},"end":{"row":54,"column":16},"action":"insert","lines":["."],"id":46}],[{"start":{"row":54,"column":16},"end":{"row":54,"column":17},"action":"insert","lines":["l"],"id":47}],[{"start":{"row":54,"column":17},"end":{"row":54,"column":18},"action":"insert","lines":["o"],"id":48}],[{"start":{"row":54,"column":18},"end":{"row":54,"column":19},"action":"insert","lines":["g"],"id":49}],[{"start":{"row":54,"column":19},"end":{"row":54,"column":21},"action":"insert","lines":["()"],"id":50}],[{"start":{"row":54,"column":20},"end":{"row":54,"column":31},"action":"insert","lines":["req.user.id"],"id":51}],[{"start":{"row":54,"column":31},"end":{"row":54,"column":32},"action":"insert","lines":["0"],"id":52}],[{"start":{"row":54,"column":31},"end":{"row":54,"column":32},"action":"remove","lines":["0"],"id":53}],[{"start":{"row":54,"column":32},"end":{"row":54,"column":33},"action":"insert","lines":[";"],"id":54}],[{"start":{"row":48,"column":0},"end":{"row":48,"column":3},"action":"insert","lines":["// "],"id":55},{"start":{"row":49,"column":0},"end":{"row":49,"column":3},"action":"insert","lines":["// "]},{"start":{"row":50,"column":0},"end":{"row":50,"column":3},"action":"insert","lines":["// "]},{"start":{"row":51,"column":0},"end":{"row":51,"column":3},"action":"insert","lines":["// "]},{"start":{"row":52,"column":0},"end":{"row":52,"column":3},"action":"insert","lines":["// "]},{"start":{"row":53,"column":0},"end":{"row":53,"column":3},"action":"insert","lines":["// "]},{"start":{"row":54,"column":0},"end":{"row":54,"column":3},"action":"insert","lines":["// "]},{"start":{"row":55,"column":0},"end":{"row":55,"column":3},"action":"insert","lines":["// "]},{"start":{"row":56,"column":0},"end":{"row":56,"column":3},"action":"insert","lines":["// "]},{"start":{"row":57,"column":0},"end":{"row":57,"column":3},"action":"insert","lines":["// "]},{"start":{"row":58,"column":0},"end":{"row":58,"column":3},"action":"insert","lines":["// "]}],[{"start":{"row":58,"column":5},"end":{"row":59,"column":0},"action":"insert","lines":["",""],"id":56}],[{"start":{"row":59,"column":0},"end":{"row":60,"column":0},"action":"insert","lines":["",""],"id":57}],[{"start":{"row":60,"column":0},"end":{"row":70,"column":2},"action":"insert","lines":["router.post(\"/m/:id\",onlyLOGIN, (req,res) => {","    conv.findOne({parts:[req.params.id, req.user.id]},\"_id\",(err,iconv) => {// conv meam diff things","        if (!iconv){ conv.create({ parts:[req.params.id, req.user.id]}); console.log(\"TRIGGER\")};","    }); ","    conv.findOne({parts:[req.params.id, req.user.id]},\"_id\",(err,iconv) => {// conv meam diff things","        console.log(iconv);","        console.log(req.user.id);","        msg.create({ sender: req.user.id, content: req.body.content, conv_id: iconv.id})","    })","    res.redirect(\"/\");","})"],"id":58}],[{"start":{"row":64,"column":54},"end":{"row":64,"column":60},"action":"remove","lines":["\"_id\","],"id":59}],[{"start":{"row":61,"column":54},"end":{"row":61,"column":60},"action":"remove","lines":["\"_id\","],"id":60}],[{"start":{"row":67,"column":78},"end":{"row":67,"column":87},"action":"insert","lines":["ObjectId("],"id":64}],[{"start":{"row":67,"column":95},"end":{"row":67,"column":96},"action":"insert","lines":[")"],"id":65}],[{"start":{"row":67,"column":79},"end":{"row":67,"column":87},"action":"remove","lines":["bjectId("],"id":66}],[{"start":{"row":67,"column":78},"end":{"row":67,"column":79},"action":"remove","lines":["O"],"id":67}],[{"start":{"row":67,"column":86},"end":{"row":67,"column":87},"action":"remove","lines":[")"],"id":68}],[{"start":{"row":40,"column":48},"end":{"row":40,"column":49},"action":"insert","lines":[" "],"id":69}],[{"start":{"row":40,"column":49},"end":{"row":40,"column":50},"action":"insert","lines":["/"],"id":70}],[{"start":{"row":40,"column":50},"end":{"row":40,"column":51},"action":"insert","lines":["/"],"id":71}],[{"start":{"row":40,"column":51},"end":{"row":40,"column":52},"action":"insert","lines":[" "],"id":72}],[{"start":{"row":40,"column":52},"end":{"row":40,"column":53},"action":"insert","lines":["<"],"id":73},{"start":{"row":40,"column":53},"end":{"row":40,"column":54},"action":"insert","lines":["<"]}],[{"start":{"row":40,"column":54},"end":{"row":40,"column":55},"action":"insert","lines":[" "],"id":74}],[{"start":{"row":40,"column":55},"end":{"row":40,"column":56},"action":"insert","lines":["S"],"id":75}],[{"start":{"row":40,"column":56},"end":{"row":40,"column":57},"action":"insert","lines":["H"],"id":76}],[{"start":{"row":40,"column":57},"end":{"row":40,"column":58},"action":"insert","lines":["O"],"id":77},{"start":{"row":40,"column":58},"end":{"row":40,"column":59},"action":"insert","lines":["W"]}],[{"start":{"row":40,"column":59},"end":{"row":40,"column":60},"action":"insert","lines":[" "],"id":78}],[{"start":{"row":40,"column":60},"end":{"row":40,"column":61},"action":"insert","lines":["C"],"id":79}],[{"start":{"row":40,"column":61},"end":{"row":40,"column":62},"action":"insert","lines":["O"],"id":80}],[{"start":{"row":40,"column":62},"end":{"row":40,"column":63},"action":"insert","lines":["N"],"id":81}],[{"start":{"row":40,"column":63},"end":{"row":40,"column":64},"action":"insert","lines":["V"],"id":82}],[{"start":{"row":60,"column":46},"end":{"row":60,"column":47},"action":"insert","lines":[" "],"id":83}],[{"start":{"row":60,"column":47},"end":{"row":60,"column":48},"action":"insert","lines":["/"],"id":84}],[{"start":{"row":60,"column":48},"end":{"row":60,"column":49},"action":"insert","lines":["/"],"id":85}],[{"start":{"row":60,"column":49},"end":{"row":60,"column":50},"action":"insert","lines":[" "],"id":86}],[{"start":{"row":60,"column":50},"end":{"row":60,"column":51},"action":"insert","lines":["<"],"id":87}],[{"start":{"row":60,"column":51},"end":{"row":60,"column":52},"action":"insert","lines":["<"],"id":88}],[{"start":{"row":60,"column":52},"end":{"row":60,"column":53},"action":"insert","lines":[" "],"id":89}],[{"start":{"row":60,"column":53},"end":{"row":60,"column":54},"action":"insert","lines":["C"],"id":90}],[{"start":{"row":60,"column":54},"end":{"row":60,"column":55},"action":"insert","lines":["R"],"id":91}],[{"start":{"row":60,"column":55},"end":{"row":60,"column":56},"action":"insert","lines":["E"],"id":92},{"start":{"row":60,"column":56},"end":{"row":60,"column":57},"action":"insert","lines":["A"]},{"start":{"row":60,"column":57},"end":{"row":60,"column":58},"action":"insert","lines":["T"]}],[{"start":{"row":60,"column":58},"end":{"row":60,"column":59},"action":"insert","lines":["E"],"id":93}],[{"start":{"row":60,"column":59},"end":{"row":60,"column":60},"action":"insert","lines":[" "],"id":94}],[{"start":{"row":60,"column":60},"end":{"row":60,"column":61},"action":"insert","lines":["M"],"id":95}],[{"start":{"row":60,"column":61},"end":{"row":60,"column":62},"action":"insert","lines":["S"],"id":96}],[{"start":{"row":60,"column":62},"end":{"row":60,"column":63},"action":"insert","lines":["G"],"id":97}],[{"start":{"row":46,"column":103},"end":{"row":46,"column":104},"action":"insert","lines":[" "],"id":98}],[{"start":{"row":46,"column":104},"end":{"row":46,"column":105},"action":"insert","lines":["/"],"id":99}],[{"start":{"row":46,"column":105},"end":{"row":46,"column":106},"action":"insert","lines":["/"],"id":100}],[{"start":{"row":46,"column":106},"end":{"row":46,"column":107},"action":"insert","lines":[" "],"id":101}],[{"start":{"row":46,"column":107},"end":{"row":46,"column":108},"action":"insert","lines":["<"],"id":102}],[{"start":{"row":46,"column":108},"end":{"row":46,"column":109},"action":"insert","lines":["<"],"id":103},{"start":{"row":46,"column":109},"end":{"row":46,"column":110},"action":"insert","lines":[" "]}],[{"start":{"row":46,"column":110},"end":{"row":46,"column":111},"action":"insert","lines":["C"],"id":104}],[{"start":{"row":46,"column":111},"end":{"row":46,"column":112},"action":"insert","lines":["R"],"id":105}],[{"start":{"row":46,"column":112},"end":{"row":46,"column":113},"action":"insert","lines":["E"],"id":106},{"start":{"row":46,"column":113},"end":{"row":46,"column":114},"action":"insert","lines":["A"]}],[{"start":{"row":46,"column":114},"end":{"row":46,"column":115},"action":"insert","lines":["T"],"id":107},{"start":{"row":46,"column":115},"end":{"row":46,"column":116},"action":"insert","lines":["E"]},{"start":{"row":46,"column":116},"end":{"row":46,"column":117},"action":"insert","lines":[" "]}],[{"start":{"row":46,"column":117},"end":{"row":46,"column":118},"action":"insert","lines":["M"],"id":108},{"start":{"row":46,"column":118},"end":{"row":46,"column":119},"action":"insert","lines":["S"]}],[{"start":{"row":46,"column":119},"end":{"row":46,"column":120},"action":"insert","lines":["G"],"id":109}],[{"start":{"row":46,"column":111},"end":{"row":46,"column":120},"action":"remove","lines":["REATE MSG"],"id":110},{"start":{"row":46,"column":111},"end":{"row":46,"column":112},"action":"insert","lines":["S"]}],[{"start":{"row":46,"column":112},"end":{"row":46,"column":113},"action":"insert","lines":["H"],"id":111}],[{"start":{"row":46,"column":113},"end":{"row":46,"column":114},"action":"insert","lines":["O"],"id":112}],[{"start":{"row":46,"column":114},"end":{"row":46,"column":115},"action":"insert","lines":["W"],"id":113},{"start":{"row":46,"column":115},"end":{"row":46,"column":116},"action":"insert","lines":[" "]}],[{"start":{"row":46,"column":116},"end":{"row":46,"column":117},"action":"insert","lines":["M"],"id":114}],[{"start":{"row":46,"column":117},"end":{"row":46,"column":118},"action":"insert","lines":["S"],"id":115}],[{"start":{"row":46,"column":118},"end":{"row":46,"column":119},"action":"insert","lines":["G"],"id":116}],[{"start":{"row":46,"column":119},"end":{"row":46,"column":120},"action":"insert","lines":[" "],"id":117}],[{"start":{"row":46,"column":120},"end":{"row":46,"column":121},"action":"insert","lines":["O"],"id":118}],[{"start":{"row":46,"column":121},"end":{"row":46,"column":122},"action":"insert","lines":["F"],"id":119},{"start":{"row":46,"column":122},"end":{"row":46,"column":123},"action":"insert","lines":[" "]}],[{"start":{"row":46,"column":123},"end":{"row":46,"column":124},"action":"insert","lines":["A"],"id":120}],[{"start":{"row":46,"column":124},"end":{"row":46,"column":125},"action":"insert","lines":[" "],"id":121}],[{"start":{"row":46,"column":125},"end":{"row":46,"column":126},"action":"insert","lines":["C"],"id":122}],[{"start":{"row":46,"column":126},"end":{"row":46,"column":127},"action":"insert","lines":["O"],"id":123}],[{"start":{"row":46,"column":127},"end":{"row":46,"column":128},"action":"insert","lines":["N"],"id":124}],[{"start":{"row":46,"column":128},"end":{"row":46,"column":129},"action":"insert","lines":["V"],"id":125}],[{"start":{"row":48,"column":0},"end":{"row":58,"column":5},"action":"remove","lines":["// router.post(\"/m/:id\",onlyLOGIN, (req,res) => {","//     conv.findOne({parts:[req.params.id, req.user.id]},\"_id\",(err,iconv) => {// conv meam diff things","//         if (!iconv){ conv.create({ parts:[req.params.id, req.user.id]}); console.log(\"TRIGGER\")};","//     }); ","//     conv.findOne({parts:[req.params.id, req.user.id]},\"_id\",(err,iconv) => {// conv meam diff things","//         console.log(iconv);","//         console.log(req.user.id);","//         msg.create({ sender: req.user.id, content: req.body.content, conv_id: iconv.id})","//     })","//     res.redirect(\"/\");","// })"],"id":126}],[{"start":{"row":47,"column":0},"end":{"row":48,"column":0},"action":"remove","lines":["",""],"id":127},{"start":{"row":46,"column":129},"end":{"row":47,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":140,"column":24},"end":{"row":141,"column":0},"action":"insert","lines":["",""],"id":128}],[{"start":{"row":141,"column":0},"end":{"row":142,"column":0},"action":"insert","lines":["",""],"id":129}],[{"start":{"row":142,"column":0},"end":{"row":152,"column":5},"action":"insert","lines":["// router.post(\"/m/:id\",onlyLOGIN, (req,res) => {","//     conv.findOne({parts:[req.params.id, req.user.id]},\"_id\",(err,iconv) => {// conv meam diff things","//         if (!iconv){ conv.create({ parts:[req.params.id, req.user.id]}); console.log(\"TRIGGER\")};","//     }); ","//     conv.findOne({parts:[req.params.id, req.user.id]},\"_id\",(err,iconv) => {// conv meam diff things","//         console.log(iconv);","//         console.log(req.user.id);","//         msg.create({ sender: req.user.id, content: req.body.content, conv_id: iconv.id})","//     })","//     res.redirect(\"/\");","// })"],"id":130}],[{"start":{"row":39,"column":0},"end":{"row":40,"column":0},"action":"insert","lines":["",""],"id":131}],[{"start":{"row":40,"column":0},"end":{"row":40,"column":1},"action":"insert","lines":["/"],"id":132}],[{"start":{"row":40,"column":1},"end":{"row":40,"column":2},"action":"insert","lines":["/"],"id":133}],[{"start":{"row":40,"column":2},"end":{"row":40,"column":3},"action":"insert","lines":["/"],"id":134},{"start":{"row":40,"column":3},"end":{"row":40,"column":4},"action":"insert","lines":["/"]},{"start":{"row":40,"column":4},"end":{"row":40,"column":5},"action":"insert","lines":["/"]},{"start":{"row":40,"column":5},"end":{"row":40,"column":6},"action":"insert","lines":["/"]},{"start":{"row":40,"column":6},"end":{"row":40,"column":7},"action":"insert","lines":["/"]},{"start":{"row":40,"column":7},"end":{"row":40,"column":8},"action":"insert","lines":["/"]}],[{"start":{"row":40,"column":8},"end":{"row":40,"column":9},"action":"insert","lines":["/"],"id":135},{"start":{"row":40,"column":9},"end":{"row":40,"column":10},"action":"insert","lines":["/"]},{"start":{"row":40,"column":10},"end":{"row":40,"column":11},"action":"insert","lines":["/"]},{"start":{"row":40,"column":11},"end":{"row":40,"column":12},"action":"insert","lines":["/"]},{"start":{"row":40,"column":12},"end":{"row":40,"column":13},"action":"insert","lines":["/"]},{"start":{"row":40,"column":13},"end":{"row":40,"column":14},"action":"insert","lines":["/"]},{"start":{"row":40,"column":14},"end":{"row":40,"column":15},"action":"insert","lines":["/"]},{"start":{"row":40,"column":15},"end":{"row":40,"column":16},"action":"insert","lines":["/"]}],[{"start":{"row":40,"column":16},"end":{"row":40,"column":17},"action":"insert","lines":["/"],"id":136},{"start":{"row":40,"column":17},"end":{"row":40,"column":18},"action":"insert","lines":["/"]},{"start":{"row":40,"column":18},"end":{"row":40,"column":19},"action":"insert","lines":["/"]},{"start":{"row":40,"column":19},"end":{"row":40,"column":20},"action":"insert","lines":["/"]},{"start":{"row":40,"column":20},"end":{"row":40,"column":21},"action":"insert","lines":["/"]},{"start":{"row":40,"column":21},"end":{"row":40,"column":22},"action":"insert","lines":["/"]},{"start":{"row":40,"column":22},"end":{"row":40,"column":23},"action":"insert","lines":["/"]},{"start":{"row":40,"column":23},"end":{"row":40,"column":24},"action":"insert","lines":["/"]}],[{"start":{"row":40,"column":24},"end":{"row":40,"column":25},"action":"insert","lines":["/"],"id":137},{"start":{"row":40,"column":25},"end":{"row":40,"column":26},"action":"insert","lines":["/"]},{"start":{"row":40,"column":26},"end":{"row":40,"column":27},"action":"insert","lines":["/"]},{"start":{"row":40,"column":27},"end":{"row":40,"column":28},"action":"insert","lines":["/"]},{"start":{"row":40,"column":28},"end":{"row":40,"column":29},"action":"insert","lines":["/"]},{"start":{"row":40,"column":29},"end":{"row":40,"column":30},"action":"insert","lines":["/"]},{"start":{"row":40,"column":30},"end":{"row":40,"column":31},"action":"insert","lines":["/"]},{"start":{"row":40,"column":31},"end":{"row":40,"column":32},"action":"insert","lines":["/"]},{"start":{"row":40,"column":32},"end":{"row":40,"column":33},"action":"insert","lines":["/"]}],[{"start":{"row":40,"column":33},"end":{"row":40,"column":34},"action":"insert","lines":["/"],"id":138}]]},"ace":{"folds":[],"scrolltop":1423,"scrollleft":0,"selection":{"start":{"row":153,"column":5},"end":{"row":153,"column":5},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":93,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1516126247164,"hash":"75637bba98b7a43b35797caefea8922b12f5100c"}