# bootstrap-viz

A [Bootstrap](http://getbootstrap.com) add-on that integrates Tableau visualizations.

----------

The bootstrap-viz add-on allows for quick HTML updates to any web-based project that utilizes a Tableau visualization. The purpose of the add-on is to allow non-developers and Data Visualization professionals the ability to quickly integrate their visualization content into a web project without having to know JavaScript or working directly with the Tableau JavaScript API. The advantage of combining this add-on with the bootstrap framework is that it give the Data Visualization professional a way to show a viz in a mobile friendly and easy to configure way.

View an example of [bootstrap-viz](http://www.bignamehere.com/bootstrap-viz/example/index.html).

**Version:** 1.0.0

## Requirements

*  [Bootstrap](http://getbootstrap.com)
*  [jQuery](http://jquery.com/) (already a Bootstrap dependency)
*  [Tableau JS API](http://www.tableau.com/new-features/javascript-api)

## Download

You can [download the latest release](https://github.com/bignamehere/bootstrap-viz/releases) from the release page.


## Installing

Installation is as simple as adding the versioned directory (eg. bootstrap-viz-1.0.0) into the root of your project or where you would normally store your other 3rd party libraries.

### Usage & data parameters available:

```html
<div id="vizHolderID"
    class="viz"
    data-width="980px"
    data-height="900px"
    data-hidetabs="true"
    data-hidetoolbar="true"
    data-url="https://public.tableau.com/views/TravelFun/TravelFun">
</div>
```

### Example Usage with Bootstrap 3:

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>Bootstrap-Viz Example</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <!-- <link rel="stylesheet" type="text/css" href="YOUR_STYLES_HERE.css"> -->
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="panel col-xs-12">
                <h1>Time I have spent in an Automobile</h1>
            </div>
            
            <!-- Here is the holder for the optional 'create' method -->
            <div id="createMe" class="col-xs-12"></div>
            
            <div class="hidden-xs hidden-sm hidden-md visible-lg col-lg-12">
                
                <!-- Here is an example of a larger Dashboard that can be utilized -->
                <div id="vizHolder1" class="viz" data-width="980px" data-height="900px" data-hidetabs="true" data-hidetoolbar="true" data-url="https://public.tableau.com/views/TravelFun/TravelFun"></div>
                
            </div>
            <div class="col-xs-12 col-sm-6 col-lg-4 visible-xs visible-sm visible-md hidden-lg">
                <h3>US States I Have Visited</h3>
                
                <!-- Here is an individual worksheet -->
                <div id="vizHolder2" class="viz" data-width="360px" data-height="400px" data-hidetabs="true" data-hidetoolbar="true" data-url="https://public.tableau.com/views/TravelFun/PlacesTraveled"></div>

            </div>
            <div class="col-xs-12 col-sm-6 col-lg-4 visible-xs visible-sm visible-md hidden-lg">
                <h3>Conversations in the Car</h3>
                
                <!-- Here is an individual worksheet -->
                <div id="vizHolder3" class="viz" data-width="360px" data-height="400px" data-hidetabs="true" data-hidetoolbar="true" data-url="https://public.tableau.com/views/TravelFun/BoysConversations"></div>

            </div>
            <div class="col-xs-12 col-sm-6 col-lg-4 visible-xs visible-sm visible-md hidden-lg">
                <h3>Years of Travel Via Car</h3>
                
                <!-- Here is an individual worksheet -->
                <div id="vizHolder4" class="viz" data-width="360px" data-height="400px" data-hidetabs="true" data-hidetoolbar="true" data-url="https://public.tableau.com/views/TravelFun/YearTraveled"></div>
                
            </div>
        </div>
    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script src="https://public.tableau.com/javascripts/api/tableau-2.0.0.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="../js/bootstrap-viz.min.js"></script>
    <script type="text/javascript">
        $(document).ready(function() {
            Viz.init();
            /* 
                Optionally, you can call Viz.create( object ); and create the visualization by passing in an object:
                var vo = {holder:'createMe', url:'https://public.tableau.com/views/TravelFun/PlacesTraveled', hideTabs:'true', hideToolbar:'true', width:'400px', height:'400px'};
                Viz.create( vo );
            */
        });

    </script>
</body>

</html>
```


#### Version 1.0.0

* Begot bootstrap-viz.


----------------------------------------------------

## License

Copyright (c) 2015, [Casey Hill](mailto:casey@bignamehere.com)

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
