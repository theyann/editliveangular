EditLive with AngularJS Playground
==================================

Installation
------------
* install [nodejs and npm](http://nodejs.org/)
* with npm, install grunt-cli (npm install -g grunt-cli) and bower (npm install -g bower).
* clone the git repository
* run 'npm install'
* run 'bower install'
* run 'grunt serve' which will start the nodejs local server for development.

What's happening?
-----------------
This project is showing an example of the integration of TinyMCE with AngularJS as well as similar code which we would like to see work for EditLive.

For TinyMCE, we use a project called ui-tinymce which is probably a good example to follow.

In the end, we would like to be able to use EditLive the same way we do TinyMCE in this sample app. Using the editors in a directive is very important.
Check out the javascript console to see what's going on. At this point I get the following error:

> TypeError: Cannot read property 'replace' of undefined
> 
>     at Object.e [as resolve] (http://127.0.0.1:9000/editlivejava/editlivejava.js:40:38547)
> 
>     at n (http://127.0.0.1:9000/editlivejava/editlivejava.js:40:50937)
> 
>     at Object.j [as get] (http://127.0.0.1:9000/editlivejava/editlivejava.js:40:50896)
> 
>     at g (http://127.0.0.1:9000/editlivejava/editlivejava.js:40:49467)
> 
>     at Object.f [as use] (http://127.0.0.1:9000/editlivejava/editlivejava.js:40:49524)
> 
>     at Object.n [as load] (http://127.0.0.1:9000/editlivejava/editlivejava.js:40:7514)
> 
>     at Object.j [as single] (http://127.0.0.1:9000/editlivejava/editlivejava.js:40:8833)
> 
>     at HTMLDocument.<anonymous> (http://127.0.0.1:9000/editlivejava/editlivejava.js:40:42143)
> 
>     at Object.a.fn.a.ready (http://127.0.0.1:9000/editlivejava/editlivejava.js:24:2065)
> 
>     at http://127.0.0.1:9000/editlivejava/editlivejava.js:40:42109
 
Thanks in advance.
