var Viz = function(){
    // default settings
    var vizObj = {
        holder: '',
        url: '',
        options: {
            hideTabs: true,
            hideToolbar: false,
            width: '320px',
            height: '320px',
            onFirstInteractive: function() {
                // VIZ ready
            }
        }
    };
    
    function init(){  
        //cycle thru all elements with the viz class and grab their settings
        $('.viz').each(function(){     
            var $this = this;
            var vo = {
                holder: $this.id,
                hideTabs: $this.dataset.hidetabs == 'true' ? true : false,
                hideToolbar: $this.dataset.hidetoolbar == 'true' ? true : false,
                width: $this.dataset.width,
                height: $this.dataset.height,
                url: $this.dataset.url
            };
            if (vo.url != '') createViz(vo);
        });
    }
    
    function createViz( vizObject ){
        vizObj.holder = document.getElementById( String( vizObject.holder ) );
        vizObj.url  = String( vizObject.url );
        vizObj.options.hideTabs = String( vizObject.hideTabs );
        vizObj.options.hideToolbar = String( vizObject.hideToolbar );
        vizObj.options.width = String( vizObject.width );
        vizObj.options.height = String( vizObject.height );
        
        var viz = new tableau.Viz( vizObj.holder, vizObj.url, vizObj.options );
        
        viz.addEventListener(tableau.TableauEventName.MARKS_SELECTION, function(e) {
            // do something with the marks
            markSelected();
        });   
    }
    
    function markSelected(){
        // run code after an element in the viz is selected
        // TODO: create a global listener that dispatches to all visualizations on page
    }
    
    return {
        init: init,
        create: createViz
    }
    
}();