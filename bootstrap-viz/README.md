# bootstrap-viz

A [Bootstrap](http://getbootstrap.com) add-on that integrates Tableau visualizations.

----------

The bootstrap-viz add-on allows for quick HTML updates to any web-based project that utilizes a Tableau visualization. The purpose of the add-on is to allow non-developers and Data Visualization professionals the ability to quickly integrate their visualization content into a web project without having to know JavaScript or working directly with the Tableau JavaScript API. The advantage of combining this add-on with the bootstrap framework is that it give the Data Visualization professional a way to show a viz in a mobile friendly and easy to configure way.

**Version:** 1.0.0

## Requirements

*  [Bootstrap](http://getbootstrap.com)
*  [jQuery](http://jquery.com/) (already a Bootstrap dependency)
*  [Tableau JS API](http://www.tableau.com/new-features/javascript-api)

## Download

You can [download the latest release](https://github.com/bignamehere/bootstrap-viz/releases) from the release page.


## Installing

For more detailed use on the bootstrap-viz framework, check out the [documentation](http://bignamehere.github.io/bootstrap-viz).

### Usage:

```html

<div id="vizHolderID" class="viz" data-width="980px" data-height="900px" data-hidetabs="true" data-hidetoolbar="true" data-url="https://public.tableau.com/views/TravelFun/TravelFun"></div>

### Example Usage with Bootstrap 3:

```html
<html lang="en">
    <head>
        <title>Bootstrap-Viz Example</title>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
        <link rel="stylesheet" type="text/css" href="YOUR_STYLES_HERE.css">
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="panel col-xs-12">
                    <h1>Time I have spent in an Automobile</h1>
                </div>
                <div class="hidden-xs hidden-sm hidden-md visible-lg col-lg-12">
                    <!-- Viz Content -->
                    <div id="vizHolder1" class="viz" data-width="980px" data-height="900px" data-hidetabs="true" data-hidetoolbar="true" data-url="https://public.tableau.com/views/TravelFun/TravelFun"></div>
                    <!-- /Viz Content -->
                </div>            
                <div class="col-xs-12 col-sm-6 col-lg-4 visible-xs visible-sm visible-md hidden-lg">
                    <h3>US States I Have Visited</h3>
                    <!-- Viz Content -->
                    <div id="vizHolder2" class="viz" data-width="360px" data-height="400px" data-hidetabs="true" data-hidetoolbar="true" data-url="https://public.tableau.com/views/TravelFun/PlacesTraveled"></div>
                    <!-- /Viz Content -->
                </div>
                <div class="col-xs-12 col-sm-6 col-lg-4 visible-xs visible-sm visible-md hidden-lg">
                    <h3>Conversations in the Car</h3>
                    <!-- Viz Content -->
                    <div id="vizHolder3" class="viz" data-width="360px" data-height="400px" data-hidetabs="true" data-hidetoolbar="true" data-url="https://public.tableau.com/views/TravelFun/BoysConversations"></div>
                    <!-- /Viz Content -->
                </div>
                <div class="col-xs-12 col-sm-6 col-lg-4 visible-xs visible-sm visible-md hidden-lg">
                    <h3>Years of Travel Via Car</h3>
                    <!-- Viz Content -->
                    <div id="vizHolder4" class="viz" data-width="360px" data-height="400px" data-hidetabs="true" data-hidetoolbar="true" data-url="https://public.tableau.com/views/TravelFun/YearTraveled"></div>
                    <!-- /Viz Content -->
                </div>
            </div>
        </div>
        
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script src="https://public.tableau.com/javascripts/api/tableau-2.0.0.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="../js/bootstrap-viz.js"></script>
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