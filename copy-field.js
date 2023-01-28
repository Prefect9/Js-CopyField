/* Js CopyField
 * Version: 1.00
 * Author: Prefect9
 * TG: https://t.me/it_dev9/
 */
(function () {
    "use strict";
    try {
        var CopyField = function (container) {
            if(typeof container != "object") throw "invalid html-element"
            if(container["CopyField-init"] == true) throw "for this html-element alteade initialized"
            container["CopyField-init"] = true

            var btn_copy = container.querySelectorAll('[data-copy-field-btn]')
            if(btn_copy.length) btn_copy = btn_copy[0]
            else throw "Copy button not found"

            var input = container.querySelectorAll('input[type=text], textarea')
            if(input.length) input = input[0]
            else throw "The field to copy was not found"

            var copied = function(){
                container.setAttribute("data-copied", "true")
                setTimeout(function () {
                    container.removeAttribute("data-copied")
                }, 2000)
            }

            btn_copy.addEventListener("click", function (e) {
                e.preventDefault()

                var copyTextarea = document.createElement("textarea")
                document.body.append(copyTextarea)
                if(!input.value.length) return copied()
                copyTextarea.value = input.value
                copyTextarea.focus()
                copyTextarea.select()
                try {
                    document.execCommand('copy')
                } catch (e) {
                    copyTextarea.remove()
                    throw "An error occurred while copying"
                }
                copyTextarea.remove()

                copied()
            })
            btn_copy.addEventListener("mousedown", function (e) {
                e.preventDefault()
            })
        }
        for(var el of document.querySelectorAll('[data-copy-field]')) CopyField(el)

        window.CopyField = CopyField
        window.CopyFieldVersion = "1.00"
    }catch (e) {
        console.error("EventsContainer error: "+e)
    }
})()