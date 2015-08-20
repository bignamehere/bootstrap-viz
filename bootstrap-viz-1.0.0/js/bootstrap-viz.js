var Viz = function(){
    // default settings
    var vizObj = {
        holder: "",
        url: "",
        options: {
            hideTabs: true,
            hideToolbar: false,
            width: "360px",
            height: "280px",
            onFirstInteractive: function() {
                // VIZ ready
            }
        }
    };
    
    function init( vizObject ){  
        
        vizObj.holder = document.getElementById( String( vizObject.holder ) );
        vizObj.url  = String( vizObject.url );
        vizObj.options.hideTabs = String( vizObject.hideTabs );
        vizObj.options.hideToolbar = String( vizObject.hideToolbar );
        vizObj.options.width = String( vizObject.width );
        vizObj.options.height = String( vizObject.height );
        
        var viz = new tableau.Viz( vizObj.holder, vizObj.url, vizObj.options );
        
        viz.addEventListener(tableau.TableauEventName.MARKS_SELECTION, function(e) {
            // do something with the marks
            updateViz();
        });   
    }
    
    function updateViz(){
        // Add code here when interaction with viz elements is needed
    }
    
    return {
        init: init,
    }
    
}();
$(document).ready(function () {
    $(".viz").each(function () {
                
            var $this = this;
            var vo = {
                holder: $this.id,
                hideTabs: $this.dataset.hidetabs == "true" ? true : false,
                hideToolbar: $this.dataset.hidetoolbar == "true" ? true : false,
                width: $this.dataset.width,
                height: $this.dataset.height,
                url: $this.dataset.url
            };

            if (vo.url != "") Viz.init(vo);
        });
});