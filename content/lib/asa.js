const asa = {
    getAttrData: function(el) {
        return {
            run: el.getAttribute('asa-run') != null ? parseInt(el.getAttribute('asa-run')) == 0 ? false : true : false,
            text: el.getAttribute('asa-text'),
            itr: el.getAttribute('asa-iteration'),
            gap: el.getAttribute('asa-gap'),
            cls: el.getAttribute('asa-class'),
            dr: el.getAttribute('asa-duration') ?? 2000,
            anm: el.getAttribute('asa-animation')
        }
    },
    run: function(el) {
        if (typeof(el) == undefined || el == null) return console.error("Element not found");
        let data = asa.getAttrData(el);
        data = asa.setClass(data);
        el.innerHTML =  null;
        if (!data.run) {
            let index = 0;
            let chars = [...data.text];
            for (let c of chars) {
                let d = data.gap * index;
                el.appendChild(asa.span(c, d, data));
                index++;
            }
        }
        el.setAttribute('asa-run', 1); 
    },
    setClass: function(data) {
        let b = "asa-animation-basic";
        let p = "asa-animation-";
        if (data.cls == null && data.anm == null) data.cls = b;
        else if (data.cls != null && data.anm == null) data.cls = b + " " + data.cls;
        else if (data.cls == null && data.anm != null) data.cls = p + data.anm + " ";
        else data.cls = p + data.anm + " " + data.cls;
        return data;
    },
    span: function(c, d, data) {
        let sp = document.createElement('div');
        sp.innerText = c;
        sp.className = "asa-char-rules " + data.cls;
        sp.style.animationDelay = d + "ms";
        sp.style.animationIterationCount = data.itr;
        sp.style.animationDuration = parseInt(data.dr) + "ms";
        return sp;
    }
}