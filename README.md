Grid-API
========

The design for the Grid API came about for a desire to have a responsive grid system that wasn't confined to set number of columns, nor do you need to define how many columns a particular cell takes up. Rather, the number of columns is dictated by the number of cell classes are within a particular parent container. There was also a desire to take this and use it to define a layout as well. Many of the Grid systems in the industry require you to bring in 1000 liner CSS files. The Grid API has only 102 lines of CSS and 13 lines of JavaScript for allowing offsets within the grid; a total of 115 lines of code.

<div class="content grid show-grid">
        <link href="/css/grid.css" type="text/css" rel="stylesheet">
        <section id="Cells">
                <div class="page-header">
                        <h1>Cells</h1>
                </div>
                <p>
                        The cells were designed to be dynamic in that since this grid system is not a specific
                        number of columns, they are dynamically sized according to the number nodes with the
                        <code>cell</code> class on them.
                </p>
                <h3>Sample Layout with 3 Cells</h3>
<pre class="prettyprint linenums lang-html">
&lt;div&gt;
  &lt;div class="cell"&gt;Cell #1&lt;/div&gt;
  &lt;div class="cell"&gt;Cell #2&lt;/div&gt;
  &lt;div class="cell"&gt;Cell #3&lt;/div&gt;
&lt;/div&gt;
</pre>
                <div class="row">
                        <div class="cell">Cell #1</div>
                        <div class="cell">Cell #2</div>
                        <div class="cell">Cell #3</div>
                </div>
                <br />
        </section>
        <section id="Containers">
                <div class="page-header">
                        <h1>Containers</h1>
                </div>
                <p>
                        The containers were designed using the same concept of the cells but are predefined based on
                        what I thought would be typical design layouts based on the number of <code>container</code>
                        classes within it's parent.
                </p>
                <div class="row">
                        <h3>Single-Column Layout</h3>
                        <p>
                                The single-column layout will span 100% of it's parent.
                        </p>
<pre class="prettyprint linenums lang-html">
&lt;div&gt;
  &lt;div class="container"&gt;
      ...
  &lt;/div&gt;
&lt;/div&gt;
</pre>
                        <h5>Single Column</h5>
                        <div class="row">
                                <div class="container">
                                        
                                </div>
                        </div>
                </div>
                <div class="row">
                        <h3>Two-Column Layout</h3>
                        <p>
                                The two-column layout is predefined to be either a 30/70 or a 70/30 split.
                                By default, if you have two <code>container</code> classes within a parent,
                                you get the 30/70 split. If you put a <code>main</code> class on the container,
                                then that container will get 70%.
                        </p>
                </div>
                <div class="row">
                        <h4>30/70 Split</h4>
<pre class="prettyprint linenums lang-html">
&lt;div&gt;
  &lt;div class="container"&gt;
    ...
  &lt;/div&gt;
  &lt;div class="container"&gt;
    ...
  &lt;/div&gt;
&lt;/div&gt;
</pre>
                        <h5>Two Columns (30/70)</h5>
                        <div class="row">
                                <div class="container"></div>
                                <div class="container"></div>
                        </div>
                </div>
                <div class="row">
                        <h4>70/30 Split</h4>
<pre class="prettyprint linenums lang-html">
&lt;div&gt;
  &lt;div class="container main"&gt;
    ...
  &lt;/div&gt;
  &lt;div class="container"&gt;
    ...
  &lt;/div&gt;
&lt;/div&gt;
</pre>
                        <h5>Two Columns (70/30)</h5>
                        <div class="row">
                                <div class="container main"></div>
                                <div class="container"></div>
                        </div>
                </div>
                <div class="row">
                        <h3>Three-Column Layout</h3>
                        <p>
                                The three-column layout will split the containers into a 25/50/25 ratio.
                        </p>
<pre class="prettyprint linenums lang-html">
&lt;div&gt;
  &lt;div class="container"&gt;
    ...
  &lt;/div&gt;
  &lt;div class="container"&gt;
    ...
  &lt;/div&gt;
  &lt;div class="container"&gt;
    ...
  &lt;/div&gt;
&lt;/div&gt;
</pre>
                        <h5>Three Columns</h5>
                        <div class="row">
                                <div class="container"></div>
                                <div class="container"></div>
                                <div class="container"></div>
                        </div>
                </div>
        </section>
        <section id="OffsetCells">
                <div class="page-header">
                        <h1>Offset Cells</h1>
                </div>
                <p>
                        To offset cells within the grid, all that is required is to specify a <code>data-offset</code> attribute
                        <code>div</code> containing the <code>cell</code>.
                </p>
                <div class="row">
<pre class="prettyprint linenums lang-html">
&lt;div&gt;
  &lt;div data-offset="2" class="cell"&gt;
    Offset Cell
  &lt;/div&gt;
  &lt;div class="cell"&gt;
    Cell #2
  &lt;/div&gt;
  &lt;div class="cell"&gt;
    Cell #3
  &lt;/div&gt;
&lt;/div&gt;
</pre>
                </div>
                <div class="row">
                        <div data-offset="2" class="cell">Offset Cell</div>
                        <div class="cell">Cell #2</div>
                        <div class="cell">Cell #3</div>
                </div>
        </section>
        <section id="DynamicCells">
                <div class="page-header">
                        <h1>Dynamic Cells</h1>
                </div>
                <p>
                        The dynamic <code>cell</code> and <code>container</code> nodes are all driven through CSS.
                        Credit for this technique goes to Andre Luis (discovered) &amp; Lea Verou (refined).
                </p>
                <div class="row">
                <p>
                        The following selecter will get the first child where it is also the third from the end.
                        This tells us that there is three (3) cells within the parent. This is also applied
                        to the containers. Given this, we can set the width to 100 / 3 = 33.33333%. Keep in
                        mind, the first part of the CSS is only getting the first child. The second part is
                        finding the same scenario where there are three (3) cells within the parent container,
                        but then selecting all of it's siblings. This sets the width for the rest of the
                        cells.
                </p>
<pre class="prettyprint linenums lang-html">
.cell:first-child:nth-last-child(3),.cell:first-child:nth-last-child(3) ~ .cell {...}
</pre>
                </div>
        </section>
        <section id="TheGrid">
                <div class="page-header">
                        <h1>The Grid</h1>
                </div>
                <p>
                </p>
                <div class="row">
                        <div class="cell">Cell</div>
                </div>
                <div class="row">
                        <div data-offset="2" class="cell">Cell</div>
                </div>
                <div class="row">
                        <div class="cell">Cell</div>
                        <div class="cell">Cell</div>
                        <div class="cell">Cell</div>
                </div>
                <div class="row">
                        <div class="cell">Cell</div>
                        <div class="cell">Cell</div>
                        <div class="cell">Cell</div>
                        <div class="cell">Cell</div>
                </div>
                <div class="row">
                        <div class="cell">Cell</div>
                        <div class="cell">Cell</div>
                        <div class="cell">Cell</div>
                        <div class="cell">Cell</div>
                        <div class="cell">Cell</div>
                </div>
                <div class="row">
                        <div class="cell">Cell</div>
                        <div class="cell">Cell</div>
                        <div class="cell">Cell</div>
                        <div class="cell">Cell</div>
                        <div class="cell">Cell</div>
                        <div class="cell">Cell</div>
                </div>
        </section>
</div>
